function MovingObject(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.color = options.color;
    this.radius = options.radius;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillstyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, false);
    ctx.fill(); 
};


MovingObject.prototype.move = function(ctx){
    this.pos = [(this.pos[0] + this.vel[0]), (this.pos[1]+ this.vel[1])];
    // console.log("please Move!");
    console.log(`${this.pos}`);
};


module.exports = MovingObject;