import {
  date
} from "./date.js";


const btnAdd = document.querySelector('#btn-add');
const listElement = document.querySelector('ul');
const listTask = JSON.parse(localStorage.getItem('item')) || [];
let countID = date.getTime()


listTask.forEach(element => {
  creatNewElement(element.task, element.id)
});

if (listElement.childElementCount === 0) {
  listElement.innerHTML = '<div class="error"> Você está sem tarefas no momento.</div>'
}

btnAdd.addEventListener('click', (event) => {
  event.preventDefault();

  const inputAdd = document.querySelector('.info-content-input-add')
  const currentItem = {
    task: inputAdd.value,
    id: countID
  }

  creatNewElement(currentItem.task, currentItem.id)

  listTask.push(currentItem)

  localStorage.setItem('item', JSON.stringify(listTask))

  inputAdd.value = ''

  countID++;

})


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



function deleteElement(element, id) {
  element.remove()
  listTask.splice(listTask.findIndex((element) => element.id === id), 1);
  localStorage.setItem('item', JSON.stringify(listTask));
}