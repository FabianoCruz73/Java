Aulas de javascript 
https://dontpad.com/519-27-03
https://dontpad.com/519-27-03/anotacoes
link do material 
https://docs.google.com/document/d/1aBWrCiAeXuHqVcDdRsHoC_8jyGqVIe15tobZwNl8ReQ/edit?tab=t.72vz2g3jy4ee
atalhos vs code
https://docs.google.com/document/d/1KdvExw5LI2lgL6EIuNTtZCiSvDHKob-AU8iQLQo0QyY/edit?tab=t.0#heading=h.82v803fyp8px

Turma no nosso classroom
https://classroom.google.com/c/NzcxMzYzNzcwOTkw?cjc=zbxcbbgq

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Javailson scripton (javascript ) É uma linguagem de programação -->




    <script>

        // Armazenamento 
        // Processamento

       
    
    </script>
    
</body>
</html>

==========================================


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Javailson scripton (javascript ) É uma linguagem de programação -->




    <script>

        // Armazenamento 
        // Processamento

        let nome = prompt("Digite seu nome:")
        console.log("Olá, "+ nome+ " Seja bem vindo ao Javascript!")
        console.log(`Olá ${nome} Seja bem vindo ao Javascript`)  
        console.log('Olá ${nome} Seja bem vindo ao Javascript')
      

        // Para utilizar o template string
        // sempre utilizar craze (não funciona com aspas)
        // O Valor de variável ira ficar logo dentro da estrutura a seguir o ${}
    </script>
    
</body>
</html>


====================================


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  
    <button id="botao" >Mudar cor</button>



    <script>
        const botao = document.querySelector("#botao")
        const body = document.querySelector("body")

        //
        botao.addEventListener("click",()=>{
            body.style.background = "black"
        })

      
    </script>
    
</body>
</html>

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Aula 02 03/04/2025

https://dontpad.com/519-03-04
https://dontpad.com/519-03-04/anotacoes

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Aula 03 10/04/2025

https://dontpad.com/519-10-04
https://dontpad.com/519-10-04/anotacoes

Turma no nosso classroom
https://classroom.google.com/c/NzcxMzYzNzcwOTkw?cjc=zbxcbbgq
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Aula 08 e 09

LINK DO MATERIAL DA AULA DA SEMANA PASSADA:
https://docs.google.com/document/d/1Adc58qkBSVbM0vSWLthTWQ6-53NQPQQTc8s5olu72pM/edit?usp=sharing

LINK DO MATERIAL AULA DIA 29 DE MAIO (HOJE):
https://docs.google.com/document/d/1i8wk0serPQ2TEzrjP-50UL4U3uGkmgYx7EYAqMahuVY/edit?usp=sharing

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Aula 10

Booaaaaa noiteeeeee

token da aula de hoje : 5448
https://dontpad.com/519-05-06

material de DOM
https://docs.google.com/document/d/1EuXGRudil_hBr1_t-XhMT3F7Tz4jjOxnJEYS71sbCO4/edit?usp=sharing

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;

        }
    </style>
</head>
<body>
    <!-- Crie uma lógica que ligue e desligue a lampada conforme o mouse passar em cima dela.
        - Se ela estiver ligada, desligue
        - se ela estiver desligada, ligue  
    -->
    <img id="lampada" src="https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/desligada.jpg" 
    
    onclick="acender()"
    
    >
    
    <script>

        


        function acender(){
            // primeiro passo  -> pegar o elemento
            let imagem = document.getElementById('lampada')
            // segundo passo -> alterar o source

            imagem.src = "https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/ligada.jpg"
        }

  

    </script>
</body>
</html>

"https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/desligada.jpg"
"https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/ligada.jpg"

Atividade

- Associar ao evento de onmouseenter na imagem uma função acender
	-- 	selecionar a imagem 
	--   	trocar o valor de src para o link da lampada ligada

 - Associar ao evento de onmouseleave na imagem uma função apagar 

