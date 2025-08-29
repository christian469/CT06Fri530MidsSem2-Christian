let x = 399
let y = 350
diameter = 100
const x1 = 150, y1 = 300;  
const x2 = 350, y2 = 350; 
const x3 = 300, y3 = 200;


function setup(){
    createCanvas(600, 400)
    background('black')
}
function draw(){
    circle(x, y, diameter);
    stroke('red');
    strokeWeight(10);

    triangle(x1, y1, x2, y2, x3, y3)
    stroke('red');
    strokeWeight(10);

    rect(50, 50, 200, 150);
    stroke('red');
    strokeWeight(10);
}
