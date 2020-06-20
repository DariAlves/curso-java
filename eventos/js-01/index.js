const p = document.getElementById('p')
const button = document.getElementById('button')

// Adicionando evento
/* 
    button.addEventListener('click', mudarTexto) 

    function mudarTexto() {
        p.innerHTML = "Texto Novo" 
    }
*/

// Menos linhas de código para fazer o mesmo
button.addEventListener('click', () =>{
    p.innerHTML = "Texto Novo"
})