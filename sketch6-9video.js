// function setup() {
//   vid = createVideo(["sumcamp1.mp4"], (_) => {
//     vid.hide()
//   })
//   createCanvas(1600, 900, WEBGL)
//   vid.size(600, 400)
// }
// function draw() {
//   background(220)
//   texture(vid)
//   rotateX(map(mouseX, 0, width, 0, TWO_PI))
//   rotateY(map(mouseY, 0, height, 0, TWO_PI))
//   box(300)
//   //   image(vid, -width / 2, -height / 2 + 100, 600, 400)
// }
// let play = false
// function mouseClicked() {
//   if (!play) {
//     vid.play()
//   } else {
//     vid.pause()
//   }
//   play = !play
// }

// let capture
// function setup() {
//   createCanvas(600, 400)
//   capture = createCapture(VIDEO)

//   capture.size(300, 200)
//   capture.hide()
// }

// function draw() {
//   background(255)
//   //   texture(capture)
//   //   box(300)
//   image(capture, 0, 0, width, height)
//   timg = get()

//   timg.loadPixels()
//   for (let j = 0; j < height; j++) {
//     for (let i = 0; i < width; i++) {
//       set(i, j, timg.get(width - i, j))
//     }
//   }
//   updatePixels()
// }

var video
var snapShots = []
var button
var index = 0
function setup() {
  createCanvas(800, 400)
  video = createCapture(VIDEO, ready)
  video.size(320, 240)
  button = createButton("capture")
  button.mousePressed(keepImage)
}
var go = false
function ready() {
  // go = true;
}
function keepImage() {
  // snapShots[index]=(video.get(0,0,320,240));
  go = true
}

function draw() {
  if (go) {
    snapShots[index] = video.get(0, 0, 320, 240)
    index++
    if (index == 40) index = 0
    var w = 80
    var h = 60
    var x = 0
    var y = 0
    for (var i = 0; i < snapShots.length; i++) {
      var ix = (i + frameCount) % snapShots.length
      image(snapShots[ix], x, y, w, h)
      x += 80
      if (x > width) {
        x = 0
        y += 60
      }
    }
  }
}
