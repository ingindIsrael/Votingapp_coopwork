import React from "react";
import { Line } from "react-chartjs-2";
import "../../styles/chart.scss";

const data = {
	labels: ["Dec", "Jan", "Feb", "Mar", "April", "May"],
	datasets: [
		{
			label: "Revenue Spread",
			data: [12, 19, 3, 5, 2, 3],
			fill: false,
			backgroundColor: "rgb(255, 99, 132)",
			borderColor: "rgba(255, 99, 132, 0.2)"
		}
	]
};

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true
				}
			}
		]
	}
};

const LineChart = () => (
	<>
		<div className="chart">
			<Line data={data} options={options} />
		</div>
	</>
);

export default LineChart;
