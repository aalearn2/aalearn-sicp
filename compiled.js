function step() {
switch (branch) {
case 'main':

  proc = lookup_variable_value('*', env);
  save(proc);
  save(env);
  proc = lookup_variable_value('read', env);
  argl = [];
case 'compile-procedure-call-start277':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch275';
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch276';
  } else if (read_procedure(proc)) {
    branch = 'read-branch272';
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch273';
  } else {
    branch = 'unknown-procedure';
  }
  break;
case 'compiled-branch274':
  continue_to = 'after-call271';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch273':
  continue_to = 'after-call271';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch276':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start277';
  break;
case 'read-branch272':
  continue_to = 'after-call271';
  branch = 'read';
  break;
case 'primitive-branch275':
  val = proc[1](argl);
case 'after-call271':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('+', env);
  save(proc);
  val = 11;
  argl = [val];
  save(argl);
  proc = lookup_variable_value('read', env);
  argl = [];
case 'compile-procedure-call-start263':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch261';
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch262';
  } else if (read_procedure(proc)) {
    branch = 'read-branch258';
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch259';
  } else {
    branch = 'unknown-procedure';
  }
  break;
case 'compiled-branch260':
  continue_to = 'after-call257';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch259':
  continue_to = 'after-call257';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch262':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start263';
  break;
case 'read-branch258':
  continue_to = 'after-call257';
  branch = 'read';
  break;
case 'primitive-branch261':
  val = proc[1](argl);
case 'after-call257':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start270':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch268';
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch269';
  } else if (read_procedure(proc)) {
    branch = 'read-branch265';
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch266';
  } else {
    branch = 'unknown-procedure';
  }
  break;
case 'compiled-branch267':
  continue_to = 'after-call264';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch266':
  continue_to = 'after-call264';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch269':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start270';
  break;
case 'read-branch265':
  continue_to = 'after-call264';
  branch = 'read';
  break;
case 'primitive-branch268':
  val = proc[1](argl);
case 'after-call264':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start284':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch282';
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch283';
  } else if (read_procedure(proc)) {
    branch = 'read-branch279';
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch280';
  } else {
    branch = 'unknown-procedure';
  }
  break;
case 'compiled-branch281':
  continue_to = 'after-call278';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch280':
  continue_to = 'after-call278';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch283':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start284';
  break;
case 'read-branch279':
  continue_to = 'after-call278';
  branch = 'read';
  break;
case 'primitive-branch282':
  val = proc[1](argl);
case 'after-call278':


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
