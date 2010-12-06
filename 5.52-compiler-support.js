
// --- Input/output (eceval-io.js) ---
function announce_output(out) {
    $('#repl').append($('<div class="output" />').html(('' + stringify_scheme_exp(out)).replace(/\n/g,'<br />')));
}

function wait_for_input(focus_on_repl) {
    var new_input = $('<div class="input" contenteditable="true" />');
    $('#repl').append('<div class="prompt">&raquo;&nbsp;</div>').append(new_input);
    new_input.addBindings()
    if (focus_on_repl) {
	new_input.focus();
    }
    setTimeout(function() { $('#repl').scrollTo('max', 250, {axis:'y'}) }, 5); // scroll to bottom
}

function set_new_history(target, source) {
    target.text(source.addClass('history-selection').text());
}

$.fn.addBindings = function() {
    return this.bind('keydown','return', function() {
	$('.input').unbind('keydown'); // disable all others
	receive_input($(this).html(), true);
	return false; // prevent bubble
    }).bind('keydown','up', function() {
	var current_history_selection = $('.history-selection');
	if (current_history_selection.length) {
	    current_history_selection.removeClass('history-selection');
	} else {
	    current_history_selection = $(this);
	}
	// TODO: filter out items without text
	set_new_history($(this), current_history_selection.prevAll('.input').first());
	return false;
    }).bind('keydown','down', function() {
	var current_history_selection = $('.history-selection');
	if (current_history_selection.length) {
	    current_history_selection.removeClass('history-selection');
	    var next_item = current_history_selection.nextAll('.input').first();
	    set_new_history($(this), next_item[0] == this ? $(undefined) : next_item);
	}
	return false;
    });
};

function receive_input(input) {
    // todo replace with expression parsing
    val = parse(tokenize(input))[0]; // one expression only
    machine_loop('start_with_continue');
}

// --- Primitive support (eceval.js) ---
// note: not the same as eceval.js versions, using js-native style arrays everywhere
function sum(a) { return a.length ? a[0] + sum(a.slice(1)) : 0; }
function product(a) { return a.length ? a[0] * product(a.slice(1)) : 1 }
function difference(a) { return a[0] - a[1] }
function dividend(a) { return a[0] / a[1] }

function equals(a) { return a[0] == a[1] && (a.length > 2 ? equals(a.slice(1)) :  true) }
function gt(a) { return a[0] > a[1] }
function lt(a) { return a[0] < a[1] }
function gte(a) { return a[0] >= a[1] }
function lte(a) { return a[0] <= a[1] }

function list(a) { return a }
function cons(a) { return a[1] == null ? [a[0]] : [a[0], a[1]] }
function car(a) { return a[0][0] }
function cdr(a) { return a[0].slice(1) }
function caar(a) { return a[0][0][0]; }
function cadr(a) { return a[0][1]; }
function cdar(a) { return a[0][0].slice(1); }
function cddr(a) { return a[0].slice(2); }
function caaar(a) { return a[0][0][0][0]; }
function caadr(a) { return a[0][1][0]; }
function cadar(a) { return a[0][0][1]; }
function caddr(a) { return a[0][2]; }
function cdaar(a) { return a[0][0][0].slice(1); }
function cdadr(a) { return a[0][1].slice(1); }
function cddar(a) { return a[0][0].slice(2); }
function cdddr(a) { return a[0].slice(3) }

function is_pair(a) { return a[0] && a[0].length }
function is_null(a) { return a[0].length == 0 }

function set_car(a) { a[0][0] = a[1]; return a[1] }
function set_cdr(a) { a[0].splice(1,a[0].length-1); a[0].push.apply(a[0], a[1]); return a[1] }

function is_number(a) { return typeof a[0] == 'number' }
function is_string(a) { return typeof a[0] == 'string' }
function is_symbol(a) { return false }

function lookup_primitive_op(variable) {
    return { 
	'+': sum,
	'*': product,
	'-': difference,
	'/': dividend,
	'=': equals,
	'eq?': equals,
	'>': gt,
	'<': lt,
	'>=': gte,
	'<=': lte,
	'list': list,
	'cons': cons,
	'car': car,
	'cdr': cdr,
	'caar': caar,
	'cadr': cadr,
	'cdar': cdar,
	'cddr': cddr,
	'caaar': caaar,
	'caadr': caadr,
	'cadar': cadar,
	'caddr': caddr,
	'cdaar': cdaar,
	'cdadr': cdadr,
	'cddar': cddar,
	'cdddr': cdddr,
	'pair?': is_pair,
	'null?': is_null,
	'set-car!': set_car,
	'set-cdr!': set_cdr,

	'number?': is_number,
	'string?': is_string,
	'symbol?': is_symbol,

	'display': function(o) { announce_output(o[0]) },
	'newline': function() { announce_output("\n") },

    }[variable];
}
function get_primitive_procedure(variable) {
    return ['primitive', lookup_primitive_op(variable)];
}
function is_tagged_list(a, tag) {
    return (a instanceof Array) && a[0] == tag;
}
function primitive_procedure(p) { return is_tagged_list(p, 'primitive') }