- Associar ao evento de onmouseover na imagem uma função acender
	-- 	selecionar a imagem 
	--   	trocar o valor de src para o link da lampada desligada

=====================================================================================================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;

        }
    </style>
</head>
<body>
    <!-- Crie uma lógica que ligue e desligue a lampada conforme o mouse passar em cima dela.
        - Se ela estiver ligada, desligue
        - se ela estiver desligada, ligue  
    -->
    <img id="lampada" src="https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/desligada.jpg" 
    
    onmouseenter="acender()"
    onmouseleave="apagar()"
    
    >
    
    <script>
        


        function acender(){
            // primeiro passo  -> pegar o elemento
            let imagem = document.getElementById('lampada')
            // segundo passo -> alterar o source

            // imagem.src = "https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/ligada.jpg"

            imagem.setAttribute("src","https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/ligada.jpg")

        }
        function apagar(){
            // primeiro passo --> selecionar o elemento
            let imagem  = document.getElementById("lampada")
            // segundo passo --> alterar o caminho da imagem
            imagem.src = "https://fernandoleonid.github.io/mini-projetos-js/01-lamp/img/desligada.jpg"
            
        }

  

    </script>
</body>
</html>

====================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="nome" placeholder="Digite seu nome:">

    <button id="botao" onclick="CadastrarUsuario()">Cadastrar</button>

    <div id="resultado">

    </div>

    <script>
        let usuarios = ["Gabriel"]
        const inputNome = document.getElementById("nome") 
        const botao = document.getElementById("botao")
        const resultado = document.getElementById("resultado")
        
        function CadastrarUsuario (){
            let nome = inputNome.value 
            usuarios.push(nome)
            mostrarUsuarios()
            // Reseta o input dps de cadastrar 
            inputNome.value = ""
            // volta o foco para o campo
            inputNome.focus()

        }

        function mostrarUsuarios(){
            resultado.innerHTML = ""
            for(usuario of usuarios){
                resultado.innerHTML += usuario + "<br>"
            }
        }
        mostrarUsuarios()
    </script>
    
</body>
</html>
============================================================================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="criarElementos()" id="botao">Criar</button>

    <ul id="resultado">
        <li>Primeiro</li>
        

    </ul>
    <h1 id="titulo">Elemento titulo</h1>

    <script>
        const botao = document.getElementById("botao")
        const resultado = document.getElementById("resultado")
        const titulo = document.getElementById("titulo")


        titulo.addEventListener("click",(event)=>{
            titulo.remove()
        })


        function criarElementos(){
            const li = document.createElement("li")
            const titulo = document.createElement("h1")

            titulo.textContent = "Ola mundo"
            li.textContent = "Outro"
            
            resultado.appendChild(li)
            resultado.appendChild(titulo)

        }
        
    </script>

</body>
</html>
========================================================================

Façam um sistema de cadastro de usuários baseado no html a seguir, implemente uma maneira de que, ao clicar no botão remover de cadas usuário, ele seja excluído do campo de visão

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="nome" placeholder="Digite seu nome:">

    <button id="botao" onclick="CadastrarUsuario()">Cadastrar</button>

    <div id="resultado">

    </div>

    
    <script>
        let usuarios = ["Gabriel"]
        const inputNome = document.getElementById("nome") 
        const botao = document.getElementById("botao")
        const resultado = document.getElementById("resultado")
        
        function CadastrarUsuario (){
            let nome = inputNome.value 
            usuarios.push(nome)
            mostrarUsuarios()
            // Reseta o input dps de cadastrar 
            inputNome.value = ""
            // volta o foco para o campo
            inputNome.focus()

        }

        function mostrarUsuarios(){
            resultado.innerHTML = ""
            for(usuario of usuarios){
                resultado.innerHTML += `<li>${usuario} <button>Excluir</button></li>`
            }
        }
        mostrarUsuarios()
    </script>
    
