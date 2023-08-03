import {
  date
} from "./date.js";

const btnAdd = document.querySelector('#btn-add');
const inputAdd = document.querySelector('.info-content-input-add')
const listElement = document.querySelector('ul');
const listTask = JSON.parse(localStorage.getItem('item')) || [];
const message = document.querySelector('#msg')
let countID = date.getTime();

function isEmpty() {
  if (listTask.length === 0) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
}

listTask.forEach(element => {
  creatNewElement(element.task, element.id)
});

btnAdd.addEventListener('click', (event) => {
  event.preventDefault();

  if (inputAdd.value.trim().length === 0) {
    alert('Por gentileza, digite uma tarefa!');
  } else {
    const currentItem = {
      task: inputAdd.value,
      id: countID
    }

    creatNewElement(currentItem.task, currentItem.id)

    listTask.push(currentItem)

    localStorage.setItem('item', JSON.stringify(listTask))

    inputAdd.value = ''

    countID++;
    isEmpty();
  }
});

function creatNewElement(element, id) {
  const task = document.createElement('li');
  task.classList.add('task');

  task.addEventListener('click', () => {
    task.classList.toggle('completed');
  });

  const taskText = document.createElement('div');
  taskText.classList.add('task-text');
  taskText.innerText = element;

  const deleteIcon = document.createElement('div');
  deleteIcon.classList.add('delete-icon');
  const trashIcon = document.createElement('i');
  trashIcon.classList.add('fas', 'fa-trash');
  deleteIcon.appendChild(trashIcon);
  deleteIcon.addEventListener('click', () => {
    deleteElement(task, id);
  });

  task.appendChild(taskText);
  task.appendChild(deleteIcon);
  listElement.append(task);
}

function deleteElement(taskElement, taskId) {
  taskElement.remove();
  listTask.splice(listTask.findIndex((item) => item.id === taskId), 1);
  localStorage.setItem('item', JSON.stringify(listTask));
  isEmpty();
}

isEmpty();