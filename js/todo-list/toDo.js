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
  inputGroupPrep.innerHTML = '<button class="btn btn-toolbar checkbox" type="button">Done</button>';

  var label = document.createElement('label');
  label.className = 'form-control';
  label.innerHTML = task;

  var inputGroupAppend = document.createElement('div');
  inputGroupAppend.className = 'input-group-append';
  inputGroupAppend.innerHTML = '<button class="btn btn-info edit" type="button">Edit</button>\n' +
                               '<button class="btn btn-danger delete" type="button">Delete</button>';

  inputGroup.appendChild(inputGroupPrep);
  inputGroup.appendChild(label);
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
  console.log('d');
}

function editTask() {
  console.log('e');
}

function finishTask() {
  console.log('f');
}

function unfinishTask() {

}

function bindTaskEvents(listItem, checkboxEvents) {
  var checkbox = listItem.querySelector('button.checkbox');
  var editButton = listItem.querySelector('button.edit');
  var deleteButton = listItem.querySelector('button.delete');

  checkbox.onclick = checkboxEvents;
  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
}