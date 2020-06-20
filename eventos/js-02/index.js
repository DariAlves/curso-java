const input = document.getElementById('input')
const button = document.getElementById('button')
const p = document.getElementById('p')

button.addEventListener('click', () =>{
    const valor = input.value;
    p.innerHTML = valor
})


