var fft, noise, filter;

function setup() {
  createCanvas(600, 400);
  fill(255, 40, 255);

  filter = new p5.BandPass();

  noise = new p5.Noise();
  // disconnect unfiltered noise,
  // and connect to filter
  noise.disconnect();
  noise.connect(filter);
  noise.start();

  fft = new p5.FFT();
}

function draw() {
  background(125);

  // set the BandPass frequency based on mouseX
  var freq = map(mouseX, 0, width, 20, 10000);
  filter.freq(freq);
  // give the filter a narrow band (lower res = wider bandpass)
  filter.res(50);

  // draw filtered spectrum
  var spectrum = fft.analyze();
  noStroke();
  for (var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width/spectrum.length, h);
  }

  isMouseOverCanvas();
}

function isMouseOverCanvas() {
  var mX = mouseX, mY = mouseY;
  if (mX > 0 && mX < width && mY < height && mY > 0) {
    noise.amp(0.5, 0.2);
  } else {
    noise.amp(0, 0.2);
  }
}
