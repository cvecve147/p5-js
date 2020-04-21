var play;
var stop;
var pause;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/s03.mp3');
}

function setup() {
  createCanvas(600,400);
  mySound.setVolume(0.8);
  // mySound.play();
  play = createButton("Play");
  stop = createButton("Stop");
  pause = createButton("Pause");
  play.mousePressed(playf);
  stop.mousePressed(stopf);
  pause.mousePressed(pausef);
  background(220);
}
function playf(){
  mySound.play();
  background(240);
  text("play...", 10, 50);
}
function stopf(){
  mySound.stop();
  background(240);
  text("stop...", 10, 50);
}
function pausef(){
  mySound.pause();
  background(240);
  text("pause...", 10, 50);
}
