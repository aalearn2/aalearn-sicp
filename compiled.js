function step() {
switch (branch) {
case 'main':

  proc = lookup_variable_value('apply', env);
  save(proc);
  save(env);
  proc = lookup_variable_value('list', env);
  val = 2;
  argl = [val];
  val = 3;
  argl.unshift(val);
  val = 2;
  argl.unshift(val);
  val = 9;
  argl.unshift(val);
case 'compile-procedure-call-start186':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch184';
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch185';
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch182';
  } else {
    branch = 'unknown-procedure';
  }
  break;
case 'compiled-branch183':
  continue_to = 'after-call181';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch182':
  continue_to = 'after-call181';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch185':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start186';
  break;
case 'primitive-branch184':
  val = proc[1](argl);
case 'after-call181':
  argl = [val];
  env = restore();
  val = lookup_variable_value('*', env);
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start192':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch190';
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch191';
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch188';
  } else {
    branch = 'unknown-procedure';
  }
  break;
case 'compiled-branch189':
  continue_to = 'after-call187';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch188':
  continue_to = 'after-call187';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch191':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start192';
  break;
case 'primitive-branch190':
  val = proc[1](argl);
case 'after-call187':


  branch = 'done';
break;
case 'unknown-procedure':
  val = 'unknown-procedure type: ' + proc;
  branch = 'signal-error';
  break;
case 'unbound_variable':
case 'unbound-variable':
  val = 'unbound-variable!';
  branch = 'signal-error';
case 'signal-error':
  val = 'ERROR: ' + val;
  branch = 'done';
  break;
default:
  val = 'COMPILER ERROR: bad-branch: ' + branch;
  break;
} }
