function preload() {
  img = loadImage("4.jpg")
}

function setup() {
  width = img.width / img.height
  createCanvas(400 * width, 400)
  img2 = createImage(100, 100)
  img.loadPixels()
  img2.loadPixels()
  red = []
  green = []
  blue = []
  gray = []
  lightnesscolor = []
  //   for (let i = 0; i < 256; i++) {
  //     red.push(0)
  //     green.push(0)
  //     blue.push(0)
  //     gray.push(0)
  //     lightnesscolor.push(0)
  //   }
  //   for (let i = 0; i < width; i++) {
  //     for (let j = 0; j < height; j++) {
  //       var imgcolor = img.get(i, j)

  //       red[imgcolor[0]]++
  //       green[imgcolor[1]]++
  //       blue[imgcolor[2]]++
  //       lightnesscolor[parseInt(lightness(imgcolor))]++
  //     }
  //   }

  for (let i = 60; i < 70; i++) {
    for (let j = 0; j < img2.width; j++) {
      img2.set(j, i, color(255, 20, 255))
      img2.set(j, i + 20, color(20, 255, 255))
    }
  }
  for (let i = 0; i < img2.width; i++) {
    img2.set(i, 0, color(0, 0, 0))
    img2.set(i, img2.height - 1, color(0, 0, 0))
  }
  for (let i = 0; i < img2.height; i++) {
    img2.set(0, i, color(0, 0, 0))
    img2.set(img2.width - 1, i, color(0, 0, 0))
  }
}
let img2, red, green, blue, gray, lightnesscolor
function draw() {
  background(220)
  //   noTint()
  //   image(img, 0, 0, width, height)

  //   tint(0, 255, 255, 100)
  image(img, width / 2, 0, width, height)

  img2.updatePixels()
  image(img, 0, 0, width, height)
  x = mouseX
  y = mouseY
  filter(OPAQUE)
  copy(img, x * 2, y * 2, 20, 20, x, y, 50, 50)
  filter(INVERT)
  //   stroke(255, 0, 0, 255)
  //   for (let i = 0; i < 255; i++) {
  //     line(i, height, i, height - (red[i] / Math.max(...red)) * height)
  //   }
  //   stroke(0, 255, 0, 255)
  //   for (let i = 0; i < 255; i++) {
  //     line(
  //       255 + i,
  //       height,
  //       255 + i,
  //       height - (green[i] / Math.max(...green)) * height
  //     )
  //   }
  //   stroke(0, 0, 255, 255)
  //   for (let i = 0; i < 255; i++) {
  //     line(
  //       255 * 2 + i,
  //       height,
  //       255 * 2 + i,
  //       height - (blue[i] / Math.max(...blue)) * height
  //     )
  //   }

  //   stroke(255, 255, 255, 255)
  //   for (let i = 0; i < 100; i++) {
  //     line(
  //       255 * 2 + i,
  //       height,
  //       255 * 2 + i,
  //       height - (lightnesscolor[i] / Math.max(...lightnesscolor)) * height
  //     )
  //   }
}

function mouseClicked(fxn) {
  x = mouseX
  y = mouseY
  console.log(x, y)

  console.log(img2.get(x, y))
}
