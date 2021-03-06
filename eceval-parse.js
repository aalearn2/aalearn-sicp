// --- Lexical Analysis, etc. ---
function tokenize(html, from_repl) {
    var tokens = [];
    var last_token = null;
    var in_text_literal = false;

    var line_number = 1;
    var count_next_br = true; // maybe chrome-specific?
    var line_level_comment = false;

    for (i = 0, len = html.length; i < len; i++) {
	var c;
	if (html.substr(i,22) == '<meta charset="utf-8">') {
	    i += 21;
	    continue;
	} else if (html.substr(i,4) == '<br>') {
	    // first "br" within div doesn't count
	    if (count_next_br) {
		line_number++;
		line_level_comment = false;
	    } else {
		count_next_br = true;
	    }
	    i += 3;

	    continue;
	} else if (html.substr(i, 5) == '<div>') {
	    count_next_br = false;
	    i += 4;
	    continue;
	} else if (html.substr(i, 6) == '</div>') {
	    count_next_br = true;
	    line_number++;
	    line_level_comment = false;
	    i += 5;
	    continue;

	} else if (html.substr(i, 6) == '&nbsp;') {
	    c = ' ';
	    i += 5;
	} else if (html.substr(i, 4) == '&gt;') {
	    c = '>';
	    i += 3;
	} else if (html.substr(i, 4) == '&lt;') {
	    c = '<';
	    i += 3;
	} else {
	    c = html[i];
	}
	var source = from_repl ? 'repl' : line_number;
	if (in_text_literal) {
	    if (last_token[0] == 'escape') {
		if (c == 'n') {
		    last_token[1] += "\n";
		} else {
		    last_token[1] += c;
		}
	    } else if (c == '"') {
		in_text_literal = false;
	    } else {
		last_token[1] += c;
	    }
	} else if (c == '"') {
	    in_text_literal = true;
	    tokens.push(['text-literal', '', source]);
	} else if (line_level_comment) {
	    continue;
	} else if (c == ';') {
	    line_level_comment = true;
	} else if (/[a-zA-Z_<>\+\/\-\=\*\/\!\?\-\#]/.exec(c)) {
	    if (last_token && last_token[0] == 'symbol') {
		last_token[1] += c;
	    } else {
		tokens.push(['symbol', c, from_repl ? 'repl' : line_number]);
	    }
	} else if (/[0-9.]/.exec(c)) {
	    // TODO: handle negative numbers!
	    if (last_token && (last_token[0] == 'symbol' || last_token[0] == 'number')) {
		last_token[1] += c;
	    } else {
		tokens.push(['number', c, source]);
	    }
	} else if (/\s/.exec(c)) {
	    tokens.push(['whitespace', c, source]);
	} else if (c == '(') {
	    tokens.push(['open-paren', c, source]);
	} else if (c == ')') {
	    tokens.push(['close-paren', c, source]);
	} else if (c == '\\') {
	    tokens.push(['escape', c, source]);
	} else if (c == '\'') {
	    tokens.push(['quote', c, source]);
	} else {
	    tokens.push(['error','unparseable']);
	}
	last_token = tokens[tokens.length-1];
    }
    return tokens;
}

function parse(tokens) {
    var exp = [];
    var insert_points = [exp];
    var quote_next = false;
    // todo: block/detect invalid parsings, e.g. quote then close-paren
    for (i = 0, len = tokens.length; i < len; i++) {
	token = tokens[i];
	token_type = token[0];
	if (token_type == 'open-paren') {
	    if (quote_next) {
		// if quoted, should turn '(x y) into [quote [x, [y, []]]]
		quote_next = false;
		var quote_list_end = [];
		var list_end = [];
		insert_points[insert_points.length-1].push([['symbol','quote', token[2]], quote_list_end]);
		insert_points[insert_points.length-1].push(list_end);
		insert_points[insert_points.length-1] = list_end;
		insert_points.push(quote_list_end);
	    } else {
		// cryptic! :(
		var new_nested_exp = [];
		insert_points[insert_points.length-1].push(new_nested_exp);

		var list_end = [];
		insert_points[insert_points.length-1].push(list_end);
		insert_points[insert_points.length-1] = list_end;
		insert_points.push(new_nested_exp);
	    }
	} else if (token_type == 'close-paren') {
	    insert_points.pop();
	} else if (token_type == 'quote') {
	    quote_next = true;
	} else if (token_type == 'whitespace') {
	    // ignore
	} else {
	    if (quote_next) {
		insert_points[insert_points.length-1].push(['quoted-token',token[1],token[2]]);
		quote_next = false;
	    } else {
		insert_points[insert_points.length-1].push(token);
	    }
	    // These lines make parse-tree into scheme-style lists ([A, [B, [] ] ])
	    var list_end = [];
	    insert_points[insert_points.length-1].push(list_end);
	    insert_points[insert_points.length-1] = list_end;
	}
    }
    return exp;
}

// ---- misc. functions relating to parsing ----
function ast_to_js_style_array(a) { 
    if (a.length == 0) { 
	return [] 
    } else if (a.length == 1) { 
	console.log("should never happen");
    } else {
	var out = [];
	while (a.length > 0) {
	    out.push(car(a));
	    a = cdr(a);
	}
    }
    return out;
}

// TODO: some confusion throughout about whether '() should be converted into js
//  as [] or as undefined -- both used in various places
function scheme_to_js_style_array(a) {
    var o = [];
    while (a && a.length > 0) {
	o.push(a[0]);
	a = a[1];
    }
    return o;
}

// debugging statements (okay to be recursive, not tail-call-optimized)
function is_scheme_style_list(a) {
    return ((a instanceof Array) && (a.length == 2) && is_scheme_style_list(a[1]))
}

function is_token(exp) {
    return (exp instanceof Array) && 
	(exp[0] == 'number' || exp[0] == 'text-literal');
}

function is_nil_syntax_tree(exp) {
    return (exp instanceof Array) && exp[0]==undefined;
}

function stringify_abstract_syntax_tree(exp, skip_parens, count) {
    if (count < 2) console.log($.toJSON(exp));
    if (!count) count = 0;
    if (count > 20) {
	console.log('suppressing deeply nested data');
	return "...";
    } else if (exp == undefined) {
	return 'fail';
    } else if (is_token(exp)) {
	return is_nil_syntax_tree(exp) ? 'nil' : exp[0] + '/' + exp[1];
    } else {
	var o = stringify_abstract_syntax_tree(exp[0], false, count + 1);
	if (!is_nil_syntax_tree(exp[1])) {
	    o += (is_token(exp[1]) ? ' . ' : ' ') + stringify_abstract_syntax_tree(exp[1], 'skip', count + 1);
	}
	return skip_parens ? o : '(' + o + ')';
    }
}

function reflective_html_exp(exp) {
    // slightly spaghetti-ish
    // this code relies on the Value class, which is in eceval.js
    // also relies on jQuery for escaping
    return $("<div />").html(
	$('<a class="non-code-source-info" />')
	    .attr('id', new_stored_source_exp(exp.source_exp))
	    .html(stringify_scheme_exp(exp.value) + '')).html();
}

var info_id = 1;
var stored_source_exps = {};
function new_stored_source_exp(source_exp) {
    info_id++;
    stored_source_exps[info_id] = source_exp;
    return info_id;
}
function html_stored_source_exp(id) {
    var source = stored_source_exps[id];
    if (source instanceof Array) {
	var args = scheme_to_js_style_array(scheme_map(function(x) {
	    if (x.source_exp) {
		return reflective_html_exp(x);
	    } else {
		return x;
	    }
	}, source[1]));
	return ('(' + source[0] + ' ' + args.join(' ') + ')');
    } else {
	return source;
    }
}

function stringify_scheme_exp(exp, skip_parens) {
    if (exp == undefined) {
	return 'nil';
    } else if (exp.wrapped_value) {
	return reflective_html_exp(exp);
    } else if (!(exp instanceof Array)) {
	return exp;
    } else {
	var o = stringify_scheme_exp(exp[0]);
	if (exp[1] !== undefined) {
 	    o += (!(exp[1] instanceof Array) ? ' . ' : ' ') + stringify_scheme_exp(exp[1], 'skip_parens');
	}
	return skip_parens ? o : '(' + o + ')';
    }
}