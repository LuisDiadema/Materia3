const casa = [
    'armario',
    'sofa',
    'raque',
];

// Adicionando item ao final da lista
casa.push('cadeira')
casa.push('mesa')
casa.push('geladeira')

// Removendo algum item ao final da lista
casa.pop()
casa.pop()

// Descobrindo qual foi o item que foi removido do final da lista
const itemFinalRemovido = casa.pop()
console.log(itemFinalRemovido)

// Adicionando itens ao inicio da nossa lita com Unshift
casa.unshift('aparador')

// Removando itens do inicioa da nossa litsa com Shift
casa.shift()

// Conseguindo descobrir qual foi o item removido com shift
const itemRemovido = casa.shift()
console.log(itemRemovido)

console.log(casa)