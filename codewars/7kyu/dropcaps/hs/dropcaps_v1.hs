{-# LANGUAGE NoMonomorphismRestriction #-}
-- {-# OPTIONS_GHC -Wno-unrecognised-pragmas #-}
-- {-# HLINT ignore "Use unwords" #-}

import Data.Char (toLower, toUpper, isSpace)
import Data.List (intercalate)

upcaseFirst :: [Char] -> [Char]
upcaseFirst (c:cs) = toUpper c : map toLower cs

split :: Char -> String -> [String]
split c s = case rest of
              []     -> [chunk]
              _:rest -> chunk : split c rest
  where (chunk, rest) = break (== c) s

dropCap :: String -> String
dropCap str = intercalate " " $ go [] (split ' ' str)
  where
    go :: [String] -> [String] -> [String]
    go acc [] = acc
    go acc (s : ss)
      | length s >= 3 = upcaseFirst s : go acc ss
      | otherwise     = s : go acc ss

main :: IO ()
main = do
  putStrLn $ dropCap "  hello   world"
  putStrLn $ dropCap "a banana   "
  putStrLn $ dropCap "  a b   c may the FORCE     be with YOU      "
