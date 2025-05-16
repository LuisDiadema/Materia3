// Exemplo pratico que como funcina Promise

let caderno = new Promise ((resolve, reject) => {
    let compra = true;

    if (compra) resolve (console.log('Caderno comprado'))
         else reject (console.log('Falha ao comprar caderno'))
})

caderno

// Seguindo o mesmo exemplo de acima

console.log('Eu: preciso de um caderno para meus estudos')

let cadernoDeEstudos = new Promise ((resolve, reject) => {
    console.log('Amigo: eu posso ir comprar um para você')

    setTimeout (() => {
        let comprar = false;

            if (comprar) resolve (console.log('Amigo: aqui está seu caderno'))

        else reject (console.log('Amigo: a loja estava fechada'))
    
    }, 5000);
})

console.log('Eu: vou continuar os estudos enquanto aguardo meu amigo voltar')

cadernoDeEstudos
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.log(erro))