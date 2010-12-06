function step() {
switch (branch) {
case 'main':

  val = lookup_variable_value('apply', env);
  define_variable('apply-in-underlying-scheme', val, env);
  val = 'ok: apply-in-underlying-scheme set';
  val = make_compiled_procedure('entry29631', env);
  branch = 'after-lambda29630';
  break;
case 'entry29631':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'f','a' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('null?', env);
  val = lookup_variable_value('a', env);
  argl = [val];
case 'compile-procedure-call-start29669':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29667';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29668';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29664';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29665';
    break;
  }
case 'compiled-branch29666':
  continue_to = 'after-call29663';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29665':
  continue_to = 'after-call29663';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29668':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29669';
  break;
case 'read-branch29664':
  continue_to = 'after-call29663';
  branch = 'read';
  break;
case 'primitive-branch29667':
  val = proc[1](argl);
case 'after-call29663':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29634' : 'false-branch29633';
  break;
case 'true-branch29634':
  val = lookup_variable_value('a', env);
  branch = continue_to;
break;
case 'false-branch29633':
  proc = lookup_variable_value('cons', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('a', env);
  argl = [val];
case 'compile-procedure-call-start29655':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29653';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29654';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29650';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29651';
    break;
  }
case 'compiled-branch29652':
  continue_to = 'after-call29649';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29651':
  continue_to = 'after-call29649';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29654':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29655';
  break;
case 'read-branch29650':
  continue_to = 'after-call29649';
  branch = 'read';
  break;
case 'primitive-branch29653':
  val = proc[1](argl);
case 'after-call29649':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('f', env);
  save(proc);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('a', env);
  argl = [val];
case 'compile-procedure-call-start29641':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29639';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29640';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29636';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29637';
    break;
  }
case 'compiled-branch29638':
  continue_to = 'after-call29635';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29637':
  continue_to = 'after-call29635';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29640':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29641';
  break;
case 'read-branch29636':
  continue_to = 'after-call29635';
  branch = 'read';
  break;
case 'primitive-branch29639':
  val = proc[1](argl);
case 'after-call29635':
  argl = [val];
  proc = restore();
case 'compile-procedure-call-start29648':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29646';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29647';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29643';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29644';
    break;
  }
case 'compiled-branch29645':
  continue_to = 'after-call29642';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29644':
  continue_to = 'after-call29642';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29647':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29648';
  break;
case 'read-branch29643':
  continue_to = 'after-call29642';
  branch = 'read';
  break;
case 'primitive-branch29646':
  val = proc[1](argl);
case 'after-call29642':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start29662':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29660';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29661';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29657';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29658';
    break;
  }
case 'compiled-branch29659':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29658':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29661':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29662';
  break;
case 'read-branch29657':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29660':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29656':
case 'after-if29632':
case 'after-lambda29630':
  define_variable('map', val, env);
  val = 'ok: map set';
  val = make_compiled_procedure('entry29589', env);
  branch = 'after-lambda29588';
  break;
case 'entry29589':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'a' ], argl, env);
  val = make_compiled_procedure('entry29598', env);
  branch = 'after-lambda29597';
  break;
case 'entry29598':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'a','i' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('null?', env);
  val = lookup_variable_value('a', env);
  argl = [val];
case 'compile-procedure-call-start29629':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29627';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29628';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29624';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29625';
    break;
  }
case 'compiled-branch29626':
  continue_to = 'after-call29623';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29625':
  continue_to = 'after-call29623';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29628':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29629';
  break;
case 'read-branch29624':
  continue_to = 'after-call29623';
  branch = 'read';
  break;
case 'primitive-branch29627':
  val = proc[1](argl);
case 'after-call29623':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29601' : 'false-branch29600';
  break;
case 'true-branch29601':
  val = lookup_variable_value('i', env);
  branch = continue_to;
break;
case 'false-branch29600':
  proc = lookup_variable_value('iter', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('+', env);
  val = 1;
  argl = [val];
  val = lookup_variable_value('i', env);
  argl.unshift(val);
case 'compile-procedure-call-start29615':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29613';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29614';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29610';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29611';
    break;
  }
case 'compiled-branch29612':
  continue_to = 'after-call29609';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29611':
  continue_to = 'after-call29609';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29614':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29615';
  break;
case 'read-branch29610':
  continue_to = 'after-call29609';
  branch = 'read';
  break;
case 'primitive-branch29613':
  val = proc[1](argl);
case 'after-call29609':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('a', env);
  argl = [val];
case 'compile-procedure-call-start29608':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29606';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29607';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29603';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29604';
    break;
  }
case 'compiled-branch29605':
  continue_to = 'after-call29602';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29604':
  continue_to = 'after-call29602';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29607':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29608';
  break;
case 'read-branch29603':
  continue_to = 'after-call29602';
  branch = 'read';
  break;
case 'primitive-branch29606':
  val = proc[1](argl);
case 'after-call29602':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start29622':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29620';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29621';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29617';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29618';
    break;
  }
case 'compiled-branch29619':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29618':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29621':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29622';
  break;
case 'read-branch29617':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29620':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29616':
case 'after-if29599':
case 'after-lambda29597':
  define_variable('iter', val, env);
  val = 'ok: iter set';
  proc = lookup_variable_value('iter', env);
  val = 0;
  argl = [val];
  val = lookup_variable_value('a', env);
  argl.unshift(val);
case 'compile-procedure-call-start29596':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29594';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29595';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29591';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29592';
    break;
  }
case 'compiled-branch29593':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29592':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29595':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29596';
  break;
case 'read-branch29591':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29594':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29590':
case 'after-lambda29588':
  define_variable('length', val, env);
  val = 'ok: length set';
  val = make_compiled_procedure('entry29340', env);
  branch = 'after-lambda29339';
  break;
case 'entry29340':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp','env' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('self-evaluating?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29587':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29585';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29586';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29582';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29583';
    break;
  }
case 'compiled-branch29584':
  continue_to = 'after-call29581';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29583':
  continue_to = 'after-call29581';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29586':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29587';
  break;
case 'read-branch29582':
  continue_to = 'after-call29581';
  branch = 'read';
  break;
case 'primitive-branch29585':
  val = proc[1](argl);
case 'after-call29581':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29343' : 'false-branch29342';
  break;
case 'true-branch29343':
  val = lookup_variable_value('exp', env);
  branch = continue_to;
break;
case 'false-branch29342':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('variable?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29580':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29578';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29579';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29575';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29576';
    break;
  }
case 'compiled-branch29577':
  continue_to = 'after-call29574';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29576':
  continue_to = 'after-call29574';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29579':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29580';
  break;
case 'read-branch29575':
  continue_to = 'after-call29574';
  branch = 'read';
  break;
case 'primitive-branch29578':
  val = proc[1](argl);
case 'after-call29574':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29346' : 'false-branch29345';
  break;
case 'true-branch29346':
  proc = lookup_variable_value('lookup-variable-value', env);
  val = lookup_variable_value('env', env);
  argl = [val];
  val = lookup_variable_value('exp', env);
  argl.unshift(val);
case 'compile-procedure-call-start29573':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29571';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29572';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29568';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29569';
    break;
  }
case 'compiled-branch29570':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29569':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29572':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29573';
  break;
case 'read-branch29568':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29571':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29567':
case 'false-branch29345':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('quoted?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29566':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29564';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29565';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29561';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29562';
    break;
  }
case 'compiled-branch29563':
  continue_to = 'after-call29560';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29562':
  continue_to = 'after-call29560';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29565':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29566';
  break;
case 'read-branch29561':
  continue_to = 'after-call29560';
  branch = 'read';
  break;
case 'primitive-branch29564':
  val = proc[1](argl);
case 'after-call29560':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29349' : 'false-branch29348';
  break;
case 'true-branch29349':
  proc = lookup_variable_value('text-of-quotation', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29559':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29557';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29558';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29554';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29555';
    break;
  }
case 'compiled-branch29556':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29555':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29558':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29559';
  break;
case 'read-branch29554':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29557':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29553':
case 'false-branch29348':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('assignment?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29552':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29550';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29551';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29547';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29548';
    break;
  }
case 'compiled-branch29549':
  continue_to = 'after-call29546';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29548':
  continue_to = 'after-call29546';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29551':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29552';
  break;
case 'read-branch29547':
  continue_to = 'after-call29546';
  branch = 'read';
  break;
case 'primitive-branch29550':
  val = proc[1](argl);
case 'after-call29546':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29352' : 'false-branch29351';
  break;
case 'true-branch29352':
  proc = lookup_variable_value('eval-assignment', env);
  val = lookup_variable_value('env', env);
  argl = [val];
  val = lookup_variable_value('exp', env);
  argl.unshift(val);
case 'compile-procedure-call-start29545':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29543';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29544';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29540';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29541';
    break;
  }
case 'compiled-branch29542':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29541':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29544':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29545';
  break;
case 'read-branch29540':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29543':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29539':
case 'false-branch29351':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('definition?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29538':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29536';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29537';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29533';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29534';
    break;
  }
case 'compiled-branch29535':
  continue_to = 'after-call29532';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29534':
  continue_to = 'after-call29532';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29537':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29538';
  break;
case 'read-branch29533':
  continue_to = 'after-call29532';
  branch = 'read';
  break;
case 'primitive-branch29536':
  val = proc[1](argl);
case 'after-call29532':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29355' : 'false-branch29354';
  break;
case 'true-branch29355':
  proc = lookup_variable_value('eval-definition', env);
  val = lookup_variable_value('env', env);
  argl = [val];
  val = lookup_variable_value('exp', env);
  argl.unshift(val);
case 'compile-procedure-call-start29531':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29529';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29530';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29526';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29527';
    break;
  }
case 'compiled-branch29528':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29527':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29530':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29531';
  break;
case 'read-branch29526':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29529':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29525':
case 'false-branch29354':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('if?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29524':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29522';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29523';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29519';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29520';
    break;
  }
case 'compiled-branch29521':
  continue_to = 'after-call29518';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29520':
  continue_to = 'after-call29518';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29523':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29524';
  break;
case 'read-branch29519':
  continue_to = 'after-call29518';
  branch = 'read';
  break;
case 'primitive-branch29522':
  val = proc[1](argl);
case 'after-call29518':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29358' : 'false-branch29357';
  break;
case 'true-branch29358':
  proc = lookup_variable_value('eval-if', env);
  val = lookup_variable_value('env', env);
  argl = [val];
  val = lookup_variable_value('exp', env);
  argl.unshift(val);
case 'compile-procedure-call-start29517':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29515';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29516';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29512';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29513';
    break;
  }
case 'compiled-branch29514':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29513':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29516':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29517';
  break;
case 'read-branch29512':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29515':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29511':
case 'false-branch29357':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('lambda?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29510':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29508';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29509';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29505';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29506';
    break;
  }
case 'compiled-branch29507':
  continue_to = 'after-call29504';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29506':
  continue_to = 'after-call29504';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29509':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29510';
  break;
case 'read-branch29505':
  continue_to = 'after-call29504';
  branch = 'read';
  break;
case 'primitive-branch29508':
  val = proc[1](argl);
case 'after-call29504':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29361' : 'false-branch29360';
  break;
case 'true-branch29361':
  proc = lookup_variable_value('make-procedure', env);
  save(continue_to);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(env);
  save(argl);
  proc = lookup_variable_value('lambda-body', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29496':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29494';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29495';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29491';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29492';
    break;
  }
case 'compiled-branch29493':
  continue_to = 'after-call29490';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29492':
  continue_to = 'after-call29490';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29495':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29496';
  break;
case 'read-branch29491':
  continue_to = 'after-call29490';
  branch = 'read';
  break;
case 'primitive-branch29494':
  val = proc[1](argl);
case 'after-call29490':
  argl = restore();
  argl.unshift(val);
  env = restore();
  save(argl);
  proc = lookup_variable_value('lambda-parameters', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29489':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29487';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29488';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29484';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29485';
    break;
  }
case 'compiled-branch29486':
  continue_to = 'after-call29483';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29485':
  continue_to = 'after-call29483';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29488':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29489';
  break;
case 'read-branch29484':
  continue_to = 'after-call29483';
  branch = 'read';
  break;
case 'primitive-branch29487':
  val = proc[1](argl);
case 'after-call29483':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start29503':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29501';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29502';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29498';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29499';
    break;
  }
case 'compiled-branch29500':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29499':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29502':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29503';
  break;
case 'read-branch29498':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29501':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29497':
case 'false-branch29360':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('begin?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29482':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29480';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29481';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29477';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29478';
    break;
  }
case 'compiled-branch29479':
  continue_to = 'after-call29476';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29478':
  continue_to = 'after-call29476';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29481':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29482';
  break;
case 'read-branch29477':
  continue_to = 'after-call29476';
  branch = 'read';
  break;
case 'primitive-branch29480':
  val = proc[1](argl);
case 'after-call29476':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29364' : 'false-branch29363';
  break;
case 'true-branch29364':
  proc = lookup_variable_value('eval-sequence', env);
  save(continue_to);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('begin-actions', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29468':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29466';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29467';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29463';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29464';
    break;
  }
case 'compiled-branch29465':
  continue_to = 'after-call29462';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29464':
  continue_to = 'after-call29462';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29467':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29468';
  break;
case 'read-branch29463':
  continue_to = 'after-call29462';
  branch = 'read';
  break;
case 'primitive-branch29466':
  val = proc[1](argl);
case 'after-call29462':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start29475':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29473';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29474';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29470';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29471';
    break;
  }
case 'compiled-branch29472':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29471':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29474':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29475';
  break;
case 'read-branch29470':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29473':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29469':
case 'false-branch29363':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('cond?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29461':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29459';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29460';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29456';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29457';
    break;
  }
case 'compiled-branch29458':
  continue_to = 'after-call29455';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29457':
  continue_to = 'after-call29455';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29460':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29461';
  break;
case 'read-branch29456':
  continue_to = 'after-call29455';
  branch = 'read';
  break;
case 'primitive-branch29459':
  val = proc[1](argl);
case 'after-call29455':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29367' : 'false-branch29366';
  break;
case 'true-branch29367':
  proc = lookup_variable_value('eval', env);
  save(continue_to);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('cond->if', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29447':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29445';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29446';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29442';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29443';
    break;
  }
case 'compiled-branch29444':
  continue_to = 'after-call29441';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29443':
  continue_to = 'after-call29441';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29446':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29447';
  break;
case 'read-branch29442':
  continue_to = 'after-call29441';
  branch = 'read';
  break;
case 'primitive-branch29445':
  val = proc[1](argl);
case 'after-call29441':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start29454':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29452';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29453';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29449';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29450';
    break;
  }
case 'compiled-branch29451':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29450':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29453':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29454';
  break;
case 'read-branch29449':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29452':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29448':
case 'false-branch29366':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('application?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29440':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29438';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29439';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29435';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29436';
    break;
  }
case 'compiled-branch29437':
  continue_to = 'after-call29434';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29436':
  continue_to = 'after-call29434';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29439':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29440';
  break;
case 'read-branch29435':
  continue_to = 'after-call29434';
  branch = 'read';
  break;
case 'primitive-branch29438':
  val = proc[1](argl);
case 'after-call29434':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29370' : 'false-branch29369';
  break;
case 'true-branch29370':
  proc = lookup_variable_value('apply', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('list-of-values', env);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('operands', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29419':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29417';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29418';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29414';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29415';
    break;
  }
case 'compiled-branch29416':
  continue_to = 'after-call29413';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29415':
  continue_to = 'after-call29413';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29418':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29419';
  break;
case 'read-branch29414':
  continue_to = 'after-call29413';
  branch = 'read';
  break;
case 'primitive-branch29417':
  val = proc[1](argl);
case 'after-call29413':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start29426':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29424';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29425';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29421';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29422';
    break;
  }
case 'compiled-branch29423':
  continue_to = 'after-call29420';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29422':
  continue_to = 'after-call29420';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29425':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29426';
  break;
case 'read-branch29421':
  continue_to = 'after-call29420';
  branch = 'read';
  break;
case 'primitive-branch29424':
  val = proc[1](argl);
case 'after-call29420':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('eval', env);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('operator', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29405':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29403';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29404';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29400';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29401';
    break;
  }
case 'compiled-branch29402':
  continue_to = 'after-call29399';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29401':
  continue_to = 'after-call29399';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29404':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29405';
  break;
case 'read-branch29400':
  continue_to = 'after-call29399';
  branch = 'read';
  break;
case 'primitive-branch29403':
  val = proc[1](argl);
case 'after-call29399':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start29412':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29410';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29411';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29407';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29408';
    break;
  }
case 'compiled-branch29409':
  continue_to = 'after-call29406';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29408':
  continue_to = 'after-call29406';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29411':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29412';
  break;
case 'read-branch29407':
  continue_to = 'after-call29406';
  branch = 'read';
  break;
case 'primitive-branch29410':
  val = proc[1](argl);
case 'after-call29406':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start29433':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29431';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29432';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29428';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29429';
    break;
  }
case 'compiled-branch29430':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29429':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29432':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29433';
  break;
case 'read-branch29428':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29431':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29427':
case 'false-branch29369':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "ERROR: ";
  argl = [val];
case 'compile-procedure-call-start29398':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29396';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29397';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29393';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29394';
    break;
  }
case 'compiled-branch29395':
  continue_to = 'after-call29392';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29394':
  continue_to = 'after-call29392';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29397':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29398';
  break;
case 'read-branch29393':
  continue_to = 'after-call29392';
  branch = 'read';
  break;
case 'primitive-branch29396':
  val = proc[1](argl);
case 'after-call29392':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "Unknown expression type -- EVAL";
  argl = [val];
case 'compile-procedure-call-start29391':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29389';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29390';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29386';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29387';
    break;
  }
case 'compiled-branch29388':
  continue_to = 'after-call29385';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29387':
  continue_to = 'after-call29385';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29390':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29391';
  break;
case 'read-branch29386':
  continue_to = 'after-call29385';
  branch = 'read';
  break;
case 'primitive-branch29389':
  val = proc[1](argl);
case 'after-call29385':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29384':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29382';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29383';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29379';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29380';
    break;
  }
case 'compiled-branch29381':
  continue_to = 'after-call29378';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29380':
  continue_to = 'after-call29378';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29383':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29384';
  break;
case 'read-branch29379':
  continue_to = 'after-call29378';
  branch = 'read';
  break;
case 'primitive-branch29382':
  val = proc[1](argl);
case 'after-call29378':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('user-print', env);
  val = "\n";
  argl = [val];
case 'compile-procedure-call-start29377':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29375';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29376';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29372';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29373';
    break;
  }
case 'compiled-branch29374':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29373':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29376':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29377';
  break;
