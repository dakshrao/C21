var rect1,rect2



function setup() {
  createCanvas(800,400);
 rect1 = createSprite(400, 100, 50, 50);
 rect2= createSprite(400,300,100,50)
 rect1.debug=true;
 rect2.debug=true;
 //rect1.velocityX=5;
 //rect2.velocityX=-5;
 rect1.velocityY=5;
 rect2.velocityY=-5;

}



function draw() {
  background(255,255,255);  
  /*
  if(rect1.x - rect2.x <(rect1.width+rect2.width)/2
  &&rect2.x-rect1.x < (rect1.width+ rect2.width)/2)
  {
    rect1.velocityX=rect1.velocityX * (-1)
    rect2.velocityX=rect2.velocityX * (-1)
  }
  


  if(rect1.y - rect2.y <(rect1.height+rect2.height)/2
  &&rect2.y-rect1.y < (rect1.height+ rect2.height)/2)
  {
    rect1.velocityY=rect1.velocityY * (-1)
    rect2.velocityY=rect2.velocityY * (-1)
  }
  */
 
  bounceOff(rect1,rect2)



  if(isTouching(rect1,rect2))
  {
    rect1.shapeColor="blue"
    rect2.shapeColor="green"
    
  }

  else{
rect1.shapeColor="black"
rect2.shapeColor="black"
  }


}

function bounceOff (object1, object2){
  if(object1.x - object2.x <(object1.width+object2.width)/2
  &&object2.x-object1.x < (object2.width+ object1.width)/2)
  {
    object1.velocityX=object1.velocityX * (-1)
    object2.velocityX=object2.velocityX * (-1)
  }
  


  if(object1.y - object2.y <(object1.height+object2.height)/2
  &&object2.y-object1.y < (object1.height+ object2.height)/2)
  {
    object1.velocityY=object1.velocityY * (-1)
    object2.velocityY=object2.velocityY * (-1)
  }

}