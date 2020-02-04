var r = 0;
var g = 50;
var b = 200;

var ball 

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
 createCanvas(500,400);
  
  
}


function draw(){
  background(r,g,b);
  
  // change the value of Red based on the mouse movement about the X axis
  r = map(mouseX,0,400,0,400); 
  
  // change the value of Green based on the mouse movement about the X axis
  g = map(mouseX,50,400,0,200);
  
  // change the value of Blue based on the mouse movement about the X axis
  b = map(mouseX,200,400,0,200);

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse(mouseX,200,25);
  
 
}