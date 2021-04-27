import React from "react";
import { Bar } from "react-chartjs-2";
import "../../styles/chart.scss";

const data = {
	labels: ["Rent", "Revenue", "Electric", "Water", "Gas", "Misc"],
	datasets: [
		{
			label: "Monthly Budget",
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				"rgba(255, 99, 132)",
				"rgba(54, 162, 235)",
				"rgba(255, 206, 86)",
				"rgba(75, 192, 192)",
				"rgba(153, 102, 255)",
				"rgba(255, 159, 64)"
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)"
			],
			borderWidth: 1
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

const VerticalBar = () => (
	<div className="chart">
		<Bar data={data} options={options} />
	</div>
);

export default VerticalBar;