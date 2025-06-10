// Método (Sort) é usado para ordenar os elementos de um array em ordem alfabética ou numérica

const casa = [
    { nome: 'cadeira', item: [{ nome: 'cadeira 1'}, { nome: 'cadeira2' }, { nome: 'cadeira 3' }] },
    { nome: 'mesa', item: [{ nome: 'mesa 2' }, { nome: 'mesa 2' }] },
    { nome: 'raque', item: [{ nome: 'raque 1'}, { nome: 'raque 2'}, { nome: 'raque 3' }, { nome: 'raque 4' }, { nome: 'raque 5' }] },
]

const casaSorteada = casa.sort((comodoUm, comodoDois) => {
    return comodoDois.item.length - comodoUm.item.length
})

console.log(casaSorteada)