 // For é usado quanto temos uma ideia de limite da repetição
// while é utilizado quando não temos um limite bem definido 
// let nomeUser = prompt("Digite seu nome de usuário")
// let senhaUser = prompt("Digite sua senha:")
let numero = 0
let soma = 0
while(numero < 10) {
    numero+=2
    console.log(numero)
    numero % 2 === 0 && (soma += numero)
}

console.log("A soma dos números pares é:", soma);