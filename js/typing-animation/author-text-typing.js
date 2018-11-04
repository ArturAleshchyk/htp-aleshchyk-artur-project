var i = 0;
var authorInfo = 'Created by Aleshchyk Artur';


letsTipe = setTimeout(function typingSlogan() {
  if (i < authorInfo.length) {
    document.getElementById('author-info').innerHTML += authorInfo.charAt(i);
    i++;
    setTimeout(typingSlogan, 100);
  }
}, 1000);