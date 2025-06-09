let sessionCompletedCount = 0;

const renderTasksProgressData = () => {
    let tasksProgress = document.getElementById('tasks-progress');

    if (!tasksProgress) {
        tasksProgress = document.createElement('div');
        tasksProgress.id = 'tasks-progress';
        document.getElementById('taskProgress').appendChild(tasksProgress);
    }

    tasksProgress.textContent = `${sessionCompletedCount} tarefa${sessionCompletedCount !== 1 ? 's' : ''} concluída${sessionCompletedCount !== 1 ? 's' : ''}`;
}

const getTasksFromLocalStorage = () => {
    const localTasks = JSON.parse(window.localStorage.getItem('tasks'));
    return localTasks ? localTasks : [];
}

const setTaskLocalStorage = (tasks) => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

const removeTask = (taskId) => {
    const tasks = getTasksFromLocalStorage();
    const upDatedTasks = tasks.filter(({ id }) => parseInt(id) !== parseInt(taskId));
    setTaskLocalStorage(upDatedTasks);
    renderTasksProgressData(upDatedTasks);

    const taskElement = document.getElementById(`task-${taskId}`);
    const list = document.getElementById('taskList');

    if (taskElement && list) {
        list.removeChild(taskElement);
    } else {
        console.error(`Erro ao remover: elemento task-${taskId} não encontrado`);
    }
}

const createListItem = (task, checkbox, etiqueta) => {
    const list = document.getElementById('taskList');
    const toDo = document.createElement('li');

    const completedTaskButton = document.createElement('button');
    completedTaskButton.textContent = 'Concluir';
    completedTaskButton.ariaLabel = 'Concluir tarefa';
    completedTaskButton.className = "completedBtn"
    
    completedTaskButton.onclick = () => {
        const tasks = getTasksFromLocalStorage();
        const upDatedTasks = tasks.map (t => 
            parseInt(t.id) === parseInt(task.id) 
            ? { ...t, checked: true }
            : t
        );
        setTaskLocalStorage(upDatedTasks);
        sessionCompletedCount++;
        renderTasksProgressData(upDatedTasks);

        const taskElement = document.getElementById(`task-${task.id}`);
        if (taskElement) {
            taskElement.classList.add('concluida');

            const tickButton = document.createElement('button');
            tickButton.className = 'tickButton';
            const img = document.createElement('img');
            img.src = './assets/tick.svg';
            img.className = 'tickIcon';
            tickButton.appendChild(img);

            taskElement.replaceChild(tickButton, completedTaskButton);

            setTimeout (() => taskElement.remove(), 30000);
        }
    };

    toDo.id = `task-${task.id}`;
    toDo.appendChild(checkbox);

    toDo.appendChild(completedTaskButton); 
    if (etiqueta) {
        toDo.appendChild(etiqueta)
    }
    list.appendChild(toDo);

    return toDo;
}

const onCheckboxClick = (event) => {
    const [id] = event.target.id.split('-')
    const tasks = getTasksFromLocalStorage();

    const upDatedTasks = tasks.map((tasks) => {
        return parseInt(tasks.id) === parseInt(id)
            ? { ...tasks, checked: event.target.checked }
            : tasks
    })

    setTaskLocalStorage(upDatedTasks)
    renderTasksProgressData(upDatedTasks);
}

const getCheckboxInputEtiqueta = ({ id, etiqueta, checked, dataCriacao }) => {
    const etiquetar = document.createElement('input');
    const label = document.createElement('label');
    const dateSpan = document.createElement('span')
    const wrapper = document.createElement('div');
    const etiquetarId = `${id}-checkbox`;

    // Configuração do checkbox
    etiquetar.type = 'checkbox';
    etiquetar.id = etiquetarId;
    etiquetar.checked = checked || false;

    // Configuração da etiqueta
    label.textContent = `${etiqueta || "Sem etiqueta"}` 
    label.htmlFor = etiquetarId;
    label.className = 'etiquetaLabel';

    // Configuarção da Data
    dateSpan.textContent = dataCriacao ? ` Criada em: ${dataCriacao}` : '';
    dateSpan.className = 'Date';

    //Envolve os elementos
    wrapper.className = 'etiquetaLabelContainer';
    wrapper.appendChild(etiquetar);
    wrapper.appendChild(label);
    wrapper.appendChild(dateSpan);

    return wrapper;
}

const getCheckboxInput = ({id, description, checked,}) => {
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

    const dataCriacao = new Date().toLocaleDateString('pt-BR');

    return { description, etiqueta, id, dataCriacao }
}

const getNewTaskId = () => {
    const tasks = getTasksFromLocalStorage();
    const lastEtiqueta = tasks[tasks.length - 1]?.id;
    return lastEtiqueta ? lastEtiqueta + 1 : 1;
}

const createTask = (event) => {
    event.preventDefault();
    const newTaskData = getNewTaskData(event);

    const checkbox = getCheckboxInput(newTaskData);
    const etiqueta = getCheckboxInputEtiqueta(newTaskData);
    createListItem(newTaskData, checkbox, etiqueta);

    const tasks = getTasksFromLocalStorage();

    tasks.push ({ 
        id: newTaskData.id, 
        description: newTaskData.description, 
        etiqueta: newTaskData.etiqueta,
        checked: false,
        dataCriacao: newTaskData.dataCriacao });

    setTaskLocalStorage(tasks);
    event.target.reset();
}

window.onload = function () {
    const form = document.getElementById('taskDescription');
    form.addEventListener('submit', createTask);

    const tasks = getTasksFromLocalStorage();

    tasks
        .filter(task => !task.checked)
        .forEach((task) => {
            const checkbox = getCheckboxInput(task);
            const etiqueta = getCheckboxInputEtiqueta(task);
            createListItem(task, checkbox, etiqueta);
        });

    sessionCompletedCount = 0;
    renderTasksProgressData();
}