// 2 - baseado no Código acima faça um algoritmo que receba um nome e retorne uma mensagem de boas vindas. Exemplo: Ola seja bem vindo {nome}

function boas_vindas(nome) {
    // Retorna a mensagem de boas-vindas
    let resultado = 'Boas vindas'
    return `${resultado}, ${nome}`
}
let nome = prompt("Insira seu nome:")
console.log(boas_vindas(nome))