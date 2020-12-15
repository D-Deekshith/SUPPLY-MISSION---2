class Catch{
    constructor(){
        var Catch_options ={
            isStatic: true
        }
    
        this.catch = Bodies.rectangle(400,650,300,10,Catch_options);
        World.add(world,this.catch);  
    }

    display(){
        rectMode(CENTER);
        fill("red");
        rect(this.catch.position.x,this.catch.position.y,300,10);
    }
}