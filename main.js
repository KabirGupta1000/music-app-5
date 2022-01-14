song1 = "music.mp3";
song2 = "music2.mp3";
scoreLeftWrist = 0;
scoreRightWrist = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song_variable = 0;
function preload(){
    song = loadSound(song1 , song2);
}
function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modalLoaded);
    poseNet.on('pose' , gotPoses);
}
function modalLoaded(){
    console.log("Model is Activated and Running");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
    }
function draw(){ 
    image(video , 0 , 0 , 600 , 500);
    fill("#FF10000");
    stroke("#FF10000")
    if(scoreLightWrist > 0.2)
    {
        circle(lefttWristX,leftWristY,20);
        song.stop(2)
        if(leftWristY >0 && leftWristY <= 100){
       song.play(1);
       document.getElementById("songheader").innerHTML = song1;
        }
    }
    if(scoreRighttWrist > 0.2)
    {
        circle(rightWristX,rightWristY,20);
        song.stop(2)
        if(rightWristY >0 && rightWristY <= 100){
       song.play(2);
       document.getElementById("songheader").innerHTML = song1;
        }
    }
}
