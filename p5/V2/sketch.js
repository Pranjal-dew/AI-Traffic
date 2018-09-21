var B = 1500;
var H = 750;
var BL = 110;
var rw = 40;
var direction = [0,1, 2, 3];
var speed = 5;
var cw = 20;
var BL = 110;
var rw = 40;
var c1 = {
			cX : 20,
			cY : 20,
			kidhar : 2
		}
var c2 = {
	cX : B - 20,
	cY : 20+110+40,
	kidhar : 0
	}
var c3 = {
		cX : 20,
		cY : 20+2*(110+40),
		kidhar : 0
		}
var c4 = {
		cX : B -20,
		cY : 20+3*(110+40),
		kidhar : 0
		}
var c5 = {
		cX : 20,
		cY : 20+4*(110+40),
		kidhar : 0
		}

function setup() 
{
	createCanvas(window.innerWidth,window.innerHeight); 
}

function draw() 
{
	background(100);
	var ArX = 10;
	var ArY = 5;
	
	for(ArY=0;ArY<5;ArY++)
	for(ArX=0;ArX<10;ArX++)
	{
	fill(ArY+173,(ArX+ArY)+255,ArX+47);
	stroke(0,0,0);
	rect(rw+ArX*(rw+BL),rw+ArY*(rw+BL),BL,BL,10); 
	}
	

	c1 = movec(c1);
	c2 = movec(c2);
	c3 = movec(c3);
	c4 = movec(c4);
	c5 = movec(c5);
}

function movec(c1)
{
	if(c1.kidhar==0)
	{if(c1.cX<B - cw)
	{c1.cX+=speed;
	if(((c1.cX - rw/2)%(rw+BL))<speed)
	{c1.kidhar = random([0,1,2,3]);}
	}
	else
	{c1.cX = B - cw;
	c1.kidhar = 2;
	}
	}
	else if(c1.kidhar == 1)
	{if(c1.cY<H- cw)
	{c1.cY+=speed;
	if(((c1.cY - rw/2)%(rw+BL))<speed)
	{c1.kidhar = random([0,1,2,3]);
	}
	}
	else
	{c1.cY = H - cw;
	c1.kidhar=3;
	}
	}
	else if(c1.kidhar == 2)
	{if(c1.cX>cw)
	{c1.cX-=speed;
	if(((c1.cX - rw/2)%(rw+BL))<speed)
	{c1.kidhar = random([0,1,2,3]);}
	}
	else
	{c1.cX = cw;
	c1.kidhar = random([0,1,3]);
	}
	}
	else if(c1.kidhar == 3)
	{if(c1.cY>cw)
	{ c1.cY-=speed;
	if(((c1.cY - rw/2)%(rw+BL))<speed)
	{c1.kidhar = random([0,1,2,3]); }
	}
	else
	{c1.cY = cw;
	c1.kidhar=random([0,1,2]);
	}
	}
	ellipse(c1.cX,c1.cY,cw,cw);
	return c1;
};