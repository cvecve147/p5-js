let data;
function preload(){
    data = loadStrings("poem.txt")
}
function setup() {
    createCanvas(400, 400);
    for(line of data){
      console.log(line);
      p1.insertAdjacentHTML('afterend', '<p>'+line+'</p>');
    }
  }
  
  function draw() {
    //background(220);
  }