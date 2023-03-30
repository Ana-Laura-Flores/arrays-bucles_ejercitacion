// Arrays => tipo de dato que puede almacenar varios datos dentro de si mismos independientemente del tipo


//const genericArray =[26, "Hola", true, undefined, null, false]

// const emptyArray = []
let kiwi = "kiwi"
const fruits = ["apple", "banana", "orange", "watermelon"]
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])

console.log(fruits.length)


const firstName = "Ana Laura"
console.log(firstName[5])


//funciones nativas de arrays

//push => agrega un elemento a un array siempre lo pone al final

fruits.push(kiwi)
console.log(fruits)
fruits.push("Pineapple")
console.log(fruits)

//shift =>elimina el primer elemento del array

fruits.shift()
console.log(fruits)

//pop => elimina el ultimo elemento del array
fruits.pop()
console.log(fruits)

//unshift=>agregar uno o mas elementos al principio del array

fruits.unshift("apple", "mandarina")
console.log(fruits)

//slice =>rebanadas => migajas de pan => corta el array a partir de la posicion o indice dado y si le pasas dos indices (desde - hasta)
fruits.slice(1)
console.log(fruits.slice(1))



//splice => remover o reemplazar
//1 argumento posicion, 2 argumento es la cantidad,  y el tercero el reemplazo
fruits.splice(1, 2,  "pera", "kiwi")
console.log(fruits)

//concat => toma dos arrays y lo convierte en uno en una nueva variable

const vegetables = ["beans", "Lettuce", "Carrot", "Potato"]

const greenGrocery = fruits.concat(vegetables)
console.log(greenGrocery)

//join=> toma un array y te devuelve un string concatenado con lo que recibe por argumento

console.log(fruits.join())

console.log(fruits.join(""))
console.log(fruits.join(" "))
console.log(fruits.join("/"))

//funcion nativa de string sirve para convertir a array
//split

const names = "Pilar, Vero, Marian, Rocio"
console.log(names.split(","))

// como obtener un elemento aleatorio de un array

const randomElement =(array)=>{
    const index = Math.floor(Math.random()* array.length)
    return array[index]
}

console.log(randomElement(fruits))
console.log(randomElement(fruits))
console.log(randomElement(fruits))
console.log(randomElement(fruits))