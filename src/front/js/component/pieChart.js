import React from "react";
import { Pie } from "react-chartjs-2";
import "../../styles/pieChart.scss";

const data = {
	labels: ["Yes", "No"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19],
			backgroundColor: [
				"rgba(255, 99, 132)",
				"rgba(54, 162, 235)",
				"rgba(255, 206, 86)",
				"rgba(75, 192, 192)",
				"rgba(153, 102, 255)",
				"rgba(255, 159, 64)"
			],
			borderColor: [
				"rgba(255, 99, 132)",
				"rgba(54, 162, 235)",
				"rgba(255, 206, 86)",
				"rgba(75, 192, 192)",
				"rgba(153, 102, 255)",
				"rgba(255, 159, 64)"
			],
			borderWidth: 1
		}
	]
};

const PieChart = () => (
	<div className="pie">
		<Pie data={data} />
	</div>
);

export default PieChart;
