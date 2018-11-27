const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

const DEFAULTS = {
    color: 'red',
    radius: 10
};

 function Asteroid(radius, color, pos, vel){
    MovingObject.call(this, radius, color, pos, vel);
 }


Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;