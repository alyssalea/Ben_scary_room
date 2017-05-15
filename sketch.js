var Room;
var Creepy;
var Scare;
var Glass;
var Sound;
var Toaster;
var Pan;

function preload () {
  Room = loadImage ("assets/Background.jpg");
  Scare = loadImage ("assets/jumpscare.jpg");
  Creepy = loadSound ("assets/Knock.mp3");
  Glass = loadSound ("assets/Glass.mp3");
  Sound = loadSound ("assets/JumpscareNoise.mp3");
  Toaster = loadSound ("assets/Toaster.mp3");
  Pan = loadSound ("assets/Fry.mp3");
}

function setup() {
  createCanvas (1000, 589);
  image (Room, 0,0);
}
function draw(){
  
 
}


function mouseClicked() {
  if(dist(mouseX, mouseY, 300, 200)<=150){
    Creepy.play();
    Creepy.setVolume(1)
  Creepy.play
  }
  if(dist(mouseX, mouseY, 610, 249)<=20){
    Glass.play(); 
    Glass.setVolume(1);
 Glass.play;
  }
  if(dist(mouseX, mouseY, 943, 263)<=30){
    Toaster.play();
    Toaster.setVolume(1);
  Toaster.play
  }
  if(dist(mouseX, mouseY, 1000, 303)<=15){
    Pan.play()
    Pan.setVolume(1);
  }
if(dist(mouseX, mouseY, 700, 60)<=50){
  fill(0, 0, 0, 50)
draw(rect(0, 0, 1000, 589))
}
}
function keyPressed() {
  if (keyCode == 32){
    image (Scare,0,0, Scare.width/2.7, Scare.height/2);
  }
  if (keyCode == RETURN){
    image (Room, 0, 0)
  }
     
  if (keyCode == 32) {
  Sound.play();
  Sound.setVolume(1);
  //Sound.play;
  }
}

