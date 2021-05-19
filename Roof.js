class Roof{
    constructor(x,y,width,heigth){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = heigth;
        
      
    }
display(){
push();
rectMode(CENTER);
fill(128,128,128);
rect(this.body.position.x,this.body.position.y,this.width,this.heigth);
pop();
}
}