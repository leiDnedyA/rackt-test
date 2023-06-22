#lang racketscript/base

(require rackt
         "./header.rkt"
         "./gif-controller.rkt")

(define console-log #js*.console.log)

; (define (app props ..)
;     (<el "div"
;         #:props ($/obj [className "App"])
;         (<el header)
;         (<el gif-controller #:props ($/obj [src "./res/cat_dancing.webm"]))))

(define (app props ..)
    (sexp->react ("div" ([className "App"])
                  (header)
                  (gif-controller ([src "./res/cat_dancing.webm"])))))

(define test-element (sexp->react (app)))

; (render (<el app) "root")
(render test-element "root")