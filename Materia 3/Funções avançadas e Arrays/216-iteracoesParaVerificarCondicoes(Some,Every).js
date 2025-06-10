// (Every) O método every verifica se todos os elementos do array satisfazem uma condição
// (Some) O método some verifica se pelo menos um elemento do array satisfaz uma condição.
//------------------------------------------------------------------------------------------------------
// Neste caso como tem uma cadeira se carvalho ele retorna True, se caso tivesse mais de uma 
// cadeira de Caravalho ele ainda retornaria True, porém ele já teria sido encerrado na primeira opção.
//------------------------------------------------------------------------------------------------------
// Caso não tenha nenhuma cadeira de carvalho ele retornaria False.

const casa = [
    {nama: 'cadeira', tipo: ['madeira', 'antiderrapante'] },
    {nama: 'cadeira', tipo: ['carvalho'] },
    {nama: 'cadeira', tipo: ['madeira']} ,
]

const materiaPrima = casa.some((item) => {
    return item.tipo.some(tipo => tipo === 'antiderrapante')
})

console.log(materiaPrima)

// (Every) O método every verifica se todos os elementos do array satisfazem uma condição.
//------------------------------------------------------------------------------------------------------
// Neste caso como tem uma cadeira de carvalho e duas de madeira ele vai retornar False.
// Caso todas as cadeiras seja de somente de madeira ele retorna True.

const todaMateria = casa.every((item) => {
    return item.tipo.every(tipo => tipo === 'madeira')
})

console.log(todaMateria)