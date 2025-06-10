// Método MAP aplicado abaixo.
// Ele é ultilizado para modificar casa item que está dentro do Array.

const casa = [
    'armario',
    'mesa',
    'cadeira',
];

const minhaCasa = casa.map((item) => {
    return {number: item}
})

console.log(casa)
console.log(minhaCasa) 

casa.push('avião')

// Casa queira fazer uma modificação em algum item espeficido também é possível com o método MAP.
console.log(casa)

const novaCasa = casa.map((itemCasa) => ({
    name: itemCasa,
    nãoPertence: itemCasa === 'avião'
}))

console.log(novaCasa)