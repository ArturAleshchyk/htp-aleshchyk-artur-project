const addButton = document.getElementById('add-task');
const inputTask = document.getElementById('new-task');

let unfinishedTasks = document.getElementById('unfinished-tasks');
let finishedTasks = document.getElementById('finished-tasks');

function createNewElement(task) {
  let listItem = document.createElement('li');
  listItem.className = 'mb-2';

  let inputGroup = document.createElement('div');
  inputGroup.className = 'input-group';

  let inputGroupPrep = document.createElement('div');
  inputGroupPrep.className = 'input-group-prepend';
  inputGroupPrep.innerHTML = '<button class="btn btn-toolbar" type="button">Done</button>';

  let label = document.createElement('label');
  label.className = 'form-control';
  label.innerHTML = task;

  let inputGroupAppend = document.createElement('div');
  inputGroupAppend.className = 'input-group-append';
  inputGroupAppend.innerHTML = '<button class="btn btn-info" type="button">Edit</button>\n' +
                               '<button class="btn btn-danger" type="button">Delete</button>';

  inputGroup.appendChild(inputGroupPrep);
  inputGroup.appendChild(label);
  inputGroup.appendChild(inputGroupAppend);

  listItem.appendChild(inputGroup);

  return listItem
}

function addTask() {
  if (inputTask.value) {
    const listItem = createNewElement(inputTask.value);
    unfinishedTasks.appendChild(listItem);
    inputTask.value = '';
  }
}

addButton.onclick = addTask;