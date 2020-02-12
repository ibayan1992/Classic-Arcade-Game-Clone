// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.xPoint = x; // enemy position on X axis for tha canvas
    this.yPoint = y; // enemy position on Y axis for tha canvas
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.xPoint=this.xPoint + this.speed * dt;

    if(this.xPoint > 500) { // itrate the enterenc of enemies
        	this.xPoint = -70; // back to beginning
        	this.speed = 100 + Math.floor(Math.random() * 200);
        };
// when happen collidate with enemy, rest the player's position
    if (player.xPoint < this.xPoint + 75 &&
    player.xPoint + 75 > this.xPoint  &&
    player.yPoint < this.yPoint + 50 &&
    50 + player.yPoint  > this.yPoint  ) {
    player.xPoint = 200;
    player.yPoint = 400;
  };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.xPoint, this.yPoint);
};


// Now write your own player class
var Player = function (xLocation, yLocation) {
    this.xPoint = xLocation;
    this.yPoint = yLocation;

    this.player = 'images/char-boy.png';
};
// This class requires an update(), render() and
// a handleInput() method.
var numOfWins=0;// define the numbers of player's wins

Player.prototype.update = function() {
    if (this.yPoint <= 0) {
       numOfWins = numOfWins +1; // incremnet for each win by 1
        alert("You made it " + numOfWins + " time/s"); // print message on page
// reset the position o player
        this.xPoint = 200;
        this.yPoint = 400;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.xPoint, this.yPoint);
};
// moving of player within canvas border
Player.prototype.handleInput = function(key) {
  if (key === 'left' && this.xPoint > 0) {
          this.xPoint = this.xPoint - 102;
      };
       if (key === 'right' && this.xPoint < 400) {
          this.xPoint = this.xPoint + 102;
      };
       if (key === 'up' && this.yPoint > 0) {
          this.yPoint = this.yPoint - 83;
      };
       if (key === 'down' && this.yPoint < 400) {
          this.yPoint = this.yPoint + 83;
      };

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// looping to create 3 object of enemy by random speed
for (var i = 0; i < 3; i++) {
    var randomSpeed = Math.floor(Math.random() * 5 + Math.random() * 5) * 100;
    allEnemies.push(new Enemy(-98, (85 * i) + 60, randomSpeed));
}
// Place the player object in a variable called player
var player = new Player(200, 400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
