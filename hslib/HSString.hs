module HSString (
  trim
) where

import Data.List (dropWhileEnd)
import Data.Char (isSpace)

trim :: String -> String
trim = dropWhileEnd isSpace . dropWhile isSpace

trimAll :: String -> String
trimAll = unwords . map trim . words

ws = " May the    force   be with    you    "

--  "  ab  cde  f"
