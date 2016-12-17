const MovingObject = function(options) {
  this.pos = options.pos,
  this.vel = options.vel,
  this.radius = options.radius,
  this.color = options.color;
};

MovingObject.prototype.draw = function(ctx) {
  ctx.radius = this.radius;
  ctx.pos = this.pos;
  ctx.fillStyle = this.color;
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

module.exports = MovingObject;
