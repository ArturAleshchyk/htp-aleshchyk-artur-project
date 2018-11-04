var i = 0;
var authorInfo = 'Created by Aleshchyk Artur as diploma project.';


letsTipe = setTimeout(function typingSlogan() {
  if (i < authorInfo.length) {
    document.getElementById('author-info').innerHTML += authorInfo.charAt(i);
    i++;
    setTimeout(typingSlogan, 100);
  }
}, 1000);