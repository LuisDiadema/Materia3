console.log('-- Bem-vindo ao DB --')

let dataBaseSearch = new Promise ((resolve, reject) => {
    console.log('Iniciando busca de Dados: ./')

    setTimeout(() => {
    let search = true;

    if (search) resolve (console.log('Busca concluida com sucesso.'))
        else reject (console.log('Falha ao fazer a busca, tente novamente!'))
    }, 5000)
})

console.log('Aguarde a busca sera concluida em 5 segundo')

console.log(dataBaseSearch)