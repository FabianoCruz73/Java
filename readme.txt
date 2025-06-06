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



