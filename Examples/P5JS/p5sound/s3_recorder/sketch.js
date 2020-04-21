var mic, recorder, soundFile;

var state = 0; // mousePress will increment from Record, to Stop, to Play
var button;
var playbutton;
function setup() {
  createCanvas(400,400);
  background(200);
  fill(0);
  text('Enable mic and click the mouse to begin recording', 20, 20);

  // create an audio in
  mic = new p5.AudioIn();

  // users must manually enable their browser microphone for recording to work properly!
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();
  // connect the mic to the recorder
  recorder.setInput(mic);

  // create an empty sound file that we will use to playback the recording
  soundFile = new p5.SoundFile();

  button = createButton("Record");
  button.mousePressed(toggle);
  playbutton = createButton("Playing");
  playbutton.mousePressed(play);
}
function toggle(){
  // if(recorder.isRecord )
  //     mic.stop();
  //     text("...", 50, 100);
  // else {
  //     mic.start();
  //     text("Recording", 50, 100);
  // }
}
function play(){
  // if(soundFile.isPlay){
  //   soundFile.stop();
  // }
  // else{
  //   soundFile.play();
  //   saveSound(soundFile, 'mySound.wav');
  // }
}
function mousePressed() {
  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
  if (state === 0 && mic.enabled) {

    // Tell recorder to record to a p5.SoundFile which we will use for playback
    recorder.record(soundFile);
    background(255,0,0);
    text('Recording now! Click to stop.', 20, 20);
    state++;
  }

  else if (state === 1) {
    background(0,255,0);
    text('Recording stopped. Click to play & save (State): '+state, 20, 20);
    recorder.stop(); // stop recorder, and send the result to soundFile
    state++;
  }

  else if (state === 2) {
    soundFile.play(); // play the result!
    saveSound(soundFile, 'mySound.wav'); // save file
    // var buffer = soundFile._getBuffer();
    // print("length of buffer: ");
    text(soundFile.buffer.getChannelData(0).length, 10, 200);
    mic.stop();
    state++;
  }
}
var plength;
function draw(){
    background( 255,0,0 );
    text('Recording stopped. Click to play & save (State): '+state, 20, 20);
    var buff = recorder._getBuffer();
    var offset = buff[0].length - 1024;
    // text("rec buff length:" + du,20, 30);
    text(buff[0][offset+i], 100, 100);
    beginShape();
    for(var i=0.0; i <1024; i++){
      vertex(i*width/1024, height/2-1000*buff[0][offset+i]);
    }
    endShape();

}
