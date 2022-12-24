#lang racket/base
(require rackunit)
<<<<<<< HEAD:codewars/8kyu/grasshopper-summation/sum.spec.rkt
(require "./sum-v4.rkt")
=======
(require "./sum-v5.rkt")
>>>>>>> d935f48 (codewars(8kyu): summation v1 to v5):codewars/8kyu/grasshopper-summation/racket/sum.spec.rkt

(check-eq? (sum 1) 1 "from 1 to 1")

;; 3
(check-eq? (sum 2) (+ 2 1) "from 1 to 2")

;; 6
(check-eq? (sum 3) (+ 3 2 1) "from 1 to 3")

(check-eq? (sum 32) 528 "from 1 to 32")

(check-eq? (sum 64) 2080 "from 1 to 64")
