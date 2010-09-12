// --- Stack ---
// stored as a javascript array
var stack = ['STACK'];
function save(x) { 
    // console.log('saving ' + $.toJSON(x) + ' to stack');
    stack.push(x);
    // console.log('stack is now ' + $.toJSON(stack));
}
function restore() { return stack.pop(); }
function debug_stack() { console.log('Stack:'); console.log(stack) }

// --- Environment ---
// stored as a javascript array of javascript hashes (objects)
var env = [{}];
var unbound_variable_error = ['error', 'unbound_variable'];

function new_env() { return {} };

function make_frame(variables, values) {
    var frame = {};
    for (var i = 0, len = variables.length; i < len; i++) {
	frame[variables[i]] = values[i];
    }
    return frame;
}

function extend_environment(variables, values, env) {
    return [make_frame(
	$.map(ast_to_js_style_array(variables), symbol_name), 
	ast_to_js_style_array(values))].concat(env);
}

function lookup_variable_value(variable, env) {
    for (i = 0, len = env.length; i < len; i++) {
	if (env[i].hasOwnProperty(variable)) {
	    return env[i][variable];
	}
    }
    return unbound_variable_error;
}

function set_variable_value(variable, value, env) {
    for (i = 0, len = env.length; i < len; i++) {
	if (env[i].hasOwnProperty(variable)) {
	    env[i][variable] = value;
	    return;
	}
    }
    env[0][variable] = value;
}

function define_variable(variable, value, env) {
    // simplifying for now!
    set_variable_value(variable, value, env);
}
    

// --- Eval/Apply ---
// only exp/unev stored in 'token' metadata form, rest are in 'simple' form
var exp;
var unev;

var argl;
var branch;
var continue_to;
var val;
var proc;

function evaluate(ast) {
    continue_to = 'done';
    branch = 'eval-dispatch';
    val = undefined;
    exp = ast;
    var count = 0;
    while (branch !== 'done') {
	// console.log(branch);
	eceval_step();
	if (count++ > 999) {
	    branch = 'done';
	    console.log('infinite loop guard');
	}
    }
    return val;
}

