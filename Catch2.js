class Catch2{
    constructor(){
        var Catch2_options ={
            isStatic: true
        }
    
        this.catch2 = Bodies.rectangle(545,605,10,100,Catch2_options);
        World.add(world,this.catch2);  
    }

    display(){
 
        fill("red");
        rect(this.catch2.position.x,this.catch2.position.y,10,100);
    }
}