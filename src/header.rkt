#lang racketscript/base

(require rackt)

(define (header props ..)
    (sexp->react ("div"
                    ([className "headerContainer"])
                    ("h1" "Rackt Test")
                    ("p" "This is a test for Rackt, a React wrapper for Racketscript. I'm testing it because I plan on switching some things around with the source code."))))

(provide header)