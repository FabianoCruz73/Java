// 1 - baseado no Código acima faça um algoritmo que receba um número e defina se ele é positivo negativo ou nulo

// Estrutura Função


function define_numero(numero) {
    let resultado = ""
    if (numero > 0) {
        resultado = "Positivo"
    } else if (numero < 0) {
        resultado = "Negativo"
    } else {
        resultado = "Nulo"
    }
    return resultado
}

let numero = parseInt(prompt("Insira um número:"))
console.log(define_numero(numero))