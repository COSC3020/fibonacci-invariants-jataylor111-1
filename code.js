function fib(n) {
    let arr = [0];
    // If we're only working with n = 0 or 1
    if (n == 0) {
        return arr;
    }
    else if (n == 1) {
        arr[1] = 1;
        return arr;
    }
    // If not 0 or 1 we recursively call fib() and use the length of arr as the needed operations.
    else {
        arr = fib(n-1);
        arr[n] = arr[arr.length-1] + arr[arr.length-2];
        return arr;
    }

    return n;
}