case 'read-branch29372':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29375':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29371':
case 'after-if29368':
case 'after-if29365':
case 'after-if29362':
case 'after-if29359':
case 'after-if29356':
case 'after-if29353':
case 'after-if29350':
case 'after-if29347':
case 'after-if29344':
case 'after-if29341':
case 'after-lambda29339':
  define_variable('eval', val, env);
  val = 'ok: eval set';
  val = make_compiled_procedure('entry29248', env);
  branch = 'after-lambda29247';
  break;
case 'entry29248':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'procedure','arguments' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('primitive-procedure?', env);
  val = lookup_variable_value('procedure', env);
  argl = [val];
case 'compile-procedure-call-start29338':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29336';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29337';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29333';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29334';
    break;
  }
case 'compiled-branch29335':
  continue_to = 'after-call29332';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29334':
  continue_to = 'after-call29332';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29337':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29338';
  break;
case 'read-branch29333':
  continue_to = 'after-call29332';
  branch = 'read';
  break;
case 'primitive-branch29336':
  val = proc[1](argl);
case 'after-call29332':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29251' : 'false-branch29250';
  break;
case 'true-branch29251':
  proc = lookup_variable_value('apply-primitive-procedure', env);
  val = lookup_variable_value('arguments', env);
  argl = [val];
  val = lookup_variable_value('procedure', env);
  argl.unshift(val);
case 'compile-procedure-call-start29331':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29329';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29330';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29326';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29327';
    break;
  }
case 'compiled-branch29328':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29327':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29330':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29331';
  break;
case 'read-branch29326':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29329':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29325':
case 'false-branch29250':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('compound-procedure?', env);
  val = lookup_variable_value('procedure', env);
  argl = [val];
case 'compile-procedure-call-start29324':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29322';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29323';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29319';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29320';
    break;
  }
case 'compiled-branch29321':
  continue_to = 'after-call29318';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29320':
  continue_to = 'after-call29318';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29323':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29324';
  break;
case 'read-branch29319':
  continue_to = 'after-call29318';
  branch = 'read';
  break;
case 'primitive-branch29322':
  val = proc[1](argl);
case 'after-call29318':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29254' : 'false-branch29253';
  break;
case 'true-branch29254':
  proc = lookup_variable_value('eval-sequence', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('extend-environment', env);
  save(proc);
  save(env);
  proc = lookup_variable_value('procedure-environment', env);
  val = lookup_variable_value('procedure', env);
  argl = [val];
case 'compile-procedure-call-start29303':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29301';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29302';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29298';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29299';
    break;
  }
case 'compiled-branch29300':
  continue_to = 'after-call29297';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29299':
  continue_to = 'after-call29297';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29302':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29303';
  break;
case 'read-branch29298':
  continue_to = 'after-call29297';
  branch = 'read';
  break;
case 'primitive-branch29301':
  val = proc[1](argl);
case 'after-call29297':
  argl = [val];
  env = restore();
  val = lookup_variable_value('arguments', env);
  argl.unshift(val);
  save(argl);
  proc = lookup_variable_value('procedure-parameters', env);
  val = lookup_variable_value('procedure', env);
  argl = [val];
case 'compile-procedure-call-start29296':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29294';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29295';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29291';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29292';
    break;
  }
case 'compiled-branch29293':
  continue_to = 'after-call29290';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29292':
  continue_to = 'after-call29290';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29295':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29296';
  break;
case 'read-branch29291':
  continue_to = 'after-call29290';
  branch = 'read';
  break;
case 'primitive-branch29294':
  val = proc[1](argl);
case 'after-call29290':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start29310':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29308';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29309';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29305';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29306';
    break;
  }
case 'compiled-branch29307':
  continue_to = 'after-call29304';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29306':
  continue_to = 'after-call29304';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29309':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29310';
  break;
case 'read-branch29305':
  continue_to = 'after-call29304';
  branch = 'read';
  break;
case 'primitive-branch29308':
  val = proc[1](argl);
case 'after-call29304':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('procedure-body', env);
  val = lookup_variable_value('procedure', env);
  argl = [val];
case 'compile-procedure-call-start29289':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29287';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29288';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29284';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29285';
    break;
  }
case 'compiled-branch29286':
  continue_to = 'after-call29283';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29285':
  continue_to = 'after-call29283';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29288':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29289';
  break;
case 'read-branch29284':
  continue_to = 'after-call29283';
  branch = 'read';
  break;
case 'primitive-branch29287':
  val = proc[1](argl);
case 'after-call29283':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start29317':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29315';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29316';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29312';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29313';
    break;
  }
case 'compiled-branch29314':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29313':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29316':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29317';
  break;
case 'read-branch29312':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29315':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29311':
case 'false-branch29253':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "ERROR: ";
  argl = [val];
case 'compile-procedure-call-start29282':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29280';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29281';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29277';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29278';
    break;
  }
case 'compiled-branch29279':
  continue_to = 'after-call29276';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29278':
  continue_to = 'after-call29276';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29281':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29282';
  break;
case 'read-branch29277':
  continue_to = 'after-call29276';
  branch = 'read';
  break;
case 'primitive-branch29280':
  val = proc[1](argl);
case 'after-call29276':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "Unknown procedure type -- APPLY";
  argl = [val];
case 'compile-procedure-call-start29275':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29273';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29274';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29270';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29271';
    break;
  }
case 'compiled-branch29272':
  continue_to = 'after-call29269';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29271':
  continue_to = 'after-call29269';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29274':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29275';
  break;
case 'read-branch29270':
  continue_to = 'after-call29269';
  branch = 'read';
  break;
case 'primitive-branch29273':
  val = proc[1](argl);
case 'after-call29269':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = lookup_variable_value('procedure', env);
  argl = [val];
case 'compile-procedure-call-start29268':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29266';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29267';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29263';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29264';
    break;
  }
case 'compiled-branch29265':
  continue_to = 'after-call29262';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29264':
  continue_to = 'after-call29262';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29267':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29268';
  break;
case 'read-branch29263':
  continue_to = 'after-call29262';
  branch = 'read';
  break;
case 'primitive-branch29266':
  val = proc[1](argl);
case 'after-call29262':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('user-print', env);
  val = "\n";
  argl = [val];
case 'compile-procedure-call-start29261':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29259';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29260';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29256';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29257';
    break;
  }
case 'compiled-branch29258':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29257':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29260':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29261';
  break;
case 'read-branch29256':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29259':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29255':
case 'after-if29252':
case 'after-if29249':
case 'after-lambda29247':
  define_variable('apply', val, env);
  val = 'ok: apply set';
  val = make_compiled_procedure('entry29201', env);
  branch = 'after-lambda29200';
  break;
case 'entry29201':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exps','env' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('no-operands?', env);
  val = lookup_variable_value('exps', env);
  argl = [val];
case 'compile-procedure-call-start29246':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29244';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29245';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29241';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29242';
    break;
  }
case 'compiled-branch29243':
  continue_to = 'after-call29240';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29242':
  continue_to = 'after-call29240';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29245':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29246';
  break;
case 'read-branch29241':
  continue_to = 'after-call29240';
  branch = 'read';
  break;
case 'primitive-branch29244':
  val = proc[1](argl);
case 'after-call29240':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29204' : 'false-branch29203';
  break;
case 'true-branch29204':
  val = lookup_variable_value('nil', env);
  branch = continue_to;
break;
case 'false-branch29203':
  proc = lookup_variable_value('cons', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('list-of-values', env);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('rest-operands', env);
  val = lookup_variable_value('exps', env);
  argl = [val];
case 'compile-procedure-call-start29225':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29223';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29224';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29220';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29221';
    break;
  }
case 'compiled-branch29222':
  continue_to = 'after-call29219';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29221':
  continue_to = 'after-call29219';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29224':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29225';
  break;
case 'read-branch29220':
  continue_to = 'after-call29219';
  branch = 'read';
  break;
case 'primitive-branch29223':
  val = proc[1](argl);
case 'after-call29219':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start29232':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29230';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29231';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29227';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29228';
    break;
  }
case 'compiled-branch29229':
  continue_to = 'after-call29226';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29228':
  continue_to = 'after-call29226';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29231':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29232';
  break;
case 'read-branch29227':
  continue_to = 'after-call29226';
  branch = 'read';
  break;
case 'primitive-branch29230':
  val = proc[1](argl);
case 'after-call29226':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('eval', env);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('first-operand', env);
  val = lookup_variable_value('exps', env);
  argl = [val];
case 'compile-procedure-call-start29211':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29209';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29210';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29206';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29207';
    break;
  }
case 'compiled-branch29208':
  continue_to = 'after-call29205';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29207':
  continue_to = 'after-call29205';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29210':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29211';
  break;
case 'read-branch29206':
  continue_to = 'after-call29205';
  branch = 'read';
  break;
case 'primitive-branch29209':
  val = proc[1](argl);
case 'after-call29205':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start29218':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29216';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29217';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29213';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29214';
    break;
  }
case 'compiled-branch29215':
  continue_to = 'after-call29212';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29214':
  continue_to = 'after-call29212';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29217':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29218';
  break;
case 'read-branch29213':
  continue_to = 'after-call29212';
  branch = 'read';
  break;
case 'primitive-branch29216':
  val = proc[1](argl);
case 'after-call29212':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start29239':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29237';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29238';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29234';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29235';
    break;
  }
case 'compiled-branch29236':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29235':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29238':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29239';
  break;
case 'read-branch29234':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29237':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29233':
case 'after-if29202':
case 'after-lambda29200':
  define_variable('list-of-values', val, env);
  val = 'ok: list-of-values set';
  val = make_compiled_procedure('entry29147', env);
  branch = 'after-lambda29146';
  break;
case 'entry29147':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp','env' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('true?', env);
  save(proc);
  proc = lookup_variable_value('eval', env);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('if-predicate', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29185':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29183';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29184';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29180';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29181';
    break;
  }
case 'compiled-branch29182':
  continue_to = 'after-call29179';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29181':
  continue_to = 'after-call29179';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29184':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29185';
  break;
case 'read-branch29180':
  continue_to = 'after-call29179';
  branch = 'read';
  break;
case 'primitive-branch29183':
  val = proc[1](argl);
case 'after-call29179':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start29192':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29190';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29191';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29187';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29188';
    break;
  }
case 'compiled-branch29189':
  continue_to = 'after-call29186';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29188':
  continue_to = 'after-call29186';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29191':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29192';
  break;
case 'read-branch29187':
  continue_to = 'after-call29186';
  branch = 'read';
  break;
case 'primitive-branch29190':
  val = proc[1](argl);
case 'after-call29186':
  argl = [val];
  proc = restore();
case 'compile-procedure-call-start29199':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29197';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29198';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29194';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29195';
    break;
  }
case 'compiled-branch29196':
  continue_to = 'after-call29193';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29195':
  continue_to = 'after-call29193';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29198':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29199';
  break;
case 'read-branch29194':
  continue_to = 'after-call29193';
  branch = 'read';
  break;
case 'primitive-branch29197':
  val = proc[1](argl);
case 'after-call29193':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29150' : 'false-branch29149';
  break;
case 'true-branch29150':
  proc = lookup_variable_value('eval', env);
  save(continue_to);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('if-consequent', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29171':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29169';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29170';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29166';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29167';
    break;
  }
case 'compiled-branch29168':
  continue_to = 'after-call29165';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29167':
  continue_to = 'after-call29165';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29170':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29171';
  break;
case 'read-branch29166':
  continue_to = 'after-call29165';
  branch = 'read';
  break;
case 'primitive-branch29169':
  val = proc[1](argl);
case 'after-call29165':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start29178':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29176';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29177';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29173';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29174';
    break;
  }
case 'compiled-branch29175':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29174':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29177':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29178';
  break;
case 'read-branch29173':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29176':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29172':
case 'false-branch29149':
  proc = lookup_variable_value('eval', env);
  save(continue_to);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('if-alternative', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29157':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29155';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29156';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29152';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29153';
    break;
  }
case 'compiled-branch29154':
  continue_to = 'after-call29151';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29153':
  continue_to = 'after-call29151';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29156':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29157';
  break;
case 'read-branch29152':
  continue_to = 'after-call29151';
  branch = 'read';
  break;
case 'primitive-branch29155':
  val = proc[1](argl);
case 'after-call29151':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start29164':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29162';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29163';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29159';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29160';
    break;
  }
case 'compiled-branch29161':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29160':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29163':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29164';
  break;
case 'read-branch29159':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29162':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29158':
case 'after-if29148':
case 'after-lambda29146':
  define_variable('eval-if', val, env);
  val = 'ok: eval-if set';
  val = make_compiled_procedure('entry29093', env);
  branch = 'after-lambda29092';
  break;
case 'entry29093':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exps','env' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('last-exp?', env);
  val = lookup_variable_value('exps', env);
  argl = [val];
case 'compile-procedure-call-start29145':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29143';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29144';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29140';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29141';
    break;
  }
case 'compiled-branch29142':
  continue_to = 'after-call29139';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29141':
  continue_to = 'after-call29139';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29144':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29145';
  break;
case 'read-branch29140':
  continue_to = 'after-call29139';
  branch = 'read';
  break;
case 'primitive-branch29143':
  val = proc[1](argl);
case 'after-call29139':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29096' : 'false-branch29095';
  break;
case 'true-branch29096':
  proc = lookup_variable_value('eval', env);
  save(continue_to);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('first-exp', env);
  val = lookup_variable_value('exps', env);
  argl = [val];
case 'compile-procedure-call-start29131':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29129';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29130';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29126';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29127';
    break;
  }
case 'compiled-branch29128':
  continue_to = 'after-call29125';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29127':
  continue_to = 'after-call29125';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29130':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29131';
  break;
case 'read-branch29126':
  continue_to = 'after-call29125';
  branch = 'read';
  break;
case 'primitive-branch29129':
  val = proc[1](argl);
case 'after-call29125':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start29138':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29136';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29137';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29133';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29134';
    break;
  }
case 'compiled-branch29135':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29134':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29137':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29138';
  break;
case 'read-branch29133':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29136':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29132':
case 'false-branch29095':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('eval', env);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('first-exp', env);
  val = lookup_variable_value('exps', env);
  argl = [val];
case 'compile-procedure-call-start29117':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29115';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29116';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29112';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29113';
    break;
  }
case 'compiled-branch29114':
  continue_to = 'after-call29111';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29113':
  continue_to = 'after-call29111';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29116':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29117';
  break;
case 'read-branch29112':
  continue_to = 'after-call29111';
  branch = 'read';
  break;
case 'primitive-branch29115':
  val = proc[1](argl);
case 'after-call29111':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start29124':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29122';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29123';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29119';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29120';
    break;
  }
case 'compiled-branch29121':
  continue_to = 'after-call29118';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29120':
  continue_to = 'after-call29118';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29123':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29124';
  break;
case 'read-branch29119':
  continue_to = 'after-call29118';
  branch = 'read';
  break;
case 'primitive-branch29122':
  val = proc[1](argl);
case 'after-call29118':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('eval-sequence', env);
  save(continue_to);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('rest-exps', env);
  val = lookup_variable_value('exps', env);
  argl = [val];
case 'compile-procedure-call-start29103':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29101';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29102';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29098';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29099';
    break;
  }
case 'compiled-branch29100':
  continue_to = 'after-call29097';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29099':
  continue_to = 'after-call29097';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29102':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29103';
  break;
case 'read-branch29098':
  continue_to = 'after-call29097';
  branch = 'read';
  break;
case 'primitive-branch29101':
  val = proc[1](argl);
case 'after-call29097':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start29110':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29108';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29109';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29105';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29106';
    break;
  }
case 'compiled-branch29107':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29106':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29109':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29110';
  break;
case 'read-branch29105':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29108':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29104':
case 'after-if29094':
case 'after-lambda29092':
  define_variable('eval-sequence', val, env);
  val = 'ok: eval-sequence set';
  val = make_compiled_procedure('entry29063', env);
  branch = 'after-lambda29062';
  break;
case 'entry29063':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp','env' ], argl, env);
  save(continue_to);
  proc = lookup_variable_value('set-variable-value!', env);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(env);
  save(argl);
  proc = lookup_variable_value('eval', env);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('assignment-value', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29077':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29075';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29076';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29072';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29073';
    break;
  }
case 'compiled-branch29074':
  continue_to = 'after-call29071';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29073':
  continue_to = 'after-call29071';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29076':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29077';
  break;
case 'read-branch29072':
  continue_to = 'after-call29071';
  branch = 'read';
  break;
case 'primitive-branch29075':
  val = proc[1](argl);
case 'after-call29071':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start29084':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29082';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29083';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29079';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29080';
    break;
  }
case 'compiled-branch29081':
  continue_to = 'after-call29078';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29080':
  continue_to = 'after-call29078';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29083':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29084';
  break;
case 'read-branch29079':
  continue_to = 'after-call29078';
  branch = 'read';
  break;
case 'primitive-branch29082':
  val = proc[1](argl);
case 'after-call29078':
  argl = restore();
  argl.unshift(val);
  env = restore();
  save(argl);
  proc = lookup_variable_value('assignment-variable', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29070':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29068';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29069';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29065';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29066';
    break;
  }
case 'compiled-branch29067':
  continue_to = 'after-call29064';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29066':
  continue_to = 'after-call29064';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29069':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29070';
  break;
case 'read-branch29065':
  continue_to = 'after-call29064';
  branch = 'read';
  break;
case 'primitive-branch29068':
  val = proc[1](argl);
case 'after-call29064':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start29091':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29089';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29090';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29086';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29087';
    break;
  }
case 'compiled-branch29088':
  continue_to = 'after-call29085';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29087':
  continue_to = 'after-call29085';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29090':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29091';
  break;
case 'read-branch29086':
  continue_to = 'after-call29085';
  branch = 'read';
  break;
case 'primitive-branch29089':
  val = proc[1](argl);
case 'after-call29085':
  continue_to = restore();
  val = "ok";
  branch = continue_to;
break;
case 'after-lambda29062':
  define_variable('eval-assignment', val, env);
  val = 'ok: eval-assignment set';
  val = make_compiled_procedure('entry29033', env);
  branch = 'after-lambda29032';
  break;
case 'entry29033':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp','env' ], argl, env);
  save(continue_to);
  proc = lookup_variable_value('define-variable!', env);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(env);
  save(argl);
  proc = lookup_variable_value('eval', env);
  save(proc);
  val = lookup_variable_value('env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('definition-value', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29047':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29045';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29046';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29042';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29043';
    break;
  }
case 'compiled-branch29044':
  continue_to = 'after-call29041';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29043':
  continue_to = 'after-call29041';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29046':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29047';
  break;
case 'read-branch29042':
  continue_to = 'after-call29041';
  branch = 'read';
  break;
case 'primitive-branch29045':
  val = proc[1](argl);
case 'after-call29041':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start29054':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29052';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29053';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29049';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29050';
    break;
  }
case 'compiled-branch29051':
  continue_to = 'after-call29048';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29050':
  continue_to = 'after-call29048';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29053':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29054';
  break;
