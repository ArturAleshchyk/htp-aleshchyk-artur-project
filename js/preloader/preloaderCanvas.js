var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;
var doublePi = Math.PI * 2;
var circleArray = [];
var numOfCircles = 100;

canvas.width = innerWidth;
canvas.height = innerHeight;

//Function constr. for new circles
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.color = "#fff";
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
var radius = (Math.random() * 30) + 1;
var x = Math.random() * (innerWidth - radius * 2) + radius;
var y = Math.random() * (innerHeight - radius * 2) + radius;
var dx = Math.random() - 0.5;
var dy = Math.random() - 0.5;
var i = 0;

circleArray.push(new Circle(x, y, dx, dy, radius));

//Function to animate circles
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight)

  circleArray[i].update();
}

animate();
