class Particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
           
        }

        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255), random(0,255), random(0,255))
        World.add(world,this.body);
    }
};