</body>
</html>
=================================================================================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="nome" placeholder="Digite seu nome:">

    <button id="botao" onclick="CadastrarUsuario()">Cadastrar</button>

    <div id="resultado">

    </div>

    
    <script>
        let usuarios = ["Gabriel"]
        const inputNome = document.getElementById("nome") 
        const botao = document.getElementById("botao")
        const resultado = document.getElementById("resultado")
        
        function CadastrarUsuario (){
            let nome = inputNome.value
            usuarios.push(nome)
            mostrarUsuarios()
            // Reseta o input dps de cadastrar 
            inputNome.value = ""
            // volta o foco para o campo
            inputNome.focus()

        }

        function excluirUsuario(usuario){
            
            
            let indice = usuarios.indexOf(usuario)
            usuarios.splice(indice,1)
            mostrarUsuarios()

        }


        function mostrarUsuarios(){
            resultado.innerHTML = ""
            for(usuario of usuarios){
                resultado.innerHTML += `<li>${usuario} <button onclick="excluirUsuario('${usuario}')">Excluir</button></li>`
            }
            
        }
        mostrarUsuarios()
    </script>
    
</body>
</html>	

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Aula 11

Boa noiteeeeeeeee

Feliz dia dos namorados!

token de hoje:6911

material de consumo de api
https://docs.google.com/document/d/1oAWobOZW2f_8i0y1dO2BpXDrY8sEtL2sSh2myaTKDc0/edit?usp=sharing

material da ultima aula 
https://dontpad.com/519-05-06

MATERIAL DA AULA DE HOJE DE DOM
https://docs.google.com/document/d/1EuXGRudil_hBr1_t-XhMT3F7Tz4jjOxnJEYS71sbCO4/edit?usp=sharing

LINK DA TURMA NO MEET 
https://classroom.google.com/c/NzcxMzYzNzcwOTkw?cjc=zbxcbbgq


DOM ---> MANIPULAR HTML ATRAVES DO JS


EVENTOS ---> Fenômenos que acontecem na minha página

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <h1 >Ola mundo</h1>
    <p id="paragrafo" onclick="aumentarTamanho()">Isso é um texto</p>

    <script>
        // 1º passo selecionar o elemento que eu quero manipular
        let titulo = document.querySelector("h1")
        let paragrafo = document.querySelector("#paragrafo")
        

        
        // textContent armazena o texto da tag
     
        // 2º passo principal construo a função para ser associada ao evento 
        
        function aumentarTamanho(){
            paragrafo.style.background = "red"
            paragrafo.style.fontSize = "50px"
        }

    </script>
</body>
</html>
================================================================================


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Define Par ou Impar</h1>
    <label for="">numero</label>
    <input type="text" id="numero">

    <button onclick="analisarPar()">Analisar</button>

    <div id="resultado">
        <p>Resultado</p>
    </div>

    <script>
        let numero = document.querySelector("#numero")
        let resultado = document.querySelector("#resultado")

        function analisarPar(){
            resultado.innerHTML = ""
            let valor_numero = Number(numero.value )
            console.log(valor_numero)
            if(valor_numero % 2 == 0){
                resultado.innerHTML += "Par"
            }else{
                resultado.innerHTML += "Impar"

            }
        }


    </script>

    
</body>
</html>
===================================================================================
Faça um algoritmo que receba dois números atraves do input do html e retorne em uma div com id resultado o valor da soma destes dois números 

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soma de Números</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(to right, #74ebd5, #acb6e5);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background-color: white;
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            text-align: center;
            width: 300px;
        }

        h1 {
            margin-bottom: 20px;
            color: #333;
        }

        input[type="number"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            font-size: 16px;
            border-radius: 8px;
            border: 1px solid #ccc;
        }

        button {
            background-color: #4CAF50;
            color: white;
            padding: 12px 20px;
            font-size: 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #45a049;
        }

        #resultado {
            margin-top: 20px;
            font-size: 20px;
            color: #333;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Calculadora de Soma</h1>
        <input type="number" id="numero1" placeholder="Digite o primeiro número">
        <input type="number" id="numero2" placeholder="Digite o segundo número">
        <button id="botao">Somar</button>
        <div id="resultado"></div>
    </div>

    <script>
        let numero1 = document.querySelector("#numero1")
        let numero2 = document.querySelector("#numero2")
        let resultado = document.querySelector("#resultado")
        let botao = document.querySelector("#botao")

        botao.addEventListener("click", () => {
            let soma = Number(numero1.value) + Number(numero2.value)
            resultado.innerHTML = `Resultado: ${soma}`
        })
    </script>
