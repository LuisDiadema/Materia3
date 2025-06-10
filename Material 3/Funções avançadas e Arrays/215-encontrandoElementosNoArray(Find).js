const casa = [
    'armario',
    'cadeira',
    'mesa',
    'avião',
];

const novaCasa = casa.map((itemCasa) => ({
    name: itemCasa,
    naoPertece: itemCasa === 'avião'
}))

console.log(novaCasa)

const casaColorida = novaCasa.map((item, position) => {
    if (position === 2) return {name: item.name, naoPertece: item.naoPertece, cor: 'branco'}
    return {name: item.name, naoPertece: item.naoPertece, cor: 'bege'}
})

// Aqui o find vai encontrar o item que foi solicitado, caso aja algum item repetido ele não será mostrado pois sua condição já foi satisfeita
// pois ele não passou pelos demais item acho encontrar o primeiro
console.log(casaColorida.find((item) => { return item.cor === 'bege'}))

console.log(casaColorida)