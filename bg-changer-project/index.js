const button = document.getElementById("btn-change")
const p = document.querySelector('p');

button.addEventListener('click', changeColor);

function changeColor() {
    const red = Math.round(Math.random() * 256); // devuelve un número aleatorio entre 0 y 255
    const green = Math.round(Math.random()* 256);
    const blue = Math.round(Math.random() * 256);
    const alpha = Math.random(0,1);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}, ${alpha})`;
    p.innerHTML = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}   