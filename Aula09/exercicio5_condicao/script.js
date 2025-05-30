function calcular() {
    const idade = Number(document.getElementById("id").value)
    const estudante = document.getElementById("sn").value
    const paragrafo = document.getElementById("resultado")

    if (idade < 18 || idade >= 65 || estudante == "sim") {

        paragrafo.innerHTML = "Valor do igresso é R$ 10,00"
    }
    else {
        paragrafo.innerHTML = "Valor do igresso é R$ 20,00"
    }
}