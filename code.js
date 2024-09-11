function fib(n) {
    if (n == 0) {
        return [0];
    }
    else if (n == 1) {
        return [0,1];
    }
    else {
        let arr = [0,1];
        for (var i = 2; i <= n; i++) {
            arr[i] = arr[i-1] + arr[i-2];
        }
        return arr;
    }

    return n;
}

