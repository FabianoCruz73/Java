function multiplicacao(n1,n2){
    let resultado = n1 * n2
    return `O resultado da multiplicação é ${resultado}`
}

let n1 = parseInt(prompt("Insira o primeiro número da multiplicação:"));
let n2 = parseInt(prompt("Insira o segundo número da multiplicação:"));
console.log(multiplicacao(n1,n2));