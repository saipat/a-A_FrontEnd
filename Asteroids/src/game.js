function Game(){

}


Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

Game.prototype.add = function(object){
    if (object instanceof Asteroid) {
        this.asteroids.push(object);
    }else{
        throw new Error("unknown type of object");
    }
};

Game.prototype.asteroids = function(){
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.add(new Asteroid({
            game: this
        }));
    }
};

Game.prototype.randomPosition = function(){
    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ];
};