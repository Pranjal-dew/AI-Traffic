var H = 1440;
var W = 740;
var x1,y1,x1a,y1a;
var x2,y2,x2a,y2a;
var x3,y3,x3a,y3a;
var x4,y4,x4a,y4a;
var BL = 135;
var rw = 40;
var a=5;//Speed
var dis=40;//distance
var bond = 0;

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
  fill(225);
  ellipse(x1, y1, 30, 30);

  if ((x1 < -bond)||(x1 > H+bond))
    x1a=(-x1a);
      if ((y1 < -bond)||(y1 > W+bond)) 
    y1a=(-y1a);

 if((((x1<x2+dis)&&(x1>x2-dis))&&((y1<y2+dis)&&(y1>y2-dis)))||
    (((x1<x3+dis)&&(x1>x3-dis))&&((y1<y3+dis)&&(y1>y3-dis)))||
    (((x1<x4+dis)&&(x1>x4-dis))&&((y1<y4+dis)&&(y1>y4-dis))))
    {
      if((x1-(rw/2))%(BL+rw)==0)
        y1a=(-y1a);
      if((y1-(rw/2))%(BL+rw)==0)
        x1a=(-x1a);
    }
 
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
  
    


///////////////////////////////////////////////////////////////////////////////////////
  fill(225,0,0);
  ellipse(x2, y2, 30, 30);

      if ((x2 < -bond)||(x2 > H+bond)) 
    x2a=(-x2a);
      if ((y2 < -bond)||(y2 > W+bond)) 
    y2a=(-y2a);
 
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
  


  ///////////////////////////////////////////////////////////////////////////////////
  fill(225);
  ellipse(x3, y3, 30, 30);

   if ((x3 < -bond)||(x3 > H+bond)) 
    x3a=(-x3a);
      if ((y3 < -bond)||(y3 > W+bond)) 
    y3a=(-y3a);

 if((((x3<x2+dis)&&(x3>x2-dis))&&((y1<y2+dis)&&(y1>y2-dis)))||
    (((x3<x1+dis)&&(x3>x1-dis))&&((y1<y3+dis)&&(y1>y3-dis)))||
    (((x3<x4+dis)&&(x3>x4-dis))&&((y1<y4+dis)&&(y1>y4-dis))))

    {
      if((x3-(rw/2))%(BL+rw)==0)
        y3a=(-y3a);
      if((y2-(rw/2))%(BL+rw)==0)
        x3a=(-x3a);
    }
 
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
  
   


///////////////////////////////////////////////////////////////////////////////////////

  fill(225);
  ellipse(x4, y4, 30, 30);

  if ((x4 < -bond)||(x4 > H+bond)) 
    x4a=(-x4a);
      if ((y4 < -bond)||(y4 > W+bond)) 
    y4a=(-y4a);

 if((((x4<x2+dis)&&(x4>x2-dis))&&((y4<y2+dis)&&(y4>y2-dis)))||
    (((x4<x3+dis)&&(x4>x3-dis))&&((y4<y3+dis)&&(y4>y3-dis)))||
    (((x4<x1+dis)&&(x4>x1-dis))&&((y4<y1+dis)&&(y4>y1-dis))))
    {
      if((x4-(rw/2))%(BL+rw)==0)
        y4a=(-y4a);
      if((y4-(rw/2))%(BL+rw)==0)
        x4a=(-x4a);
    }

 
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
  
    
///////////////////////////////////////////////////////////////////////////////////////
}