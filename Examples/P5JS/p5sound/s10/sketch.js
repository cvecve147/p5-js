var audiograb;

function setup(){
  //new audioIn
  audioGrab = new p5.AudioIn();

  audioGrab.getSources(function(deviceList) {
    //print out the array of available sources
    console.log(deviceList);
    //set the source to the first item in the deviceList array
    audioGrab.setSource(0);
  });
}
