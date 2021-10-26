noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function preload(){

}
function draw(){
    background('#4682b4');

    document.getElementById("squareSide").innerHTML="The Width and Height of the Square Will be "+ difference +"px";
    fill('#FF00FF');
    stroke('#FF00FF');
    square(noseX, noseY, difference);
}
function setup(){
var video = createCapture(VIDEO);
video.size(550, 500);
canvas = createCanvas(550, 500);
canvas.position(560,150);

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX - rightWristX);

        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference );
    }
}