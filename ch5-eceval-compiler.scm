;;;;EXPLICIT-CONTROL EVALUATOR FROM SECTION 5.4 OF
;;;; STRUCTURE AND INTERPRETATION OF COMPUTER PROGRAMS
;;;; MODIFIED TO SUPPORT COMPILED CODE (AS IN SECTION 5.5.7)

;;;;Changes to basic evaluator machine are
;;;; (1) some new eceval controller code for the driver and apply-dispatch;
;;;; (2) some additional machine operations from;
;;;; (3) support for compiled code to call interpreted code (exercise 5.47) --
;;;;     (new register and 1 new instruction at start)
;;;; (4) new startup aid start-eceval

;; Explicit-control evaluator.
;; To use it, load "load-eceval-compiler.scm", which loads this file and the
;;  support it needs (including the register-machine simulator)

;; To start, can use compile-and-go as in section 5.5.7
;;  or start-eceval as in the section 5.5.7 footnote.

;; To resume the machine without reinitializing the global environment
;; if you have somehow interrupted out of the machine back to Scheme, do

;: (set-register-contents! eceval 'flag false)
;: (start eceval)

;;;;;;;;

;; any old value to create the variable so that
;;  compile-and-go and/or start-eceval can set! it.
(define the-global-environment '())

;;; Interfacing compiled code with eceval machine
;;; From section 5.5.7
(define (start-eceval)
  (set! the-global-environment (setup-environment))
  (set-register-contents! eceval 'flag false)
  (start eceval))

;; Modification of section 4.1.4 procedure
;; **replaces version in syntax file
(define (user-print object)
  (cond ((compound-procedure? object)
         (display (list 'compound-procedure
                        (procedure-parameters object)
                        (procedure-body object)
                        '<procedure-env>)))
        ((compiled-procedure? object)
         (display '<compiled-procedure>))
        (else (display object))))

(define (compile-and-go expression)
  (let ((instructions
         (assemble (statements
                    (compile expression 'val 'return))
                   eceval)))
    (set! the-global-environment (setup-environment))
    (set-register-contents! eceval 'val instructions)
    (set-register-contents! eceval 'flag true)
    (start eceval)))

(define (compile-and-run? exp)
  (tagged-list? exp 'compile-and-run))

(define (compile-and-run-code expression) (cadr expression))

(define (compile-and-run expression)
  (let ((instructions
         (assemble (statements
                    (compile expression 'val 'return))
                   eceval)))
    instructions))

;; redefining this, with an added one
(define primitive-procedures
  (list (list 'car car)
        (list 'cdr cdr)
        (list 'cons cons)
        (list 'null? null?)
	;;above from book -- here are some more
	(list '+ +)
	(list '- -)
	(list '* *)
	(list '= =)
	(list '/ /)
	(list '> >)
	(list '< <)

	; additional for compiling
	(list 'compile-and-run-code compile-and-run-code)
	(list 'compile-and-run compile-and-run)
	
	; additional needed for compiling mceval
	(list 'number? number?)
	(list 'string? string?)
	(list 'symbol? symbol?)
	(list 'eq? eq?)

	(list 'list list)
	(list 'pair? pair?)
	(list 'set-car! set-car!)
	(list 'set-cdr! set-cdr!)

	(list 'user-print user-print)
	(list 'read read)

        ))

;; redefine this from ch5-syntax, adding boolean option
(define (self-evaluating? exp)
  (cond ((number? exp) true)
        ((string? exp) true)
	((boolean? exp) true)
        (else false)))

;; to make "apply" work, need additional operations
(define (explicit-apply? proc) (eq? proc 'apply))
(define (explicit-apply-proc argl) (car argl))
(define (explicit-apply-args argl) (cadr argl))


;;**NB. To [not] monitor stack operations, comment in/[out] the line after
;; print-result in the machine controller below
;;**Also choose the desired make-stack version in regsim.scm

(define eceval-operations
  (list
   ;;primitive Scheme operations
   (list 'read read)			;used by eceval

   ;;used by compiled code
   (list 'list list)
   (list 'cons cons)

   ;;operations in syntax.scm
   (list 'self-evaluating? self-evaluating?)
   (list 'quoted? quoted?)
   (list 'text-of-quotation text-of-quotation)
   (list 'variable? variable?)
   (list 'assignment? assignment?)
   (list 'assignment-variable assignment-variable)
   (list 'assignment-value assignment-value)
   (list 'definition? definition?)
   (list 'definition-variable definition-variable)
   (list 'definition-value definition-value)
   (list 'lambda? lambda?)
   (list 'lambda-parameters lambda-parameters)
   (list 'lambda-body lambda-body)
   (list 'if? if?)
   (list 'if-predicate if-predicate)
   (list 'if-consequent if-consequent)
   (list 'if-alternative if-alternative)
   (list 'begin? begin?)
   (list 'begin-actions begin-actions)
   (list 'last-exp? last-exp?)
   (list 'first-exp first-exp)
   (list 'rest-exps rest-exps)
   (list 'application? application?)
   (list 'operator operator)
   (list 'operands operands)
   (list 'no-operands? no-operands?)
   (list 'first-operand first-operand)
   (list 'rest-operands rest-operands)

   ;;operations in eceval-support.scm
   (list 'true? true?)
   (list 'false? false?)		;for compiled code
   (list 'make-procedure make-procedure)
   (list 'compound-procedure? compound-procedure?)
   (list 'procedure-parameters procedure-parameters)
   (list 'procedure-body procedure-body)
   (list 'procedure-environment procedure-environment)
   (list 'extend-environment extend-environment)
   (list 'lookup-variable-value lookup-variable-value)
   (list 'set-variable-value! set-variable-value!)
   (list 'define-variable! define-variable!)
   (list 'primitive-procedure? primitive-procedure?)
   (list 'apply-primitive-procedure apply-primitive-procedure)
   (list 'prompt-for-input prompt-for-input)
   (list 'announce-output announce-output)
   (list 'user-print user-print)
   (list 'empty-arglist empty-arglist)
   (list 'adjoin-arg adjoin-arg)
   (list 'last-operand? last-operand?)
   (list 'no-more-exps? no-more-exps?)	;for non-tail-recursive machine
   (list 'get-global-environment get-global-environment)

   ;;for compiled code (also in eceval-support.scm)
   (list 'make-compiled-procedure make-compiled-procedure)
   (list 'compiled-procedure? compiled-procedure?)
   (list 'compiled-procedure-entry compiled-procedure-entry)
   (list 'compiled-procedure-env compiled-procedure-env)

   ;;operations in ch5-outline.scm 
   (list 'lexical-address-lookup lexical-address-lookup)
   (list 'lexical-address-set! lexical-address-set!)

   (list 'compile-and-run? compile-and-run?)
   (list 'compile-and-run-code compile-and-run-code)
   (list 'compile-and-run compile-and-run)

   ;; for making "apply" work, 5.50 -- implemented above
   (list 'explicit-apply? explicit-apply?)
   (list 'explicit-apply-proc explicit-apply-proc)
   (list 'explicit-apply-args explicit-apply-args)

   ))

(define eceval
  (make-machine
   '(exp env val proc argl continue unev
	 compapp			;*for compiled to call interpreted
	 debug                          ;*for debugging unfavorable expression
	 )
   eceval-operations
  '(
;;SECTION 5.4.4, as modified in 5.5.7
;;*for compiled to call interpreted (from exercise 5.47)
  (assign compapp (label compound-apply))
;;*next instruction supports entry from compiler (from section 5.5.7)
  (branch (label external-entry))
read-eval-print-loop
  (perform (op initialize-stack))
  (perform
   (op prompt-for-input) (const ";;; EC-Eval input:"))
  (assign exp (op read))
  (assign env (op get-global-environment))

;;*function replaced to turn repl into r-compile-epl
  (assign continue (label print-result))
; (assign continue (label compile-and-run-finish))

  (goto (label eval-dispatch))
print-result
;;**following instruction optional -- if use it, need monitored stack
  (perform (op print-stack-statistics))
  (perform
   (op announce-output) (const ";;; EC-Eval value:"))
  (perform (op user-print) (reg val))
  (goto (label read-eval-print-loop))

;;*support for entry from compiler (from section 5.5.7)
external-entry
  (perform (op initialize-stack))
  (assign env (op get-global-environment))
  (assign continue (label print-result))
  (goto (reg val))

unknown-expression-type
  (assign val (const unknown-expression-type-error))
  (goto (label signal-error))

unknown-procedure-type
  (restore continue)
  (assign val (const unknown-procedure-type-error))
  (goto (label signal-error))

signal-error
  (perform (op user-print) (reg val))
  (perform (op user-print) (const " near: "))
  (perform (op user-print) (reg debug)) ;; added to facilitate debugging
  (goto (label read-eval-print-loop))

;;SECTION 5.4.1
eval-dispatch
  (test (op self-evaluating?) (reg exp))
  (branch (label ev-self-eval))
  (test (op variable?) (reg exp))
  (branch (label ev-variable))
  (test (op quoted?) (reg exp))
  (branch (label ev-quoted))
  (test (op assignment?) (reg exp))
  (branch (label ev-assignment))
  (test (op definition?) (reg exp))
  (branch (label ev-definition))
  (test (op if?) (reg exp))
  (branch (label ev-if))

  (test (op compile-and-run?) (reg exp))
  (branch (label compile-and-run))

  (test (op lambda?) (reg exp))
  (branch (label ev-lambda))
  (test (op begin?) (reg exp))
  (branch (label ev-begin))
  (test (op application?) (reg exp))
  (branch (label ev-application))
  (goto (label unknown-expression-type))

ev-self-eval
  (assign val (reg exp))
  (goto (reg continue))
ev-variable
  (assign val (op lookup-variable-value) (reg exp) (reg env))
  (goto (reg continue))
ev-quoted
  (assign val (op text-of-quotation) (reg exp))
  (goto (reg continue))
ev-lambda
  (assign unev (op lambda-parameters) (reg exp))
  (assign exp (op lambda-body) (reg exp))
  (assign val (op make-procedure)
              (reg unev) (reg exp) (reg env))
  (goto (reg continue))

ev-application
  (assign debug (reg exp)) ;; addded to facilitate debugging
  (save continue)
  (save env)
  (assign unev (op operands) (reg exp))
  (save unev)
  (assign exp (op operator) (reg exp))
  (assign continue (label ev-appl-did-operator))
  (goto (label eval-dispatch))
ev-appl-did-operator
  (restore unev)
  (restore env)
  (assign argl (op empty-arglist))
  (assign proc (reg val))
  (test (op no-operands?) (reg unev))
  (branch (label apply-dispatch))
  (save proc)
ev-appl-operand-loop
  (save argl)
  (assign exp (op first-operand) (reg unev))
  (test (op last-operand?) (reg unev))
  (branch (label ev-appl-last-arg))
  (save env)
  (save unev)
  (assign continue (label ev-appl-accumulate-arg))
  (goto (label eval-dispatch))
ev-appl-accumulate-arg
  (restore unev)
  (restore env)
  (restore argl)
  (assign argl (op adjoin-arg) (reg val) (reg argl))
  (assign unev (op rest-operands) (reg unev))
  (goto (label ev-appl-operand-loop))
ev-appl-last-arg
  (assign continue (label ev-appl-accum-last-arg))
  (goto (label eval-dispatch))
ev-appl-accum-last-arg
  (restore argl)
  (assign argl (op adjoin-arg) (reg val) (reg argl))
  (restore proc)
  (goto (label apply-dispatch))
apply-dispatch
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-apply))
  (test (op compound-procedure?) (reg proc))  
  (branch (label compound-apply))
;;*next added to call compiled code from evaluator (section 5.5.7)
  (test (op compiled-procedure?) (reg proc))  
  (branch (label compiled-apply))
;;*next added just to support "apply"
  (test (op explicit-apply?) (reg proc))  
  (branch (label explicit-apply))

  (goto (label unknown-procedure-type))

;;*next added to call compiled code from evaluator (section 5.5.7)
compiled-apply
  (restore continue)
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))

primitive-apply
  (assign val (op apply-primitive-procedure)
              (reg proc)
              (reg argl))
  (restore continue)
  (goto (reg continue))

compound-apply
  (assign unev (op procedure-parameters) (reg proc))
  (assign env (op procedure-environment) (reg proc))
  (assign env (op extend-environment)
              (reg unev) (reg argl) (reg env))
  (assign unev (op procedure-body) (reg proc))

  (goto (label ev-sequence))

;; handle (apply...)
explicit-apply
  (assign proc (op explicit-apply-proc) (reg argl))
  (assign argl (op explicit-apply-args) (reg argl))
  (goto (label apply-dispatch))

;; compile and run
compile-and-run
  (assign exp (op compile-and-run-code) (reg exp))
  (assign continue (label compile-and-run-finish))
  (goto (label eval-dispatch))

compile-and-run-finish
  (assign val (op compile-and-run) (reg val))
  (assign env (op get-global-environment))
  (assign continue (label print-result))
  (goto (reg val))

;;;SECTION 5.4.2
ev-begin
  (assign unev (op begin-actions) (reg exp))
  (save continue)
  (goto (label ev-sequence))

ev-sequence
  (assign exp (op first-exp) (reg unev))
  (test (op last-exp?) (reg unev))
  (branch (label ev-sequence-last-exp))
  (save unev)
  (save env)
  (assign continue (label ev-sequence-continue))
  (goto (label eval-dispatch))
ev-sequence-continue
  (restore env)
  (restore unev)
  (assign unev (op rest-exps) (reg unev))
  (goto (label ev-sequence))
ev-sequence-last-exp
  (restore continue)
  (goto (label eval-dispatch))

;;;SECTION 5.4.3

ev-if
  (save exp)
  (save env)
  (save continue)
  (assign continue (label ev-if-decide))
  (assign exp (op if-predicate) (reg exp))
  (goto (label eval-dispatch))
ev-if-decide
  (restore continue)
  (restore env)
  (restore exp)
  (test (op true?) (reg val))
  (branch (label ev-if-consequent))
ev-if-alternative
  (assign exp (op if-alternative) (reg exp))
  (goto (label eval-dispatch))
ev-if-consequent
  (assign exp (op if-consequent) (reg exp))
  (goto (label eval-dispatch))

ev-assignment
  (assign unev (op assignment-variable) (reg exp))
  (save unev)
  (assign exp (op assignment-value) (reg exp))
  (save env)
  (save continue)
  (assign continue (label ev-assignment-1))
  (goto (label eval-dispatch))
ev-assignment-1
  (restore continue)
  (restore env)
  (restore unev)
  (perform
   (op set-variable-value!) (reg unev) (reg val) (reg env))
  (assign val (const ok))
  (goto (reg continue))

ev-definition
  (assign unev (op definition-variable) (reg exp))
  (save unev)
  (assign exp (op definition-value) (reg exp))
  (save env)
  (save continue)
  (assign continue (label ev-definition-1))
  (goto (label eval-dispatch))
ev-definition-1
  (restore continue)
  (restore env)
  (restore unev)
  (perform
   (op define-variable!) (reg unev) (reg val) (reg env))
  (assign val (const ok))
  (goto (reg continue))
   )))

'(EXPLICIT CONTROL EVALUATOR FOR COMPILER LOADED)