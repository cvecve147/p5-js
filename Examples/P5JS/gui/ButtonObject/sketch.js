var aSlider, bSlider;
var cb;
var barr = [];
function setup() {
  createCanvas(400, 400);
	svalue = createSlider(0, 255);
	svalue.position(20, 200);
	createSlider();
	textSize(20);
	cb = new CButton(200, 200, 50, color(0));
	barr.push(cb);
	cb = new CButton(200, 300, 50, color(0));
	barr.push(cb);

}


function draw() {
  background(255);
	for( i = 0; i < barr.length; i++ ){
	    barr[i].update();
		  barr[i].display();
	}
	barr[0].x = (barr[0].x +5) % width;
}

class CButton{
    constructor(x, y, d, grey){
		  this.x = x;
			this.y = y;
			this.d = d;
			this.grey = grey;
		}
	  update(){
		    if( dist(mouseX, mouseY, this.x, this.y) < this.d )
					this.grey = color(255);
			  else
					this.grey = color(0)
		}
	  display(){
			  fill( this.grey );
		    ellipse(this.x, this.y, this.d, this.d);
		}


}

function keyPressed(){

    if( key == "ArrowRight" ){
			print( barr[0].x );
			barr[0].x += 5;
		}
}
