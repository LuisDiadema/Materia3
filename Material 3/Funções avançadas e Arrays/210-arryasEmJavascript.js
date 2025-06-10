const casa = [
    'armario',
    'sofa',
    'raque',
];

// Fazendo interações sobre lista com (For Each)
casa.forEach((item) => {
    console.log(item)
})

// IndexOf serve para descobrir qual é a posição de algum determinado item na minha lista
console.log(casa.indexOf('sofa'))

// Caso seja passado um item que não existe ele vai retornar -1 que é o mesmo que inexistente
console.log(casa.indexOf('porta'))

// Forma de acessar o ultima item do Array
console.log(casa[casa.length - 1])

// Descobrindo a quantidades de itens dentro do Array
console.log(casa.length)

// Alterando um item dentro do Array
casa[1] = {item: 'Guarda-roupa'}
console.log(casa)

// Adicionando algum item no final do array
casa.push({item: 'Televisão'})
casa.pop()

// Acessando algum item no array
console.log(casa)