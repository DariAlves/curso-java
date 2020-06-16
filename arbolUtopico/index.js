/* 
    Los árboles utópicos crecen de una forma particular, en dos ciclos:

    * Cada primavera duplican su tamaño
    * Cada verano crecen un metro
    
    Si Laura planta un árbol utópico de un metro, al fin del otoño, ¿cuánto medirá de alto después de N ciclos?

        Algunos ejemplos:

    Si N = 0, su altura será 1 metro (no creció nada)
    Si N = 1, su altura será de 2 metros (duplicó su altura en primavera)
    Si N = 2, su altura será de 3 metros (creció un metro más en verano)
    Si N = 3, su altura será de 6 metros (duplicó su altura en la siguiente primavera)
    y así ...

    Escribí la función alturaArbolUtopico, que tome una cantidad de ciclos de crecimiento, 
    y devuelva la altura resultante del árbol de Laura.

*/
function alturaArbolUtopico(ciclos) {
    // El árbol ya tiene un altura mínima de 1 metro
    let alturaInicial = 1;

    for (let i = 0; i < ciclos; i++) {
        // el árbol solo duplica en los números impares, así que en los pares solo crece un metro
        // Número par = resto 0 (i % 2)
        if (i % 2) {
            alturaInicial += 1;
        } else {
            alturaInicial *= 2;
        }
    }
    return alturaInicial;
}

// console.log(alturaArbolUtopico(3));