case 'read-branch29049':
  continue_to = 'after-call29048';
  branch = 'read';
  break;
case 'primitive-branch29052':
  val = proc[1](argl);
case 'after-call29048':
  argl = restore();
  argl.unshift(val);
  env = restore();
  save(argl);
  proc = lookup_variable_value('definition-variable', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29040':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29038';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29039';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29035';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29036';
    break;
  }
case 'compiled-branch29037':
  continue_to = 'after-call29034';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29036':
  continue_to = 'after-call29034';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29039':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29040';
  break;
case 'read-branch29035':
  continue_to = 'after-call29034';
  branch = 'read';
  break;
case 'primitive-branch29038':
  val = proc[1](argl);
case 'after-call29034':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start29061':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29059';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29060';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29056';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29057';
    break;
  }
case 'compiled-branch29058':
  continue_to = 'after-call29055';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29057':
  continue_to = 'after-call29055';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29060':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29061';
  break;
case 'read-branch29056':
  continue_to = 'after-call29055';
  branch = 'read';
  break;
case 'primitive-branch29059':
  val = proc[1](argl);
case 'after-call29055':
  continue_to = restore();
  val = "ok";
  branch = continue_to;
break;
case 'after-lambda29032':
  define_variable('eval-definition', val, env);
  val = 'ok: eval-definition set';
  val = make_compiled_procedure('entry29011', env);
  branch = 'after-lambda29010';
  break;
case 'entry29011':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('number?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29031':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29029';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29030';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29026';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29027';
    break;
  }
case 'compiled-branch29028':
  continue_to = 'after-call29025';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29027':
  continue_to = 'after-call29025';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29030':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29031';
  break;
case 'read-branch29026':
  continue_to = 'after-call29025';
  branch = 'read';
  break;
case 'primitive-branch29029':
  val = proc[1](argl);
case 'after-call29025':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29014' : 'false-branch29013';
  break;
case 'true-branch29014':
  val = lookup_variable_value('true', env);
  branch = continue_to;
break;
case 'false-branch29013':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('string?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29024':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29022';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29023';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29019';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29020';
    break;
  }
case 'compiled-branch29021':
  continue_to = 'after-call29018';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29020':
  continue_to = 'after-call29018';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29023':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29024';
  break;
case 'read-branch29019':
  continue_to = 'after-call29018';
  branch = 'read';
  break;
case 'primitive-branch29022':
  val = proc[1](argl);
case 'after-call29018':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch29017' : 'false-branch29016';
  break;
case 'true-branch29017':
  val = lookup_variable_value('true', env);
  branch = continue_to;
break;
case 'false-branch29016':
  val = lookup_variable_value('false', env);
  branch = continue_to;
break;
case 'after-if29015':
case 'after-if29012':
case 'after-lambda29010':
  define_variable('self-evaluating?', val, env);
  val = 'ok: self-evaluating? set';
  val = make_compiled_procedure('entry29002', env);
  branch = 'after-lambda29001';
  break;
case 'entry29002':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('tagged-list?', env);
  val = "quote";
  argl = [val];
  val = lookup_variable_value('exp', env);
  argl.unshift(val);
case 'compile-procedure-call-start29009':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch29007';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch29008';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch29004';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch29005';
    break;
  }
case 'compiled-branch29006':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch29005':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch29008':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29009';
  break;
case 'read-branch29004':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch29007':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call29003':
case 'after-lambda29001':
  define_variable('quoted?', val, env);
  val = 'ok: quoted? set';
  val = make_compiled_procedure('entry28993', env);
  branch = 'after-lambda28992';
  break;
case 'entry28993':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('cadr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start29000':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28998';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28999';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28995';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28996';
    break;
  }
case 'compiled-branch28997':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28996':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28999':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start29000';
  break;
case 'read-branch28995':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28998':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28994':
case 'after-lambda28992':
  define_variable('text-of-quotation', val, env);
  val = 'ok: text-of-quotation set';
  val = make_compiled_procedure('entry28967', env);
  branch = 'after-lambda28966';
  break;
case 'entry28967':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp','tag' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('pair?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28991':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28989';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28990';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28986';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28987';
    break;
  }
case 'compiled-branch28988':
  continue_to = 'after-call28985';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28987':
  continue_to = 'after-call28985';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28990':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28991';
  break;
case 'read-branch28986':
  continue_to = 'after-call28985';
  branch = 'read';
  break;
case 'primitive-branch28989':
  val = proc[1](argl);
case 'after-call28985':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28970' : 'false-branch28969';
  break;
case 'true-branch28970':
  proc = lookup_variable_value('eq?', env);
  save(continue_to);
  save(proc);
  val = lookup_variable_value('tag', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28977':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28975';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28976';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28972';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28973';
    break;
  }
case 'compiled-branch28974':
  continue_to = 'after-call28971';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28973':
  continue_to = 'after-call28971';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28976':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28977';
  break;
case 'read-branch28972':
  continue_to = 'after-call28971';
  branch = 'read';
  break;
case 'primitive-branch28975':
  val = proc[1](argl);
case 'after-call28971':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28984':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28982';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28983';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28979';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28980';
    break;
  }
case 'compiled-branch28981':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28980':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28983':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28984';
  break;
case 'read-branch28979':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28982':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28978':
case 'false-branch28969':
  val = lookup_variable_value('false', env);
  branch = continue_to;
break;
case 'after-if28968':
case 'after-lambda28966':
  define_variable('tagged-list?', val, env);
  val = 'ok: tagged-list? set';
  val = make_compiled_procedure('entry28958', env);
  branch = 'after-lambda28957';
  break;
case 'entry28958':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('symbol?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28965':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28963';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28964';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28960';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28961';
    break;
  }
case 'compiled-branch28962':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28961':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28964':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28965';
  break;
case 'read-branch28960':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28963':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28959':
case 'after-lambda28957':
  define_variable('variable?', val, env);
  val = 'ok: variable? set';
  val = make_compiled_procedure('entry28949', env);
  branch = 'after-lambda28948';
  break;
case 'entry28949':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('tagged-list?', env);
  val = "set!";
  argl = [val];
  val = lookup_variable_value('exp', env);
  argl.unshift(val);
case 'compile-procedure-call-start28956':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28954';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28955';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28951';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28952';
    break;
  }
case 'compiled-branch28953':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28952':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28955':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28956';
  break;
case 'read-branch28951':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28954':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28950':
case 'after-lambda28948':
  define_variable('assignment?', val, env);
  val = 'ok: assignment? set';
  val = make_compiled_procedure('entry28940', env);
  branch = 'after-lambda28939';
  break;
case 'entry28940':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('cadr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28947':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28945';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28946';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28942';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28943';
    break;
  }
case 'compiled-branch28944':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28943':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28946':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28947';
  break;
case 'read-branch28942':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28945':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28941':
case 'after-lambda28939':
  define_variable('assignment-variable', val, env);
  val = 'ok: assignment-variable set';
  val = make_compiled_procedure('entry28931', env);
  branch = 'after-lambda28930';
  break;
case 'entry28931':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('caddr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28938':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28936';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28937';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28933';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28934';
    break;
  }
case 'compiled-branch28935':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28934':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28937':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28938';
  break;
case 'read-branch28933':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28936':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28932':
case 'after-lambda28930':
  define_variable('assignment-value', val, env);
  val = 'ok: assignment-value set';
  val = make_compiled_procedure('entry28922', env);
  branch = 'after-lambda28921';
  break;
case 'entry28922':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('tagged-list?', env);
  val = "define";
  argl = [val];
  val = lookup_variable_value('exp', env);
  argl.unshift(val);
case 'compile-procedure-call-start28929':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28927';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28928';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28924';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28925';
    break;
  }
case 'compiled-branch28926':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28925':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28928':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28929';
  break;
case 'read-branch28924':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28927':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28923':
case 'after-lambda28921':
  define_variable('definition?', val, env);
  val = 'ok: definition? set';
  val = make_compiled_procedure('entry28889', env);
  branch = 'after-lambda28888';
  break;
case 'entry28889':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('symbol?', env);
  save(proc);
  proc = lookup_variable_value('cadr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28913':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28911';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28912';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28908';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28909';
    break;
  }
case 'compiled-branch28910':
  continue_to = 'after-call28907';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28909':
  continue_to = 'after-call28907';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28912':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28913';
  break;
case 'read-branch28908':
  continue_to = 'after-call28907';
  branch = 'read';
  break;
case 'primitive-branch28911':
  val = proc[1](argl);
case 'after-call28907':
  argl = [val];
  proc = restore();
case 'compile-procedure-call-start28920':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28918';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28919';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28915';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28916';
    break;
  }
case 'compiled-branch28917':
  continue_to = 'after-call28914';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28916':
  continue_to = 'after-call28914';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28919':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28920';
  break;
case 'read-branch28915':
  continue_to = 'after-call28914';
  branch = 'read';
  break;
case 'primitive-branch28918':
  val = proc[1](argl);
case 'after-call28914':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28892' : 'false-branch28891';
  break;
case 'true-branch28892':
  proc = lookup_variable_value('cadr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28906':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28904';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28905';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28901';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28902';
    break;
  }
case 'compiled-branch28903':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28902':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28905':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28906';
  break;
case 'read-branch28901':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28904':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28900':
case 'false-branch28891':
  proc = lookup_variable_value('caadr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28899':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28897';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28898';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28894';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28895';
    break;
  }
case 'compiled-branch28896':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28895':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28898':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28899';
  break;
case 'read-branch28894':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28897':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28893':
case 'after-if28890':
case 'after-lambda28888':
  define_variable('definition-variable', val, env);
  val = 'ok: definition-variable set';
  val = make_compiled_procedure('entry28842', env);
  branch = 'after-lambda28841';
  break;
case 'entry28842':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('symbol?', env);
  save(proc);
  proc = lookup_variable_value('cadr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28880':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28878';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28879';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28875';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28876';
    break;
  }
case 'compiled-branch28877':
  continue_to = 'after-call28874';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28876':
  continue_to = 'after-call28874';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28879':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28880';
  break;
case 'read-branch28875':
  continue_to = 'after-call28874';
  branch = 'read';
  break;
case 'primitive-branch28878':
  val = proc[1](argl);
case 'after-call28874':
  argl = [val];
  proc = restore();
case 'compile-procedure-call-start28887':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28885';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28886';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28882';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28883';
    break;
  }
case 'compiled-branch28884':
  continue_to = 'after-call28881';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28883':
  continue_to = 'after-call28881';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28886':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28887';
  break;
case 'read-branch28882':
  continue_to = 'after-call28881';
  branch = 'read';
  break;
case 'primitive-branch28885':
  val = proc[1](argl);
case 'after-call28881':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28845' : 'false-branch28844';
  break;
case 'true-branch28845':
  proc = lookup_variable_value('caddr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28873':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28871';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28872';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28868';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28869';
    break;
  }
case 'compiled-branch28870':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28869':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28872':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28873';
  break;
case 'read-branch28868':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28871':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28867':
case 'false-branch28844':
  proc = lookup_variable_value('make-lambda', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('cddr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28859':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28857';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28858';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28854';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28855';
    break;
  }
case 'compiled-branch28856':
  continue_to = 'after-call28853';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28855':
  continue_to = 'after-call28853';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28858':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28859';
  break;
case 'read-branch28854':
  continue_to = 'after-call28853';
  branch = 'read';
  break;
case 'primitive-branch28857':
  val = proc[1](argl);
case 'after-call28853':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('cdadr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28852':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28850';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28851';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28847';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28848';
    break;
  }
case 'compiled-branch28849':
  continue_to = 'after-call28846';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28848':
  continue_to = 'after-call28846';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28851':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28852';
  break;
case 'read-branch28847':
  continue_to = 'after-call28846';
  branch = 'read';
  break;
case 'primitive-branch28850':
  val = proc[1](argl);
case 'after-call28846':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28866':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28864';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28865';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28861';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28862';
    break;
  }
case 'compiled-branch28863':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28862':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28865':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28866';
  break;
case 'read-branch28861':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28864':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28860':
case 'after-if28843':
case 'after-lambda28841':
  define_variable('definition-value', val, env);
  val = 'ok: definition-value set';
  val = make_compiled_procedure('entry28833', env);
  branch = 'after-lambda28832';
  break;
case 'entry28833':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('tagged-list?', env);
  val = "lambda";
  argl = [val];
  val = lookup_variable_value('exp', env);
  argl.unshift(val);
case 'compile-procedure-call-start28840':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28838';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28839';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28835';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28836';
    break;
  }
case 'compiled-branch28837':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28836':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28839':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28840';
  break;
case 'read-branch28835':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28838':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28834':
case 'after-lambda28832':
  define_variable('lambda?', val, env);
  val = 'ok: lambda? set';
  val = make_compiled_procedure('entry28824', env);
  branch = 'after-lambda28823';
  break;
case 'entry28824':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('cadr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28831':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28829';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28830';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28826';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28827';
    break;
  }
case 'compiled-branch28828':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28827':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28830':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28831';
  break;
case 'read-branch28826':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28829':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28825':
case 'after-lambda28823':
  define_variable('lambda-parameters', val, env);
  val = 'ok: lambda-parameters set';
  val = make_compiled_procedure('entry28815', env);
  branch = 'after-lambda28814';
  break;
case 'entry28815':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('cddr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28822':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28820';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28821';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28817';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28818';
    break;
  }
case 'compiled-branch28819':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28818':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28821':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28822';
  break;
case 'read-branch28817':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28820':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28816':
case 'after-lambda28814':
  define_variable('lambda-body', val, env);
  val = 'ok: lambda-body set';
  val = make_compiled_procedure('entry28799', env);
  branch = 'after-lambda28798';
  break;
case 'entry28799':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'parameters','body' ], argl, env);
  proc = lookup_variable_value('cons', env);
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('cons', env);
  val = lookup_variable_value('body', env);
  argl = [val];
  val = lookup_variable_value('parameters', env);
  argl.unshift(val);
case 'compile-procedure-call-start28806':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28804';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28805';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28801';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28802';
    break;
  }
case 'compiled-branch28803':
  continue_to = 'after-call28800';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28802':
  continue_to = 'after-call28800';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28805':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28806';
  break;
case 'read-branch28801':
  continue_to = 'after-call28800';
  branch = 'read';
  break;
case 'primitive-branch28804':
  val = proc[1](argl);
case 'after-call28800':
  argl = [val];
  val = "lambda";
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28813':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28811';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28812';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28808';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28809';
    break;
  }
case 'compiled-branch28810':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28809':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28812':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28813';
  break;
case 'read-branch28808':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28811':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28807':
case 'after-lambda28798':
  define_variable('make-lambda', val, env);
  val = 'ok: make-lambda set';
  val = make_compiled_procedure('entry28790', env);
  branch = 'after-lambda28789';
  break;
case 'entry28790':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('tagged-list?', env);
  val = "if";
  argl = [val];
  val = lookup_variable_value('exp', env);
  argl.unshift(val);
case 'compile-procedure-call-start28797':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28795';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28796';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28792';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28793';
    break;
  }
case 'compiled-branch28794':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28793':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28796':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28797';
  break;
case 'read-branch28792':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28795':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28791':
case 'after-lambda28789':
  define_variable('if?', val, env);
  val = 'ok: if? set';
  val = make_compiled_procedure('entry28781', env);
  branch = 'after-lambda28780';
  break;
case 'entry28781':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('cadr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28788':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28786';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28787';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28783';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28784';
    break;
  }
case 'compiled-branch28785':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28784':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28787':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28788';
  break;
case 'read-branch28783':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28786':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28782':
case 'after-lambda28780':
  define_variable('if-predicate', val, env);
  val = 'ok: if-predicate set';
  val = make_compiled_procedure('entry28772', env);
  branch = 'after-lambda28771';
  break;
case 'entry28772':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('caddr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28779':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28777';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28778';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28774';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28775';
    break;
  }
case 'compiled-branch28776':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28775':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28778':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28779';
  break;
case 'read-branch28774':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28777':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28773':
case 'after-lambda28771':
  define_variable('if-consequent', val, env);
  val = 'ok: if-consequent set';
  val = make_compiled_procedure('entry28739', env);
  branch = 'after-lambda28738';
  break;
case 'entry28739':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('not', env);
  save(proc);
  proc = lookup_variable_value('null?', env);
  save(proc);
  proc = lookup_variable_value('cdddr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28756':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28754';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28755';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28751';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28752';
    break;
  }
case 'compiled-branch28753':
  continue_to = 'after-call28750';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28752':
  continue_to = 'after-call28750';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28755':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28756';
  break;
case 'read-branch28751':
  continue_to = 'after-call28750';
  branch = 'read';
  break;
case 'primitive-branch28754':
  val = proc[1](argl);
case 'after-call28750':
  argl = [val];
  proc = restore();
case 'compile-procedure-call-start28763':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28761';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28762';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28758';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28759';
    break;
  }
case 'compiled-branch28760':
  continue_to = 'after-call28757';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28759':
  continue_to = 'after-call28757';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28762':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28763';
  break;
case 'read-branch28758':
  continue_to = 'after-call28757';
  branch = 'read';
  break;
case 'primitive-branch28761':
  val = proc[1](argl);
case 'after-call28757':
  argl = [val];
  proc = restore();
case 'compile-procedure-call-start28770':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28768';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28769';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28765';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28766';
    break;
  }
case 'compiled-branch28767':
  continue_to = 'after-call28764';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28766':
  continue_to = 'after-call28764';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28769':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28770';
  break;
case 'read-branch28765':
  continue_to = 'after-call28764';
  branch = 'read';
  break;
case 'primitive-branch28768':
  val = proc[1](argl);
case 'after-call28764':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28742' : 'false-branch28741';
  break;
case 'true-branch28742':
  proc = lookup_variable_value('cadddr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28749':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28747';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28748';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28744';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28745';
    break;
  }
case 'compiled-branch28746':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28745':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28748':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28749';
  break;
case 'read-branch28744':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28747':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28743':
case 'false-branch28741':
  val = "false";
  branch = continue_to;
break;
case 'after-if28740':
case 'after-lambda28738':
  define_variable('if-alternative', val, env);
  val = 'ok: if-alternative set';
  val = make_compiled_procedure('entry28730', env);
  branch = 'after-lambda28729';
  break;
case 'entry28730':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'predicate','consequent','alternative' ], argl, env);
  proc = lookup_variable_value('list', env);
  val = lookup_variable_value('alternative', env);
  argl = [val];
  val = lookup_variable_value('consequent', env);
  argl.unshift(val);
  val = lookup_variable_value('predicate', env);
  argl.unshift(val);
  val = "if";
  argl.unshift(val);
case 'compile-procedure-call-start28737':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28735';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28736';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28732';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28733';
    break;
  }
case 'compiled-branch28734':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28733':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28736':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28737';
  break;
