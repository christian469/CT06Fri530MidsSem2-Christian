diameter = 50


function setup(){
    createCanvas(600, 600);
    background('red')
}

function draw(){
     for (let count = 1; count < 6; count++) {
 print(count);
    circle(130, 110, diameter);
    fill('black')
    circle(185, 140, diameter);
    circle(200, 195, diameter)
    circle(250, 210, diameter)
    circle(300, 310, diameter)
    circle(380, 360, diameter)
    circle(450, 400, diameter)
}
}
