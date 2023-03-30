//sumar(numeros)
//Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:


// defino la funcion
const sumarNumeros = (numeros) =>{

    // inicializo una variable en 0 para poder acumular la suma de numeros
    let sumaTotal = 0

    //recorro este array con un for of
    for(const numero of numeros) {
        //console.log(numero)

        //acumulo o sumo los numeros que va recorriendo
        sumaTotal = sumaTotal + numero
    }
    // finalmente retorno el acumulador
    return sumaTotal
}


console.log(sumarNumeros([5, 7, 10, 12,125, 24])) // 58

