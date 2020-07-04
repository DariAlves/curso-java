const series = [
    { title: 'Dark', genre: 'sci-fi' },
    { title: 'The Witcher', genre: 'fantasy' },
    { title: 'Friends', genre: 'comedy' },
    { title: 'Vikings', genre: 'action' },
    { title: 'Stranger Things', genre: 'sci-fi' },
    { title: 'Game of Thrones', genre: 'action' },
    { title: 'The Big Bang Theory', genre: 'comedy' }
];

// const filtered = (serie) => {
//     return serie.genre === 'sci-fi'
// }

// const filteredSciFi = series.filter(filtered)

// console.log(filteredSciFi);

const filteredSciFi  = series.filter((item) => {
    return item.genre === 'sci-fi'
})

console.log(filteredSciFi);


