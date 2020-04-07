function setup() {
  createCanvas(800, 600)
  slider = createSlider(0, 50, 0)
  btn = createButton("click")
  btn.mousePressed(starts)
}
let s, value
start = 0
function draw() {
  background(200)
  s = slider.value()
  text("調整時間" + s, 100, 550)
  textSize(30)
  text("現在時間", 400, 40)
  text(year() + "年" + month() + "月" + day(), 400, 80)
  text(hour() + ":" + minute() + ":" + second(), 400, 130)
  text("點擊開始倒數5")
  s = document.getElementById("name").value

  text(s + "分鐘", 400, 300)
  text("剩餘秒:" + value, 400, 350)
  if (start > 1000) {
    if (millis() - start > s * 1000 * 60) {
      text("時間到", 500, 200)
      // alert("時間到")
    }
  }
}

function mouseClicked() {
  start = millis()
}

function starts() {
  value = slider.value()
  var my = setInterval(() => {
    value--
    if (value == 0) {
      clearInterval(my)
    }
  }, 1000)
}
