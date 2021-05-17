import React from "react";
import { Pie } from "react-chartjs-2";
import "../../styles/pieChart.scss";

const data = {
	labels: ["Rent", "Revenue", "Lights", "Water", "Gas", "Misc"],
	datasets: [
		{
			label: "Monthly Bills",
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				"rgba(255, 99, 132, 0.7)",
				"rgba(54, 162, 235, 0.7)",
				"rgba(255, 206, 86, 0.7)",
				"rgba(75, 192, 192, 0.7)",
				"rgba(153, 102, 255, 0.7)",
				"rgba(255, 159, 64, 0.7)"
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

const BillsChart = () => (
	<>
		<div className="pie">
			<Pie data={data} />
		</div>
	</>
);

export default BillsChart;
