// obtenerMenor(numeros)
//Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:

//obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2



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
        //console.log(tragamonedas)
        if(tragamonedas[i] !== tragamonedas[0]){
            return false
        }
    }
    return true
}


// const gano = (tragamonedas)=>{
//     for(let i=0; i<5; i++){
//         //console.log(tragamonedas)
//         return tragamonedas[0]===tragamonedas[1] && tragamonedas[1]===tragamonedas[2] && tragamonedas[2]===tragamonedas[3] && tragamonedas[3]===tragamonedas[4]
//     }
// }

/*
const gano = (arrayTragamonedas) =>{
   for (const moneda of arrayTragamonedas) {
       console.log(moneda[i])
   }
    
}
*/

console.log(gano(['⭐️', '⭐️', '⭐️', '💫', '✨'])) // false
console.log(gano(['💫', '💫', '💫', '💫', '💫'])) // true
console.log(gano(['💫', '💫', '💫', '💫', '💫', '⭐️'])) // true


//estanJuntos(personajes)
//Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:
/*
const estanJuntos=(personajes)=>{
    for (const personaje of personajes){
       
    }
}
*/

 const checkSam = (personajes, i)=>{
     return personajes[i-1] === "Sam" || personajes[i-1] ==="Sam"
 }

 const estanJuntos=(personajes)=>{
     for (let i = 0; i<personajes.length; i++){
         if(personajes[i] === "Frodo" && checkSam(personajes, i)){
             return true
         }
     }
     return false
 }

/*
const estanJuntos=(personajes)=>{
    for (let i = 0; i<personajes.length; i++){
        //console.log(personajes[i])
        if(personajes[i] ==="Frodo" && personajes[i-1]==="Sam" || personajes[i] ==="Frodo"&& personajes[i+1]==="Sam"){
             return true
            
        }else{
            return false
        }
    }
}
*/
console.log(estanJuntos(['Sam', 'Frodo', 'Legolas']))
console.log(estanJuntos(['Aragorn', 'Frodo', 'Frodo']))
console.log(estanJuntos(['Aragorn', 'Frodo','Aragorn', 'Frodo', 'Sam']))
// const estanJuntos=(personajes)=>{
//     const personaje = "Frodo"
//     for(const personaje in personajes){
//         if (personaje==="Frodo"){

//         }
        
//     }
// }


console.log(estanJuntos(['Sam', 'Frodo', 'Legolas']))
//console.log(estanJuntos(['Peter', 'Frodo', 'Legolas'])) //true
//estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
//estanJuntos(['Sam', 'Orco', 'Frodo']) //true


//EJERCICIO 6
//separar(perrosYGatos)
// una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

const separar=(string)=>{
    let newString = ""
    for (const perroString of string){
        if (perroString === "🐶"){
            newString += "🐶"
        //console.log(newString)    
        }
    }
    for (const gatoString of string){
        if(gatoString==="🐱"){
            newString += "🐱"
        }
    }
    return newString
}

console.log(separar('🐶🐱🐶🐱🐱🐶🐶')) // 

// const separar =(string)=>{
//     let nuevoString = ""
//     for (const perroString of string ){
//        if(perroString === "🐶") {
//            nuevoString += "🐶"
//        }
//     }
//     for (const gatoString of string){
//         if (gatoString === "🐱"){
//             nuevoString += "🐱"
//         }
//     }return nuevoString

// }

// MUMUKI TIRA ERROR CON ESTA SOLUCION  join??

console.log(separar('🐶🐱🐶🐱🐱🐶🐶')) // '🐶🐶🐶🐶🐱🐱🐱'

//EJERCICIO 7

//obtenerChatStatus(usuarias)
//Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

//Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
//Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
//Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
//Ejemplo:

const obtenerChatStatus=(usuarias)=>{
    
    const cantidadUsuarias = usuarias.length
    
    for(const usuaria of usuarias){
           
        if (cantidadUsuarias === 1){
           return `${usuaria} está conectada`
        }else if (cantidadUsuarias === 2){
            return `${usuarias[0]} y ${usuarias[1]} están conectadas`
        }else{
            return `${usuarias[0]}, ${usuarias[1]} y ${cantidadUsuarias-2} persona(s) más están conectadas`
        }
    }
    
}

console.log(obtenerChatStatus(['Ada'])) // 'Ada está conectada'
console.log(obtenerChatStatus(['Ada', 'Grace'])) // 'Ada y Grace están conectadas'
console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie', 'Marie', 'Marie','Marie']))

// const obtenerChatStatus=(usuarias)=>{
//     for(const usuaria of usuarias)
//         if 
// }

// const obtenerChatStatus=(usuarias)=>{
//     for (let i = 0; i < 1; i++){
//         `${usuarias[i]} está conectada`
//     }
// }

// const obtenerChatStatus=(usuarias)=>{
//  for (let i=0; i<3; i++){
//      usuarias
//      if (i=0){
//         `${usuarias} está conectada`
//      } else if (i=1){

//      }
//  }
//}
console.log(obtenerChatStatus(['Ada'])) // 'Ada está conectada'
//console.log(obtenerChatStatus(['Ada', 'Grace'])) // 'Ada y Grace están conectadas'
//console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie'])) // 'Ada, Grace y 1 persona(s) más están conectadas'

//germinar(plantines)
//Crear una función germinar que tome como argumento un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:


//const index =(plantines, i)=>{

//}

// const germinar=(plantines)=>{
//     let jardin = ""
       
//    for (let i = 0; i < plantines.length ; i++){
//        if( i === "🌱"){
//         jardin += plantines
//       } else{
//           jardin += plantines
//       }

