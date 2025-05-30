function calcular() {
    const numero1 = Number(document.getElementById("n1").value)
    const numero2 = Number(document.getElementById("n2").value)
    const paragrafo = document.getElementById("resultado")
    paragrafo.innerHTML = numero1 + numero2
}