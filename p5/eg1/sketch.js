var H = 1440;
var W = 740;
var x, y,xc,ya;
var BL = 135;
var rw = 40;
var a=5;//Acceleration

function setup()
{ 
  createCanvas(H,W);
  x = H/2;
  y = rw/2;
}

function draw()
{ 
  background(80);
  fill(200,350);
  
 for(var i = 0; i< 8;i++)
 for(var j=0;j<4;j++)
    rect(i*175+rw,j*175+rw,BL,BL,10) 
 
  if(((x-(rw/2))%(BL+rw)==0)&&((y-(rw/2))%(BL+rw)==0))
  {
    var dir = random([1,2,3,4]);
      if(dir == 1)
        { 
          xa=0;
          ya=(-a);
        }
      else if(dir == 2)
        {
          xa=(+a);
          ya=0;
        }
      else if(dir == 3)
        {
          xa=0;
          ya=(+a);
        }
      else if(dir == 4)
        {
          xa=(-a);
          ya=0;
        }
  }  

  y+=ya;
  x+=xa;
  
  if ((x <= rw/2)||(x >= H-rw/2))
    xa=(-xa);
      if ((y <= rw/2)||(y >= W-rw/2)) 
    ya=(-ya);
  
    fill(400);
  ellipse(x, y, 30, 30);
}