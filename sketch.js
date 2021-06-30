var car, wall;

var bullet,speed,weight;
 var wall,thickness;
function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83)
  bullet=createSprite(50,200,50,5) ;
  bullect.velocityX=speed;
  bullet.shapeColor=color(255) ;

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color(230,230,230) ;
  //wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  
  
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness) ;
  if(damage>10){
  wall.shapeColor=color(0,255,0);
  
  }
  }
  
  
  
  
  
  
  
  if(wall.x - car.x < (car.width + wall.width)/2){
      car.velocityX = 0;

    var deformation = (0.5 * wieght * speed * speed)/22500;
    if(deformation < 80){
      car.shapeColor = "green";
    }
    if(deformation > 80 && deformation < 180){
      car.shapeColor = color(230,230,0);
    }
    if(deformation > 180){
      car.shapeColor = "red";
    }
  }

  drawSprites();
}
function hasCollided(Lbullet,Lwall){
bulletRightEdge=bullet.x+Lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
return true
}
return false
}