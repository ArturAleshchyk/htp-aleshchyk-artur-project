const list = document.querySelector('ul');

list.addEventListener('click', (ev) => {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle('text-danger');
  } else if (ev.target.tagName === "BUTTON") {
    const div = ev.target.parentNode;
    div.remove();
  }
}, false);

function newElement() {
  const li = document.createElement('li');
  const inputValue = document.getElementById('toDoEl').value;
  const t = document.createElement('SPAN');

  t.innerHTML = inputValue;
  li.appendChild(t);

  if (inputValue == "") {
    alert("Введите ваше дело!");
  } else {
    document.getElementById('list').appendChild(li);
  }

  document.getElementById('toDoEl').value = "";

  const span = document.createElement('BUTTON');
  const txt = document.createTextNode("DELETE");

  span.className = "btn-danger";
  span.appendChild(txt);
  li.appendChild(span);
}