case 'read-branch28732':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28735':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28731':
case 'after-lambda28729':
  define_variable('make-if', val, env);
  val = 'ok: make-if set';
  val = make_compiled_procedure('entry28721', env);
  branch = 'after-lambda28720';
  break;
case 'entry28721':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('tagged-list?', env);
  val = "begin";
  argl = [val];
  val = lookup_variable_value('exp', env);
  argl.unshift(val);
case 'compile-procedure-call-start28728':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28726';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28727';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28723';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28724';
    break;
  }
case 'compiled-branch28725':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28724':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28727':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28728';
  break;
case 'read-branch28723':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28726':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28722':
case 'after-lambda28720':
  define_variable('begin?', val, env);
  val = 'ok: begin? set';
  val = make_compiled_procedure('entry28712', env);
  branch = 'after-lambda28711';
  break;
case 'entry28712':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28719':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28717';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28718';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28714';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28715';
    break;
  }
case 'compiled-branch28716':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28715':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28718':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28719';
  break;
case 'read-branch28714':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28717':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28713':
case 'after-lambda28711':
  define_variable('begin-actions', val, env);
  val = 'ok: begin-actions set';
  val = make_compiled_procedure('entry28696', env);
  branch = 'after-lambda28695';
  break;
case 'entry28696':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'seq' ], argl, env);
  proc = lookup_variable_value('null?', env);
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('seq', env);
  argl = [val];
case 'compile-procedure-call-start28703':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28701';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28702';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28698';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28699';
    break;
  }
case 'compiled-branch28700':
  continue_to = 'after-call28697';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28699':
  continue_to = 'after-call28697';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28702':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28703';
  break;
case 'read-branch28698':
  continue_to = 'after-call28697';
  branch = 'read';
  break;
case 'primitive-branch28701':
  val = proc[1](argl);
case 'after-call28697':
  argl = [val];
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28710':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28708';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28709';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28705';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28706';
    break;
  }
case 'compiled-branch28707':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28706':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28709':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28710';
  break;
case 'read-branch28705':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28708':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28704':
case 'after-lambda28695':
  define_variable('last-exp?', val, env);
  val = 'ok: last-exp? set';
  val = make_compiled_procedure('entry28687', env);
  branch = 'after-lambda28686';
  break;
case 'entry28687':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'seq' ], argl, env);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('seq', env);
  argl = [val];
case 'compile-procedure-call-start28694':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28692';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28693';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28689';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28690';
    break;
  }
case 'compiled-branch28691':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28690':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28693':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28694';
  break;
case 'read-branch28689':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28692':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28688':
case 'after-lambda28686':
  define_variable('first-exp', val, env);
  val = 'ok: first-exp set';
  val = make_compiled_procedure('entry28678', env);
  branch = 'after-lambda28677';
  break;
case 'entry28678':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'seq' ], argl, env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('seq', env);
  argl = [val];
case 'compile-procedure-call-start28685':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28683';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28684';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28680';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28681';
    break;
  }
case 'compiled-branch28682':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28681':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28684':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28685';
  break;
case 'read-branch28680':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28683':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28679':
case 'after-lambda28677':
  define_variable('rest-exps', val, env);
  val = 'ok: rest-exps set';
  val = make_compiled_procedure('entry28642', env);
  branch = 'after-lambda28641';
  break;
case 'entry28642':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'seq' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('null?', env);
  val = lookup_variable_value('seq', env);
  argl = [val];
case 'compile-procedure-call-start28676':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28674';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28675';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28671';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28672';
    break;
  }
case 'compiled-branch28673':
  continue_to = 'after-call28670';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28672':
  continue_to = 'after-call28670';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28675':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28676';
  break;
case 'read-branch28671':
  continue_to = 'after-call28670';
  branch = 'read';
  break;
case 'primitive-branch28674':
  val = proc[1](argl);
case 'after-call28670':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28645' : 'false-branch28644';
  break;
case 'true-branch28645':
  val = lookup_variable_value('seq', env);
  branch = continue_to;
break;
case 'false-branch28644':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('last-exp?', env);
  val = lookup_variable_value('seq', env);
  argl = [val];
case 'compile-procedure-call-start28669':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28667';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28668';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28664';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28665';
    break;
  }
case 'compiled-branch28666':
  continue_to = 'after-call28663';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28665':
  continue_to = 'after-call28663';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28668':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28669';
  break;
case 'read-branch28664':
  continue_to = 'after-call28663';
  branch = 'read';
  break;
case 'primitive-branch28667':
  val = proc[1](argl);
case 'after-call28663':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28648' : 'false-branch28647';
  break;
case 'true-branch28648':
  proc = lookup_variable_value('first-exp', env);
  val = lookup_variable_value('seq', env);
  argl = [val];
case 'compile-procedure-call-start28662':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28660';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28661';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28657';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28658';
    break;
  }
case 'compiled-branch28659':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28658':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28661':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28662';
  break;
case 'read-branch28657':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28660':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28656':
case 'false-branch28647':
  proc = lookup_variable_value('make-begin', env);
  val = lookup_variable_value('seq', env);
  argl = [val];
case 'compile-procedure-call-start28655':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28653';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28654';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28650';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28651';
    break;
  }
case 'compiled-branch28652':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28651':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28654':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28655';
  break;
case 'read-branch28650':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28653':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28649':
case 'after-if28646':
case 'after-if28643':
case 'after-lambda28641':
  define_variable('sequence->exp', val, env);
  val = 'ok: sequence->exp set';
  val = make_compiled_procedure('entry28633', env);
  branch = 'after-lambda28632';
  break;
case 'entry28633':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'seq' ], argl, env);
  proc = lookup_variable_value('cons', env);
  val = lookup_variable_value('seq', env);
  argl = [val];
  val = "begin";
  argl.unshift(val);
case 'compile-procedure-call-start28640':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28638';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28639';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28635';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28636';
    break;
  }
case 'compiled-branch28637':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28636':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28639':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28640';
  break;
case 'read-branch28635':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28638':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28634':
case 'after-lambda28632':
  define_variable('make-begin', val, env);
  val = 'ok: make-begin set';
  val = make_compiled_procedure('entry28624', env);
  branch = 'after-lambda28623';
  break;
case 'entry28624':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('pair?', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28631':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28629';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28630';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28626';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28627';
    break;
  }
case 'compiled-branch28628':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28627':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28630':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28631';
  break;
case 'read-branch28626':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28629':
  val = proc[1](argl);
    console.log("-----------prim pair? " + val + "|-----------");
    console.log(argl);
  branch = continue_to;
break;
case 'after-call28625':
case 'after-lambda28623':
  define_variable('application?', val, env);
  val = 'ok: application? set';
  val = make_compiled_procedure('entry28615', env);
  branch = 'after-lambda28614';
  break;
case 'entry28615':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28622':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28620';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28621';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28617';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28618';
    break;
  }
case 'compiled-branch28619':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28618':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28621':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28622';
  break;
case 'read-branch28617':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28620':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28616':
case 'after-lambda28614':
  define_variable('operator', val, env);
  val = 'ok: operator set';
  val = make_compiled_procedure('entry28606', env);
  branch = 'after-lambda28605';
  break;
case 'entry28606':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28613':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28611';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28612';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28608';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28609';
    break;
  }
case 'compiled-branch28610':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28609':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28612':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28613';
  break;
case 'read-branch28608':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28611':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28607':
case 'after-lambda28605':
  define_variable('operands', val, env);
  val = 'ok: operands set';
  val = make_compiled_procedure('entry28597', env);
  branch = 'after-lambda28596';
  break;
case 'entry28597':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'ops' ], argl, env);
  proc = lookup_variable_value('null?', env);
  val = lookup_variable_value('ops', env);
  argl = [val];
case 'compile-procedure-call-start28604':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28602';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28603';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28599';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28600';
    break;
  }
case 'compiled-branch28601':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28600':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28603':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28604';
  break;
case 'read-branch28599':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28602':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28598':
case 'after-lambda28596':
  define_variable('no-operands?', val, env);
  val = 'ok: no-operands? set';
  val = make_compiled_procedure('entry28588', env);
  branch = 'after-lambda28587';
  break;
case 'entry28588':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'ops' ], argl, env);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('ops', env);
  argl = [val];
case 'compile-procedure-call-start28595':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28593';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28594';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28590';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28591';
    break;
  }
case 'compiled-branch28592':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28591':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28594':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28595';
  break;
case 'read-branch28590':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28593':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28589':
case 'after-lambda28587':
  define_variable('first-operand', val, env);
  val = 'ok: first-operand set';
  val = make_compiled_procedure('entry28579', env);
  branch = 'after-lambda28578';
  break;
case 'entry28579':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'ops' ], argl, env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('ops', env);
  argl = [val];
case 'compile-procedure-call-start28586':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28584';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28585';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28581';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28582';
    break;
  }
case 'compiled-branch28583':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28582':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28585':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28586';
  break;
case 'read-branch28581':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28584':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28580':
case 'after-lambda28578':
  define_variable('rest-operands', val, env);
  val = 'ok: rest-operands set';
  val = make_compiled_procedure('entry28570', env);
  branch = 'after-lambda28569';
  break;
case 'entry28570':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('tagged-list?', env);
  val = "cond";
  argl = [val];
  val = lookup_variable_value('exp', env);
  argl.unshift(val);
case 'compile-procedure-call-start28577':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28575';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28576';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28572';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28573';
    break;
  }
case 'compiled-branch28574':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28573':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28576':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28577';
  break;
case 'read-branch28572':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28575':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28571':
case 'after-lambda28569':
  define_variable('cond?', val, env);
  val = 'ok: cond? set';
  val = make_compiled_procedure('entry28561', env);
  branch = 'after-lambda28560';
  break;
case 'entry28561':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28568':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28566';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28567';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28563';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28564';
    break;
  }
case 'compiled-branch28565':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28564':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28567':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28568';
  break;
case 'read-branch28563':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28566':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28562':
case 'after-lambda28560':
  define_variable('cond-clauses', val, env);
  val = 'ok: cond-clauses set';
  val = make_compiled_procedure('entry28545', env);
  branch = 'after-lambda28544';
  break;
case 'entry28545':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'clause' ], argl, env);
  proc = lookup_variable_value('eq?', env);
  save(continue_to);
  save(proc);
  val = "else";
  argl = [val];
  save(argl);
  proc = lookup_variable_value('cond-predicate', env);
  val = lookup_variable_value('clause', env);
  argl = [val];
case 'compile-procedure-call-start28552':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28550';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28551';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28547';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28548';
    break;
  }
case 'compiled-branch28549':
  continue_to = 'after-call28546';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28548':
  continue_to = 'after-call28546';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28551':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28552';
  break;
case 'read-branch28547':
  continue_to = 'after-call28546';
  branch = 'read';
  break;
case 'primitive-branch28550':
  val = proc[1](argl);
case 'after-call28546':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28559':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28557';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28558';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28554';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28555';
    break;
  }
case 'compiled-branch28556':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28555':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28558':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28559';
  break;
case 'read-branch28554':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28557':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28553':
case 'after-lambda28544':
  define_variable('cond-else-clause?', val, env);
  val = 'ok: cond-else-clause? set';
  val = make_compiled_procedure('entry28536', env);
  branch = 'after-lambda28535';
  break;
case 'entry28536':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'clause' ], argl, env);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('clause', env);
  argl = [val];
case 'compile-procedure-call-start28543':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28541';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28542';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28538';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28539';
    break;
  }
case 'compiled-branch28540':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28539':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28542':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28543';
  break;
case 'read-branch28538':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28541':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28537':
case 'after-lambda28535':
  define_variable('cond-predicate', val, env);
  val = 'ok: cond-predicate set';
  val = make_compiled_procedure('entry28527', env);
  branch = 'after-lambda28526';
  break;
case 'entry28527':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'clause' ], argl, env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('clause', env);
  argl = [val];
case 'compile-procedure-call-start28534':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28532';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28533';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28529';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28530';
    break;
  }
case 'compiled-branch28531':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28530':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28533':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28534';
  break;
case 'read-branch28529':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28532':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28528':
case 'after-lambda28526':
  define_variable('cond-actions', val, env);
  val = 'ok: cond-actions set';
  val = make_compiled_procedure('entry28511', env);
  branch = 'after-lambda28510';
  break;
case 'entry28511':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'exp' ], argl, env);
  proc = lookup_variable_value('expand-clauses', env);
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('cond-clauses', env);
  val = lookup_variable_value('exp', env);
  argl = [val];
case 'compile-procedure-call-start28518':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28516';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28517';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28513';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28514';
    break;
  }
case 'compiled-branch28515':
  continue_to = 'after-call28512';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28514':
  continue_to = 'after-call28512';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28517':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28518';
  break;
case 'read-branch28513':
  continue_to = 'after-call28512';
  branch = 'read';
  break;
case 'primitive-branch28516':
  val = proc[1](argl);
case 'after-call28512':
  argl = [val];
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28525':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28523';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28524';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28520';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28521';
    break;
  }
case 'compiled-branch28522':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28521':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28524':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28525';
  break;
case 'read-branch28520':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28523':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28519':
case 'after-lambda28510':
  define_variable('cond->if', val, env);
  val = 'ok: cond->if set';
  val = make_compiled_procedure('entry28379', env);
  branch = 'after-lambda28378';
  break;
case 'entry28379':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'clauses' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('null?', env);
  val = lookup_variable_value('clauses', env);
  argl = [val];
case 'compile-procedure-call-start28509':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28507';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28508';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28504';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28505';
    break;
  }
case 'compiled-branch28506':
  continue_to = 'after-call28503';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28505':
  continue_to = 'after-call28503';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28508':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28509';
  break;
case 'read-branch28504':
  continue_to = 'after-call28503';
  branch = 'read';
  break;
case 'primitive-branch28507':
  val = proc[1](argl);
case 'after-call28503':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28382' : 'false-branch28381';
  break;
case 'true-branch28382':
  val = "false";
  branch = continue_to;
break;
case 'false-branch28381':
  proc = make_compiled_procedure('entry28398', env);
  branch = 'after-lambda28397';
  break;
case 'entry28398':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'first','rest' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('cond-else-clause?', env);
  val = lookup_variable_value('first', env);
  argl = [val];
case 'compile-procedure-call-start28495':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28493';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28494';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28490';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28491';
    break;
  }
case 'compiled-branch28492':
  continue_to = 'after-call28489';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28491':
  continue_to = 'after-call28489';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28494':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28495';
  break;
case 'read-branch28490':
  continue_to = 'after-call28489';
  branch = 'read';
  break;
case 'primitive-branch28493':
  val = proc[1](argl);
case 'after-call28489':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28401' : 'false-branch28400';
  break;
case 'true-branch28401':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('null?', env);
  val = lookup_variable_value('rest', env);
  argl = [val];
case 'compile-procedure-call-start28488':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28486';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28487';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28483';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28484';
    break;
  }
case 'compiled-branch28485':
  continue_to = 'after-call28482';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28484':
  continue_to = 'after-call28482';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28487':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28488';
  break;
case 'read-branch28483':
  continue_to = 'after-call28482';
  branch = 'read';
  break;
case 'primitive-branch28486':
  val = proc[1](argl);
case 'after-call28482':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28439' : 'false-branch28438';
  break;
case 'true-branch28439':
  proc = lookup_variable_value('sequence->exp', env);
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('cond-actions', env);
  val = lookup_variable_value('first', env);
  argl = [val];
case 'compile-procedure-call-start28474':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28472';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28473';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28469';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28470';
    break;
  }
case 'compiled-branch28471':
  continue_to = 'after-call28468';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28470':
  continue_to = 'after-call28468';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28473':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28474';
  break;
case 'read-branch28469':
  continue_to = 'after-call28468';
  branch = 'read';
  break;
case 'primitive-branch28472':
  val = proc[1](argl);
case 'after-call28468':
  argl = [val];
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28481':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28479';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28480';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28476';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28477';
    break;
  }
case 'compiled-branch28478':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28477':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28480':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28481';
  break;
case 'read-branch28476':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28479':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28475':
case 'false-branch28438':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "ERROR: ";
  argl = [val];
case 'compile-procedure-call-start28467':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28465';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28466';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28462';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28463';
    break;
  }
case 'compiled-branch28464':
  continue_to = 'after-call28461';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28463':
  continue_to = 'after-call28461';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28466':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28467';
  break;
case 'read-branch28462':
  continue_to = 'after-call28461';
  branch = 'read';
  break;
case 'primitive-branch28465':
  val = proc[1](argl);
case 'after-call28461':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "ELSE clause isn't last -- COND->IF";
  argl = [val];
case 'compile-procedure-call-start28460':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28458';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28459';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28455';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28456';
    break;
  }
case 'compiled-branch28457':
  continue_to = 'after-call28454';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28456':
  continue_to = 'after-call28454';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28459':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28460';
  break;
case 'read-branch28455':
  continue_to = 'after-call28454';
  branch = 'read';
  break;
case 'primitive-branch28458':
  val = proc[1](argl);
case 'after-call28454':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = lookup_variable_value('clauses', env);
  argl = [val];
case 'compile-procedure-call-start28453':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28451';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28452';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28448';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28449';
    break;
  }
case 'compiled-branch28450':
  continue_to = 'after-call28447';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28449':
  continue_to = 'after-call28447';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28452':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28453';
  break;
case 'read-branch28448':
  continue_to = 'after-call28447';
  branch = 'read';
  break;
case 'primitive-branch28451':
  val = proc[1](argl);
case 'after-call28447':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('user-print', env);
  val = "\n";
  argl = [val];
case 'compile-procedure-call-start28446':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28444';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28445';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28441';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28442';
    break;
  }
case 'compiled-branch28443':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28442':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28445':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28446';
  break;
case 'read-branch28441':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28444':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28440':
case 'after-if28437':
case 'false-branch28400':
  proc = lookup_variable_value('make-if', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('expand-clauses', env);
  val = lookup_variable_value('rest', env);
  argl = [val];
case 'compile-procedure-call-start28429':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28427';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28428';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28424';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28425';
    break;
  }
case 'compiled-branch28426':
  continue_to = 'after-call28423';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28425':
  continue_to = 'after-call28423';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28428':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28429';
  break;
case 'read-branch28424':
  continue_to = 'after-call28423';
  branch = 'read';
  break;
case 'primitive-branch28427':
  val = proc[1](argl);
case 'after-call28423':
  argl = [val];
  env = restore();
  save(env);
  save(argl);
  proc = lookup_variable_value('sequence->exp', env);
  save(proc);
  proc = lookup_variable_value('cond-actions', env);
  val = lookup_variable_value('first', env);
  argl = [val];
case 'compile-procedure-call-start28415':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28413';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28414';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28410';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28411';
    break;
  }
