let stop = true;
function preload() {

}
var audio;

function setup() {
  createCanvas(480, 120);
  audio = new p5.AudioIn();
  amp = new p5.Amplitude();

  var b = createButton("收音開關");
  b.mousePressed(toggle);
  console.log(audio);
}
var rec = false;
function toggle(){
  if( rec ){
    audio.stop();
    rec = false;
  }
  else{
    audio.start();
    rec = true;
    console.log(audio.getLevel());
    amp.setInput(audio);
    console.log(amp._getBuffer());
    console.log(amp.input.context);
  }
}
function draw(){
   var buf = amp.bufferSize;


}
