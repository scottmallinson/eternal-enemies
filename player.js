'use strict';
console.log('PLAYER CONNECTED');

function Player(canvas){
  this.lives = 3;
  this.size = 50;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 3;
  this.direction = 0;
  this.x = 50;
  this.y = this.canvas.height / 2;
}

Player.prototype.draw = function() {
  this.ctx.fillStyle = "blue";
  this.ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
}

Player.prototype.update = function() {
  this.y = this.y + this.direction * this.speed;
}

Player.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
}

Player.prototype.setLives = function() {
  this.lives --;
}

Player.prototype.checkCollisionWithEnemy = function(enemy) {
  const collisionRight = this.x + this.size / 2 > enemy.x - enemy.size / 2;
  const collisionLeft = this.x - this.size / 2 < enemy.x + enemy.size / 2;
  const collisionTop = this.y - this.size / 2 < enemy.y + enemy.size / 2;
  const collisionBottom = this.x + this.size / 2 > enemy.x - enemy.size / 2;

  return collisionRight && collisionLeft && collisionTop && collisionBottom; // return true if all are true, else return false is at least one is false
}