case 'compiled-branch28412':
  continue_to = 'after-call28409';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28411':
  continue_to = 'after-call28409';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28414':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28415';
  break;
case 'read-branch28410':
  continue_to = 'after-call28409';
  branch = 'read';
  break;
case 'primitive-branch28413':
  val = proc[1](argl);
case 'after-call28409':
  argl = [val];
  proc = restore();
case 'compile-procedure-call-start28422':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28420';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28421';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28417';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28418';
    break;
  }
case 'compiled-branch28419':
  continue_to = 'after-call28416';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28418':
  continue_to = 'after-call28416';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28421':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28422';
  break;
case 'read-branch28417':
  continue_to = 'after-call28416';
  branch = 'read';
  break;
case 'primitive-branch28420':
  val = proc[1](argl);
case 'after-call28416':
  argl = restore();
  argl.unshift(val);
  env = restore();
  save(argl);
  proc = lookup_variable_value('cond-predicate', env);
  val = lookup_variable_value('first', env);
  argl = [val];
case 'compile-procedure-call-start28408':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28406';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28407';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28403';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28404';
    break;
  }
case 'compiled-branch28405':
  continue_to = 'after-call28402';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28404':
  continue_to = 'after-call28402';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28407':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28408';
  break;
case 'read-branch28403':
  continue_to = 'after-call28402';
  branch = 'read';
  break;
case 'primitive-branch28406':
  val = proc[1](argl);
case 'after-call28402':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28436':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28434';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28435';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28431';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28432';
    break;
  }
case 'compiled-branch28433':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28432':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28435':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28436';
  break;
case 'read-branch28431':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28434':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28430':
case 'after-if28399':
case 'after-lambda28397':
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('clauses', env);
  argl = [val];
case 'compile-procedure-call-start28396':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28394';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28395';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28391';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28392';
    break;
  }
case 'compiled-branch28393':
  continue_to = 'after-call28390';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28392':
  continue_to = 'after-call28390';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28395':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28396';
  break;
case 'read-branch28391':
  continue_to = 'after-call28390';
  branch = 'read';
  break;
case 'primitive-branch28394':
  val = proc[1](argl);
case 'after-call28390':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('clauses', env);
  argl = [val];
case 'compile-procedure-call-start28389':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28387';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28388';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28384';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28385';
    break;
  }
case 'compiled-branch28386':
  continue_to = 'after-call28383';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28385':
  continue_to = 'after-call28383';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28388':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28389';
  break;
case 'read-branch28384':
  continue_to = 'after-call28383';
  branch = 'read';
  break;
case 'primitive-branch28387':
  val = proc[1](argl);
case 'after-call28383':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28502':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28500';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28501';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28497';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28498';
    break;
  }
case 'compiled-branch28499':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28498':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28501':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28502';
  break;
case 'read-branch28497':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28500':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28496':
case 'after-if28380':
case 'after-lambda28378':
  define_variable('expand-clauses', val, env);
  val = 'ok: expand-clauses set';
  val = make_compiled_procedure('entry28363', env);
  branch = 'after-lambda28362';
  break;
case 'entry28363':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'x' ], argl, env);
  proc = lookup_variable_value('not', env);
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('eq?', env);
  val = lookup_variable_value('false', env);
  argl = [val];
  val = lookup_variable_value('x', env);
  argl.unshift(val);
case 'compile-procedure-call-start28370':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28368';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28369';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28365';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28366';
    break;
  }
case 'compiled-branch28367':
  continue_to = 'after-call28364';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28366':
  continue_to = 'after-call28364';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28369':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28370';
  break;
case 'read-branch28365':
  continue_to = 'after-call28364';
  branch = 'read';
  break;
case 'primitive-branch28368':
  val = proc[1](argl);
case 'after-call28364':
  argl = [val];
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28377':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28375';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28376';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28372';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28373';
    break;
  }
case 'compiled-branch28374':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28373':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28376':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28377';
  break;
case 'read-branch28372':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28375':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28371':
case 'after-lambda28362':
  define_variable('true?', val, env);
  val = 'ok: true? set';
  val = make_compiled_procedure('entry28354', env);
  branch = 'after-lambda28353';
  break;
case 'entry28354':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'x' ], argl, env);
  proc = lookup_variable_value('eq?', env);
  val = lookup_variable_value('false', env);
  argl = [val];
  val = lookup_variable_value('x', env);
  argl.unshift(val);
case 'compile-procedure-call-start28361':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28359';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28360';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28356';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28357';
    break;
  }
case 'compiled-branch28358':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28357':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28360':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28361';
  break;
case 'read-branch28356':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28359':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28355':
case 'after-lambda28353':
  define_variable('false?', val, env);
  val = 'ok: false? set';
  val = make_compiled_procedure('entry28345', env);
  branch = 'after-lambda28344';
  break;
case 'entry28345':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'parameters','body','env' ], argl, env);
  proc = lookup_variable_value('list', env);
  val = lookup_variable_value('env', env);
  argl = [val];
  val = lookup_variable_value('body', env);
  argl.unshift(val);
  val = lookup_variable_value('parameters', env);
  argl.unshift(val);
  val = "procedure";
  argl.unshift(val);
case 'compile-procedure-call-start28352':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28350';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28351';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28347';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28348';
    break;
  }
case 'compiled-branch28349':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28348':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28351':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28352';
  break;
case 'read-branch28347':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28350':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28346':
case 'after-lambda28344':
  define_variable('make-procedure', val, env);
  val = 'ok: make-procedure set';
  val = make_compiled_procedure('entry28336', env);
  branch = 'after-lambda28335';
  break;
case 'entry28336':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'p' ], argl, env);
  proc = lookup_variable_value('tagged-list?', env);
  val = "procedure";
  argl = [val];
  val = lookup_variable_value('p', env);
  argl.unshift(val);
case 'compile-procedure-call-start28343':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28341';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28342';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28338';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28339';
    break;
  }
case 'compiled-branch28340':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28339':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28342':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28343';
  break;
case 'read-branch28338':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28341':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28337':
case 'after-lambda28335':
  define_variable('compound-procedure?', val, env);
  val = 'ok: compound-procedure? set';
  val = make_compiled_procedure('entry28327', env);
  branch = 'after-lambda28326';
  break;
case 'entry28327':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'p' ], argl, env);
  proc = lookup_variable_value('cadr', env);
  val = lookup_variable_value('p', env);
  argl = [val];
case 'compile-procedure-call-start28334':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28332';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28333';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28329';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28330';
    break;
  }
case 'compiled-branch28331':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28330':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28333':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28334';
  break;
case 'read-branch28329':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28332':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28328':
case 'after-lambda28326':
  define_variable('procedure-parameters', val, env);
  val = 'ok: procedure-parameters set';
  val = make_compiled_procedure('entry28318', env);
  branch = 'after-lambda28317';
  break;
case 'entry28318':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'p' ], argl, env);
  proc = lookup_variable_value('caddr', env);
  val = lookup_variable_value('p', env);
  argl = [val];
case 'compile-procedure-call-start28325':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28323';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28324';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28320';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28321';
    break;
  }
case 'compiled-branch28322':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28321':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28324':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28325';
  break;
case 'read-branch28320':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28323':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28319':
case 'after-lambda28317':
  define_variable('procedure-body', val, env);
  val = 'ok: procedure-body set';
  val = make_compiled_procedure('entry28309', env);
  branch = 'after-lambda28308';
  break;
case 'entry28309':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'p' ], argl, env);
  proc = lookup_variable_value('cadddr', env);
  val = lookup_variable_value('p', env);
  argl = [val];
case 'compile-procedure-call-start28316':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28314';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28315';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28311';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28312';
    break;
  }
case 'compiled-branch28313':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28312':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28315':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28316';
  break;
case 'read-branch28311':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28314':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28310':
case 'after-lambda28308':
  define_variable('procedure-environment', val, env);
  val = 'ok: procedure-environment set';
  val = make_compiled_procedure('entry28300', env);
  branch = 'after-lambda28299';
  break;
case 'entry28300':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'env' ], argl, env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('env', env);
  argl = [val];
case 'compile-procedure-call-start28307':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28305';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28306';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28302';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28303';
    break;
  }
case 'compiled-branch28304':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28303':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28306':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28307';
  break;
case 'read-branch28302':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28305':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28301':
case 'after-lambda28299':
  define_variable('enclosing-environment', val, env);
  val = 'ok: enclosing-environment set';
  val = make_compiled_procedure('entry28291', env);
  branch = 'after-lambda28290';
  break;
case 'entry28291':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'env' ], argl, env);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('env', env);
  argl = [val];
case 'compile-procedure-call-start28298':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28296';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28297';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28293';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28294';
    break;
  }
case 'compiled-branch28295':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28294':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28297':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28298';
  break;
case 'read-branch28293':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28296':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28292':
case 'after-lambda28290':
  define_variable('first-frame', val, env);
  val = 'ok: first-frame set';
  val = lookup_variable_value('nil', env);
  define_variable('the-empty-environment', val, env);
  val = 'ok: the-empty-environment set';
  val = make_compiled_procedure('entry28282', env);
  branch = 'after-lambda28281';
  break;
case 'entry28282':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'variables','values' ], argl, env);
  proc = lookup_variable_value('cons', env);
  val = lookup_variable_value('values', env);
  argl = [val];
  val = lookup_variable_value('variables', env);
  argl.unshift(val);
case 'compile-procedure-call-start28289':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28287';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28288';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28284';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28285';
    break;
  }
case 'compiled-branch28286':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28285':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28288':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28289';
  break;
case 'read-branch28284':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28287':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28283':
case 'after-lambda28281':
  define_variable('make-frame', val, env);
  val = 'ok: make-frame set';
  val = make_compiled_procedure('entry28273', env);
  branch = 'after-lambda28272';
  break;
case 'entry28273':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'frame' ], argl, env);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('frame', env);
  argl = [val];
case 'compile-procedure-call-start28280':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28278';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28279';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28275';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28276';
    break;
  }
case 'compiled-branch28277':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28276':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28279':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28280';
  break;
case 'read-branch28275':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28278':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28274':
case 'after-lambda28272':
  define_variable('frame-variables', val, env);
  val = 'ok: frame-variables set';
  val = make_compiled_procedure('entry28264', env);
  branch = 'after-lambda28263';
  break;
case 'entry28264':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'frame' ], argl, env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('frame', env);
  argl = [val];
case 'compile-procedure-call-start28271':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28269';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28270';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28266';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28267';
    break;
  }
case 'compiled-branch28268':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28267':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28270':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28271';
  break;
case 'read-branch28266':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28269':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28265':
case 'after-lambda28263':
  define_variable('frame-values', val, env);
  val = 'ok: frame-values set';
  val = make_compiled_procedure('entry28220', env);
  branch = 'after-lambda28219';
  break;
case 'entry28220':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'var','val','frame' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('set-car!', env);
  save(proc);
  save(env);
  proc = lookup_variable_value('cons', env);
  save(proc);
  save(env);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('frame', env);
  argl = [val];
case 'compile-procedure-call-start28248':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28246';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28247';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28243';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28244';
    break;
  }
case 'compiled-branch28245':
  continue_to = 'after-call28242';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28244':
  continue_to = 'after-call28242';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28247':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28248';
  break;
case 'read-branch28243':
  continue_to = 'after-call28242';
  branch = 'read';
  break;
case 'primitive-branch28246':
  val = proc[1](argl);
case 'after-call28242':
  argl = [val];
  env = restore();
  val = lookup_variable_value('var', env);
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start28255':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28253';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28254';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28250';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28251';
    break;
  }
case 'compiled-branch28252':
  continue_to = 'after-call28249';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28251':
  continue_to = 'after-call28249';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28254':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28255';
  break;
case 'read-branch28250':
  continue_to = 'after-call28249';
  branch = 'read';
  break;
case 'primitive-branch28253':
  val = proc[1](argl);
case 'after-call28249':
  argl = [val];
  env = restore();
  val = lookup_variable_value('frame', env);
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start28262':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28260';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28261';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28257';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28258';
    break;
  }
case 'compiled-branch28259':
  continue_to = 'after-call28256';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28258':
  continue_to = 'after-call28256';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28261':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28262';
  break;
case 'read-branch28257':
  continue_to = 'after-call28256';
  branch = 'read';
  break;
case 'primitive-branch28260':
  val = proc[1](argl);
case 'after-call28256':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('set-cdr!', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('cons', env);
  save(proc);
  save(env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('frame', env);
  argl = [val];
case 'compile-procedure-call-start28227':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28225';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28226';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28222';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28223';
    break;
  }
case 'compiled-branch28224':
  continue_to = 'after-call28221';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28223':
  continue_to = 'after-call28221';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28226':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28227';
  break;
case 'read-branch28222':
  continue_to = 'after-call28221';
  branch = 'read';
  break;
case 'primitive-branch28225':
  val = proc[1](argl);
case 'after-call28221':
  argl = [val];
  env = restore();
  val = lookup_variable_value('val', env);
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start28234':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28232';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28233';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28229';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28230';
    break;
  }
case 'compiled-branch28231':
  continue_to = 'after-call28228';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28230':
  continue_to = 'after-call28228';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28233':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28234';
  break;
case 'read-branch28229':
  continue_to = 'after-call28228';
  branch = 'read';
  break;
case 'primitive-branch28232':
  val = proc[1](argl);
case 'after-call28228':
  argl = [val];
  env = restore();
  val = lookup_variable_value('frame', env);
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28241':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28239';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28240';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28236';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28237';
    break;
  }
case 'compiled-branch28238':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28237':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28240':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28241';
  break;
case 'read-branch28236':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28239':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28235':
case 'after-lambda28219':
  define_variable('add-binding-to-frame!', val, env);
  val = 'ok: add-binding-to-frame! set';
  val = make_compiled_procedure('entry28086', env);
  branch = 'after-lambda28085';
  break;
case 'entry28086':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'vars','vals','base-env' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('=', env);
  save(proc);
  save(env);
  proc = lookup_variable_value('length', env);
  val = lookup_variable_value('vals', env);
  argl = [val];
case 'compile-procedure-call-start28211':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28209';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28210';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28206';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28207';
    break;
  }
case 'compiled-branch28208':
  continue_to = 'after-call28205';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28207':
  continue_to = 'after-call28205';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28210':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28211';
  break;
case 'read-branch28206':
  continue_to = 'after-call28205';
  branch = 'read';
  break;
case 'primitive-branch28209':
  val = proc[1](argl);
case 'after-call28205':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('length', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start28204':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28202';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28203';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28199';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28200';
    break;
  }
case 'compiled-branch28201':
  continue_to = 'after-call28198';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28200':
  continue_to = 'after-call28198';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28203':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28204';
  break;
case 'read-branch28199':
  continue_to = 'after-call28198';
  branch = 'read';
  break;
case 'primitive-branch28202':
  val = proc[1](argl);
case 'after-call28198':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start28218':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28216';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28217';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28213';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28214';
    break;
  }
case 'compiled-branch28215':
  continue_to = 'after-call28212';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28214':
  continue_to = 'after-call28212';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28217':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28218';
  break;
case 'read-branch28213':
  continue_to = 'after-call28212';
  branch = 'read';
  break;
case 'primitive-branch28216':
  val = proc[1](argl);
case 'after-call28212':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28089' : 'false-branch28088';
  break;
case 'true-branch28089':
  proc = lookup_variable_value('cons', env);
  save(continue_to);
  save(proc);
  val = lookup_variable_value('base-env', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('make-frame', env);
  val = lookup_variable_value('vals', env);
  argl = [val];
  val = lookup_variable_value('vars', env);
  argl.unshift(val);
case 'compile-procedure-call-start28190':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28188';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28189';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28185';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28186';
    break;
  }
case 'compiled-branch28187':
  continue_to = 'after-call28184';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28186':
  continue_to = 'after-call28184';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28189':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28190';
  break;
case 'read-branch28185':
  continue_to = 'after-call28184';
  branch = 'read';
  break;
case 'primitive-branch28188':
  val = proc[1](argl);
case 'after-call28184':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28197':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28195';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28196';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28192';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28193';
    break;
  }
case 'compiled-branch28194':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28193':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28196':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28197';
  break;
case 'read-branch28192':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28195':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28191':
case 'false-branch28088':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('<', env);
  save(proc);
  save(env);
  proc = lookup_variable_value('length', env);
  val = lookup_variable_value('vals', env);
  argl = [val];
case 'compile-procedure-call-start28176':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28174';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28175';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28171';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28172';
    break;
  }
case 'compiled-branch28173':
  continue_to = 'after-call28170';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28172':
  continue_to = 'after-call28170';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28175':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28176';
  break;
case 'read-branch28171':
  continue_to = 'after-call28170';
  branch = 'read';
  break;
case 'primitive-branch28174':
  val = proc[1](argl);
case 'after-call28170':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('length', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start28169':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28167';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28168';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28164';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28165';
    break;
  }
case 'compiled-branch28166':
  continue_to = 'after-call28163';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28165':
  continue_to = 'after-call28163';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28168':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28169';
  break;
case 'read-branch28164':
  continue_to = 'after-call28163';
  branch = 'read';
  break;
case 'primitive-branch28167':
  val = proc[1](argl);
case 'after-call28163':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start28183':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28181';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28182';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28178';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28179';
    break;
  }
case 'compiled-branch28180':
  continue_to = 'after-call28177';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28179':
  continue_to = 'after-call28177';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28182':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28183';
  break;
case 'read-branch28178':
  continue_to = 'after-call28177';
  branch = 'read';
  break;
case 'primitive-branch28181':
  val = proc[1](argl);
case 'after-call28177':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28092' : 'false-branch28091';
  break;
case 'true-branch28092':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "ERROR: ";
  argl = [val];
case 'compile-procedure-call-start28162':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28160';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28161';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28157';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28158';
    break;
  }
case 'compiled-branch28159':
  continue_to = 'after-call28156';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28158':
  continue_to = 'after-call28156';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28161':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28162';
  break;
case 'read-branch28157':
  continue_to = 'after-call28156';
  branch = 'read';
  break;
case 'primitive-branch28160':
  val = proc[1](argl);
case 'after-call28156':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "Too many arguments supplied";
  argl = [val];
case 'compile-procedure-call-start28155':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28153';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28154';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28150';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28151';
    break;
  }
case 'compiled-branch28152':
  continue_to = 'after-call28149';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28151':
  continue_to = 'after-call28149';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28154':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28155';
  break;
case 'read-branch28150':
  continue_to = 'after-call28149';
  branch = 'read';
  break;
case 'primitive-branch28153':
  val = proc[1](argl);
case 'after-call28149':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start28148':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28146';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28147';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28143';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28144';
    break;
  }
case 'compiled-branch28145':
  continue_to = 'after-call28142';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28144':
  continue_to = 'after-call28142';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28147':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28148';
  break;
case 'read-branch28143':
  continue_to = 'after-call28142';
  branch = 'read';
  break;
