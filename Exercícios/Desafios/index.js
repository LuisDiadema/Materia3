const tasks = [
    {id: 1, description: 'Passear com o cachorro', checked: false, etiqueta: 'FrontEnd'},
    {id: 2, description: 'Fazer almoço', checked: true, etiqueta: 'BackEnd'},
    {id: 3, description: 'ir a academia', checked: false, etiqueta: 'UX'},
];

const completedTask = (taskId) => {
    tasks = tasks.filter(({ id }) => parseInt(id) !== parseInt(taskId));

    document
        .getElementById("list")
        .completedChild(document.getElementById(taskId));
}

const tasksToCompleted = () => {
    const tasksToCompleted = tasks
        .filter(({ checked }) => checked)
    console.log(tasksToCompleted)
}

const createEtiquetaListItem = (task, etiqueta) => {
    const list = document.getElementById('etiqueta');
    const toDoEtiqueta = document.createElement('li');

    toDoEtiqueta.className = 'toDoEtiqueta';

    toDoEtiqueta.etiqueta = task.etiqueta;
    toDoEtiqueta.appendChild(etiqueta);
    list.appendChild(toDoEtiqueta);

    return toDoEtiqueta;
}

const createListItem = (task, checkbox) => {
    const list = document.getElementById('list');
    const toDo = document.createElement('li');

    const completedTaskButton = document.createElement('button');
    completedTaskButton.textContent = 'Concluir';
    completedTaskButton.ariaLabel = 'Concluir tarefa';

    completedTaskButton.onclick = () => completedTask(task.id);

    toDo.id = task.id;
    toDo.appendChild(checkbox);
    toDo.appendChild(completedTaskButton);
    list.appendChild(toDo);

    return toDo;
}

const onCheckboxClick = (event) => {
    const [firstElement, secondElement] = event.target.id.split('-')
    console.log(firstElement, secondElement)
}

const getCheckboxInputEtiqueta = ({ id, etiqueta }) => {
    const etiquetas = document.createElement('input')
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkboxId = `${id}-etiqueta`;

    etiquetas.type = 'etiqueta';
    etiquetas.id = checkboxId;
    etiquetas.etiqueta = etiqueta || false;

    label.textContent = etiqueta;
    label.htmlFor = checkboxId

    wrapper.className = 'etiqueta-label-container';

    wrapper.appendChild(label);

    return wrapper;
}

const getCheckboxInput = ({id, description, checked}) => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkboxId = `${id}-checkbox`;

    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.checked = checked || false;
    checkbox.addEventListener('change', onCheckboxClick)
    

    label.textContent = description;
    label.htmlFor = checkboxId

    wrapper.className = 'checkbox-label-container';

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}

const createTask = (event) => {
    event.preventDefault();
    const newTaskData = getNewTaskData(event);

    const checkbox = getCheckboxInput(newTaskData)
    createListItem(newTaskData, checkbox);

    tasks = [
        ...tasks, 
        { 
        id: newTaskData.id, 
        description: newTaskData.description, 
        checkbox: false , 
        etiqueta: newTaskData.etiqueta
        }
    ]
}

const createEtiqueta = (event) => {
    event.preventDefault();
    const newEtiquetData = getNewEtiquetaData(event);

    const etiqueta = getCheckboxInputEtiqueta (newEtiquetData)
    createEtiquetaListItem(newEtiquetData, etiqueta);

    tasks = [
        ...tasks, { 
            id: newEtiquetData.id, 
            description: newEtiquetData.description, 
            checked: false, 
            etiqueta: newEtiquetData.etiqueta,
        }
    ]
}

const getNewEtiqueta = () => {
    const lastId = tasks[tasks.length - 1]?.id;
    return lastId ? lastId + 1 : 1;

}

const getNewTaskId = () => {
    const lastEtiqueta = tasks[tasks.length - 1]?.etiqueta;
    return lastEtiqueta ? lastEtiqueta + 1 : 1;
}

const getNewEtiquetaData = (event) => {
    const etiqueta = event.target.elements.etiqueta.value;
    const id = getNewEtiqueta();

    return ({ id, etiqueta });
}

const getNewTaskData = (event) => {
    const description = event.target.elements.description.value;
    const id = getNewTaskId();

    return { description, id }
}

window.onload = function () {
    const form = document.getElementById('taskDescription');
    form.addEventListener('submit', createTask)
    form.addEventListener('submit', createEtiqueta)

    tasks.forEach((task) => {
        const checkbox = getCheckboxInput(task);
        createListItem(task, checkbox)
    })
    tasks.forEach ((task) => {
        const etiqueta = getCheckboxInputEtiqueta(task);
        createEtiquetaListItem(task, etiqueta)
    })
}
