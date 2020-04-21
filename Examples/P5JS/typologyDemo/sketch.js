let myFont;
function preload(){
    let style = document.createElement('link')
    style.rel="stylesheet"
    style.href = 'https://fonts.googleapis.com/css?family=Gaegu'

    document.getElementsByTagName('head')[0].appendChild(style)
    // myFont = loadFont('NotoSerifCJKtc-hinted/NotoSerifCJKtc-Regular.otf');
}

function setup() {

    createCanvas(480, 130);



}
function draw() {
    background(200);
    //
    textSize(42);
    text("Hello", 25, 60);
    //
    textSize(26);
    text("World", 27, 90);
    textFont("NotoSerifCJKtc-Bold");
	  textSize(24);
	  text("天地玄黃 宇宙洪荒 Babel Stone Han Regular", 100, 90);
}
