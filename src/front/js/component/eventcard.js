import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Modal, Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { ModalVote } from "./modalvote";
import PropTypes from "prop-types";
import { PieChart } from "./pieChart";

export const EventCard = ({ item, handleShow, picked, ID, i }) => {
	console.log(item);
	const { store, actions } = useContext(Context);
	return (
		<Card className="p-0 mt-0" bg="light">
			<Card.Header text="muted">{item.eventNAME}</Card.Header>
			<PieChart eventIndex={i} />

			<ListGroup className="list-group-flush">
				{item.proposal.map((proposal, index) => (
					<ListGroupItem key={index}>
						<Button
							className="rounded-pill"
							variant="dark"
							onClick={() => {
								handleShow();
								picked(proposal.proposalNAME);
								ID(proposal.id);
							}}>
							{proposal.proposalNAME}
						</Button>
					</ListGroupItem>
				))}
			</ListGroup>
			<Card.Footer>
				<Card.Subtitle className="mb-2 text-muted">Send bulk reminder to vote</Card.Subtitle>
				<Button className="btn-dark rounded-pill" onClick={() => actions.reminder()}>
					Send
				</Button>
			</Card.Footer>
		</Card>
	);
};
EventCard.propTypes = {
	item: PropTypes.object,
	handleShow: PropTypes.func,
	picked: PropTypes.func,
	ID: PropTypes.func,
	i: PropTypes.number
};
