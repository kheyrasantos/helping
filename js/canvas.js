var c=document.getElementById("myCanvas");
var d=document.getElementById("myCanvas2");
var ctx=c.getContext("2d");
var ctz=d.getContext("2d");


var speed=1;

setInterval(drawMain,speed);


var gradient=ctx.createLinearGradient(0,0,170,0);
gradient.addColorStop("0","#222");
gradient.addColorStop("0.5","gray");
gradient.addColorStop("1.0","green");

ctx.strokeStyle="#e56";
ctx.strokeStyle=gradient;
ctx.lineWidth=2;

var gradient2=ctx.createLinearGradient(0,0,170,0);
gradient2.addColorStop("0","#222");
gradient2.addColorStop("0.5","blue");
gradient2.addColorStop("1.0","red");

ctz.strokeStyle="#e56";
ctz.strokeStyle=gradient2;
ctz.lineWidth=2;

var x1=0;
var x2=0;
var y1=40;
var y2=180;
var x3=-900;
var y3=180;

var a1=0;
var a2=0;
var b1=70;
var b2=180;
var a3=-700;
var b3=190;



seed1=getRandomInt(400,460);
seed2=getRandomInt(400,460);
var rightLimit=1400;
var increment=1;
var increment2=0;
function trace1(seed){
ctx.strokeStyle="#e56";
ctx.strokeStyle=gradient;

ctz.strokeStyle="#e56";
ctz.strokeStyle=gradient2;

ctz.moveTo(a2,b2);
ctz.lineTo(a2+increment,b2);

ctx.moveTo(x2,y2);
ctx.lineTo(x2+increment,y2);
if(x2>20 && x2<40){
y2=y2+increment;
}
if(x2>200 && x2<270){
	y2=y2+increment;
}

if(a2>20 && a2<40){
b2=b2+increment2;
}

if(a2>200 && a2<270){
	b2=b2+increment2;
}

if(x2>400 && x2<seed1){
	y2=y2-increment;
}
if(x2==480){
	ctx.beginPath()
	ctx.arc(x2,y2,4,0,2*Math.PI);
	ctx.stroke();
}

if(a2==480){
	ctz.beginPath()
	ctz.arc(a2,b2,4,0,3*Math.PI);
	ctz.stroke();
}

if(x2<476 || x2>484){
ctx.stroke();
}

if(a2<476 || a2>484){
ctz.stroke();
}


if(x2>600 && x2<seed1+300){
	y2=y2+increment;
}

if(a2>600 && a2<seed1+300){
	b2=b2+increment2;
}

ctx.beginPath()
ctz.beginPath()
x2+=increment;
if(x2>rightLimit){
	x2=0;
	y2+=getRandomInt(55,75);
	y2=180;
	//seed1=getRandomInt(400,490);
}

a2+=increment2;
if(a2>rightLimit){
	a2=0;
	b2+=getRandomInt(55,75);
	b2=190;
	//seed1=getRandomInt(400,490);
}

}
function trace2(seed){
	ctx.strokeStyle="#FFF";
	ctz.strokeStyle="#FFF";

ctx.moveTo(x3,y3);
ctx.lineTo(x3+1,y3);
ctz.moveTo(a3,b3);
ctz.lineTo(a3+2,b3);
if(x3>20 && x3<40){
y3=y3+increment;
}
if(x3>200 && x3<270){
	y3=y3+increment;
}

if(a3>20 && a3<40){
b3=b3+increment2;
}
if(a3>200 && a3<270){
	b3=b3+increment2;
}


if(x3>400 && x3<seed1){
	y3=y3-increment;
}
if(x3==480){
	ctx.beginPath()
	ctx.arc(x3,y3,4,0,2*Math.PI);
	ctx.stroke();
	ctz.beginPath()
	ctz.arc(x3,y3,4,0,3*Math.PI);
	ctz.stroke();
}

if(x3>600 && x3<seed1+300){
	y3=y3+increment;
}

if(x3<476 || x3>484){
ctx.stroke();
ctz.stroke();
}
ctx.beginPath()
ctz.beginPath()
x3+=increment;
if(x3>rightLimit){
	x3=-900;
	y3=180;
	seed2=seed1;
}
}




function drawMain(){
	trace1(seed1);
	trace2(seed1);


}


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