// --- Other procedure support (see ch5-eceval-support.scm) ---
function make_compiled_procedure(entry, env) {
    return ['compiled', entry, env];
}
function compiled_procedure(p) { return is_tagged_list(p, 'compiled') }
function compiled_procedure_entry(p) { return p[1] }
function compiled_procedure_env(p) { return p[2] }


// could be used to allow compiled code to call interpreted code (ex 5.47)
// not supporting this currently!
function compound_procedure(p) { return false }

var explicit_apply_key = ['explicit-apply'];
function explicit_apply_procedure(p) { return p == explicit_apply_key }
function explicit_apply_get_procedure(a) { return a[0] }
function explicit_apply_get_args(a) { return a[1] }

var read_key = ['read'];
function read_procedure(p) { return p == read_key }

// --- Stack, Environment and data storage (eceval.js) ---
var stack = ['STACK'];
//  no need to worry about dupes, right? instanceof Array ? x.slice(0) : x
function save(x) { stack.push(x) };
function restore() { return stack.pop() };

var Frame = {
    init: function(variables, values, code_source, code_symbol) {
	var newObject = Object.create(this);
	newObject.data = this.make_map(variables, values);
	newObject.code_source = code_source;
	newObject.code_symbol = code_symbol;
	return newObject;
    },
    make_map: function(variables, values) {
	var frame = {};
	for (var i = 0, len = variables.length; i < len; i++) {
	    frame[variables[i]] = values[i]; // was: Value.init(values[i],'n/a');
	}
	return frame;
    },
    trace_line: function() {
	return this.code_symbol + this.code_source;
    },
};

var env = [Frame.init([],[],' at top-level')];
var unbound_variable_error = ['error', 'unbound_variable'];
function extend_environment(variables, values, env, code_source, code_symbol) {
    var ee = [Frame.init(variables, values)].concat(env);
    return ee;
}

// variables -- note, some cruft (include_context, etc.)
function _lookup_variable_value(variable, env, lookup_exp, include_context) {
    for (i = 0, len = env.length; i < len; i++) {
	frame_data = env[i].data;
	if (frame_data.hasOwnProperty(variable)) {
	    if (include_context) {
		// record where the variable was looked up, e.g. for stack trace
		return frame_data[variable].with_lookup_exp(lookup_exp);
	    } else {
		return frame_data[variable];
	    }
	}
    }
    // standard primitives and "special" primitives
    if (lookup_builtin_value(variable)) {
	return get_builtin_value(variable);
    } else if (lookup_primitive_op(variable)) {
	return get_primitive_procedure(variable);
    } else if (variable == 'nil') {
	return null;
    } else if (variable == 'apply') {
	return explicit_apply_key;
    } else if (variable == 'read') {
	return read_key;
    }
    console.log('Support Warning: variable not found: ' + variable);
    return unbound_variable_error;
}

function lookup_builtin_value(variable) {
    return variable == 'true' || variable == '#t' || variable == 'false' || variable == '#f';
}

function get_builtin_value(variable) {
    return {'true': true, '#t': true, 'false': false, '#f': false}[variable]
}

// debugging "tap"
function lookup_variable_value(variable, env) {
    var x = _lookup_variable_value(variable, env);
    return x;
}

// different from text: okay to set something previously undefined
function set_variable_value(variable, value, env, exp) {
    for (i = 0, len = env.length; i < len; i++) {
	frame_data = env[i].data;
	if (frame_data.hasOwnProperty(variable)) {
	    frame_data[variable] = value; // was: Value.init(value, exp);
	    return;
	}
    }
    env[0].data[variable] = value; // was: Value.init(value, exp);
}
define_variable = set_variable_value;


// --- Machine loop ---
var exp;
var unev;

var argl;
var branch;
var continue_to;
var val;
var proc;
var read_return_to;

var compapp; // NOTE: shouldn't ever be used; unsupported!

function machine_loop(skip_to_continue) {
    branch = skip_to_continue ? continue_to : 'main';
    var count = 0;
    while(branch !== 'done' && branch !== 'read') {
	console.log(branch);
	step();
	if (!(count % 100000)) console.log(branch);
	    
	if (count++ > 512399) {
	    branch = 'done';
	    console.log('infinite loop guard');
	}
    }

    if (branch == 'read') {
	wait_for_input('focus_on_repl');

	// how would this work?
	// trap this in the same way we trap explicit-apply
	// we need to create a new temporary label! read-return-blah
	// but that might not work, since we only know at run time that a particular
	// command is actually a read! is that true?
	// well, if it's handled like apply, I think it's okay
	//  we'll just detect if it's a read command at run-time
	// and re-enter at that point, having set val
    } else {
	console.log(val);
	announce_output(val);
    }
}

$(document).ready(function () {
    machine_loop();
});