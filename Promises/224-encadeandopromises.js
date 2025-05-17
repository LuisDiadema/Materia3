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
            reject('Falha ao confirmar o pedido')
        }

    }, 3000)
})

let pagamento = (pedido) => new Promise (( resolve , reject ) => {
    console.log('Aguardando aprovação de pagamento do cartão')

    setTimeout(() =>{
        let pagamentoConfirmado = true;

        if (pagamentoConfirmado) {
            console.log('Sucesso ao realizar o pagamento!')
            resolve({ confirmation: true, payment: 'APPROVED'})
        }
            else {
                 reject ('Falha ao confirmar o pagamento')
            }
    }, 3000)
})

const pedidoFinalizado = novoPedido
    .then((pedido) => {
        console.log(pedido)
        return pagamento(pedido)
    })
    .then((pagamento) => {
        console.log(pagamento)
        console.log('Pagamento realizado com sucesso, Estamos separando seus produtos')
    })