case 'primitive-branch28146':
  val = proc[1](argl);
case 'after-call28142':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = lookup_variable_value('vals', env);
  argl = [val];
case 'compile-procedure-call-start28141':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28139';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28140';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28136';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28137';
    break;
  }
case 'compiled-branch28138':
  continue_to = 'after-call28135';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28137':
  continue_to = 'after-call28135';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28140':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28141';
  break;
case 'read-branch28136':
  continue_to = 'after-call28135';
  branch = 'read';
  break;
case 'primitive-branch28139':
  val = proc[1](argl);
case 'after-call28135':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('user-print', env);
  val = "\n";
  argl = [val];
case 'compile-procedure-call-start28134':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28132';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28133';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28129';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28130';
    break;
  }
case 'compiled-branch28131':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28130':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28133':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28134';
  break;
case 'read-branch28129':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28132':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28128':
case 'false-branch28091':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "ERROR: ";
  argl = [val];
case 'compile-procedure-call-start28127':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28125';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28126';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28122';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28123';
    break;
  }
case 'compiled-branch28124':
  continue_to = 'after-call28121';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28123':
  continue_to = 'after-call28121';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28126':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28127';
  break;
case 'read-branch28122':
  continue_to = 'after-call28121';
  branch = 'read';
  break;
case 'primitive-branch28125':
  val = proc[1](argl);
case 'after-call28121':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "Too few arguments supplied";
  argl = [val];
case 'compile-procedure-call-start28120':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28118';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28119';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28115';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28116';
    break;
  }
case 'compiled-branch28117':
  continue_to = 'after-call28114';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28116':
  continue_to = 'after-call28114';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28119':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28120';
  break;
case 'read-branch28115':
  continue_to = 'after-call28114';
  branch = 'read';
  break;
case 'primitive-branch28118':
  val = proc[1](argl);
case 'after-call28114':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start28113':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28111';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28112';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28108';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28109';
    break;
  }
case 'compiled-branch28110':
  continue_to = 'after-call28107';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28109':
  continue_to = 'after-call28107';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28112':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28113';
  break;
case 'read-branch28108':
  continue_to = 'after-call28107';
  branch = 'read';
  break;
case 'primitive-branch28111':
  val = proc[1](argl);
case 'after-call28107':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = lookup_variable_value('vals', env);
  argl = [val];
case 'compile-procedure-call-start28106':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28104';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28105';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28101';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28102';
    break;
  }
case 'compiled-branch28103':
  continue_to = 'after-call28100';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28102':
  continue_to = 'after-call28100';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28105':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28106';
  break;
case 'read-branch28101':
  continue_to = 'after-call28100';
  branch = 'read';
  break;
case 'primitive-branch28104':
  val = proc[1](argl);
case 'after-call28100':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('user-print', env);
  val = "\n";
  argl = [val];
case 'compile-procedure-call-start28099':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28097';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28098';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28094';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28095';
    break;
  }
case 'compiled-branch28096':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28095':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28098':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28099';
  break;
case 'read-branch28094':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28097':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28093':
case 'after-if28090':
case 'after-if28087':
case 'after-lambda28085':
  define_variable('extend-environment', val, env);
  val = 'ok: extend-environment set';
  val = make_compiled_procedure('entry27929', env);
  branch = 'after-lambda27928';
  break;
case 'entry27929':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'var','env' ], argl, env);
  val = make_compiled_procedure('entry27938', env);
  branch = 'after-lambda27937';
  break;
case 'entry27938':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'env' ], argl, env);
  val = make_compiled_procedure('entry28015', env);
  branch = 'after-lambda28014';
  break;
case 'entry28015':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'vars','vals' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('null?', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start28084':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28082';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28083';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28079';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28080';
    break;
  }
case 'compiled-branch28081':
  continue_to = 'after-call28078';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28080':
  continue_to = 'after-call28078';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28083':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28084';
  break;
case 'read-branch28079':
  continue_to = 'after-call28078';
  branch = 'read';
  break;
case 'primitive-branch28082':
  val = proc[1](argl);
case 'after-call28078':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28018' : 'false-branch28017';
  break;
case 'true-branch28018':
  proc = lookup_variable_value('env-loop', env);
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('enclosing-environment', env);
  val = lookup_variable_value('env', env);
  argl = [val];
case 'compile-procedure-call-start28070':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28068';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28069';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28065';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28066';
    break;
  }
case 'compiled-branch28067':
  continue_to = 'after-call28064';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28066':
  continue_to = 'after-call28064';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28069':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28070';
  break;
case 'read-branch28065':
  continue_to = 'after-call28064';
  branch = 'read';
  break;
case 'primitive-branch28068':
  val = proc[1](argl);
case 'after-call28064':
  argl = [val];
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28077':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28075';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28076';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28072';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28073';
    break;
  }
case 'compiled-branch28074':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28073':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28076':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28077';
  break;
case 'read-branch28072':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28075':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28071':
case 'false-branch28017':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('eq?', env);
  save(proc);
  save(env);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start28056':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28054';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28055';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28051';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28052';
    break;
  }
case 'compiled-branch28053':
  continue_to = 'after-call28050';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28052':
  continue_to = 'after-call28050';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28055':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28056';
  break;
case 'read-branch28051':
  continue_to = 'after-call28050';
  branch = 'read';
  break;
case 'primitive-branch28054':
  val = proc[1](argl);
case 'after-call28050':
  argl = [val];
  env = restore();
  val = lookup_variable_value('var', env);
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start28063':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28061';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28062';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28058';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28059';
    break;
  }
case 'compiled-branch28060':
  continue_to = 'after-call28057';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28059':
  continue_to = 'after-call28057';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28062':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28063';
  break;
case 'read-branch28058':
  continue_to = 'after-call28057';
  branch = 'read';
  break;
case 'primitive-branch28061':
  val = proc[1](argl);
case 'after-call28057':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch28021' : 'false-branch28020';
  break;
case 'true-branch28021':
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('vals', env);
  argl = [val];
case 'compile-procedure-call-start28049':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28047';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28048';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28044';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28045';
    break;
  }
case 'compiled-branch28046':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28045':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28048':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28049';
  break;
case 'read-branch28044':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28047':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28043':
case 'false-branch28020':
  proc = lookup_variable_value('scan', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('vals', env);
  argl = [val];
case 'compile-procedure-call-start28035':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28033';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28034';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28030';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28031';
    break;
  }
case 'compiled-branch28032':
  continue_to = 'after-call28029';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28031':
  continue_to = 'after-call28029';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28034':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28035';
  break;
case 'read-branch28030':
  continue_to = 'after-call28029';
  branch = 'read';
  break;
case 'primitive-branch28033':
  val = proc[1](argl);
case 'after-call28029':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start28028':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28026';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28027';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28023';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28024';
    break;
  }
case 'compiled-branch28025':
  continue_to = 'after-call28022';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28024':
  continue_to = 'after-call28022';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28027':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28028';
  break;
case 'read-branch28023':
  continue_to = 'after-call28022';
  branch = 'read';
  break;
case 'primitive-branch28026':
  val = proc[1](argl);
case 'after-call28022':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start28042':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28040';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28041';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28037';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28038';
    break;
  }
case 'compiled-branch28039':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28038':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28041':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28042';
  break;
case 'read-branch28037':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch28040':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call28036':
case 'after-if28019':
case 'after-if28016':
case 'after-lambda28014':
  define_variable('scan', val, env);
  val = 'ok: scan set';
  save(continue_to);
  save(env);
  proc = lookup_variable_value('eq?', env);
  val = lookup_variable_value('the-empty-environment', env);
  argl = [val];
  val = lookup_variable_value('env', env);
  argl.unshift(val);
case 'compile-procedure-call-start28013':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28011';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28012';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28008';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28009';
    break;
  }
case 'compiled-branch28010':
  continue_to = 'after-call28007';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28009':
  continue_to = 'after-call28007';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28012':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28013';
  break;
case 'read-branch28008':
  continue_to = 'after-call28007';
  branch = 'read';
  break;
case 'primitive-branch28011':
  val = proc[1](argl);
case 'after-call28007':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch27941' : 'false-branch27940';
  break;
case 'true-branch27941':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "ERROR: ";
  argl = [val];
case 'compile-procedure-call-start28006':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch28004';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch28005';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch28001';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch28002';
    break;
  }
case 'compiled-branch28003':
  continue_to = 'after-call28000';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch28002':
  continue_to = 'after-call28000';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch28005':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start28006';
  break;
case 'read-branch28001':
  continue_to = 'after-call28000';
  branch = 'read';
  break;
case 'primitive-branch28004':
  val = proc[1](argl);
case 'after-call28000':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "Unbound variable";
  argl = [val];
case 'compile-procedure-call-start27999':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27997';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27998';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27994';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27995';
    break;
  }
case 'compiled-branch27996':
  continue_to = 'after-call27993';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27995':
  continue_to = 'after-call27993';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27998':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27999';
  break;
case 'read-branch27994':
  continue_to = 'after-call27993';
  branch = 'read';
  break;
case 'primitive-branch27997':
  val = proc[1](argl);
case 'after-call27993':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = lookup_variable_value('var', env);
  argl = [val];
case 'compile-procedure-call-start27992':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27990';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27991';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27987';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27988';
    break;
  }
case 'compiled-branch27989':
  continue_to = 'after-call27986';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27988':
  continue_to = 'after-call27986';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27991':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27992';
  break;
case 'read-branch27987':
  continue_to = 'after-call27986';
  branch = 'read';
  break;
case 'primitive-branch27990':
  val = proc[1](argl);
case 'after-call27986':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('user-print', env);
  val = "\n";
  argl = [val];
case 'compile-procedure-call-start27985':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27983';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27984';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27980';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27981';
    break;
  }
case 'compiled-branch27982':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27981':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27984':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27985';
  break;
case 'read-branch27980':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27983':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27979':
case 'false-branch27940':
  proc = make_compiled_procedure('entry27950', env);
  branch = 'after-lambda27949';
  break;
case 'entry27950':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'frame' ], argl, env);
  proc = lookup_variable_value('scan', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('frame-values', env);
  val = lookup_variable_value('frame', env);
  argl = [val];
case 'compile-procedure-call-start27964':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27962';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27963';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27959';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27960';
    break;
  }
case 'compiled-branch27961':
  continue_to = 'after-call27958';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27960':
  continue_to = 'after-call27958';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27963':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27964';
  break;
case 'read-branch27959':
  continue_to = 'after-call27958';
  branch = 'read';
  break;
case 'primitive-branch27962':
  val = proc[1](argl);
case 'after-call27958':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('frame-variables', env);
  val = lookup_variable_value('frame', env);
  argl = [val];
case 'compile-procedure-call-start27957':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27955';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27956';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27952';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27953';
    break;
  }
case 'compiled-branch27954':
  continue_to = 'after-call27951';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27953':
  continue_to = 'after-call27951';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27956':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27957';
  break;
case 'read-branch27952':
  continue_to = 'after-call27951';
  branch = 'read';
  break;
case 'primitive-branch27955':
  val = proc[1](argl);
case 'after-call27951':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27971':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27969';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27970';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27966';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27967';
    break;
  }
case 'compiled-branch27968':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27967':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27970':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27971';
  break;
case 'read-branch27966':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27969':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27965':
case 'after-lambda27949':
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('first-frame', env);
  val = lookup_variable_value('env', env);
  argl = [val];
case 'compile-procedure-call-start27948':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27946';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27947';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27943';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27944';
    break;
  }
case 'compiled-branch27945':
  continue_to = 'after-call27942';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27944':
  continue_to = 'after-call27942';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27947':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27948';
  break;
case 'read-branch27943':
  continue_to = 'after-call27942';
  branch = 'read';
  break;
case 'primitive-branch27946':
  val = proc[1](argl);
case 'after-call27942':
  argl = [val];
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27978':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27976';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27977';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27973';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27974';
    break;
  }
case 'compiled-branch27975':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27974':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27977':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27978';
  break;
case 'read-branch27973':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27976':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27972':
case 'after-if27939':
case 'after-lambda27937':
  define_variable('env-loop', val, env);
  val = 'ok: env-loop set';
  proc = lookup_variable_value('env-loop', env);
  val = lookup_variable_value('env', env);
  argl = [val];
case 'compile-procedure-call-start27936':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27934';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27935';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27931';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27932';
    break;
  }
case 'compiled-branch27933':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27932':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27935':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27936';
  break;
case 'read-branch27931':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27934':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27930':
case 'after-lambda27928':
  define_variable('lookup-variable-value', val, env);
  val = 'ok: lookup-variable-value set';
  val = make_compiled_procedure('entry27772', env);
  branch = 'after-lambda27771';
  break;
case 'entry27772':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'var','val','env' ], argl, env);
  val = make_compiled_procedure('entry27781', env);
  branch = 'after-lambda27780';
  break;
case 'entry27781':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'env' ], argl, env);
  val = make_compiled_procedure('entry27858', env);
  branch = 'after-lambda27857';
  break;
case 'entry27858':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'vars','vals' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('null?', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start27927':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27925';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27926';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27922';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27923';
    break;
  }
case 'compiled-branch27924':
  continue_to = 'after-call27921';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27923':
  continue_to = 'after-call27921';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27926':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27927';
  break;
case 'read-branch27922':
  continue_to = 'after-call27921';
  branch = 'read';
  break;
case 'primitive-branch27925':
  val = proc[1](argl);
case 'after-call27921':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch27861' : 'false-branch27860';
  break;
case 'true-branch27861':
  proc = lookup_variable_value('env-loop', env);
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('enclosing-environment', env);
  val = lookup_variable_value('env', env);
  argl = [val];
case 'compile-procedure-call-start27913':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27911';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27912';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27908';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27909';
    break;
  }
case 'compiled-branch27910':
  continue_to = 'after-call27907';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27909':
  continue_to = 'after-call27907';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27912':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27913';
  break;
case 'read-branch27908':
  continue_to = 'after-call27907';
  branch = 'read';
  break;
case 'primitive-branch27911':
  val = proc[1](argl);
case 'after-call27907':
  argl = [val];
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27920':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27918';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27919';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27915';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27916';
    break;
  }
case 'compiled-branch27917':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27916':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27919':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27920';
  break;
case 'read-branch27915':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27918':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27914':
case 'false-branch27860':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('eq?', env);
  save(proc);
  save(env);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start27899':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27897';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27898';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27894';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27895';
    break;
  }
case 'compiled-branch27896':
  continue_to = 'after-call27893';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27895':
  continue_to = 'after-call27893';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27898':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27899';
  break;
case 'read-branch27894':
  continue_to = 'after-call27893';
  branch = 'read';
  break;
case 'primitive-branch27897':
  val = proc[1](argl);
case 'after-call27893':
  argl = [val];
  env = restore();
  val = lookup_variable_value('var', env);
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start27906':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27904';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27905';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27901';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27902';
    break;
  }
case 'compiled-branch27903':
  continue_to = 'after-call27900';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27902':
  continue_to = 'after-call27900';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27905':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27906';
  break;
case 'read-branch27901':
  continue_to = 'after-call27900';
  branch = 'read';
  break;
case 'primitive-branch27904':
  val = proc[1](argl);
case 'after-call27900':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch27864' : 'false-branch27863';
  break;
case 'true-branch27864':
  proc = lookup_variable_value('set-car!', env);
  val = lookup_variable_value('val', env);
  argl = [val];
  val = lookup_variable_value('vals', env);
  argl.unshift(val);
case 'compile-procedure-call-start27892':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27890';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27891';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27887';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27888';
    break;
  }
case 'compiled-branch27889':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27888':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27891':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27892';
  break;
case 'read-branch27887':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27890':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27886':
case 'false-branch27863':
  proc = lookup_variable_value('scan', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('vals', env);
  argl = [val];
case 'compile-procedure-call-start27878':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27876';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27877';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27873';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27874';
    break;
  }
case 'compiled-branch27875':
  continue_to = 'after-call27872';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27874':
  continue_to = 'after-call27872';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27877':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27878';
  break;
case 'read-branch27873':
  continue_to = 'after-call27872';
  branch = 'read';
  break;
case 'primitive-branch27876':
  val = proc[1](argl);
case 'after-call27872':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start27871':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27869';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27870';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27866';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27867';
    break;
  }
case 'compiled-branch27868':
  continue_to = 'after-call27865';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27867':
  continue_to = 'after-call27865';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27870':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27871';
  break;
case 'read-branch27866':
  continue_to = 'after-call27865';
  branch = 'read';
  break;
case 'primitive-branch27869':
  val = proc[1](argl);
case 'after-call27865':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27885':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27883';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27884';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27880';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27881';
    break;
  }
case 'compiled-branch27882':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27881':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27884':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27885';
  break;
case 'read-branch27880':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27883':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27879':
case 'after-if27862':
case 'after-if27859':
case 'after-lambda27857':
  define_variable('scan', val, env);
  val = 'ok: scan set';
  save(continue_to);
  save(env);
  proc = lookup_variable_value('eq?', env);
  val = lookup_variable_value('the-empty-environment', env);
  argl = [val];
  val = lookup_variable_value('env', env);
  argl.unshift(val);
case 'compile-procedure-call-start27856':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27854';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27855';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27851';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27852';
    break;
  }
case 'compiled-branch27853':
  continue_to = 'after-call27850';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27852':
  continue_to = 'after-call27850';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27855':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27856';
  break;
case 'read-branch27851':
  continue_to = 'after-call27850';
  branch = 'read';
  break;
case 'primitive-branch27854':
  val = proc[1](argl);
case 'after-call27850':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch27784' : 'false-branch27783';
  break;
case 'true-branch27784':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "ERROR: ";
  argl = [val];
case 'compile-procedure-call-start27849':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27847';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27848';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27844';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27845';
    break;
  }
case 'compiled-branch27846':
  continue_to = 'after-call27843';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27845':
  continue_to = 'after-call27843';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27848':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27849';
  break;
case 'read-branch27844':
  continue_to = 'after-call27843';
  branch = 'read';
  break;
case 'primitive-branch27847':
  val = proc[1](argl);
case 'after-call27843':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = "Unbound variable -- SET!";
  argl = [val];
case 'compile-procedure-call-start27842':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27840';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27841';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27837';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27838';
    break;
  }
case 'compiled-branch27839':
  continue_to = 'after-call27836';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27838':
  continue_to = 'after-call27836';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27841':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27842';
  break;
case 'read-branch27837':
  continue_to = 'after-call27836';
  branch = 'read';
  break;
case 'primitive-branch27840':
  val = proc[1](argl);
case 'after-call27836':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('user-print', env);
  val = lookup_variable_value('var', env);
  argl = [val];
case 'compile-procedure-call-start27835':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27833';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27834';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27830';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27831';
    break;
  }
