var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.001
var decayTime = 0.2;
var susPercent = 0.5;
var releaseTime = 0.5;

var env, triOsc;

function setup() {
  var cnv = createCanvas(100, 100);
  background( 120 );
  textAlign(CENTER);
  text('click to play', width/2, height/2);

  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  // triOsc = new p5.Oscillator('triangle');
  triOsc = new p5.Oscillator('triangle');
  triOsc.amp(env);
  triOsc.start();
  triOsc.freq(440);

  cnv.mousePressed(playEnv);
}

function playEnv(){
  env.play();

}
