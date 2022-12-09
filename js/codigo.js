/* Numero aleatorio dentro de un rango personalizado
const generarAleatoio = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
} */

// Generador de Passwords
let resultado = document.getElementById('nodopassword') 

let numeros = "0123456789"
let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let simbolos = "<>,;.:-_+*!$%&/()=?¿"
let todo = numeros + letras + simbolos

const generarPassword = (longitud) => {
    let password = ""
    for(let x = 0; x < longitud; x++) {
        let aleatorio = Math.floor(Math.random() * todo.length)
        password += todo.charAt(aleatorio)
    }
    return password
}

resultado.innerHTML = generarPassword(10)
