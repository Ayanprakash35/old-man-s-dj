music_1 = "0";
music_2 = "0";
music_11 = "0";
music_22 = "0";

function preload()
{

}

function setup() {
    canvas =  createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
    
    fill("#FF0000");
    stroke("#FF0000");
    
    
    }

    function modelLoaded() {
        console.log('PoseNet Is Initialized');
      }

      leftwristx  = 0;
      leftwristy = 0;

      function gotPoses(results){

  if(results.length > 0)
  {
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
  }
}