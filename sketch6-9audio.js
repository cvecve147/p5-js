// var play
// var stop
// var pause

// function preload() {
//   soundFormats("mp3", "ogg")
//   mySound = loadSound("s03.mp3")
// }

// amp = new p5.Amplitude()
// function setup() {
//   createCanvas(600, 400)
//   mySound.setVolume(0.8)
//   // mySound.play();
//   play = createButton("Play")
//   stop = createButton("Stop")
//   pause = createButton("Pause")
//   play.mousePressed(playf)
//   stop.mousePressed(stopf)
//   pause.mousePressed(pausef)
//   background(220)
// }
// function playf() {
//   mySound.play()
//   background(240)
//   text("play...", 10, 50)
// }
// function stopf() {
//   mySound.stop()
//   background(240)
//   text("stop...", 10, 50)
// }
// function pausef() {
//   mySound.pause()
//   background(240)
//   text("pause...", 10, 50)
// }

// function draw() {
//   background(220)
//   fft = new P5.FFT()
//   spectrum = fft.analyze()
//   wave = fft.waveform()
//   for (let i = 0; i < spectrum.length; i++) {
//     let x = map(i, 0, spectrum.length, 0, width)
//     let h = -height + map(spectrum[i], 0, 255, height, 0)
//     rect(x, height, width / spectrum.length, h)
//   }
//   beginShape()
//   stroke(255, 0, 0) // waveform is red
//   strokeWeight(1)
//   for (let i = 0; i < waveform.length; i++) {
//     let x = map(i, 0, waveform.length, 0, width)
//     let y = map(waveform[i], -1, 1, 0, height)
//     vertex(x, y)
//   }
//   endShape()

//   text(amp.getLevel(), 100, 10)
// }

function preload() {
  sound = loadSound("s03.mp3")
}

function setup() {
  createCanvas(700, 400)
  // mouseClicked(togglePlay);
  fft = new p5.FFT()
  sound.amp(0.2)
}

function mouseClicked() {
  togglePlay()
}

function draw() {
  background(200)

  let spectrum = fft.analyze()
  noStroke()
  fill(0, 255, 0) // spectrum is green
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width)
    let h = -height + map(spectrum[i], 0, 255, height, 0)
    rect(x, height, width / spectrum.length, h)
  }

  let waveform = fft.waveform()
  noFill()
  beginShape()
  stroke(255, 0, 0) // waveform is red
  strokeWeight(1)
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width)
    let y = map(waveform[i], -1, 1, 0, height)
    vertex(x, y)
  }
  endShape()

  text("click to play/pause", 4, 10)
}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause()
  } else {
    sound.loop()
  }
}
