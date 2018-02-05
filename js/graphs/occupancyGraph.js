		var config = {
			type: 'line',
			data: {
  			labels: ['2015', 'Q2', 'Q3 ', 'Q4', '2016', 'Q2', 'Q3', 'Q4', '2017', 'Q2', 'Q3', 'Q4'],
				datasets: [{
					label: 'Occupancy Rate (%)',
					fill: true,
            		backgroundColor: "rgba(220,220,220,0.2)",
					borderColor: '#FFFFFF',

					borderDash: [5, 5],
    				data: [90, 89, 88, 87, 85, 87, 89, 91, 92, 93, 92, 95],
				}]
			},
			options: {
				layout: {
    				padding: 10,
  				},
				responsive: true,
				title: {
					display: true,
					text: 'Toronto Shelter Occupancy Rate',
			        fontColor: "white"
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				}, 
			    legend: {
		            labels: {
		                fontColor: "white",
		            }
			    },
				scales: {
					xAxes: [{
						display: true,
						gridLines: {
						  display: false ,
						},
						ticks: {
                  			fontColor: "#FFFFFF", // this here
            			},
						scaleLabel: {
							display: true,
							labelString: 'Month',
							fontColor: "white"

						},

					}],
					yAxes: [{
						display: true,
						gridLines: {
						  display: false ,
						},
						ticks: {
                  			fontColor: "#FFFFFF", // this here
            			},

						scaleLabel: {
							display: true,
							labelString: 'Occupancy',
							fontColor: "white"
						}
					}]
				}
			}
		};

		window.onload = function() {
				var ctx = document.getElementById('canvas').getContext('2d');
				window.myLine = new Chart(ctx, config);

		};