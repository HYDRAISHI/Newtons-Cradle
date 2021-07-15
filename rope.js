class ROPE{
    constructor(body1,body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : body1,
            bodyB : body2,
            length : 250,
            //stiffness : 0.04
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.Rope = Matter.Constraint.create(options);
        World.add(world,this.Rope);
    }
    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.Rope.bodyB.position;
        strokeWeight(3);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y);
    }
}