function eceval_step() {
    // console.log(branch);
    switch(branch) {
	
    case 'eval-dispatch':
	// console.log(exp);
	if (self_evaluating(exp)) {
	    // ev-self-eval
	    val = self_evaluated(exp);
	    branch = continue_to;
	} else if (variable(exp)) { 
	    // ev-variable
	    val = lookup_variable_value(symbol_name(exp), env);
	    if (val == unbound_variable_error) {
		val = 'unbound symbol: ' + symbol_name(exp);
		branch = 'signal-error';
	    } else {
		branch = continue_to;
	    }
	} else if (quoted(exp)) {
	    val = text_of_quotation(exp);
	    branch = continue_to;
	} else if (assignment(exp)) {
	    branch = 'ev-assignment';
	} else if (definition(exp)) {
	    branch = 'ev-definition';
	} else if (if_exp(exp)) {
	    branch = 'ev-if';
	} else if (lambda(exp)) {
	    branch = 'ev-lambda';
	} else if (begin(exp)) {
	    branch = 'ev-begin';
	} else if (application(exp)) {
	    branch = 'ev-application';
	} else {
	    // unknown expression type
	    val = 'unknown expression type: ' + stringify_abstract_syntax_tree(exp);
	    branch = 'signal-error';
	}

	break;

    case 'unknown-procedure-type':
	val = 'unknown procedure: ' + proc;
	branch = 'signal-error';
	break;

    case 'ev-lambda':
	unev = lambda_parameters(exp);
	exp = lambda_body(exp);
	val = make_procedure(unev, exp, env);
	branch = continue_to;
	break;

    case 'ev-application':
	save(continue_to);
	unev = operands(exp);
	exp = operator(exp);
	if (symbol(exp)) {
	    // ev-operator-symbol
	    proc = lookup_variable_value(symbol_name(exp), env);

	    if (proc == unbound_variable_error) {
		// hacked -- a little different from the text
		if (primitive_op(exp)) {
		    proc = primitive_procedure_proc(exp);
		    branch = 'ev-appl-did-operator-symbol';
		} else {
		    branch = 'unknown-procedure-type';
		}
	    } else {
		branch = 'ev-appl-did-operator-symbol';
	    }
	} else {
	    save(env);
	    save(unev);
	    continue_to = 'ev-appl-did-operator';
	    branch = 'eval-dispatch';
	}
	break;
    case 'ev-appl-did-operator':
	unev = restore();
	env = restore();
	proc = val;
	// no break
    case 'ev-appl-did-operator-symbol':
	argl = [];
	if (no_operands(unev)) {
	    branch = 'apply-dispatch';
	} else {
	    save(proc);
	    branch = 'ev-appl-operand-loop';
	}
	break;
    case 'ev-appl-operand-loop':
	save(argl);
	exp = first_operand(unev);
	if (last_operand(unev)) {
	    branch = 'ev-appl-last-arg';
	} else {
	    save(env);
	    save(unev);
	    continue_to = 'ev-appl-accumulate-arg';
	    branch = 'eval-dispatch';
	}
	break;
    case 'ev-appl-accumulate-arg':
	unev = restore();
	env = restore();
	argl = restore();
	argl = adjoin_arg(val, argl);
	unev = rest_operands(unev);
	branch = 'ev-appl-operand-loop';
	break;
    case 'ev-appl-last-arg':
	continue_to = 'ev-appl-accum-last-arg';
	branch = 'eval-dispatch';
	break;
    case 'ev-appl-accum-last-arg':
	argl = restore();
	argl = adjoin_arg(val, argl);
	proc = restore();
	branch = 'apply-dispatch';
	break;
    case 'apply-dispatch':
	if (primitive_procedure(proc)) {
	    // primitive-apply
	    val = apply_primitive_procedure(proc, argl);
	    continue_to = restore();
	    branch = continue_to;
	} else if (compound_procedure(proc)) {
	    branch = 'compound-apply';
	} else {
	    branch = 'unknown-procedure-type';
	}
	break;
    case 'compound-apply':
	unev = procedure_parameters(proc);
	env = procedure_environment(proc);
	env = extend_environment(unev, argl, env);
	unev = procedure_body(proc);
	branch = 'ev-sequence';
	break;
    case 'ev-begin':
	unev = begin_actions(exp);
	save(continue_to);
	branch = 'ev-sequence';
	break;
    case 'ev-sequence':
	exp = first_exp(unev);
	if (last_exp(unev)) {
	    branch = 'ev-sequence-last-exp';
	} else {
	    save(unev);
	    save(env);
	    continue_to = 'ev-sequence-continue';
	    branch = 'eval-dispatch';
	}
	break;
    case 'ev-sequence-continue':
	env = restore();
	unev = restore();
	unev = rest_exps(unev);
	branch = 'ev-sequence';
	break;
    case 'ev-sequence-last-exp':
	continue_to = restore();
	branch = 'eval-dispatch';
	break;
    case 'ev-if':
	save(exp);
	save(env);
	save(continue_to);
	continue_to = 'ev-if-decide';
	exp = if_predicate(exp);
	branch = 'eval-dispatch';
	break;
    case 'ev-if-decide':
	continue_to = restore();
	env = restore();
	exp = restore();
	if (evaluates_to_true(val)) {
	    exp = if_consequent(exp);
	} else {
	    exp = if_alternative(exp);
	}
	branch = 'eval-dispatch';
	break;

    case 'ev-assignment':
	unev = assignment_variable(exp);
	save(unev);
	exp = assignment_value(exp);
	save(env);
	save(continue_to);
	continue_to = 'ev-assignment-1';
	branch = 'eval-dispatch';
	break;
    case 'ev-assignment-1':
	continue_to = restore();
	env = restore();
	unev = restore();
	set_variable_value(unev, val, env);
	val = 'ok';
	branch = continue_to;
	break;

    case 'ev-definition':
	unev = definition_variable(exp);
	save(unev);
	exp = definition_value(exp);
	save(env);
	save(continue_to);
	continue_to = 'ev-definition-1';
	branch = 'eval-dispatch';
	break;
    case 'ev-definition-1':
	continue_to = restore();
	env = restore();
	unev = restore();
	define_variable(symbol_name(unev), val, env);
	val = 'ok: ' +  symbol_name(unev);
	branch = continue_to;
	break;

    case 'signal-error':
	val = 'ERROR: ' + val;
	branch = 'done';
	break;
    default:
	console.log('INTERPRETER ERROR: unknown branch: ' + branch);
	branch = 'done';
    }
}

