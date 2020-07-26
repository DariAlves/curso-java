const numbers = [0, 2, 4, 7]

const even = numbers.every((number) => {
    return number % 2 === 0
})


console.log(even);
// Output: false
// The method every checks if every numbers are even