const saludar=(nombre)=>{
    return `Hola!!! ${nombre}`
}


const amigos = ["Eliana", "Guadalupe", "Nicolás", "Pamela"]
console.log(amigos[2])

const mostrarAmigos = (amigos)=>{
    for (const amigo of amigos){
        console.log(amigo)
    }
}

mostrarAmigos(amigos)
//recorrer el array que reciba por argumento y retorne un string con la primer letra de cada nombre
const primeraLetra= (amigos)=>{
    let letras = ""
    for (const amigo of amigos){
        letras += amigo[0]
    }
    return letras
}

console.log(primeraLetra(amigos))

//crear una funcion que reciba un array de numeros y retorne el mismo pero con los numeros duplicados

const duplicarNumeros=(numeros)=>{
    let numerosDuplicados= []
    for (const numero of numeros){
        numerosDuplicados.push(numero*2)
    }
    return numerosDuplicados
}
console.log(duplicarNumeros([2,3,10,40]))


//Crear una funcion que reciba un array de puntajes, y si el puntaje es superior a 200, entonces agregarle un bonus de 50

const puntajes = [100, 145, 200, 220, 25, 300]

const puntajebonus=(puntajes)=>{
    let nuevosPuntajes = []
    for (const puntaje of puntajes){
        if(puntaje>=200){
            nuevosPuntajes.push(puntaje +50)
        }else{
            nuevosPuntajes.push(puntaje)
        }
    }
    return nuevosPuntajes
}
console.log(puntajebonus(puntajes))