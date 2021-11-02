const fib = (n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n-1) + fib(n-2);
}

const fibArray = (n) => {
	const f = [0, 1];

  for (let i = 2; i <= n; i++) {
    f[i] = f[i-1] + f[i-2];
  }  
  
  return f;
}