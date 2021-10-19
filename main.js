music_1 = "0";
music_2 = "0";

function preload()
{

}

function setup() {
    canvas =  createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
    
    fill("#FF0000");
    stroke("#FF0000");
    
    
    }

    