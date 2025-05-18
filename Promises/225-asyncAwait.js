// Sintaze básica do Async e Await abaixo.
// const buscarDado = async () => new Promise(...);
// const buscaConcluida = await buscarDado();



console.log('-- Bem-vindo ao DB --')

let dataBaseSearch = async() => new Promise ((resolve, reject) => {
    console.log('Iniciando busca de Dados: ./')

    setTimeout(() => {
    let search = true;

    if (search) resolve ({ Nome: 'Juvencino', age: 85 })
        else reject ('Falha ao fazer a busca, tente novamente!')
    }, 1000)
})

const data = await dataBaseSearch();

console.log(data)