/*
  Johan Karlsson (DonKarlssonSan) 2018

  程式庫來源
  // https://github.com/jwagner/simplex-noise.js?files=1
  使用了 P5JS 程式庫，動畫明顯慢很多，甚至只是載進來並沒有執行也會明顯變慢
  換成 perlin 雜訊，沒這麼好看！

*/
//  https://codepen.io/DonKarlssonSan/pen/jzLXVO

let canvas;
let ctx;
let simplex;
let w, h;
let ticker = 0;
let then = 0;

function setup() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = "lighter";
  window.addEventListener("resize", reset);
  reset();
}

function reset() {
  simplex = new SimplexNoise();
  w = canvas.width = window.innerWidth * 0.9;
  h = canvas.height = window.innerHeight * 0.5;
  ctx.fillStyle = "black";
}

function draw() {
  requestAnimationFrame(draw);

  let now = Date.now();
  let delta = (now - then) / 3500;
  ticker += delta;
  then = now;

  ctx.lineWidth = 1;
  ctx.fillRect(0, 0, w, h);
  let zoom = 110;
  let strength = 35;
  let strengthY = strength * 4;
  for(let y = h/2 - 40; y < h/2 + 40; y += 0.5) {
    ctx.beginPath();
    ctx.strokeStyle = `hsla(${y*0.6 + ticker * 50}, 100%, 50%, 0.05)`;
    for(let x = -strength; x < w + strength; x+= 4) {
      let n1 = simplex.noise3D(x / zoom, y / zoom, ticker) * strengthY;
      let n2 = simplex.noise3D(x / zoom + 1000, y / zoom + 1000, ticker + 1000) * strengthY;
      // let n1 = noise(x / zoom, y / zoom, ticker) * strengthY;
      // let n2 = noise(x / zoom + 1000, y / zoom + 1000, ticker + 1000) * strengthY;
      ctx.lineTo(x + n1, y + n2);
    }
    ctx.stroke();
  }
}

setup();
draw();
