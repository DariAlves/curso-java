const movies = [
    {
        id: 1,
        title: 'Gladiator',
        director: 'Ridley Scott'
    },
    {
        id: 2,
        title: 'The Dark Knight',
        director: 'Christopher Nolan'
    },
    {
        id: 3,
        title: 'The Hobbit: An Unexpected Journey',
        director: 'Peter Jackson'
    },
    {
        id: 4,
        title: 'Prometheus',
        director: 'Ridley Scott'
    },
    {
        id: 5,
        title: 'Inception',
        director: 'Christopher Nolan'
    }
]

const findMovies = movies.find((movie) => {
    return movie.director === 'Christopher Nolan'
})

console.log(findMovies);
// OUTPUT: { id: 2, title: 'The Dark Knight', director: 'Christopher Nolan' }

// Return the first value matched in array. On the other hand, the filter method returns all values matched in array
