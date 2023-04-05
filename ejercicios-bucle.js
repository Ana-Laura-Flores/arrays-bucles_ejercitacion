//obtenerIndice(valor, array)
//Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.
/*
const obtenerIndice = (valor, array)=>{
    return array.indexOf(valor)
}

console.log(obtenerIndice(54, [5, 7, 12, 34, 54, 2, 12])) // 2
console.log(obtenerIndice(5, [5, 7, 12, 34, 54, 2, 12])) // -1

//repetir(valor, cantidad)
//Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.

const repetir = (valor, cantidad)=>{
    let newString = []
    for (let i = 0; i = cantidad; i++){
        newString.push(valor)
    }return newString
}

console.log(repetir('lovelace', 3)) // ['lovelace', 'lovelace', 'lovelace']
//repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
//repetir('html', 0) // []
*/

//sumarImparesHasta(numero)
//Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

const sumarImparesHasta = (numero)=>{
    let sumaImpar = 0
    for (let i = 0; i <= numero ; i++){
        if(i%2 !==0){
            sumaImpar += i
        }
    }return sumaImpar
}

console.log(sumarImparesHasta(5)) // 9 (1 + 3 + 5 = 9)
//sumarImparesHasta(13) // 49
//sumarImparesHasta(47) // 576

//crearCuentaRegresiva(numeroInicial)
//Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

const crearCuentaRegresiva =(numeroInicial)=>{
    let array = []
    for (let i = numeroInicial; i >= 0; i--){
        array.push(i)

    }return array
}


console.log(crearCuentaRegresiva(3)) // [3, 2, 1, 0]
console.log(crearCuentaRegresiva(5)) // [5, 4, 3, 2, 1, 0]

//invertir(array)
//Crear una función invertir que tome como argumento un array array y que devuelva un array con los mismos valores pero en orden invertido.
const invertir =(array)=>{
    return array.reverse()

}

console.log(invertir([1, 2, 3])) // [3, 2, 1]
console.log(invertir([5, 7, 99, 34, 54, 2, 12])) // [12, 2, 54, 34, 99, 7, 5]

//removerDuplicados(array)
//Crear una función removerDuplicados que tome como argumento un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.
/*
const removerDuplicados=(array)=>{
    let arraySinDuplicados = []
    for(let i = 1; i < array.length; i++){
        if (array[0] !== array[i]){
            arraySinDuplicados.push(array[i])
        }
    }return arraySinDuplicados
}
*/
console.log(removerDuplicados([1, 1, 1])) // [1]
console.log(removerDuplicados([1, 1, 2, 2, 3, 3])) // [1, 2 ,3]
//removerDuplicados([5, 23, 8, 5, 5, 44, 23]) // [5, 23 ,8, 44]