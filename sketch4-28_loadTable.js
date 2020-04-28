function preload() {
  result = loadTable(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
    "header"
  )
}
let max = 0
function setup() {
  createCanvas(800, 600)
  console.log(result)

  for (let i = 0; i < result.rows.length; i++) {
    for (let j = result.columns.length - 10; j < result.columns.length; j++) {
      console.log(
        "日期" +
          result.columns[j] +
          "\t國家" +
          result.rows[i].obj["Province/State"] +
          " " +
          result.rows[i].obj["Country/Region"] +
          "\t確診案例" +
          result.rows[i].obj[result.columns[j]]
      )
      now = parseInt(result.rows[i].obj[result.columns[j]])
      if (max < now) {
        max = now
      }
    }
  }
  console.log(max)
}
function draw() {
  background(220)
}
