class Boy{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height; 
        this.image = loadImage("sprites/boy.png");

    }

    display(){
        var pos = this.body.position;
        
        rectMode(CENTER);
        //fill(224,219,219);
       image(this.image,pos.x, pos.y, this.width, this.height);

    }

}