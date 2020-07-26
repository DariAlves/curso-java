const numbers = [0, 2, 4, 7]

const even = numbers.some((number) => {
    return number % 2 === 0
})


console.log(even);
// Output: true
// The some method checks if any of the numbers in array are even