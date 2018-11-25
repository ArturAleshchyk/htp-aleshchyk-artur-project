var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;
var doublePi = Math.PI * 2;
var circleArray = [];
var numOfCircles = 100;

canvas.width = innerWidth;
canvas.height = innerHeight;

var colorArray = [
  '#970090',
  '#bbeb00',
  '#1788dd',
  '#440094',
  '#fc6400',
  '#fa110a',
  '#69d499',
  '#00c544',
  '#fc008b',
];

//Function constr. for new circles
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.radius = radius;

  //Update circles position function
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx -= this.dx;
    } else if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy -= this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };

  //Draw circles function
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, doublePi, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }
}

//Creating new circles
for (var i = 0; i < numOfCircles; i++) {
  //Random circle size
  var radius = (Math.random() * 30) + 1;
  //Random x position
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  //Random Y position
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  //Random X speed
  var dx = (Math.random() - 0.5) *2;
  //Random Y speed
  var dy = (Math.random() - 0.5) *2;
  //Create new circle
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

//Function to animate circles
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  
  for (var i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
}

animate();
