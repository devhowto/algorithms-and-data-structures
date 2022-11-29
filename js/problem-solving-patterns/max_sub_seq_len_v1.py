def max_sub_seq_len(s):
  seen = {}

  for i, chr in enumerate(s):
    if chr not in seen:
      seen[chr] = i
      print(seen)
    else:
      print(1, seen)
      return max(len(seen), max_sub_seq_len(s[seen[chr] + 1:]))

  return len(seen)

print(max_sub_seq_len("abbcddef"))
