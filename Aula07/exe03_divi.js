// 3 - Faça uma função que divisão dois números e retorne o resultado no terminal

function divisao(n1,n2){
    let resultado = n1 / n2
    return `O resultado é ${resultado}`
    }

let n1 = parseInt(prompt("Insira o primeiro número da divisão:"));
let n2 = parseInt(prompt("Insira o segundo número da divisão:"));
console.log(divisao(n1,n2));