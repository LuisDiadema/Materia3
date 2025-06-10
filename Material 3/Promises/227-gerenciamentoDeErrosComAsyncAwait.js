console.log('-- Bem-vindo --')

let novoPedido = async () => new Promise (( resolve, reject ) => {
    console.log('Estamos criando seu novo pedido')

    setTimeout(() =>{
        let pedido = false;
        
        if (pedido) {
            console.log('Pedido confirmado com sucesso!')
            resolve({ confirmation: true, payment: 'WATING' })
        } else {
            console.log('Falha ao confirmar o pedido')
            reject({confirmation: false, payment: 'WAITING'})
        }

    }, 1000)
})


let pagamento = async () =>new Promise (( resolve , reject ) => {

    setTimeout(() => {
        console.log('Aguardando aprovação de pagamento do cartão')

        let pagamentoConfirmado = false;

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


// Ultilizando Try e Catch para tratar erros com Async e Await,
// Caso algumas das condições acima seja falsa, ele entra no catch e uma,
// Mensagem é enviado ao úsuario.
try {
const pedidoConfirmado = await novoPedido();
const pagamentoProcessado = await pagamento(pedidoConfirmado);
} catch (error) {
    console.log(error)
    console.log('Não foi possivel finalizar, deseja tentar novamente ?')
}