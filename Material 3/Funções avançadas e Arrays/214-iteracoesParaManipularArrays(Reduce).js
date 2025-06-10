// Principal função do recude é pegar uma lista e trsnformar em uma única coisa
// Podendo ser um string, numero, objeto, etc...
const casa = [
    {name: 'cadeira', preço: 50},
    {name: 'tapete', preço: 15},
    {name: 'sofá', preço: 150},
    {name: 'raque', preço: 75},
]

const valorCasa = casa.reduce((valorPrevio, valorTotal) => {
    return valorPrevio + valorTotal.preço;
}, 0)

console.log(valorCasa)

// É possível fazer isso com for, for of, porém essa é uma forma mais simples e concisa

const casa1 = [
    {name: 'cadeira', preço: 50},
    {name: 'tapete', preço: 15},
    {name: 'sofá', preço: 150},
    {name: 'raque', preço: 75},
];

const descricaoCasa = casa1.reduce((perv, next) => {
    if (!perv.length) return next.name 
    return `${perv}, ${next.name}`
}, '')

console.log(descricaoCasa)