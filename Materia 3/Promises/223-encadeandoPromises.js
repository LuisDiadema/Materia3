// Simulando um pedido de uma loja online.

console.log('-- Bem-vindo --')

let novoPedido = new Promise (( resolve, reject ) => {
    console.log('Estamos criando seu novo pedido')

    setTimeout(() =>{
        let pedido = true;
        
        if (pedido) {
            console.log('Pedido confirmado com sucesso!')
            resolve({ confirmation: true, payment: 'WATING' })
        } else {
            console.log('Falha ao confirmar o pedido')
            reject({confirmation: false, payment: 'WAITING'})
        }

    }, 3000)
})

let pagamento =  new Promise (( resolve , reject ) => {

    setTimeout(() => {
        console.log('Aguardando aprovação de pagamento do cartão')

        let pagamentoConfirmado = true;

        if (pagamentoConfirmado) {
            console.log('Sucesso ao realizar o pagamento!')
            resolve({ confirmation: true, payment: 'APPROVED'})
        }
            else {
                console.log('Falha ao confirmar o pagamento')
                 reject ({ confirmation: false, payment: 'REFUSED'})
            }
    }, 3000)
})

const pedidoFinalizado = novoPedido
    .then((pedido) => {
        console.log(pedido)
        return pagamento(pedido)
    })
    .catch((error) => {
        console.log(error)
        return 'Falhar ao processar o pedido'
    })

pagamento
    .then((pagamento) => {
        console.log(pagamento)
        console.log('Pagamento realizado com sucesso, Estamos separando seus produtos')
    })
    .catch((error) => {
        console.log(error)
        console.log('Gostaria de tentar novamente ?')
    })