case 'compiled-branch27832':
  continue_to = 'after-call27829';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27831':
  continue_to = 'after-call27829';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27834':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27835';
  break;
case 'read-branch27830':
  continue_to = 'after-call27829';
  branch = 'read';
  break;
case 'primitive-branch27833':
  val = proc[1](argl);
case 'after-call27829':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('user-print', env);
  val = "\n";
  argl = [val];
case 'compile-procedure-call-start27828':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27826';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27827';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27823';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27824';
    break;
  }
case 'compiled-branch27825':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27824':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27827':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27828';
  break;
case 'read-branch27823':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27826':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27822':
case 'false-branch27783':
  proc = make_compiled_procedure('entry27793', env);
  branch = 'after-lambda27792';
  break;
case 'entry27793':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'frame' ], argl, env);
  proc = lookup_variable_value('scan', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('frame-values', env);
  val = lookup_variable_value('frame', env);
  argl = [val];
case 'compile-procedure-call-start27807':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27805';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27806';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27802';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27803';
    break;
  }
case 'compiled-branch27804':
  continue_to = 'after-call27801';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27803':
  continue_to = 'after-call27801';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27806':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27807';
  break;
case 'read-branch27802':
  continue_to = 'after-call27801';
  branch = 'read';
  break;
case 'primitive-branch27805':
  val = proc[1](argl);
case 'after-call27801':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('frame-variables', env);
  val = lookup_variable_value('frame', env);
  argl = [val];
case 'compile-procedure-call-start27800':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27798';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27799';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27795';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27796';
    break;
  }
case 'compiled-branch27797':
  continue_to = 'after-call27794';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27796':
  continue_to = 'after-call27794';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27799':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27800';
  break;
case 'read-branch27795':
  continue_to = 'after-call27794';
  branch = 'read';
  break;
case 'primitive-branch27798':
  val = proc[1](argl);
case 'after-call27794':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27814':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27812';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27813';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27809';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27810';
    break;
  }
case 'compiled-branch27811':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27810':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27813':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27814';
  break;
case 'read-branch27809':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27812':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27808':
case 'after-lambda27792':
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('first-frame', env);
  val = lookup_variable_value('env', env);
  argl = [val];
case 'compile-procedure-call-start27791':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27789';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27790';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27786';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27787';
    break;
  }
case 'compiled-branch27788':
  continue_to = 'after-call27785';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27787':
  continue_to = 'after-call27785';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27790':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27791';
  break;
case 'read-branch27786':
  continue_to = 'after-call27785';
  branch = 'read';
  break;
case 'primitive-branch27789':
  val = proc[1](argl);
case 'after-call27785':
  argl = [val];
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27821':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27819';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27820';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27816';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27817';
    break;
  }
case 'compiled-branch27818':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27817':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27820':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27821';
  break;
case 'read-branch27816':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27819':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27815':
case 'after-if27782':
case 'after-lambda27780':
  define_variable('env-loop', val, env);
  val = 'ok: env-loop set';
  proc = lookup_variable_value('env-loop', env);
  val = lookup_variable_value('env', env);
  argl = [val];
case 'compile-procedure-call-start27779':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27777';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27778';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27774';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27775';
    break;
  }
case 'compiled-branch27776':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27775':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27778':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27779';
  break;
case 'read-branch27774':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27777':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27773':
case 'after-lambda27771':
  define_variable('set-variable-value!', val, env);
  val = 'ok: set-variable-value! set';
  val = make_compiled_procedure('entry27669', env);
  branch = 'after-lambda27668';
  break;
case 'entry27669':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'var','val','env' ], argl, env);
  proc = make_compiled_procedure('entry27678', env);
  branch = 'after-lambda27677';
  break;
case 'entry27678':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'frame' ], argl, env);
  val = make_compiled_procedure('entry27701', env);
  branch = 'after-lambda27700';
  break;
case 'entry27701':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'vars','vals' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('null?', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start27763':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27761';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27762';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27758';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27759';
    break;
  }
case 'compiled-branch27760':
  continue_to = 'after-call27757';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27759':
  continue_to = 'after-call27757';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27762':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27763';
  break;
case 'read-branch27758':
  continue_to = 'after-call27757';
  branch = 'read';
  break;
case 'primitive-branch27761':
  val = proc[1](argl);
case 'after-call27757':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch27704' : 'false-branch27703';
  break;
case 'true-branch27704':
  proc = lookup_variable_value('add-binding-to-frame!', env);
  val = lookup_variable_value('frame', env);
  argl = [val];
  val = lookup_variable_value('val', env);
  argl.unshift(val);
  val = lookup_variable_value('var', env);
  argl.unshift(val);
case 'compile-procedure-call-start27756':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27754';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27755';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27751';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27752';
    break;
  }
case 'compiled-branch27753':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27752':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27755':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27756';
  break;
case 'read-branch27751':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27754':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27750':
case 'false-branch27703':
  save(continue_to);
  save(env);
  proc = lookup_variable_value('eq?', env);
  save(proc);
  save(env);
  proc = lookup_variable_value('car', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start27742':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27740';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27741';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27737';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27738';
    break;
  }
case 'compiled-branch27739':
  continue_to = 'after-call27736';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27738':
  continue_to = 'after-call27736';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27741':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27742';
  break;
case 'read-branch27737':
  continue_to = 'after-call27736';
  branch = 'read';
  break;
case 'primitive-branch27740':
  val = proc[1](argl);
case 'after-call27736':
  argl = [val];
  env = restore();
  val = lookup_variable_value('var', env);
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start27749':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27747';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27748';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27744';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27745';
    break;
  }
case 'compiled-branch27746':
  continue_to = 'after-call27743';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27745':
  continue_to = 'after-call27743';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27748':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27749';
  break;
case 'read-branch27744':
  continue_to = 'after-call27743';
  branch = 'read';
  break;
case 'primitive-branch27747':
  val = proc[1](argl);
case 'after-call27743':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch27707' : 'false-branch27706';
  break;
case 'true-branch27707':
  proc = lookup_variable_value('set-car!', env);
  val = lookup_variable_value('val', env);
  argl = [val];
  val = lookup_variable_value('vals', env);
  argl.unshift(val);
case 'compile-procedure-call-start27735':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27733';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27734';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27730';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27731';
    break;
  }
case 'compiled-branch27732':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27731':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27734':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27735';
  break;
case 'read-branch27730':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27733':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27729':
case 'false-branch27706':
  proc = lookup_variable_value('scan', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('vals', env);
  argl = [val];
case 'compile-procedure-call-start27721':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27719';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27720';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27716';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27717';
    break;
  }
case 'compiled-branch27718':
  continue_to = 'after-call27715';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27717':
  continue_to = 'after-call27715';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27720':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27721';
  break;
case 'read-branch27716':
  continue_to = 'after-call27715';
  branch = 'read';
  break;
case 'primitive-branch27719':
  val = proc[1](argl);
case 'after-call27715':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('cdr', env);
  val = lookup_variable_value('vars', env);
  argl = [val];
case 'compile-procedure-call-start27714':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27712';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27713';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27709';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27710';
    break;
  }
case 'compiled-branch27711':
  continue_to = 'after-call27708';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27710':
  continue_to = 'after-call27708';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27713':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27714';
  break;
case 'read-branch27709':
  continue_to = 'after-call27708';
  branch = 'read';
  break;
case 'primitive-branch27712':
  val = proc[1](argl);
case 'after-call27708':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27728':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27726';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27727';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27723';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27724';
    break;
  }
case 'compiled-branch27725':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27724':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27727':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27728';
  break;
case 'read-branch27723':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27726':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27722':
case 'after-if27705':
case 'after-if27702':
case 'after-lambda27700':
  define_variable('scan', val, env);
  val = 'ok: scan set';
  proc = lookup_variable_value('scan', env);
  save(continue_to);
  save(proc);
  save(env);
  proc = lookup_variable_value('frame-values', env);
  val = lookup_variable_value('frame', env);
  argl = [val];
case 'compile-procedure-call-start27692':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27690';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27691';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27687';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27688';
    break;
  }
case 'compiled-branch27689':
  continue_to = 'after-call27686';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27688':
  continue_to = 'after-call27686';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27691':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27692';
  break;
case 'read-branch27687':
  continue_to = 'after-call27686';
  branch = 'read';
  break;
case 'primitive-branch27690':
  val = proc[1](argl);
case 'after-call27686':
  argl = [val];
  env = restore();
  save(argl);
  proc = lookup_variable_value('frame-variables', env);
  val = lookup_variable_value('frame', env);
  argl = [val];
case 'compile-procedure-call-start27685':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27683';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27684';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27680';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27681';
    break;
  }
case 'compiled-branch27682':
  continue_to = 'after-call27679';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27681':
  continue_to = 'after-call27679';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27684':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27685';
  break;
case 'read-branch27680':
  continue_to = 'after-call27679';
  branch = 'read';
  break;
case 'primitive-branch27683':
  val = proc[1](argl);
case 'after-call27679':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27699':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27697';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27698';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27694';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27695';
    break;
  }
case 'compiled-branch27696':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27695':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27698':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27699';
  break;
case 'read-branch27694':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27697':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27693':
case 'after-lambda27677':
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('first-frame', env);
  val = lookup_variable_value('env', env);
  argl = [val];
case 'compile-procedure-call-start27676':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27674';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27675';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27671';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27672';
    break;
  }
case 'compiled-branch27673':
  continue_to = 'after-call27670';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27672':
  continue_to = 'after-call27670';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27675':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27676';
  break;
case 'read-branch27671':
  continue_to = 'after-call27670';
  branch = 'read';
  break;
case 'primitive-branch27674':
  val = proc[1](argl);
case 'after-call27670':
  argl = [val];
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27770':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27768';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27769';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27765';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27766';
    break;
  }
case 'compiled-branch27767':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27766':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27769':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27770';
  break;
case 'read-branch27765':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27768':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27764':
case 'after-lambda27668':
  define_variable('define-variable!', val, env);
  val = 'ok: define-variable! set';
  val = make_compiled_procedure('entry27623', env);
  branch = 'after-lambda27622';
  break;
case 'entry27623':
  env = compiled_procedure_env(proc);
  env = extend_environment([  ], argl, env);
  proc = make_compiled_procedure('entry27646', env);
  branch = 'after-lambda27645';
  break;
case 'entry27646':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'initial-env' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('define-variable!', env);
  val = lookup_variable_value('initial-env', env);
  argl = [val];
  val = lookup_variable_value('true', env);
  argl.unshift(val);
  val = "true";
  argl.unshift(val);
case 'compile-procedure-call-start27660':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27658';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27659';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27655';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27656';
    break;
  }
case 'compiled-branch27657':
  continue_to = 'after-call27654';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27656':
  continue_to = 'after-call27654';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27659':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27660';
  break;
case 'read-branch27655':
  continue_to = 'after-call27654';
  branch = 'read';
  break;
case 'primitive-branch27658':
  val = proc[1](argl);
case 'after-call27654':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('define-variable!', env);
  val = lookup_variable_value('initial-env', env);
  argl = [val];
  val = lookup_variable_value('false', env);
  argl.unshift(val);
  val = "false";
  argl.unshift(val);
case 'compile-procedure-call-start27653':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27651';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27652';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27648';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27649';
    break;
  }
case 'compiled-branch27650':
  continue_to = 'after-call27647';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27649':
  continue_to = 'after-call27647';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27652':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27653';
  break;
case 'read-branch27648':
  continue_to = 'after-call27647';
  branch = 'read';
  break;
case 'primitive-branch27651':
  val = proc[1](argl);
case 'after-call27647':
  env = restore();
  continue_to = restore();
  val = lookup_variable_value('initial-env', env);
  branch = continue_to;
break;
case 'after-lambda27645':
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('extend-environment', env);
  save(proc);
  val = lookup_variable_value('the-empty-environment', env);
  argl = [val];
  save(env);
  save(argl);
  proc = lookup_variable_value('primitive-procedure-objects', env);
  argl = [];
case 'compile-procedure-call-start27637':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27635';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27636';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27632';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27633';
    break;
  }
case 'compiled-branch27634':
  continue_to = 'after-call27631';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27633':
  continue_to = 'after-call27631';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27636':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27637';
  break;
case 'read-branch27632':
  continue_to = 'after-call27631';
  branch = 'read';
  break;
case 'primitive-branch27635':
  val = proc[1](argl);
case 'after-call27631':
  argl = restore();
  argl.unshift(val);
  env = restore();
  save(argl);
  proc = lookup_variable_value('primitive-procedure-names', env);
  argl = [];
case 'compile-procedure-call-start27630':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27628';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27629';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27625';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27626';
    break;
  }
case 'compiled-branch27627':
  continue_to = 'after-call27624';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27626':
  continue_to = 'after-call27624';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27629':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27630';
  break;
case 'read-branch27625':
  continue_to = 'after-call27624';
  branch = 'read';
  break;
case 'primitive-branch27628':
  val = proc[1](argl);
case 'after-call27624':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start27644':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27642';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27643';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27639';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27640';
    break;
  }
case 'compiled-branch27641':
  continue_to = 'after-call27638';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27640':
  continue_to = 'after-call27638';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27643':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27644';
  break;
case 'read-branch27639':
  continue_to = 'after-call27638';
  branch = 'read';
  break;
case 'primitive-branch27642':
  val = proc[1](argl);
case 'after-call27638':
  argl = [val];
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27667':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27665';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27666';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27662';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27663';
    break;
  }
case 'compiled-branch27664':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27663':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27666':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27667';
  break;
case 'read-branch27662':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27665':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27661':
case 'after-lambda27622':
  define_variable('setup-environment', val, env);
  val = 'ok: setup-environment set';
  val = make_compiled_procedure('entry27614', env);
  branch = 'after-lambda27613';
  break;
case 'entry27614':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'proc' ], argl, env);
  proc = lookup_variable_value('tagged-list?', env);
  val = "primitive";
  argl = [val];
  val = lookup_variable_value('proc', env);
    console.log("---------------" + val + "-----------");
  argl.unshift(val);
case 'compile-procedure-call-start27621':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27619';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27620';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27616';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27617';
    break;
  }
case 'compiled-branch27618':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27617':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27620':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27621';
  break;
case 'read-branch27616':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27619':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27615':
case 'after-lambda27613':
  define_variable('primitive-procedure?', val, env);
  val = 'ok: primitive-procedure? set';
  val = make_compiled_procedure('entry27605', env);
  branch = 'after-lambda27604';
  break;
case 'entry27605':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'proc' ], argl, env);
  proc = lookup_variable_value('cadr', env);
  val = lookup_variable_value('proc', env);
  argl = [val];
case 'compile-procedure-call-start27612':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27610';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27611';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27607';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27608';
    break;
  }
case 'compiled-branch27609':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27608':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27611':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27612';
  break;
case 'read-branch27607':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27610':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27606':
case 'after-lambda27604':
  define_variable('primitive-implementation', val, env);
  val = 'ok: primitive-implementation set';
  save(env);
  proc = lookup_variable_value('list', env);
  save(proc);
  save(env);
  proc = lookup_variable_value('list', env);
  val = lookup_variable_value('/', env);
  argl = [val];
  val = "/";
  argl.unshift(val);
case 'compile-procedure-call-start27596':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27594';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27595';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27591';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27592';
    break;
  }
case 'compiled-branch27593':
  continue_to = 'after-call27590';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27592':
  continue_to = 'after-call27590';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27595':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27596';
  break;
case 'read-branch27591':
  continue_to = 'after-call27590';
  branch = 'read';
  break;
case 'primitive-branch27594':
  val = proc[1](argl);
case 'after-call27590':
  argl = [val];
  env = restore();
  save(env);
  save(argl);
  proc = lookup_variable_value('list', env);
  val = lookup_variable_value('-', env);
  argl = [val];
  val = "-";
  argl.unshift(val);
case 'compile-procedure-call-start27589':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27587';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27588';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27584';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27585';
    break;
  }
case 'compiled-branch27586':
  continue_to = 'after-call27583';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27585':
  continue_to = 'after-call27583';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27588':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27589';
  break;
case 'read-branch27584':
  continue_to = 'after-call27583';
  branch = 'read';
  break;
case 'primitive-branch27587':
  val = proc[1](argl);
case 'after-call27583':
  argl = restore();
  argl.unshift(val);
  env = restore();
  save(env);
  save(argl);
  proc = lookup_variable_value('list', env);
  val = lookup_variable_value('*', env);
  argl = [val];
  val = "*";
  argl.unshift(val);
case 'compile-procedure-call-start27582':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27580';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27581';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27577';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27578';
    break;
  }
case 'compiled-branch27579':
  continue_to = 'after-call27576';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27578':
  continue_to = 'after-call27576';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27581':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27582';
  break;
case 'read-branch27577':
  continue_to = 'after-call27576';
  branch = 'read';
  break;
case 'primitive-branch27580':
  val = proc[1](argl);
case 'after-call27576':
  argl = restore();
  argl.unshift(val);
  env = restore();
  save(env);
  save(argl);
  proc = lookup_variable_value('list', env);
  val = lookup_variable_value('+', env);
  argl = [val];
  val = "+";
  argl.unshift(val);
case 'compile-procedure-call-start27575':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27573';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27574';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27570';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27571';
    break;
  }
case 'compiled-branch27572':
  continue_to = 'after-call27569';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27571':
  continue_to = 'after-call27569';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27574':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27575';
  break;
case 'read-branch27570':
  continue_to = 'after-call27569';
  branch = 'read';
  break;
case 'primitive-branch27573':
  val = proc[1](argl);
case 'after-call27569':
  argl = restore();
  argl.unshift(val);
  env = restore();
  save(env);
  save(argl);
  proc = lookup_variable_value('list', env);
  val = lookup_variable_value('null?', env);
  argl = [val];
  val = "null?";
  argl.unshift(val);
case 'compile-procedure-call-start27568':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27566';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27567';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27563';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27564';
    break;
  }
case 'compiled-branch27565':
  continue_to = 'after-call27562';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27564':
  continue_to = 'after-call27562';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27567':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27568';
  break;
case 'read-branch27563':
  continue_to = 'after-call27562';
  branch = 'read';
  break;
case 'primitive-branch27566':
  val = proc[1](argl);
case 'after-call27562':
  argl = restore();
  argl.unshift(val);
  env = restore();
  save(env);
  save(argl);
  proc = lookup_variable_value('list', env);
  val = lookup_variable_value('cons', env);
  argl = [val];
  val = "cons";
  argl.unshift(val);
case 'compile-procedure-call-start27561':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27559';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27560';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27556';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27557';
    break;
  }
case 'compiled-branch27558':
  continue_to = 'after-call27555';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27557':
  continue_to = 'after-call27555';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27560':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27561';
  break;
case 'read-branch27556':
  continue_to = 'after-call27555';
  branch = 'read';
  break;
case 'primitive-branch27559':
  val = proc[1](argl);
