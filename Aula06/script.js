// console.log("Olá Mundo!")
// receba um número e defina se ele é par e depois exiba no terminal

// Estrutura de código normal
// Entrada
let numero = 10
// console.log(10/2) // pega o quociente
// console.log(10%2) // pega o resto

// Processaemnto
let resultado = ""

if (numero % 2 == 0){
    resultado = "Par"
}else{
    resultado = "Impar"
}

// Saída
console.log(resultado)


// Estrutura Função
function define_par(numero){
    let resultado = ""

    if (numero % 2 == 0){
        resultado = "Par"
    }else{
        resultado = "Impar"
    }
    return resultado
}

console.log(define_par(5))
console.log(define_par(10))
console.log(define_par(12))
console.log(define_par(15))
console.log(define_par(20))