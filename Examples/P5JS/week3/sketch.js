let  tx;
let json={};
let img;
function preload(){
    tx = loadStrings("note.txt");
    json = loadJSON("note.json");
    img = loadImage("rose-blue.jpeg");
}

function setup() {

    var b = createCanvas(800, 600);
    b.parent("da");
    image(img, 10, 10, img.width/2, img.height/2);
    fill(255, 100, 0);
    text(tx[0], 100, 100);
    text(json.d.d1, 100, 130);
}
function draw() {
}