case 'after-call27555':
  argl = restore();
  argl.unshift(val);
  env = restore();
  save(env);
  save(argl);
  proc = lookup_variable_value('list', env);
  val = lookup_variable_value('cdr', env);
  argl = [val];
  val = "cdr";
  argl.unshift(val);
case 'compile-procedure-call-start27554':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27552';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27553';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27549';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27550';
    break;
  }
case 'compiled-branch27551':
  continue_to = 'after-call27548';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27550':
  continue_to = 'after-call27548';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27553':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27554';
  break;
case 'read-branch27549':
  continue_to = 'after-call27548';
  branch = 'read';
  break;
case 'primitive-branch27552':
  val = proc[1](argl);
case 'after-call27548':
  argl = restore();
  argl.unshift(val);
  env = restore();
  save(argl);
  proc = lookup_variable_value('list', env);
  val = lookup_variable_value('car', env);
  argl = [val];
  val = "car";
  argl.unshift(val);
case 'compile-procedure-call-start27547':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27545';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27546';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27542';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27543';
    break;
  }
case 'compiled-branch27544':
  continue_to = 'after-call27541';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27543':
  continue_to = 'after-call27541';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27546':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27547';
  break;
case 'read-branch27542':
  continue_to = 'after-call27541';
  branch = 'read';
  break;
case 'primitive-branch27545':
  val = proc[1](argl);
case 'after-call27541':
  argl = restore();
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start27603':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27601';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27602';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27598';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27599';
    break;
  }
case 'compiled-branch27600':
  continue_to = 'after-call27597';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27599':
  continue_to = 'after-call27597';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27602':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27603';
  break;
case 'read-branch27598':
  continue_to = 'after-call27597';
  branch = 'read';
  break;
case 'primitive-branch27601':
  val = proc[1](argl);
case 'after-call27597':
  env = restore();
  define_variable('primitive-procedures', val, env);
  val = 'ok: primitive-procedures set';
  val = make_compiled_procedure('entry27533', env);
  branch = 'after-lambda27532';
  break;
case 'entry27533':
  env = compiled_procedure_env(proc);
  env = extend_environment([  ], argl, env);
  proc = lookup_variable_value('map', env);
  val = lookup_variable_value('primitive-procedures', env);
  argl = [val];
  val = lookup_variable_value('car', env);
  argl.unshift(val);
case 'compile-procedure-call-start27540':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27538';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27539';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27535';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27536';
    break;
  }
case 'compiled-branch27537':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27536':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27539':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27540';
  break;
case 'read-branch27535':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27538':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27534':
case 'after-lambda27532':
  define_variable('primitive-procedure-names', val, env);
  val = 'ok: primitive-procedure-names set';
  val = make_compiled_procedure('entry27508', env);
  branch = 'after-lambda27507';
  break;
case 'entry27508':
  env = compiled_procedure_env(proc);
  env = extend_environment([  ], argl, env);
  proc = lookup_variable_value('map', env);
  val = lookup_variable_value('primitive-procedures', env);
  argl = [val];
  val = make_compiled_procedure('entry27510', env);
  branch = 'after-lambda27509';
  break;
case 'entry27510':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'proc' ], argl, env);
  proc = lookup_variable_value('list', env);
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('cadr', env);
  val = lookup_variable_value('proc', env);
  argl = [val];
case 'compile-procedure-call-start27517':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27515';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27516';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27512';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27513';
    break;
  }
case 'compiled-branch27514':
  continue_to = 'after-call27511';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27513':
  continue_to = 'after-call27511';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27516':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27517';
  break;
case 'read-branch27512':
  continue_to = 'after-call27511';
  branch = 'read';
  break;
case 'primitive-branch27515':
  val = proc[1](argl);
case 'after-call27511':
  argl = [val];
  val = "primitive";
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27524':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27522';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27523';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27519';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27520';
    break;
  }
case 'compiled-branch27521':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27520':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27523':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27524';
  break;
case 'read-branch27519':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27522':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27518':
case 'after-lambda27509':
  argl.unshift(val);
case 'compile-procedure-call-start27531':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27529';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27530';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27526';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27527';
    break;
  }
case 'compiled-branch27528':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27527':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27530':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27531';
  break;
case 'read-branch27526':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27529':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27525':
case 'after-lambda27507':
  define_variable('primitive-procedure-objects', val, env);
  val = 'ok: primitive-procedure-objects set';
  val = make_compiled_procedure('entry27492', env);
  branch = 'after-lambda27491';
  break;
case 'entry27492':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'proc','args' ], argl, env);
  proc = lookup_variable_value('apply-in-underlying-scheme', env);
  save(continue_to);
  save(proc);
  val = lookup_variable_value('args', env);
  argl = [val];
  save(argl);
  proc = lookup_variable_value('primitive-implementation', env);
  val = lookup_variable_value('proc', env);
  argl = [val];
case 'compile-procedure-call-start27499':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27497';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27498';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27494';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27495';
    break;
  }
case 'compiled-branch27496':
  continue_to = 'after-call27493';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27495':
  continue_to = 'after-call27493';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27498':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27499';
  break;
case 'read-branch27494':
  continue_to = 'after-call27493';
  branch = 'read';
  break;
case 'primitive-branch27497':
  val = proc[1](argl);
case 'after-call27493':
  argl = restore();
  argl.unshift(val);
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27506':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27504';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27505';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27501';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27502';
    break;
  }
case 'compiled-branch27503':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27502':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27505':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27506';
  break;
case 'read-branch27501':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27504':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27500':
case 'after-lambda27491':
  define_variable('apply-primitive-procedure', val, env);
  val = 'ok: apply-primitive-procedure set';
  val = ";;; M-Eval input:";
  define_variable('input-prompt', val, env);
  val = 'ok: input-prompt set';
  val = ";;; M-Eval value:";
  define_variable('output-prompt', val, env);
  val = 'ok: output-prompt set';
  val = make_compiled_procedure('entry27430', env);
  branch = 'after-lambda27429';
  break;
case 'entry27430':
  env = compiled_procedure_env(proc);
  env = extend_environment([  ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('prompt-for-input', env);
  val = lookup_variable_value('input-prompt', env);
  argl = [val];
case 'compile-procedure-call-start27490':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27488';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27489';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27485';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27486';
    break;
  }
case 'compiled-branch27487':
  continue_to = 'after-call27484';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27486':
  continue_to = 'after-call27484';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27489':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27490';
  break;
case 'read-branch27485':
  continue_to = 'after-call27484';
  branch = 'read';
  break;
case 'primitive-branch27488':
  val = proc[1](argl);
case 'after-call27484':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = make_compiled_procedure('entry27446', env);
  branch = 'after-lambda27445';
  break;
case 'entry27446':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'input' ], argl, env);
  proc = make_compiled_procedure('entry27455', env);
  branch = 'after-lambda27454';
  break;
case 'entry27455':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'output' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('announce-output', env);
  val = lookup_variable_value('output-prompt', env);
  argl = [val];
case 'compile-procedure-call-start27469':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27467';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27468';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27464';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27465';
    break;
  }
case 'compiled-branch27466':
  continue_to = 'after-call27463';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27465':
  continue_to = 'after-call27463';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27468':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27469';
  break;
case 'read-branch27464':
  continue_to = 'after-call27463';
  branch = 'read';
  break;
case 'primitive-branch27467':
  val = proc[1](argl);
case 'after-call27463':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('user-print', env);
  val = lookup_variable_value('output', env);
  argl = [val];
case 'compile-procedure-call-start27462':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27460';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27461';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27457';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27458';
    break;
  }
case 'compiled-branch27459':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27458':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27461':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27462';
  break;
case 'read-branch27457':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27460':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27456':
case 'after-lambda27454':
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('eval', env);
  val = lookup_variable_value('the-global-environment', env);
  argl = [val];
  val = lookup_variable_value('input', env);
  argl.unshift(val);
case 'compile-procedure-call-start27453':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27451';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27452';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27448';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27449';
    break;
  }
case 'compiled-branch27450':
  continue_to = 'after-call27447';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27449':
  continue_to = 'after-call27447';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27452':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27453';
  break;
case 'read-branch27448':
  continue_to = 'after-call27447';
  branch = 'read';
  break;
case 'primitive-branch27451':
  val = proc[1](argl);
case 'after-call27447':
  argl = [val];
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27476':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27474';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27475';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27471';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27472';
    break;
  }
case 'compiled-branch27473':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27472':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27475':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27476';
  break;
case 'read-branch27471':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27474':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27470':
case 'after-lambda27445':
  save(proc);
  proc = lookup_variable_value('read', env);
  argl = [];
case 'compile-procedure-call-start27444':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27442';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27443';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27439';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27440';
    break;
  }
case 'compiled-branch27441':
  continue_to = 'after-call27438';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27440':
  continue_to = 'after-call27438';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27443':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27444';
  break;
case 'read-branch27439':
  continue_to = 'after-call27438';
  branch = 'read';
  break;
case 'primitive-branch27442':
  val = proc[1](argl);
case 'after-call27438':
  argl = [val];
  proc = restore();
case 'compile-procedure-call-start27483':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27481';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27482';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27478';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27479';
    break;
  }
case 'compiled-branch27480':
  continue_to = 'after-call27477';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27479':
  continue_to = 'after-call27477';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27482':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27483';
  break;
case 'read-branch27478':
  continue_to = 'after-call27477';
  branch = 'read';
  break;
case 'primitive-branch27481':
  val = proc[1](argl);
case 'after-call27477':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('driver-loop', env);
  argl = [];
case 'compile-procedure-call-start27437':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27435';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27436';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27432';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27433';
    break;
  }
case 'compiled-branch27434':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27433':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27436':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27437';
  break;
case 'read-branch27432':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27435':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27431':
case 'after-lambda27429':
  define_variable('driver-loop', val, env);
  val = 'ok: driver-loop set';
  val = make_compiled_procedure('entry27400', env);
  branch = 'after-lambda27399';
  break;
case 'entry27400':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'string' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('newline', env);
  argl = [];
case 'compile-procedure-call-start27428':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27426';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27427';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27423';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27424';
    break;
  }
case 'compiled-branch27425':
  continue_to = 'after-call27422';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27424':
  continue_to = 'after-call27422';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27427':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27428';
  break;
case 'read-branch27423':
  continue_to = 'after-call27422';
  branch = 'read';
  break;
case 'primitive-branch27426':
  val = proc[1](argl);
case 'after-call27422':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('newline', env);
  argl = [];
case 'compile-procedure-call-start27421':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27419';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27420';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27416';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27417';
    break;
  }
case 'compiled-branch27418':
  continue_to = 'after-call27415';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27417':
  continue_to = 'after-call27415';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27420':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27421';
  break;
case 'read-branch27416':
  continue_to = 'after-call27415';
  branch = 'read';
  break;
case 'primitive-branch27419':
  val = proc[1](argl);
case 'after-call27415':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('display', env);
  val = lookup_variable_value('string', env);
  argl = [val];
case 'compile-procedure-call-start27414':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27412';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27413';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27409';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27410';
    break;
  }
case 'compiled-branch27411':
  continue_to = 'after-call27408';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27410':
  continue_to = 'after-call27408';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27413':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27414';
  break;
case 'read-branch27409':
  continue_to = 'after-call27408';
  branch = 'read';
  break;
case 'primitive-branch27412':
  val = proc[1](argl);
case 'after-call27408':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('newline', env);
  argl = [];
case 'compile-procedure-call-start27407':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27405';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27406';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27402';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27403';
    break;
  }
case 'compiled-branch27404':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27403':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27406':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27407';
  break;
case 'read-branch27402':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27405':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27401':
case 'after-lambda27399':
  define_variable('prompt-for-input', val, env);
  val = 'ok: prompt-for-input set';
  val = make_compiled_procedure('entry27377', env);
  branch = 'after-lambda27376';
  break;
case 'entry27377':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'string' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('newline', env);
  argl = [];
case 'compile-procedure-call-start27398':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27396';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27397';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27393';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27394';
    break;
  }
case 'compiled-branch27395':
  continue_to = 'after-call27392';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27394':
  continue_to = 'after-call27392';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27397':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27398';
  break;
case 'read-branch27393':
  continue_to = 'after-call27392';
  branch = 'read';
  break;
case 'primitive-branch27396':
  val = proc[1](argl);
case 'after-call27392':
  env = restore();
  continue_to = restore();
  save(continue_to);
  save(env);
  proc = lookup_variable_value('display', env);
  val = lookup_variable_value('string', env);
  argl = [val];
case 'compile-procedure-call-start27391':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27389';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27390';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27386';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27387';
    break;
  }
case 'compiled-branch27388':
  continue_to = 'after-call27385';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27387':
  continue_to = 'after-call27385';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27390':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27391';
  break;
case 'read-branch27386':
  continue_to = 'after-call27385';
  branch = 'read';
  break;
case 'primitive-branch27389':
  val = proc[1](argl);
case 'after-call27385':
  env = restore();
  continue_to = restore();
  proc = lookup_variable_value('newline', env);
  argl = [];
case 'compile-procedure-call-start27384':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27382';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27383';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27379';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27380';
    break;
  }
case 'compiled-branch27381':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27380':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27383':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27384';
  break;
case 'read-branch27379':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27382':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27378':
case 'after-lambda27376':
  define_variable('announce-output', val, env);
  val = 'ok: announce-output set';
  val = make_compiled_procedure('entry27330', env);
  branch = 'after-lambda27329';
  break;
case 'entry27330':
  env = compiled_procedure_env(proc);
  env = extend_environment([ 'object' ], argl, env);
  save(continue_to);
  save(env);
  proc = lookup_variable_value('compound-procedure?', env);
  val = lookup_variable_value('object', env);
  argl = [val];
case 'compile-procedure-call-start27375':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27373';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27374';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27370';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27371';
    break;
  }
case 'compiled-branch27372':
  continue_to = 'after-call27369';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27371':
  continue_to = 'after-call27369';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27374':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27375';
  break;
case 'read-branch27370':
  continue_to = 'after-call27369';
  branch = 'read';
  break;
case 'primitive-branch27373':
  val = proc[1](argl);
case 'after-call27369':
  env = restore();
  continue_to = restore();
  branch = val ? 'true-branch27333' : 'false-branch27332';
  break;
case 'true-branch27333':
  proc = lookup_variable_value('display', env);
  save(continue_to);
  save(proc);
  proc = lookup_variable_value('list', env);
  save(proc);
  val = "<procedure-env>";
  argl = [val];
  save(env);
  save(argl);
  proc = lookup_variable_value('procedure-body', env);
  val = lookup_variable_value('object', env);
  argl = [val];
case 'compile-procedure-call-start27354':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27352';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27353';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27349';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27350';
    break;
  }
case 'compiled-branch27351':
  continue_to = 'after-call27348';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27350':
  continue_to = 'after-call27348';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27353':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27354';
  break;
case 'read-branch27349':
  continue_to = 'after-call27348';
  branch = 'read';
  break;
case 'primitive-branch27352':
  val = proc[1](argl);
case 'after-call27348':
  argl = restore();
  argl.unshift(val);
  env = restore();
  save(argl);
  proc = lookup_variable_value('procedure-parameters', env);
  val = lookup_variable_value('object', env);
  argl = [val];
case 'compile-procedure-call-start27347':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27345';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27346';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27342';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27343';
    break;
  }
case 'compiled-branch27344':
  continue_to = 'after-call27341';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27343':
  continue_to = 'after-call27341';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27346':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27347';
  break;
case 'read-branch27342':
  continue_to = 'after-call27341';
  branch = 'read';
  break;
case 'primitive-branch27345':
  val = proc[1](argl);
case 'after-call27341':
  argl = restore();
  argl.unshift(val);
  val = "compound-procedure";
  argl.unshift(val);
  proc = restore();
case 'compile-procedure-call-start27361':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27359';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27360';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27356';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27357';
    break;
  }
case 'compiled-branch27358':
  continue_to = 'after-call27355';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27357':
  continue_to = 'after-call27355';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27360':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27361';
  break;
case 'read-branch27356':
  continue_to = 'after-call27355';
  branch = 'read';
  break;
case 'primitive-branch27359':
  val = proc[1](argl);
case 'after-call27355':
  argl = [val];
  proc = restore();
  continue_to = restore();
case 'compile-procedure-call-start27368':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27366';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27367';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27363';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27364';
    break;
  }
case 'compiled-branch27365':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27364':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27367':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27368';
  break;
case 'read-branch27363':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27366':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27362':
case 'false-branch27332':
  proc = lookup_variable_value('display', env);
  val = lookup_variable_value('object', env);
  argl = [val];
case 'compile-procedure-call-start27340':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27338';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27339';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27335';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27336';
    break;
  }
case 'compiled-branch27337':
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27336':
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27339':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27340';
  break;
case 'read-branch27335':
  continue_to = 'return';
  branch = 'read';
  break;
case 'primitive-branch27338':
  val = proc[1](argl);
  branch = continue_to;
break;
case 'after-call27334':
case 'after-if27331':
case 'after-lambda27329':
  define_variable('user-print', val, env);
  val = 'ok: user-print set';
  save(env);
  proc = lookup_variable_value('setup-environment', env);
  argl = [];
case 'compile-procedure-call-start27328':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27326';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27327';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27323';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27324';
    break;
  }
case 'compiled-branch27325':
  continue_to = 'after-call27322';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27324':
  continue_to = 'after-call27322';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27327':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27328';
  break;
case 'read-branch27323':
  continue_to = 'after-call27322';
  branch = 'read';
  break;
case 'primitive-branch27326':
  val = proc[1](argl);
case 'after-call27322':
  env = restore();
  define_variable('the-global-environment', val, env);
  val = 'ok: the-global-environment set';
  proc = lookup_variable_value('driver-loop', env);
  argl = [];
case 'compile-procedure-call-start27321':
  if (primitive_procedure(proc)) {
    branch = 'primitive-branch27319';
    break;
  } else if (explicit_apply_procedure(proc)) {
    branch = 'explicit-apply-branch27320';
    break;
  } else if (read_procedure(proc)) {
    branch = 'read-branch27316';
    break;
  } else if (compound_procedure(proc)) {
    branch = 'interpreted-branch27317';
    break;
  }
case 'compiled-branch27318':
  continue_to = 'after-call27315';
  branch = compiled_procedure_entry(proc);
  break;
case 'interpreted-branch27317':
  continue_to = 'after-call27315';
  save(continue_to);
  branch = compapp;
  break;
case 'explicit-apply-branch27320':
  proc = explicit_apply_get_procedure(argl);
  argl = explicit_apply_get_args(argl);
  branch = 'compile-procedure-call-start27321';
  break;
case 'read-branch27316':
  continue_to = 'after-call27315';
  branch = 'read';
  break;
case 'primitive-branch27319':
  val = proc[1](argl);
case 'after-call27315':


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
