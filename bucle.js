//bucles - loop

// un bloque de codigo se repite cuantas veces querramos lo cual definimos

// for

//definicion de indice
// 2 - condicion
// 3 -incrementar el indice
for (let i = 0; i < 5; i++){
    //bloque de codigo que se va a repetir
console.log(`iteracion: ${i}`)
}

for (let i = 10; i > 0; i--){
    console.log(`iteracion: ${i}`)  
}

let acc = 0

for (let i = 0; i<10; i++ ){
    acc = acc + 5
    console.log(acc)
}

for (let i = 0; i<3; i++){
    console.log("Hola Ana!!")
    console.log(i)
}

const students = ["Luciana", "Natalia", "Sharime", "Rocio", "Gineska"]

for (let i = 0; i < students.length; i++){
    console.log(students[i])
}

//while - - mientras

/*
let i = 0

while (i<5) {
    //ejecutas este bloque mientras se cumpla la condicion
    console.log("Me ejecute")
    i++
}
*/

// Do While
/*
let i = 0
do{
    console.log("Me ejecuté")
    i++
}while(i<5)

*/

// for of  -- no lleva ninguna condicion lo recorre todo hasta el final y declaro un elemento  la variable es el elemento

for (const student of students){
    console.log(student)
}

const amigos = ["Eliana", "Guadalupe", "Nicolás", "Pamela"]

for (const amigo of amigos){
    console.log(amigo)
}

// for in  /// me muestra el indice // recorre todo el array pero muesta la ubicación

for(const student in students){
    console.log(student)
}

// forEach  -- recorre todo mi array y recibe 1 colback
//puede recibir hasta 3 parametros no solo 1


//array.forEach((element, index, array)=>{})

//elemnt => elemento que recorre
//index => indice del elemento que recorre
// array => el array en si
students.forEach(student =>{
    console.log(student)
})

students.forEach((student, index) =>{
   if (index % 2 === 0){
       console.log(student)
   }
})



