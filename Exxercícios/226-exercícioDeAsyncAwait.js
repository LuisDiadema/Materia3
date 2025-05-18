console.log('-- Bem-vindo --')

// Adicionando Asyncy ao código.
let novoPedido = async () => new Promise (( resolve, reject ) => {
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

    }, 1000)
})

// Adicionando Asyncy ao código.
let pagamento = async () =>new Promise (( resolve , reject ) => {

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
    }, 1000)
})


// Finalizando o código com Await fazendo com que ele fique mais legivel e 
// e mais fácil de ser entendido.
const pedidoConfirmado = await novoPedido();
const pagamentoProcessado = await pagamento(pedidoConfirmado);