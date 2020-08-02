const p = document.getElementById('starWars')
const id = Math.floor(Math.random() * 82)

fetch(`https://swapi.dev/api/people/${id}/`)
    .then(res => {
        if(res.ok) {
            console.log('Success');
            return res.json()
        } else {
            console.log('Not Successful')
        }
    })
    .then(data => {
        const name = data.name;
        p.innerHTML = `Name: ${name}`
    })
    .catch(err => console.log(err))


