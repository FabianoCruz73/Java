function dobro(numero) {
    // Retorna o dobro
    let resultado = numero * 2
    return `o dobro de ${numero} é ${resultado}`
}
let numero = parseInt(prompt("Insira um número:"))
console.log(dobro(numero))
alert(dobro(numero))