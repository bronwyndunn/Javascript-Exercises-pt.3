Function.prototype.inherits = function(SuperClass) {
  function Surrogate () {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

MovingObject.color = "blue";

MovingObject.prototype.move = function() {
  console.log("I'm moving");
};

Ship.prototype.move();
console.log(MovingObject.color);
Ship.color = "red";
console.log(Ship.color);