</body>
</html>

================================================================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>LIsta Tarefas</h1>
    <input type="text" placeholder="Digite uma nova tarefa" id="tarefa">


    <ul id="lista">
        

    </ul>
    <button id="botao">Adicionar</button>

 
<script>
    let tarefasLs = localStorage.getItem("Tarefas")
    let conversaoTarefas = JSON.parse(tarefasLs)
    console.log(conversaoTarefas)
   
    let lista = document.querySelector("#lista")
    let tarefaInput = document.querySelector("#tarefa")

    let botao = document.querySelector("#botao")

    // ADICIONAR UM ESCUTADOR DE EVENTOS
    // botao.addEventListener("click",()=>{
    //     let tarefa = tarefaInput.value 
    //     tarefas.push(tarefa)
    //     carregarTarefas()

    // })
    function carregarTarefas(){
        lista.innerHTML = ""
        
        for (tarefa of conversaoTarefas){
            let li = document.createElement("li")
            li.textContent = tarefa 
            lista.appendChild(li)
        }
    }
    carregarTarefas()
</script>
</body>
</html>
==================================================================================

Localstorage é um armazenamento local no navegador
- o navegador somente armazena JSON
- Para salvar um elemento no local storage precisamos converter um objeto ou um array para JSON ---> JSON.stringify()
- para salvar --> setItem(chave,valor) ---> VALOR TEM QUE ESTAR EM JSON
- para recolher ou pegar os elementos podemos utilizar o getItem(chave)
- 

-------------------

Salvem 5 tarefas no LocalStorage
- pegar as tarefas de volta com getItem

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let produtos = ["Chocolate","MOrango","pastel de flango"]
        let novo = localStorage.setItem("produtos",JSON.stringify(produtos))
        let chocolate = localStorage.getItem("Item1")
        console.log(chocolate)
    </script>
</body>
</html>

=========================================================================================================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>LIsta Tarefas</h1>
    <input type="text" placeholder="Digite uma nova tarefa" id="tarefa">


    <ul id="lista">
        

    </ul>
    <button id="botao">Adicionar</button>

 
<script>
    // tras as tarefas que estão como JSON n    o localstorage e transofrma para um array tarefas -->ls significa localstorage

    let tarefasLs = (localStorage.getItem("Tarefas").split(","))
    console.log(tarefasLs)
    console.log(typeof(tarefasLs))


    let lista = document.querySelector("#lista")
    let tarefaInput = document.querySelector("#tarefa")

    let botao = document.querySelector("#botao")

    botao.addEventListener("click",()=>{
        let tarefa = tarefaInput.value 
        tarefasLs.push(tarefa)
        alert("Tarefa Adicionada com sucesso!")
        localStorage.setItem("Tarefas",JSON.stringify(tarefasLs))
        carregarTarefas()
    })

    function carregarTarefas(){
        lista.innerHTML = ""
        
        for (tarefa of tarefasLs){
            let li = document.createElement("li")
            li.textContent = tarefa 
            lista.appendChild(li)

        }


    }
    carregarTarefas()
</script>
    
</body>
</html>

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Aula 12

https://dontpad.com/519-26-06

