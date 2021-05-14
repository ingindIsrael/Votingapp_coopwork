import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { ModalVote } from "./modalvote";
import { EventCard } from "./eventcard";

export const VoteButons = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [picked, setpicked] = useState("");
	const [IDpicked, setIDpicked] = useState(null);
	const refreshPage = () => {
		window.location.reload();
	};
	return (
		<>
			{store.events.map((item, key) => {
				const PayLoad = { eventID: item.id, proposalID: IDpicked };

				return (
					<div className="container mx-auto" key={key}>
						<EventCard item={item} handleShow={handleShow} picked={setpicked} ID={setIDpicked} i={key} />

						<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
							<Modal.Header closeButton>
								<Modal.Title>Final Vote</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								Are you completely sure you want to vote for? <strong>{picked}</strong> If so, click on
								<strong> Yes</strong> and your vote will be final. Take into consideration that after
								voting you cannot alter your decision
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>
									Close
								</Button>
								<Button
									variant="primary"
									onClick={() => {
										actions.vote(PayLoad);
										handleClose();
										// refreshPage();
									}}>
									Yes
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				);
			})}
		</>
	);
};
