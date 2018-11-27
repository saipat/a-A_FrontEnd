const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

//Ading event listener for DOMContentLoaded.
document.addEventListener("DOMContentLoaded", function () {
    let el = document.getElementById("game-canvas");
    let context = el.getContext("2d");

    //new MovingObject instance
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [30, 30],
        radius: 10,
        color: "#000000"
    });
    mo.draw(context);
    mo.move();
    mo.draw(context);

    //new Astroid instance
    const a1 = new Asteroid({
        radius: 20,
        color: "red",
        pos: [40,10],
        vel: Util.randomVec(10)
    });
    a1.draw(context);
    
});


console.log("Webpack is working!");