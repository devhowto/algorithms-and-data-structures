{-# LANGUAGE NoMonomorphismRestriction #-}
{-# OPTIONS_GHC -Wno-unrecognised-pragmas #-}
{-# HLINT ignore "Use if" #-}

import Data.Char (toLower, toUpper)

capitFirst :: [Char] -> [Char]
capitFirst "" = ""
capitFirst (c : cs) = toUpper c : map toLower cs

dropCap :: [Char] -> [Char]
dropCap str = unwords $ go [] (words str)
  where
    go :: [String] -> [String] -> [String]
    go acc [] = acc
    go acc (s : ss) = case length s >= 3 of
      True -> go (acc ++ [capitFirst s]) ss
      _    -> go (acc ++ [s]) ss

main :: IO ()
main = do
  putStrLn $ dropCap "hello world"
  putStrLn $ dropCap "a banana"
