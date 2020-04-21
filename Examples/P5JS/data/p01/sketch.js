var flower;
var spaceData;
function preload(){
  flower = loadJSON("flower.json");
  // data = loadJSON("bird.json");
}

function setup(){
   createCanvas(600, 400);

   loadJSON("bird.json", function(data){
     var bird = data.birds;
     for(var i in bird){
       createElement("h1", bird[i].family);
       for(var j in bird[i].members){
         createP(bird[i].members[j]);
       }
     }
   });
   // 非同步
   loadJSON("http://xyz.com/xxx.json", getdata, "jsonp");
   function getdata(data){
     // somtimes, we need jsonp to allow .json get be gotten.!
      spaceData = data;
   }

   var api="http://weather.com?"
   var submit = select("#submit");
   submit.mousePressed(weatherAsk);
   var input = select("#city");
   function weatherAsk(){
         var url = api + "city=" + input.value() + "&apikey="+apikey;
         loadJSON(url, getdata, "jsonp");

   }
}
var t1 = 0;
function draw(){
  background(240);

}
