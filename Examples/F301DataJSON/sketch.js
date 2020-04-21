let data;
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
function preload(){
    data = loadJSO(api_url);
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