const tarefas = [
    { descrição: 'Aula de inglês', prioridade: 'Baixa', status: 'Concluido'},
    { descrição: 'Aula de programação', prioridade: 'Alta', status: 'Pendente'},
    { descrição: 'Ler 10 paginas de um livro', prioridade: 'Alta', status: 'Pendente'},
    { descrição: 'Ir para o trabalho', prioridade: 'Baixa', status: 'Pendente'},
]

// Adicionando novas tarefas com o método (Push)
tarefas.push({
    descrição: 'Jogar o livro fora', prioridade: 'Alta', status: 'Concluido'
})


// Criando uma nova lista somente com as tarefas pendentes com o método (Filter)
const tarefasPendentes = tarefas.filter((item) => {
  return item.status ===  'Pendente'
})
console.log(tarefasPendentes)

// Alterando o status de todas as tarefas com o método (MAP)
const concluidoTarefas = tarefas.map((tarefas) =>  ({...tarefas, status: 'Concluido'}))

console.log(concluidoTarefas)

// Ordenando as tarefas por ondem de prioridade com o método (Sort)
const prioridadeTarefa = tarefas.sort((priorBaixa, priorAlta) => {
    return priorBaixa.prioridade.length -  priorAlta.prioridade.length
})

console.log(prioridadeTarefa)


// Localizando uma tarefa com método (Find)
const locationTarefas = tarefas.find((item) => {
    return item.descrição === 'Aula de inglês'
})

console.log(locationTarefas)


// Contando quantas tarefas pendentes ainda faltam com o método (Reduce)
const countTarefaPendente = tarefas.reduce((prev, next) => {
    if (next.status === 'Pendente') return prev + 1; 
    return prev;
}, 0)

console.log(countTarefaPendente)


// Verificando se todas as tarefas estão concluidas com o método (Every)
const tarefasConcluidas = tarefas.every((item) => {
    return item.status === 'Concluido'
})

console.log(tarefasConcluidas)