// ---- primitives ----
function cons(a, b) { return [a, b]; }
function car(a) { return a[0]; }
function cdr(a) { return a[1]; }
function cadr(a) { return car(cdr(a)); }
function cdar(a) { return cdr(car(a)); }
function cddr(a) { return cdr(cdr(a)); }
function caadr(a) { return car(cadr(a)); }
function caddr(a) { return cadr(cdr(a)); }
function cdadr(a) { return cdr(cadr(a)); }
function cadddr(a) { return caddr(cdr(a)); }

function last(a) { return cdr(a).length == 0 }

var primitive_operations = {
    '+': function(a,b) { return a + b },
    '-': function(a,b) { return a - b },
    '*': function(a,b) { return a * b },
    '/': function(a,b) { return a / b },
    '=': function(a,b) { return a == b },
    'display': announce_output
};

function primitive_op(exp) {
    return exp[1] in primitive_operations;
}

function primitive_procedure(proc) {
    return tagged_list(proc, 'primitive');
}

function primitive_procedure_proc(exp) {
    return [['symbol','primitive'], [ primitive_operations[exp[1]], [] ] ];
}

function apply_primitive_procedure(proc, argl) {
    return cadr(proc).apply(undefined, scheme_to_js_style_array(argl));
}

// ---- Syntax ----
function self_evaluating(exp) {
    return exp[0] == 'number'; // also handle: || exp[0] == 'string';
}

function self_evaluated(exp) {
    return exp[0] == 'number' ? parseFloat(exp[1]) : exp[1];
}
	    
function symbol(exp) {
    return exp[0] == 'symbol';
}

function symbol_name(exp) {
    return exp[1];
}

function variable(exp) {
    return symbol(exp);
}

function pair(exp) {
    return (exp instanceof Array) && !is_token(exp) && (exp.length == 2);
}

function tagged_list(exp, tag) {
    return pair(exp) && symbol(car(exp)) && symbol_name(car(exp)) == tag;
}

function assignment(exp) { 
    return tagged_list(exp, 'set!'); 
}

function assignment_variable(exp) {
    return symbol_name(cadr(exp));
}

function assignment_value(exp) {
    return caddr(exp);
}

function make_lambda(params, body) {
    return [['symbol','lambda'], [ params, body ]];
};
    
function definition(exp) { return tagged_list(exp, 'define'); }
var definition_variable = caadr;
function definition_value(exp) {
    if (symbol(exp)) {
	return caddr(exp);
    } else {
	return make_lambda(cdadr(exp), cddr(exp));
    }
}

function lambda(exp) { return tagged_list(exp, 'lambda'); }
var lambda_parameters = cadr;
var lambda_body = cddr;

function make_procedure(parameters, body, env) {
    // todo: consider simplifying this internal representation 
    return [['symbol','procedure'], [parameters, [body, [env, []]]]];
}
var procedure_parameters = cadr;
var procedure_body = caddr;
var procedure_environment = cadddr;

function begin(exp) { return tagged_list(exp, 'begin'); }
var begin_actions = cdr;
var first_exp = car;
var rest_exps = cdr;
var last_exp = last;

function application(exp) { return pair(exp); }
var operator = car;
var operands = cdr;
function no_operands(exp) { return exp.length == 0; }
var first_operand = car;
var rest_operands = cdr;
var last_operand = last;

function if_exp(exp) { return tagged_list(exp, 'if'); }
var if_predicate = cadr;
var if_consequent = caddr;
var if_alternative = cadddr;
function evaluates_to_true(x) { return x ? true : false }; // placeholder, in case we need to change this

function quoted(exp) {
    return tagged_list(exp,'quote');
}

function text_of_quotation(exp) {
    return cadr(exp)[1];
}

// ---- support functions (analogous to eceval-support) ----
function adjoin_arg(arg, arglist) {
    if (arglist.length == 0) {
	return [arg, []];
    } else {
	var dupe = arglist.slice(0);
	dupe[dupe.length - 1] = [arg, []];
	return dupe;
    }
}

// ---- functions analogous to mceval ----
function compound_procedure(proc) {
    return tagged_list(proc, 'procedure');
}
