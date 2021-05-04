import React from "react";
import { Pie } from "react-chartjs-2";
import "../../styles/pieChart.scss";

const data = {
	labels: ["Yes", "No"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19],
			backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
			borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
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