Boa noiteeeeeeee



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta de CEP</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f7fa;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            color: #333;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #2c3e50;
        }

        input {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 16px;
            transition: all 0.3s ease;
        }

        input[type="number"] {
            -moz-appearance: textfield;
        }

        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        input:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }

        input[readonly] {
            background-color: #ecf0f1;
            cursor: not-allowed;
        }

        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            margin-bottom: 20px;
        }

        button:hover {
            background-color: #2980b9;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 500px;
        }

        @media (max-width: 600px) {
            .container {
                padding: 20px;
            }
            
            input, button {
                padding: 10px 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <label for="cep">CEP</label>
        <input type="number" id="cep">

        <button id="botao" onclick="carregarCEP()">Buscar CEP</button>

        <div>
            <label for="rua">Rua</label>
            <input type="text" id="rua" readonly>
        </div>
        <div>
            <label for="city">Cidade</label>
            <input type="text" id="city" readonly>
        </div>
        <div>
            <label for="uf">UF</label>
            <input type="text" id="uf" readonly>
        </div>
    </div>

    <script>
        const ruaInput = document.querySelector("#rua")
        const cityInput = document.querySelector("#city")
        const UFInput = document.querySelector("#uf")
        async function carregarCEP(){
            const cepInput = document.querySelector("#cep").value 
            const url = `https://viacep.com.br/ws/${cepInput}/json/`
            const response = await fetch(url)
            const data = await response.json()
            ruaInput.value = data.logradouro
            cityInput.value = data.localidade
            UFInput.value = data.estado
        }
        // carregarCEP()
    </script>
</body>
</html>
==============================================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta de CEP</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f7fa;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            color: #333;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #2c3e50;
        }

        input {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 16px;
            transition: all 0.3s ease;
        }

        input[type="number"] {
            -moz-appearance: textfield;
        }

        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        input:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }

        input[readonly] {
            background-color: #ecf0f1;
            cursor: not-allowed;
        }

        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            margin-bottom: 20px;
        }

        button:hover {
            background-color: #2980b9;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 500px;
        }

        @media (max-width: 600px) {
            .container {
                padding: 20px;
            }
            
            input, button {
                padding: 10px 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <label for="cep">CEP</label>
        <input type="number" id="cep">

        <button id="botao" onclick="carregarCEP()">Buscar CEP</button>

        <div>
            <label for="rua">Rua</label>
            <input type="text" id="rua" readonly>
        </div>
        <div>
            <label for="city">Cidade</label>
            <input type="text" id="city" readonly>
        </div>
        <div>
            <label for="uf">UF</label>
            <input type="text" id="uf" readonly>
        </div>
    </div>

    <script>

        const ruaInput = document.querySelector("#rua")
        const cityInput = document.querySelector("#city")
        const UFInput = document.querySelector("#uf")
        
        async function carregarCEP(){
        
            const cepInput = document.querySelector("#cep").value 
            const url = `https://cep.awesomeapi.com.br/json/${cepInput}

`
            
            try{
                const response = await fetch(url)
                const data =  await response.json()
                console.log(data)
                if (response.status != 200){
                    throw new Error ("Erro ao fazer a requisição")
                }
                // ruaInput.value = data.logradouro
                // cityInput.value = data.localidade
                // UFInput.value = data.estado
                
            }catch(e){
                console.log(`Erro na requisição ${e.message} `)
            }
        }
        // carregarCEP()
    </script>
</body>
</html>

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Aula 13

https://mockapi.io/
logar com o github

BOa noiteeeeeeeee

mockapi.io

link da api do professor 
https://686707eae3fefb261edd8b97.mockapi.io/api/produtos

https://classroom.google.com/c/NzcxMzYzNzcwOTkw/m/Nzg4NjE5NzE5MzY4/details

link da nossa turma do classroom
https://classroom.google.com/c/NzcxMzYzNzcwOTkw?cjc=zbxcbbgq

zbxcbbgq


material da aula de hoje
https://drive.google.com/file/d/1p5X0KNw_yU8CXeq_AcvXFzjihNycp91O/view?usp=sharing

===============================
 Aula 16 - final

Projeto
https://www.notion.so/E-commerce-com-Local-Storage-1cd2e74cf89380d2b348efc92120d01d?source=copy_link

