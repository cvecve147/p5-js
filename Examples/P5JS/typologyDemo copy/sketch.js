let myFont;
function preload(){
    let style = document.createElement('link')
    style.rel="stylesheet"
    style.href = 'https://fonts.googleapis.com/css?family=Gaegu'

    document.getElementsByTagName('head')[0].appendChild(style)
    // myFont = loadFont('NotoSerifCJKtc-hinted/NotoSerifCJKtc-Regular.otf');
}

function setup() {

    createCanvas(600, 230);

}
function draw() {
    background(200);
    //
    textSize(36);
    textFont("NotoSerifCJKtc-Black");
    text("Hello  天地 NotoSerifCJKtc-Bold", 25, 60);
    //
    textSize(26);
    text("World", 27, 90);
    textFont("Gaegu");
	  textSize(24);
    text("天地玄黃 宇宙洪荒 Gaeug", 27, 120);
    textFont("Babel Stone Hand Regular")
    text("天地玄黃 宇宙洪荒 Babel Stone Han Regular", 100, 90);
}
