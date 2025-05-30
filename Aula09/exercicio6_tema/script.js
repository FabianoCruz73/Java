function cumprimentar() {
    const horariodigitado = Number(document.getElementById("horario").value)
    const paragrafo = document.getElementById("resultado")
    const body = document.body
    const imagem = document.createElement("img")
    imagem.style.height = "200px"

    if (horariodigitado >= 6 && horariodigitado <= 12) {
        // Depois modifica o texto e o estilo
        paragrafo.innerHTML = "Bom dia"
        body.style.backgroundColor = "#02978c"
        imagem.src = "https://media.istockphoto.com/id/531253600/pt/foto/nascer-do-sol.jpg?s=612x612&w=0&k=20&c=XUNoWzkyJcXLIo_Wh1oBP_n6RAEN05hR_5YYobc9cUQ="
        // Por último, adiciona a imagem ao parágrafo
        paragrafo.appendChild(imagem)
    }
    else if (horariodigitado >= 12 && horariodigitado <= 18) {
        paragrafo.innerHTML = "Boa tarde"
        body.style.backgroundColor = "#FFA500"
        imagem.src = "https://www.shutterstock.com/image-photo/blue-sky-white-fluffy-clouds-260nw-2022473057.jpg"
        // Por último, adiciona a imagem ao parágrafo
        paragrafo.appendChild(imagem)
    }
    else {
       paragrafo.innerHTML = "Boa noite"
        body.style.backgroundColor = "#05378c"
        imagem.src = "https://static.vecteezy.com/ti/fotos-gratis/t1/8440112-paisagem-noite-em-fprest-com-lua-cheia-e-nuvens-foto.jpg"
        // Por último, adiciona a imagem ao parágrafo
        paragrafo.appendChild(imagem) 
    }
}

