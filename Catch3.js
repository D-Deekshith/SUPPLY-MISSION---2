class Catch3{
    constructor(){
        var Catch3_options ={
            isStatic: true
        }
    
        this.catch3 = Bodies.rectangle(250,605,10,100,Catch3_options);
        World.add(world,this.catch3);  
    }

    display(){
 
        fill("red");
        rect(this.catch3.position.x,this.catch3.position.y,10,100);
    }
}