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


//contiene(numero, numeros)
//Crear una funci´ón contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:


const contiene = (numero, arrayNumeros)=>{
for (const num of arrayNumeros){
    if (num === numero){
        return true
    }
}
return false
}

console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])) // true
console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])) // false




//invertirCaso(string)
//Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

const invertirCaso =(string)=>{
    let newString =""
    for (const letras of string){    
      if(letras === letras.toUpperCase()){
          newString += letras.toLowerCase()
      }else{
         newString += letras.toUpperCase()

      }
    }
    return newString
}
console.log(invertirCaso('Ada Lovelace'))


/*
const invertirCaso=(string)=>{
    if(/[a-z]/.test(string)){
        return string.toUpperCase()
    } else{
     string.toLowerCase()
    }  
    
}
*/

console.log(invertirCaso('Ada Lovelace'))



invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'


//gano(tragamonedas)
//Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.
const gano = (tragamonedas)=>{
    for(let i=0; i<5; i++){
        console.log(tragamonedas)
        return tragamonedas[0]===tragamonedas[1] && tragamonedas[1]===tragamonedas[2] && tragamonedas[2]===tragamonedas[3] && tragamonedas[3]===tragamonedas[4]
    }
}

/*
const gano = (arrayTragamonedas) =>{
   for (const moneda of arrayTragamonedas) {
       console.log(moneda[i])
   }
    
}
*/

console.log(gano(['⭐️', '⭐️', '⭐️', '💫', '✨'])) // false
//gano(['💫', '💫', '💫', '💫', '💫']) // true
//gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true


//estanJuntos(personajes)
//Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

const estanJuntos=(personajes)=>{
    for (const personaje of personajes){
       
    }
}
/*
const estanJuntos=(personajes)=>{
    const personaje = "Frodo"
    for(const personaje in personajes){
        console.log(personaje)
        
    }
}
*/

console.log(estanJuntos(['Sam', 'Frodo', 'Legolas']))
console.log(estanJuntos(['Peter', 'Frodo', 'Legolas'])) //true
//estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
//estanJuntos(['Sam', 'Orco', 'Frodo']) //true


