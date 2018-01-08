function fibDP(n) {
    if (!n) {
        return 0;
    }

    let fib = [0,1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[n];
}

let yo = fibDP(9);
display(yo);