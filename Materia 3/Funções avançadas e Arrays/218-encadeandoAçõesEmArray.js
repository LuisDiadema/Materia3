// Encadeamento de ações em arryas 

const casa = [
    { tipo: 'cadeira', item: [{ nome: 'cadeira 1'}, { nome: 'cadeira2' }, { nome: 'cadeira 3' }] },
    { tipo: 'mesa', item: [{ nome: 'mesa 2' }, { nome: 'mesa 2' }] },
    { tipo: 'raque', item: [{ nome: 'raque 1'}, { nome: 'raque 2'}, { nome: 'raque 3' }, { nome: 'raque 4' }, { nome: 'raque 5' }] },
]

let frase = 'Os comodos que possuem pelo menos 3 itens dentro são: ';

const casaSorteada = 
    casa
        .sort((comodoUm, comodoDois) => { return comodoDois.item.length - comodoUm.item.length })
        .map((comodo) => ({...comodo, contador: comodo.item.length}))
        .filter((comodo) => comodo.contador >= 3)
        .reduce((prev, next) => {
            if (prev === frase) return prev + next.tipo
            return prev + `, ${next.tipo}`
        }, frase)

console.log(casaSorteada)