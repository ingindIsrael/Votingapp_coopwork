import React from "react";
import { Line } from "react-chartjs-2";
import "../../styles/chart.scss";

const data = {
	labels: ["Dec", "Jan", "Feb", "Mar", "April", "May"],
	datasets: [
		{
			label: "Revenue Spread",
			data: [12, 19, 30, 57, 69, 73],
			fill: false,
			backgroundColor: "rgb(88, 176, 88)",
			borderColor: "rgba(88, 176, 88, 0.5)"
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
