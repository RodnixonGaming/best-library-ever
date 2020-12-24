function bounceOff(b01,b02){
    if (b01.x - b02.x < b02.width/2 + b01.width/2
      && b02.x - b01.x < b02.width/2 + b01.width/2) {
        b01.velocityX = b01.velocityX * (-1);
        b02.velocityX = b02.velocityX * (-1);
  }
  if (b01.y - b02.y < b02.height/2 + b01.height/2
    && b02.y - b01.y < b02.height/2 + b01.height/2){
      b01.velocityY = b01.velocityY * (-1);
      b02.velocityY = b02.velocityY * (-1);
  }
  }
  function istouching(box1, box2){
    if (box1.x - box2.x < box2.width/2 + box1.width/2
      && box2.x - box1.x < box2.width/2 + box1.width/2
      && box1.y - box2.y < box2.height/2 + box1.height/2
      && box2.y - box1.y < box2.height/2 + box1.height/2) {
    return true 
  }
  else {
   return false
  }
  }