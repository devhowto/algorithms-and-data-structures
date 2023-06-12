{-# LANGUAGE NoMonomorphismRestriction #-}

fib :: Integer -> [Integer]
fib n = go 0 []
  where
    go :: Integer -> [Integer] -> [Integer]
    go i xs
      | i == n = xs
      | i == 0 = go (i + 1) [0]
      | i == 1 = go (i + 1) [0, 1]
      | otherwise = go (i + 1) (xs ++ [last xs + (last . init) xs])
