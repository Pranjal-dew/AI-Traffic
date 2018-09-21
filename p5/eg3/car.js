var H = 1440;
var W = 740;
var x1, y1,x1a,y1a;
var x2, y2,x2a,y2a;
var x3, y3,x3a,y3a;
var x4, y4,x4a,y4a;
var BL = 135;
var rw = 40;
var a=5;//Acceleratio

function setup()
{ 
  createCanvas(H,W);
  x1 = H/2; y1 = rw/2;
  x2 = H/2; y2 = 4*(rw+BL)+rw/2;
  x3 = rw/2; y3 = 2*(rw+BL)+rw/2;
  x4 = 8*(rw+BL)+rw/2; y4 = 2*(rw+BL)+rw/2;
}

function draw()
{ 
  background(0);
  
  fill(0,0,225);
  
  
 for(var i = 0; i< 8;i++)
 for(var j=0;j<4;j++)
    rect(i*175+rw,j*175+rw,BL,BL,10);
///////////////////////////////////////////////////////////////////////////////////
  fill(random(225),random(225),random(225));
  ellipse(x1, y1, 30, 30);
 
  if(((x1-(rw/2))%(BL+rw)==0)&&((y1-(rw/2))%(BL+rw)==0))
  {
    var dir1 = random([1,2,3,4]);
      if(dir1 == 1)
        { 
          x1a=0;
          y1a=(-a);
        }
      else if(dir1 == 2)
        {
          x1a=(+a);
          y1a=0;
        }
      else if(dir1 == 3)
        {
          x1a=0;
          y1a=(+a);
        }
      else if(dir1 == 4)
        {
          x1a=(-a);
          y1a=0;
        }
  }   

  y1+=y1a;
  x1+=x1a;
  
    if ((x1 < -0.1)||(x1 > H+0.1))
    x1a=(-x1a);
      if ((y1 < -0.1)||(y1 > W+0.1)) 
    y1a=(-y1a);


///////////////////////////////////////////////////////////////////////////////////////
  fill(random(225),random(225),random(225));
  ellipse(x2, y2, 30, 30);
 
  if(((x2-(rw/2))%(BL+rw)==0)&&((y2-(rw/2))%(BL+rw)==0))
  {
    var dir2 = random([1,2,3,4]);
      if(dir2 == 1)
        { 
          x2a=0;
          y2a=(-a);
        }
      else if(dir2 == 2)
        {
          x2a=(+a);
          y2a=0;
        }
      else if(dir2 == 3)
        {
          x2a=0;
          y2a=(+a);
        }
      else if(dir2 == 4)
        {
          x2a=(-a);
          y2a=0;
        }
  }   

  y2+=y2a;
  x2+=x2a;
  
    if ((x2 < -0.1)||(x2 > H+0.1)) 
    x2a=(-x2a);
      if ((y2 < -0.1)||(y2 > W+0.1)) 
    y2a=(-y2a);

     if ((x2<x1+40)&&(x2>x1-40)&&(y2<y1+40)&&(y2>y1-40))
    {
      if((x2-(rw/2))%(BL+rw)==0)
        y2a=(-y2a);
      if((y2-(rw/2))%(BL+rw)==0)
        x2a=(-x2a);
    }


  ///////////////////////////////////////////////////////////////////////////////////
  fill(random(225),random(225),random(225));
  ellipse(x3, y3, 30, 30);
 
  if(((x3-(rw/2))%(BL+rw)==0)&&((y3-(rw/2))%(BL+rw)==0))
  {
    var dir3 = random([1,2,3,4]);
      if(dir3 == 1)
        { 
          x3a=0;
          y3a=(-a);
        }
      else if(dir3 == 2)
        {
          x3a=(+a);
          y3a=0;
        }
      else if(dir3 == 3)
        {
          x3a=0;
          y3a=(+a);
        }
      else if(dir3 == 4)
        {
          x3a=(-a);
          y3a=0;
        }
  }   

  y3+=y3a;
  x3+=x3a;
  
    if ((x3 < -0.1)||(x3 > H+0.1)) 
    x3a=(-x3a);
      if ((y3 < -0.1)||(y3 > W+0.1)) 
    y3a=(-y3a);

       if ((((x3<x2+40)&&(x3>x2-40))&&((y3<y1+40)&&(y3>y1-40)))||(((y3<y2+40)&&(y3>y2-40))&&((y3<x1+40)&&(y3>x1-40))))
    {
      if((x3-(rw/2))%(BL+rw)==0)
        y3a=(-y3a);
      if((y2-(rw/2))%(BL+rw)==0)
        x3a=(-x3a);
    }


///////////////////////////////////////////////////////////////////////////////////////

  fill(random(225),random(225),random(225));
  ellipse(x4, y4, 30, 30);
 
  if(((x4-(rw/2))%(BL+rw)==0)&&((y4-(rw/2))%(BL+rw)==0))
  {
    var dir4 = random([1,2,3,4]);
      if(dir4 == 1)
        { 
          x4a=0;
          y4a=(-a);
        }
      else if(dir4 == 2)
        {
          x4a=(+a);
          y4a=0;
        }
      else if(dir4 == 3)
        {
          x4a=0;
          y4a=(+a);
        }
      else if(dir4 == 4)
        {
          x4a=(-a);
          y4a=0;
        }
  }   
  y4+=y4a;
  x4+=x4a;
  
    if ((x4 < -0.1)||(x4 > H+0.1)) 
    x4a=(-x4a);
      if ((y4 < -0.1)||(y4 > W+0.1)) 
    y4a=(-y4a);

if (((((x4<x3+40)&&(x4>x3-40))&&((x4<x2+40)&&(x4>x2-40)))||((x4<x1+40)&&(x4>x1-40)))&&(((y4<y3+40)&&(y4>y3-40))||((y4<x2+40)&&(y4>x2-40))&&((y4<x1+40)&&(y4>x1-40))))
    {
      if((x4-(rw/2))%(BL+rw)==0)
        y4a=(-y4a);
      if((y4-(rw/2))%(BL+rw)==0)
        x4a=(-x4a);
    }

///////////////////////////////////////////////////////////////////////////////////////
}