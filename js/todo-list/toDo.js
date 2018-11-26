var addButton = document.getElementById('add-task');
var inputTask = document.getElementById('new-task');

var unfinishedTasks = document.getElementById('unfinished-tasks');
var finishedTasks = document.getElementById('finished-tasks');

function createNewElement(task) {
  var listItem = document.createElement('li');
  listItem.className = 'mb-2';

  var inputGroup = document.createElement('div');
  inputGroup.className = 'input-group';

  var inputGroupPrep = document.createElement('div');
  inputGroupPrep.className = 'input-group-prepend';
  inputGroupPrep.innerHTML = '<button class="btn btn-toolbar checkbox" type="button">&#10060;</button>';

  var label = document.createElement('label');
  label.className = 'form-control';
  label.innerHTML = task;

  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.className = 'form-control';
  input.style.display = 'none';

  var inputGroupAppend = document.createElement('div');
  inputGroupAppend.className = 'input-group-append';
  inputGroupAppend.innerHTML = '<button class="btn btn-info edit" type="button">Edit</button>\n' +
                               '<button class="btn btn-danger delete" type="button">Delete</button>';

  inputGroup.appendChild(inputGroupPrep);
  inputGroup.appendChild(label);
  inputGroup.appendChild(input);
  inputGroup.appendChild(inputGroupAppend);

  listItem.appendChild(inputGroup);

  return listItem
}

function addTask(e) {
  e.preventDefault();

  if (inputTask.value) {
    var listItem = createNewElement(inputTask.value);
    unfinishedTasks.appendChild(listItem);
    bindTaskEvents(listItem, finishTask);
    inputTask.value = '';
  }
}

addButton.onclick = addTask;

function deleteTask() {
  var formGroup = this.parentNode;
  var inputGroup = formGroup.parentNode;
  var listItem = inputGroup.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);
}

function editTask() {
  var editButton = this;
  var formGroup = this.parentNode;
  var inputGroup = formGroup.parentNode;
  var listItem = inputGroup.parentNode;
  var label = listItem.querySelector('label');
  var input = listItem.querySelector('input');

  var containsClass = listItem.classList.contains('editMode');

  if (containsClass) {
    label.style.display = 'block';
    input.style.display = 'none';
    label.innerText = input.value;
    editButton.className = 'btn btn-info';
    editButton.innerHTML = 'Edit';
  } else {
    input.style.display = 'block';
    label.style.display = 'none';
    input.value = label.innerHTML;
    editButton.className = 'btn btn-success';
    editButton.innerHTML = 'Save';
  }

  listItem.classList.toggle('editMode');
}

function finishTask() {
  var formGroup = this.parentNode;
  var inputGroup = formGroup.parentNode;
  var listItem = inputGroup.parentNode;
  var checkbox = listItem.querySelector('.checkbox');
  checkbox.innerHTML = '&#10004;';

  finishedTasks.appendChild(listItem);
  bindTaskEvents(listItem, unfinishTask);
}

function unfinishTask() {
  var formGroup = this.parentNode;
  var inputGroup = formGroup.parentNode;
  var listItem = inputGroup.parentNode;
  var checkbox = listItem.querySelector('.checkbox');
  checkbox.innerHTML = '&#10060;';

  unfinishedTasks.appendChild(listItem);
  bindTaskEvents(listItem, finishTask);
}

function bindTaskEvents(listItem, checkboxEvents) {
  var checkbox = listItem.querySelector('button.checkbox');
  var editButton = listItem.querySelector('button.edit');
  var deleteButton = listItem.querySelector('button.delete');

  checkbox.onclick = checkboxEvents;
  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
}