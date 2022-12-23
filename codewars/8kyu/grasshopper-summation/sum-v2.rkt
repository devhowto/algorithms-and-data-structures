#lang racket/base
(provide sum)

(define (sum to)
  (define (go [n to] [acc 0])
    (cond
      [(= n 1) acc]
      [else (go (- n 1) (+ acc n))])))


