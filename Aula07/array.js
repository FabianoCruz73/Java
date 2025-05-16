let numeros = [-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9,10]


// map pega cada um dos elemento do array e transforma em um novo 
// array transformando conforme a função especificada no map 
// ex: "=>{return numero * numero})"
let quadrados = numeros.map((numero)=>{return numero * numero})
let dobro = numeros.map((numero)=>{return numero * 2})

// for (numero of numeros){
//     console.log(numero)
// }
console.log("Itens do array Ao quadrado")
console.log(quadrados)
console.log("Itens do array dobro")
console.log(dobro)

let nomes = ["gabriel","fabiano","flavia","marina","roberto"]

let maiscula = nomes.map((nomes)=>{return nomes.toUpperCase()})
console.log("alatera os Itens do array em caixa alta")
console.log(maiscula)


let resultado = nomes.map(nome => nome === nomes[1] ? nome.toUpperCase() : nome);
console.log("altera 1 Iten do array em caixa alta")
console.log(resultado)

let pares = numeros.filter((numero)=>{return numero % 2 == 0})
let impares = numeros.filter((numero)=>{return numero % 2 == 1})
let positivospares = numeros.filter((numero)=>{return numero > 0 && numero % 2 == 0})
let positivos = numeros.filter((numero)=>{return numero > 0})
let negativos = numeros.filter((numero)=>{return numero < 0})

console.log("filtra o array numa condição")
console.log(pares)
console.log(impares)
console.log(positivospares)
console.log(positivos)
console.log(negativos)


