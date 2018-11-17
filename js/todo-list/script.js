var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === "SPAN") {
    ev.target.classList.toggle('text-danger');
  } else if (ev.target.tagName === "BUTTON") {
    var div = ev.target.parentNode;
    div.remove();
  }
}, false);

function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('toDoEl').value;
  var t = document.createElement('SPAN');
  t.innerHTML = inputValue;
  li.appendChild(t);
  if (inputValue == "") {
    alert("Введите ваше дело!");
  } else {
    document.getElementById('list').appendChild(li);
  }
  document.getElementById('toDoEl').value = "";
  var span = document.createElement('BUTTON');
  var txt = document.createTextNode("DELETE");
  span.className = "btn-danger";
  span.appendChild(txt);
  li.appendChild(span);
}