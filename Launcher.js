class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:10

        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
         var pointA = this.sling.bodyA.position;
         strokeWeight(4);
         stroke("turquoise");
         line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }

    attach(body){
        this.sling.bodyA=body
    }

    fly()
    {
        this.sling.bodyA = null;
    }
    
    

}