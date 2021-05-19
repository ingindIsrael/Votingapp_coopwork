import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Pie } from "react-chartjs-2";
import "../../styles/pieChart.scss";
import PropTypes from "prop-types";

const data = {
	labels: [],
	datasets: [
		{
			label: "# of Votes",
			data: [],
			backgroundColor: [],
			borderColor: [],
			borderWidth: 1
		}
	]
};
const colors = {
	BGcolor: [
		"rgba(255, 99, 132, 0.5)",
		"rgba(235, 162, 235, 0.5)",
		"rgba(101, 111, 221, 0.5)",
		"rgba(227, 228, 111, 0.5)",
		"rgba(170, 228, 111, 0.5)",
		"rgba(111, 228, 171, 0.5)",
		"rgba(201, 111, 228, 0.5)",
		"rgba(228, 111, 116, 0.5)",
		"rgba(111, 228, 121, 0.5)"
	],
	Bcolor: [
		"rgba(255, 99, 132, 1)",
		"rgba(235, 162, 235, 1)",
		"rgba(101, 111, 221, 1)",
		"rgba(227, 228, 111, 1)",
		"rgba(170, 228, 111, 1)",
		"rgba(111, 228, 171, 1)",
		"rgba(201, 111, 228, 1)",
		"rgba(228, 111, 116, 1)",
		"rgba(111, 228, 121, 1)"
	]
};

export const PieChart = props => {
	const { store, actions } = useContext(Context);
	store.events[props.eventIndex].proposal.forEach((element, index) => {
		data.labels.push(element.proposalNAME);
		data.datasets[0].data.push(element.votes.length);
		data.datasets[0].backgroundColor.push(colors.BGcolor[index]);
		data.datasets[0].borderColor.push(colors.Bcolor[index]);
	});
	return (
		<>
			<Pie data={data} />
		</>
	);
};
PieChart.propTypes = {
	eventIndex: PropTypes.number
};
