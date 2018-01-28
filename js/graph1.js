
// set default to straight lines - no curves
// Chart.defaults.global.elements.line.tension = 0;
// set default no fill beneath the line
Chart.defaults.global.elements.line.fill = false;

// stacked bar with 2 unstacked lines - nope
var barChartData = {
  labels: ['Q1 2015', 'Q2', 'Q3 ', 'Q4', 'Q1 2016', 'Q2', 'Q3', 'Q4', 'Q1 2017', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    type: 'line',
    label: 'Occupancy Rate (%)',
    id: "Occupancy",
    backgroundColor: "white",
    data: [90, 89, 88, 87, 85, 87, 89, 91, 92, 93, 92, 95],
    fill: true
  }
  // {
  //   type: 'bar',
  //   label: 'Homeless investment',
  //   id: "Homeless investment",
  //   backgroundColor: "#f8f8ff",
  //   data: [32000000, 32000000, 32000000, 32000000, 32000000, 32000000, 32000000, 32000000, 36100000, 36100000, 36100000, 36100000, 36100000, 40460000, 40460000, 40460000, 40460000, 40460000],

  // }
  ]
};


var ctx = document.getElementById("myChart");
// allocate and initialize a chart
var ch = new Chart(ctx, {
  type: 'bar',
  data: barChartData,
  options: {
    hoverMode: 'index',
    title: {
      display: true,
      text: "Toronto Shelter Occupancy Rates"
    },

    responsive: true,

    scales: {
      xAxes: [{
        stacked: false
      }],

      yAxes: [{
        stacked: true,
        type: 'linear',
        position: "left",
        id: "Occupancy",
        ticks: {
          max: 100,
          min: 80
        }
      }, 
      {
        stacked: true,
        type: 'linear',
        id: 'B',
        type: 'linear',
        position: 'right',
        ticks: {
          max: 100,
          min: 0
        }
      }
      // {
      //   stacked: false,
      //   type: 'linear',
      //   position: "right",
      //   id: "B",
      // }
      ]

    }

  }
});










var marksCanvas = document.getElementById("marksChart");

var marksData = {
  labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
  datasets: [{
    label: "Student A",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [65, 75, 70, 80, 60, 80]
  }, {
    label: "Student B",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [54, 65, 60, 70, 70, 75],
    
  }]
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData
});


