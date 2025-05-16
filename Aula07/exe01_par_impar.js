function define_se_e_par(numero) {
  if (numero % 2 == 0) {
    resultado = "Par";
  } else {
    resultado = "Impar";
  }
  return resultado;
}

let numero = parseInt(prompt("Insira um número:"));
console.log(define_se_e_par(numero));
