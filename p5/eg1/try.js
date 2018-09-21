var displayLength = 1500;
var displayHeigth = 750;
var rectLength = 110;
var roadWidth = 40
var kidhar;
var direction = [0,1, 2, 3];
var speed = 10;
var carWidth = 20;
var rectLength = 110;
var roadWidth = 40;
var carX = 20;
var carY = 20;

function setup() 
{
  createCanvas(window.innerWidth,window.innerHeight);
  kidhar = random([0,1]);
}

function draw() 
{
  var ArX = 10;
  var ArY = 5;
  background(200,200,200);
 
  for(ArY=0;ArY<5;ArY++)
  for(ArX=0;ArX<10;ArX++)
    rect(roadWidth+ArX*(roadWidth+rectLength),roadWidth+ArY*(roadWidth+rectLength),rectLength,rectLength); 

  ellipse(carX,carY,carWidth,carWidth);
  
  if(kidhar==0)
    {
      if(carX<displayLength - carWidth)
        {
          carX+=speed;
          if(((carX - roadWidth/2)%(roadWidth+rectLength))<speed)
            {
              kidhar = random([0,1,2,3]);
            }
        }
      else
        {
          //carX-=speed;
          carX = displayLength - carWidth;
          kidhar = 2;
        }
    }
  else if(kidhar == 1)
      {
        if(carY<displayHeigth- carWidth)
          {
            carY+=speed;
              if(((carY - roadWidth/2)%(roadWidth+rectLength))<speed)
                {
                  kidhar = random([0,1,2,3]);
                }
          }
        else
          {
          //carY-=speed;
          carY = displayHeigth - carWidth;
          kidhar=3;
          }
      }
  else if(kidhar == 2)
  {
  if(carX>carWidth)
  {
  carX-=speed;
  if(((carX - roadWidth/2)%(roadWidth+rectLength))<speed)
  {
  kidhar = random([0,1,2,3]);
  }
  }
  else
  {
  //carX+speed;
  carX = carWidth;
  kidhar = random([0,1,3]);
  }
  }
  else if(kidhar == 3)
  {
  if(carY>carWidth)
  {
  carY-=speed;
  if(((carY - roadWidth/2)%(roadWidth+rectLength))<speed)
  {
  kidhar = random([0,1,2,3]);
  }
  }
  else
  {
  //carY+=speed;
  carY = carWidth;
  kidhar=random([0,1,2]);
  }
  }
}