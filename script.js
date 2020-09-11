var angle = 0;
var x1 = [];
var y1 = [];
var i = 0;
function setup(){
    createCanvas(1200,600);
    frameRate(1);
    background(0);
    for(let i=0;i<=360;i+=15){
        x1.push(400 + 200*Math.cos(i * Math.PI/180));
        y1.push(300 + 200*Math.sin(i * Math.PI/180));
    }
}

function draw(){
    stroke(255);
    fill(0);
    if(i<=x1.length){
        for(let j=i+1;j<x1.length-1;j++){
            line(x1[i],y1[i],x1[j],y1[j]);
        }
        i++;
    }
}