// Função para abrir o formulário
function abrirFormulario() {
document.querySelector("#modalCadastroProduto").style.display = "block"
}
// Função para fechar o formulário
function fecharFormulario() {
document.querySelector("#modalCadastroProduto").style.display = "none"
}
// Fechar o modal se o usuário clicar fora da caixa de conteúdo
window.onclick = function (evento) {
if (evento.target == document.querySelector("#modalCadastroProduto"))
    fecharFormulario();
}

// Funçao para consumir os dados do backend
async function CarregarProdutos () {
    const gradeItems = document.querySelector(".grade-itens")
    const url = "https://68670813e3fefb261edd8c34.mockapi.io/api/produtos";
    const resposta = await fetch(url)
    const dados = await resposta.json()
    console.log(dados)
    
    dados.forEach(produto => {
        let numero = Number(produto.preco)
        numero = numero.toFixed(2)
        numero = String(numero).replace(".",",")
        gradeItems.innerHTML +=
        `<section class="cartao-item">
            <img src="${produto.Imagem}" alt="Item 1" />
            <h3>"${produto.nome}"</h3>
            <p class="preco-item">R$${numero}</p>
            <button class="botao-comprar">Comprar</button>
        </section>`
    });
}
CarregarProdutos()

// --- Nova funcionalidade: Cadastro de produto ---

// Obter o formulário
const formCadastroProduto = document.getElementById("formCadastroProduto");

// Adicionar um ouvinte de evento para o envio do formulário
formCadastroProduto.addEventListener("submit", async function (evento) {
    evento.preventDefault(); // Impede o envio padrão do formulário

    // Coletar os dados do formulário
    const novoProduto = {
        nome: document.getElementById("nomeProduto").value,
        preco: parseFloat(document.getElementById("precoProduto").value), // Converte para número
        Imagem: document.getElementById("imagemProduto").value // "Imagem" com 'I' maiúsculo conforme sua API
    };

    const url = "https://68670813e3fefb261edd8c34.mockapi.io/api/produtos";

    try {
        const resposta = await fetch(url, {
            method: "POST", // Define o método como POST para criar um novo recurso
            headers: {
                "Content-Type": "application/json", // Indica que estamos enviando JSON
            },
            body: JSON.stringify(novoProduto), // Converte o objeto JavaScript para uma string JSON
        });

        if (!resposta.ok) {
            throw new Error(`Erro ao cadastrar produto! status: ${resposta.status}`);
        }

        const produtoCadastrado = await resposta.json();
        console.log("Produto cadastrado com sucesso:", produtoCadastrado);

        // Fechar o modal após o cadastro
        fecharFormulario();

        // Recarregar a lista de produtos para exibir o novo item
        await CarregarProdutos();

        alert("Produto cadastrado com sucesso!"); // Feedback para o usuário

    } catch (erro) {
        console.error("Erro ao cadastrar produto:", erro);
        alert("Ocorreu um erro ao cadastrar o produto. Por favor, tente novamente."); // Feedback de erro
    }
});
