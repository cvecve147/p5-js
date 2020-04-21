let table;
function preload(){
    table = loadTable("ZonAnn.Ts+dSST.csv", 'csv', 'header')
}
function setup() {
    createCanvas(600, 400);
    table.getColumnCount();
    beginShape();
    for(let i = 0; i < table.getRowCount(); i++){
      let row = table.getRow(i);
      let tmp = row.getNum('Glob');
      let x = map(i, 0, table.getRowCount(), 0, width);
      let y = map(tmp, -1, 1, 300, 50);
      vertex(x, y);
    }
    endShape();
}
  
  function draw() {
    //background(220);
  }