//       return jardin
//     }
//      for (const plantin of plantines){
//         if (plantin === "🌱"){
//             jardin += plantin.replace(plantines[i-1])
//         }
//     }
// }

const germinar = (plantines)=>{
    let jardin = plantines.split(/(?:)/u)
    for (let i = 0; i<plantines.length; i++){
        if(jardin[i] === "🌱"){
            jardin[i] = jardin [i-1]
        }
}return jardin.join("")

}
/*
const germinar = (plantines)=>{
    let jardin = plantines.split(" ")
    for (let i = 0; i < jardin.length; i++){
        if(jardin[i] === "🌱"){
            for (let j = i-1; j > 0; j--){
                if (jardin[j] !== "🌱"){
                    jardin[i] = jardin[j]
                    console.log(jardin[i])
                    break
                }
            }
        }
}return jardin.join("")
}

*/

//(let i = 0; i<personajes.length; i++)
console.log(germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱')) // '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
////console.log(germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱')) // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
//console.log(germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱')) // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'



// EJERCICIO 9
//comer(plantas)
//Crear una función comer que tome por parámetro un string plantas que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:


// const seccionComidas = (comidas)=>{
//     let sobrevivientes = !comidas.split( "🐰" , "🚫" )
//     return sobrevivientes
// }
const comer = (comidas)=>{
     let nuevasComidas = ""
     
    for (const comida of comidas){
        nuevasComidas += comidas.slice("🐰" , "🚫" )
   
    }return nuevasComidas
 }




 //CZLZS


//console.log(comer('CZLZS'))
console.log(comer('🐰🥕🥬🥕🚫')) // ''
console.log(comer('🥕🥬🐰🥕🥕🥕🚫'))  
//comer('🐰🥕🥬🥕🚫🥕') // '🥕'
//comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷')  '🌱🥕🌱🌷'

//10
//multiplicar(multiplicador, numeros)
//Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

// const multiplicar=(multiplicador, numeros)=>{
//     let newArray = []
//     numeros.forEach(numero =>{
//         newArray = (numero*multiplicador)
        
//     })
//     return newArray
// }

 const multiplicar = (multiplicador, numeros)=>{
   let newArray = []
   for (const numero of numeros){
       newArray.push(numero*multiplicador) 
    }
    return newArray
 }
console.log(multiplicar(2, [5, 7, 15, 22, 40])) // [10, 14, 30, 44, 80]
//multiplicar(10, [2, 5, 77]) // [20, 50, 770]


//EJERCICIOS 11

//filtrarPorLongitudMayorA(longitud, palabras)
//Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:


const filtrarPorLongitudMayorA=(longitud, palabras)=>{
    let strPalabrasMayor = []
    for(const palabra of palabras){
        // let array = palabra.length < longitud
            if(palabra.length > longitud){
                strPalabrasMayor.push(palabra)
            } 
    }return strPalabrasMayor

}
console.log(filtrarPorLongitudMayorA(4, [
  'dia',
  'remolacha',
  'azul',
  'sorpresa',
  'te',
  'verde',
])) // ['remolacha', 'sorpresa', 'verde']


//EJERCICIO 12
//recortar(cantidadLetras, palabras)
//Crear una función recortar que tome como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.

const recortar = (cantidadDeLetras, palabras)=>{
    let palabrasRecortadas = []
    for(const palabra of palabras){
        palabrasRecortadas.push(palabra.slice(0,cantidadDeLetras))
    }return palabrasRecortadas
}

console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])) // ['eleft', 'dino' 'chocolate', 'avio', 'amer']
console.log(recortar(1, ['algoritmo', 'bug', 'compilador'])) // ['a', 'b', 'c']


//EJERCICIO 13
//sonIguales(a, b)
//Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.

const sonIguales = (a, b)=>{
    if(a.length !== b.length){
        return false
    }
    for(let i=0; i < a.length; i++){
        for(let j=0; j < b.length; j++ ){
            if (a[i] !== b[j]){
                return false
            }else{
                return true
            }
            
        }
        
    }
}
console.log(sonIguales([10, 25, 6, 33, 48, 105], [10,20, 25, 6, 33, 48, 105]))
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])) // true
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])) // false
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])) // false

/*
const sonIguales = (a, b)=>{
    for(let i=0; i < a.length; i++){
        for(let j=0; j < b.length; i++ ){
            if(a.length === b.length && a[i]=== b[j]){
                return true
            }else{
                return false
            }
        }
        
    }
}
*/
console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])) // true
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])) // false
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])) // false

/*
const sonIguales = (a,b)=>{
    let i = a.length
    while (i--) {
        if (a[i] !== b[i]) return false;
      }
      return true;

}
*/



//console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])) // true
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])) // false
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])) // false

// EJERCICIO 14
//obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB)
//Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

const obtenerResultado = (jugadoraA, jugadoraB, puntajesA, puntajesB) =>{
    let ganadora = ""
    let puntosA = 0
    let puntosB = 0
    let largoA = puntajesA.length 
    let largoB = puntajesB.length
    if (largoA = largoB){
        for (let i = 0; i < largoA; i++ ){
            if (puntajesA[i] = puntajesB[i]){
                return puntosA += puntosA + 0 ,  puntosB += puntosB + 0
            }else if (puntajesA[i] > puntajesB[i]){
                return puntosA += puntosA + 1
            }else{
                puntosB += puntosB + 1
                
            }
            if (puntosA > puntosB){
                return ganadora += jugadoraA
            }else if (puntosA < puntosB){
                return ganadora += jugadoraB
            }else{
                 return `Empate`
            }
        }
    }
    
}

//.log(obtenerResultado(puntosA))
console.log(obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3])) // Ada)