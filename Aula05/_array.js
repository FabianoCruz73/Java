//armazenar valores
        // Variaveis
        // conseguimos armazenar 1 valor por vez
        // indexada que tem indices (posição)
        //                  0       1        2       3       4
        // let clientes = ["Gabriel","Diego","Thiago","Caio","João"]
        
        // console.log(clientes[2]) // como acessamos elementos no meu array, utilizamos o colchetes para inserir o indice
       
        // console.log(clientes) // exibir os dados do array
        
        // clientes.push("Brad Pitt") // acrescentar um dado ao array
        // console.log(clientes[5])
        // console.log(clientes)

// let usuario = []
// usuario.push("Gabriel")
// console.log(usuario)

let lista_clientes = ["Gabriel","Matheus","Leonardo","Jair","João do Caminhão"]
// console.log(lista_clientes[2])
lista_clientes[2] = "Leozin de cria"
// console.log(lista_clientes[2])
// lista_clientes.splice(1,1)
// console.log(lista_clientes)
let indice = lista_clientes.indexOf("Jair") 
lista_clientes.splice(indice,1)
console.log(lista_clientes)





       