const fighters = ['Iori Yagami', 'Kyo Kusanagi', 'Chizuru Kagura']

const getFighter = () => {
    setTimeout(() => {
        
        for(let fighter of fighters) {
            console.log(`Kof fighters: ${fighter}`)
        }

    }, 1000);
}

// caso 1
// const newFighter = (name) => {
//     setTimeout(() => {
//         fighters.push(name)
//     }, 2000);
// }

// newFighter('Terry Bogard')
// getFighter();

// caso 2
const newFighter = (name, callback) => {
    setTimeout(() => {
        fighters.push(name);

        callback();
    }, 2000);
}

newFighter('Terry Bogard', getFighter)

