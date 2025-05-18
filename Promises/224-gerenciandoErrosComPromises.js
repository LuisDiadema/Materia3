// Sintaxe de uma básica de uma Promise.

// Promise()
//     .then(() => faz alguma coisa)
//     .catch((error) => lidar com esse error)

// Tratando erros em Promises com .catch.

console.log('-- Bem-vindo ao DB --')

let dataBaseSearch = new Promise ((resolve, reject) => {
    console.log('Iniciando busca de Dados: ./')

    setTimeout(() => {
    let search = false;

    if (search) resolve ({ Nome: 'Eustaquio', age: 65 })
        else reject ('Infelizmente não foi possível localiza os dados')
    }, 1000)
})

console.log('Aguarde a busca sera concluida em 5 segundo')

dataBaseSearch
    .then((dataBaseSearch) => {
        console.log(dataBaseSearch)
    })
    
// Erro sendo tratato no bloco de codigo abaixo, caso a operação não retorne o esperado
// Uma mensagem é enviada ao úsuario.
    .catch((error) => {
        console.log(error)
        console.log('Gostaria de tentar novamente ?')
    })