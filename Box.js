class Box  {
  constructor(x,y,width,height){
var options ={
  'restitution': 0.8,
  'friction':1.2,

} 
 this.width = 20;
  this.height = 50; 
   this.body = Bodies.rectangle(x,y,20,50,options);
    this.Visiblity = 255;
  World.add(world,this.body);
  }
 display(){
  // console.log(this.body.speed);
   if(this.body.speed < 7){
   var angle = this.body.angle;
   var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   rectMode(CENTER);
   rect(0,0,this.width,this.height);
   pop();

   }
   else{
    
   World.remove(world, this.body); 
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
  
     pop();
   } 
   
   
 }
 Score(){
  if (this.Visiblity < 0 && this.Visiblity > -105){
    score++;
  }
}
}
