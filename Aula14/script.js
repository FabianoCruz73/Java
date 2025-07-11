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
    const gradeItems = document.querySelector(".grade-itens") // vai manipular o html com as informações do API
    // salvar a url
    const url = "https://68670813e3fefb261edd8c34.mockapi.io/api/produtos";
    // trazer as informações para o meu javascript
    const resposta = await fetch(url)
    // separar somente o corpo da requisição
    const dados = await resposta.json()
    console.log(dados)
    gradeItems.innerHTML = ""
    
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
            <button class="botao-deletar" onclick="removerProduto('${produto.id}')">DELETAR</button>
        </section>`
    });
}
CarregarProdutos()

// --- Nova funcionalidade: Cadastro de produto ---

async function adicionarProduto() {
    // pegar o valor do primeiro input (nome do produto)
    const nomeProduto = document.querySelector("#nomeProduto").value;
    // pegar o valor do segundo input (preço do produto)
    const precoProduto = document.querySelector("#precoProduto").value;
    // pega o valor do terceiro input (url da imagem)
    const imagemProduto = document.querySelector("#imagemProduto").value;

    // construir o objeto
    let objeto = {
    "nome":nomeProduto, // Isso é um elemento HTML <input>, não o texto digitado
    "preco":precoProduto, // Isso é um elemento HTML <input>, não o número digitado
    "imagem":imagemProduto // Isso é um elemento HTML <input>, não a URL digitada
    }

    // aqui em baixo salva a sua url
    const url = "https://68670813e3fefb261edd8c34.mockapi.io/api/produtos";

    // Traga as informações de sua url para o seu projeto com fetch()
    const resposta = await fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(objeto)
    })

    // Limpar os campos do formulário após o cadastro (opcional, mas boa prática)
    document.querySelector("#nomeProduto").value = "";
    document.querySelector("#precoProduto").value = "";
    document.querySelector("#imagemProduto").value = "";

    fecharFormulario()
    CarregarProdutos()
}

// remover produto
async function removerProduto(id) {
    const url = `https://68670813e3fefb261edd8c34.mockapi.io/api/produtos/${id}`
    const response = await fetch(url,{
        method:"DELETE",

    })

    alert("Produto deletado com sucesso")
    CarregarProdutos()
    
}