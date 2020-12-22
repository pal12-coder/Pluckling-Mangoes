class Tree{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/tree.png");  
    }

    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}