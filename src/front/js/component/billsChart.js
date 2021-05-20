import React from "react";
import { Pie } from "react-chartjs-2";
import "../../styles/pieChart.scss";

const data = {
	labels: ["Rent", "Coffee", "Lights", "Water", "Gas", "Misc"],
	datasets: [
		{
			label: "Monthly Bills in thousands of dollars",
			data: [1.2, 1.9, 0.3, 0.5, 0.2, 0.3],
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
		<div className="pie mt-5">
			<Pie data={data} />
		</div>
	</>
);

export default BillsChart;
