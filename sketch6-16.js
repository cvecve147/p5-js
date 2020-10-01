let attackLevel = 1.0
let releaseLevel = 0

let attackTime = 0.001
let decayTime = 0.2
let susPercent = 0.2
let releaseTime = 0.5

let env, triOsc

function setup() {
  let cnv = createCanvas(100, 100)
  cnv.mousePressed(playEnv)

  env = new p5.Envelope()
  triOsc = new p5.Oscillator("triangle")
  triOsc.amp(env) // 用 env 做 AM
  triOsc.freq(220)
}

function draw() {
  background(220)
  text("tap here to play", 5, 20)
  attackTime = map(mouseX, 0, width, 0, 1.0) // 動態 attackTime
  text("attack time: " + attackTime, 5, height - 40)
}

function playEnv() {
  triOsc.start()
  env.setADSR(attackTime, decayTime, susPercent, releaseTime)
  env.play()
}
