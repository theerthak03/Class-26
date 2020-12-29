class BaseClass{
    // defines the properties
    constructor(x,y,width,heigth,angle){
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1,
           ' frictionAir': 0.001
        }

        this.body=Bodies.rectangle(x,y,width,heigth,options);
        this.width=width;
        this.heigth=heigth;
        this.image=loadImage("sprites/base.png");
        

        World.add(myWorld,this.body);
       
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        imageMode(CENTER);
     image (this.image,0,0,this.width, this.heigth);
       
       pop ();
    }


}