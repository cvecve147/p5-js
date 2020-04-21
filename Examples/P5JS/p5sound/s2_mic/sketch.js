var mic;
var grab;
var rec = false;
function preload(){

}
function setup(){
  createCanvas(400,400);
  mic = new p5.AudioIn();
  mic.getSources(function(list){
    mic.setSource(0);
  });
  fft = new p5.FFT();
  fft.setInput(mic);
}
function draw(){
  background(0);
  micLevel = mic.getLevel();
  if(rec) print(micLevel);
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
  var wave = fft.waveform(1024, "float32");
  var spectrum = fft.analyze();
  stroke(255, 0, 0);
  beginShape();
  for (i = 0; i<wave.length; i++) {
   vertex(i, map(wave[i], -1, 1, height, 0) );
  }
  endShape();
   noStroke();
   fill(0, 255, 0);
   beginShape();
   for(int = 0; i < spectrum.length; i++){
      vertex(i, map(spectrum[i], 0, 255, height, 0));
   }
    endShape()
}

function mouseClicked(){
  if(rec){
    rec = false;
    mic.stop();
  }
  else{
    rec = true;
    mic.start();
  }
}

function errAudioIn(e){
   print(e);

}
