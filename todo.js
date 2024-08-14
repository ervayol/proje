/*
let formDOM = document.querySelector(taskForm)
formDOM.addEventListener("submit", addTask)
document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('taskForm').addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput === '') return;

    const taskList = document.getElementById('taskList');
    const li = createTaskElement(taskInput);

    taskList.appendChild(li);
    saveTask(taskInput);
    document.getElementById('taskInput').value = '';
}

function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'mr-2';
    checkbox.onclick = toggleTask;
    li.appendChild(checkbox);

    const taskText = document.createElement('span');
    taskText.appendChild(document.createTextNode(task));
    li.appendChild(taskText);

    const buttonGroup = document.createElement('div');
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-secondary btn-sm mr-2';
    editBtn.appendChild(document.createTextNode('Düzenle'));
    editBtn.onclick = () => editTask(li, taskText);
    buttonGroup.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.appendChild(document.createTextNode('Sil'));
    deleteBtn.onclick = deleteTask;
    buttonGroup.appendChild(deleteBtn);

    li.appendChild(buttonGroup);

    return li;
}

function deleteTask(e) {
    const task = e.target.parentElement.parentElement;
    const taskText = task.querySelector('span').textContent;
    task.remove();
    removeTask(taskText);
}

function toggleTask(e) {
    const task = e.target.nextSibling;
    if (e.target.checked) {
        task.style.textDecoration = 'line-through';
    } else {
        task.style.textDecoration = 'none';
    }
}
function editTask(li, taskTextElement) {
    const newTask = prompt('Görevi düzenleyin:', taskTextElement.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        const oldTask = taskTextElement.textContent;
        taskTextElement.textContent = newTask;
        updateTask(oldTask, newTask);
    }
}

function saveTask(task) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.forEach(task => {
        const taskList = document.getElementById('taskList');
        const li = createTaskElement(task);
        taskList.appendChild(li);
    });
}

function removeTask(task) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTask(oldTask, newTask) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    const index = tasks.indexOf(oldTask);
    if (index > -1) {
        tasks[index] = newTask;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
*/


let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit" , formHandler)
const alertDOM =document.querySelector("#alert")

const alertFunction =(title, message, className="warning") => '<div class="alert alert-${className} alert-dismissible fade show" role="alert"> <strong> ${title} </strong> ${message} <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>'

function formHandler(event) {
    event.preventDefault()
    const ÖGE_NAME = document.querySelector("#ögename")
    
    if (ÖGE_NAME.value){
        addItem(ÖGE_NAME.value)   // gönderdikten sonra sıfırlama
        ÖGE_NAME.value=""
    }
    else{
        alertDOM.innerHTML = alertFunction(
            "Başlık bilgisi",
            "eksik bilgi giriş yapılamaz",
            "danger"
        )
    }
}

let ögeListDOM = document.querySelector("#ögeList")
function addItem(ögeName) {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = '${ögeName}'
    liDOM.classList.add('list-group-item')
    ögeListDOM.append (liDOM)
}