function sum (a, b, callback) {
    setTimeout(() => {
        callback(a + b)
    }, 1000);
}

sum(5,10, (result) => {
    console.log(result);
});