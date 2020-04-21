let myFont;
function preload(){
    myFont = loadFont('assets/NotoSansTC-Bold.otf');
}
function setup(){
    createCanvas(600, 400);
    // textFont('Noto Serif CJK TC Bold');
    // 'Noto Sans TC Bold'
    // 'Noto Sans TC'
    // 'Noto Serif CJK TC'
    textFont(myFont);
    textSize(24);
    text("一片楓葉掉落下來", 50, 100);
}

