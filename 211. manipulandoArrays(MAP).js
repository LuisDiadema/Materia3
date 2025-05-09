// manipurando Arrys

const casa = [
    'cadeira',
    'sofa',
    'porta',
    'mesa',
    'caque',
    'quadros',
    'aparador'
];

casa.push('cama')

casa.unshift('guarda-roupa')
casa.shift()


const intemRemovido = casa.shift()

console.log(intemRemovido)

casa.forEach((item) => {
    console.log(item)
})