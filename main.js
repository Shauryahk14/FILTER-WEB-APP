nose_x=0;
nose_y=0;


function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);

}
function take_snapshot(){
    save("myfilterimage.png");
}
function modelLoaded(){
console.log('posenetloaded');

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x-15;
        nose_y=results[0].pose.nose.y-15;

        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}
function preload(){
    clown_nose=loadImage("https://files.fm/u/pjxgxawxpm");
}
function draw(){
    image(video,0,0,300,300);
image(clown_nose,nose_x,nose_y,40,40);

}