function calcular() {
    const anonascimento = Number(document.getElementById("nascimento").value)
    const anoatual = 2025
    const paragrafo = document.getElementById("resultado")
    paragrafo.innerHTML = anoatual - anonascimento
}