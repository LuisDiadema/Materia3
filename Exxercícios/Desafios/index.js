const tasks = [
    {id: 1, description: 'Passear com o cachorro', checked: false},
    {id: 2, description: 'Fazer almoço', checked: true},
    {id: 3, description: 'ir a academia', checked: false},
];

const getCheckboxInput = ({id, description, checked}) => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkboxId = `${id}-checkbox`;

    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.checked = checked || false;
    
    label.textContent = description;
    label.htmlFor = checkboxId;

    wrapper.className = '';

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}

const createListItem = (task, checkbox) => {

    const list = document.getElementById('list');
    const toDo = document.createElement('li');

    toDo.id = task.id;
    list.appendChild(toDo);
}

window.onload = function () {

    tasks.forEach((task) => {
        const checkbox = getCheckboxInput(task);

        const list = document.getElementById('list');
        const toDo = document.createElement('li');

        toDo.id = task.id;
        toDo.appendChild(checkbox);

        list.appendChild(toDo);

    })

}