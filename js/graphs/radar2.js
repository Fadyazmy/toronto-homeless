var marksCanvas = document.getElementById("marksChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var marksData = {
    labels: ['Health', 'Food', 'Rent', "Children", "Minimum Wage"],
  	datasets: [{
	    label: "How does poverty affect you?",
	    backgroundColor: "rgba(200,0,0,0.6)",
	    borderColor: "rgba(200,0,0,0.6)",
	    fill: false,
	    radius: 6,
	    pointRadius: 6,
	    pointBorderWidth: 3,
	    pointBackgroundColor: "orange",
	    pointBorderColor: "rgba(200,0,0,0.6)",
	    pointHoverRadius: 10,
	    data: [68, 64, 95, 44, 10],
	    borderDash: [10,5]
  }, 
 {
	    label: "What can the City of Toronto do to reduce poverty?",
	    backgroundColor: "#F1F7EE", // legend box filler colour
	    borderColor: "#F1F7EE", // line colour
	    fill: false,
	    radius: 6,
	    pointRadius: 6,
	    pointBorderWidth: 3,
	    pointBackgroundColor: "#E8DAB2",
	    pointBorderColor: "#36413E",
	    pointHoverRadius: 10,
	    data: [26, 16, 69, 84, 10],
	    borderDash: [10,5]
  }
  ]
};

var chartOptions = {
  legend: {
	labels: {
		fontColor: "white",
		fontSize: 18
	}
  },
  scale: {
    gridLines: {
      color: "black",
      lineWidth: 3,
      display: true,
	},
    ticks: {
      maxTicksLimit: 3,
      beginAtZero: true,
      min: 0,
      max: 100,
      stepSize: 20,
      fontColor: "#000000", // scale number colors
  	  display: false, // disable the tick numbers
      maxTicksLimit: 2,

    },
    pointLabels: {
      fontColor: "#fff", // label colors
      fontSize: 18
    }
  },
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData,
  options: chartOptions
});