const tasks = [
    {id: 1, description: 'Passear com o cachorro', etiqueta: 'FrontEnd', checked: false},
    {id: 2, description: 'Fazer almoço', etiqueta: 'BackEnd', checked: true},
    {id: 3, description: 'ir a academia', etiqueta: 'UX', checked: false}
];

const completedTask = (taskId) => {
    tasks = tasks.filter(({ id }) => parseInt(id) !== parseInt(taskId));

    document
        .getElementById("list")
        .getElementById("etiqueta")
        .completedChild(document.getElementById(taskId));
}

const tasksToCompleted = () => {
    const tasksToCompleted = tasks
        .filter(({ checked }) => checked)
    console.log(tasksToCompleted)
}

const createListItem = (task, checkbox, etiqueta) => {
    const list = document.getElementById('taskList');
    const toDo = document.createElement('li');

    const completedTaskButton = document.createElement('button');
    completedTaskButton.textContent = 'Concluir';
    completedTaskButton.ariaLabel = 'Concluir tarefa';

    completedTaskButton.onclick = () => completedTask(task.id);

    toDo.id = task.id
    
    toDo.appendChild(completedTaskButton);    
    toDo.appendChild(checkbox);
    if (etiqueta) {
        toDo.appendChild(etiqueta)
    }
    list.appendChild(toDo);
    
    return toDo;
}

const onCheckboxClick = (event) => {
    const [firstElement, secondElement] = event.target.id.split('-')
    console.log(firstElement, secondElement)
}

const getCheckboxInputEtiqueta = ({ id, etiqueta, checked }) => {
    const etiquetar = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const etiquetarId = `${id}-checkbox`;

    etiquetar.type = 'checkbox';
    etiquetar.id = etiquetarId;
    etiquetar.checked = checked || false;

    label.textContent = etiqueta || "Sem Etiqueta";
    label.htmlFor = etiquetarId;

    wrapper.className = 'etiquetaLabelContainer';

    wrapper.appendChild(etiquetar);
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
    checkbox.addEventListener('change', onCheckboxClick);
    

    label.textContent = description;
    label.htmlFor = checkboxId;

    wrapper.className = 'checkbox-label-container';

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}

const getNewTaskData = (event) => {
    const description = event.target.elements.description.value;
    const etiqueta = event.target.elements.etiqueta.value;
    const id = getNewTaskId();

    return { description, etiqueta, id }
}

const getNewTaskId = () => {
    const lastEtiqueta = tasks[tasks.length - 1]?.id;
    return lastEtiqueta ? lastEtiqueta + 1 : 1;
}

const createTask = (event) => {
    event.preventDefault();
    const newTaskData = getNewTaskData(event);

    const checkbox = getCheckboxInput(newTaskData);
    const etiqueta = getCheckboxInputEtiqueta(newTaskData);

    const listItem = createListItem(newTaskData, checkbox);
    listItem.appendChild(etiqueta);

    tasks.push (
        ...tasks, 
        { 
        id: newTaskData.id, 
        description: newTaskData.description, 
        etiqueta: newTaskData.etiqueta,
        checked: false
        }
    );
    event.target.reset();
    
}

window.onload = function () {
    const form = document.getElementById('taskDescription');
    form.addEventListener('submit', createTask);

    tasks.forEach((task) => {
        const checkbox = getCheckboxInput(task);
        const etiqueta = getCheckboxInputEtiqueta(task);
        createListItem(task, checkbox, etiqueta);
    })
}
