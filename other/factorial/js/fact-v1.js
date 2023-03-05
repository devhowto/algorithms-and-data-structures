function fact(n) {
  var res;

  if (n === 1)
    res = 1;
  else
    res = n * fact(n - 1);

  return res;
}

fact(4);