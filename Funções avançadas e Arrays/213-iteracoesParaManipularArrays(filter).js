// Usandan o método Filter para manipulações de Arrys.
const casa = [
    {name: 'cadeira', tipo: 'com rodinha'},
    {name: 'cadeira', tipo: 'com rodinha'},
    {name: 'cadeira', tipo: 'sem rodinha'},
];

const filtroCasa = casa.filter((item) => {
    return item.tipo === 'com rodinha'
})

console.log(filtroCasa)

const casa1 = [
    'armario',
    'cadeira',
    'mesa',
    'avião',
];

const novaCasa = casa1.map((itemCasa) => ({
    name: itemCasa,
    naoPertece: itemCasa === 'avião'
}))

console.log(novaCasa)


// Usando a proriedade Filter nós podemos selecionar o movel que pertence a o Array casa.
// Quando negamos essa propriedade usando o operador "!" todos os item que pertece a casa aparece.
// Quando não negamos todos os items que não pertence a casa aparece.
const casaFiltrada = novaCasa.filter((movel) => !movel.naoPertece)

console.log(casaFiltrada)