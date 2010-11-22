function step() {
switch (branch) {
case 'main':

  proc = make_compiled_procedure('entry420', env);
  branch = 'after-lambda419';
  break;
case 'entry420':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'input' ], argl, env);
  proc = lookup_variable_value('+', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('cadr', env);
  val = lookup_variable_value('input', env);
  argl = [val];
case 'compile-procedure-call-start434':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch432';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch433';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch429';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch430';
    break;
  }
case 'compiled-branch431':
  continue_to = 'after-call428';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch430':
  continue_to = 'after-call428';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch433':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start434';
  break;
case 'read-branch429':
  continue_to = 'after-call428';
  branch = 'read';
  break;
case 'primitive-branch432':
  val = proc[1](argl);
case 'after-call428':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('input', env);
  argl = [val];
case 'compile-procedure-call-start427':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch425';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch426';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch422';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch423';
    break;
  }
case 'compiled-branch424':
  continue_to = 'after-call421';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch423':
  continue_to = 'after-call421';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch426':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start427';
  break;
case 'read-branch422':
  continue_to = 'after-call421';
  branch = 'read';
  break;
case 'primitive-branch425':
  val = proc[1](argl);
case 'after-call421':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start441':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch439';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch440';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch436';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch437';
    break;
  }
case 'compiled-branch438':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch437':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch440':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start441';
  break;
case 'read-branch436':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch439':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call435':
case 'after-lambda419':
  save(proc);
  proc = lookup_variable_value('read', env);
  argl = [];
case 'compile-procedure-call-start418':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch416';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch417';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch413';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch414';
    break;
  }
case 'compiled-branch415':
  continue_to = 'after-call412';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch414':
  continue_to = 'after-call412';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch417':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start418';
  break;
case 'read-branch413':
  continue_to = 'after-call412';
  branch = 'read';
  break;
case 'primitive-branch416':
  val = proc[1](argl);
case 'after-call412':
  argl = [val];
  proc = restore();
case 'compile-procedure-call-start448':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch446';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch447';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch443';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch444';
    break;
  }
case 'compiled-branch445':
  continue_to = 'after-call442';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch444':
  continue_to = 'after-call442';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch447':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start448';
  break;
case 'read-branch443':
  continue_to = 'after-call442';
  branch = 'read';
  break;
case 'primitive-branch446':
  val = proc[1](argl);
case 'after-call442':


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
