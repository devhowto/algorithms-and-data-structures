{-# LANGUAGE NoMonomorphismRestriction #-}

fib :: Integer -> [Integer]
fib n = go n []
  where
    go :: Integer -> [Integer] -> [Integer]
    go i seq
      | i == 0 = []
      | i == 1 =
