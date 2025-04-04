// print()--> - imprime no terminal do navegador 

console.log("Olá Mundo")

// duas partes proncipais

// Armazenamento

// let nome = "Gabriel" // nome recebe Gabriel
let altura = 1.90 // float

const PI = 3.1415926

//ex:  faça um programa que receba um nome e exiba uma mensagem de boas vindas assim
// Ola [nome] , seja bem vindo --> prompt()

// toda vez que quisermos tomar uma decisão baseado em uma consição, utilizaremos o if

// let nome = prompt("Insira seu nome:")

// if (nome == "Fabiano"){
//     console.log(`Olá ${nome}, seja bem vindo ao software`);
//     let idade = 51
//     console.log(`sua idade é de ${idade} anos`);
// }
// else if (nome == "Gabriel"){
//     console.log(`Olá ${nome}, seja bem vindo champs`);
//     let idade = 20
//     console.log(`sua idade é de ${idade} anos`);
// }
// else {
//     console.log(`Usuário não cadastrado`)
// }

// ex: faça um algoritmo que defina se um número é positivo negativo ou nulo(0)

// let numero = Number(prompt("Insira um número:"))

// if (numero > 0){
//     console.log("Positivo");
// }
// else if (numero < 0){
//     console.log("Negativo")
// }
// else {
//     console.log("Zero")
// }

//ex: Faça um sistema de cadastro que receba nome de usuário e senha, se o nome for admin e a senha for 1234

// let nome = prompt("Insira seu usuário:")
// let numero = Number(prompt("Insira sua senha:"))

// if (nome == "admin" && numero == "1234"){
//     console.log(`Bem vindo usuário, login efetuado`)
// }
// else {
//     console.log("Usuário ou senha incorreta")
// }

//ex: Faça um sistema de votação que receba o nome e a idade de um usuário e se o usuário tiver menos de 16 anos exiba a mensagem , Não é permitido votar com menos de 16 anos, se o usuário tiver 16 ou 17 ou maior de 65 exiba a mensagem , Voto opcional , caso contrário exiba a mensagem de voto obrigatório

let nome = prompt("Insira seu nome:")
let idade = Number(prompt("Insira sua idade:"))

if (idade < "16"){
    console.log("Não é permitido votar com menos de 16 anos")
}
else if (idade == "16" || idade == "17" || idade >= "65"){
    console.log("Voto opcional")
}
else {
    console.log("voto obrigatório")
}