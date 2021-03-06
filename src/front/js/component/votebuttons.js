import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import { Modal, Button, Alert } from "react-bootstrap";
import { ModalVote } from "./modalvote";
import { EventCard } from "./eventcard";

export const VoteButons = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [picked, setpicked] = useState("");
	const [IDpicked, setIDpicked] = useState(null);
	const [errorM, setErrorM] = useState("");
	const refreshPage = () => {
		window.location.reload();
	};
	const refreshHardler = () => {
		setTimeout(() => {
			refreshPage();
		}, 5000);
	};
	// async function handleVote(PayLoad) {
	// 	let req = await actions.vote(PayLoad);
	// 	console.log(req);
	// 	if (req.response === true) {
	// 		setErrorM("exito");
	// 	} else {
	// 		setErrorM(req.message);
	// 	}
	// }
	return (
		<>
			{store.events.map((item, key) => {
				const PayLoad = { eventID: item.id, proposalID: IDpicked };

				return (
					<div className="container mx-auto p-2" key={key}>
						{store.errorMessage.length > 0 && <Alert variant={"danger"}>{store.errorMessage}</Alert>}

						<EventCard item={item} handleShow={handleShow} picked={setpicked} ID={setIDpicked} i={key} />

						<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
							<Modal.Header closeButton>
								<Modal.Title>Final Vote</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								Are you completely sure you want to vote for? <strong>{picked}</strong> If so, click on
								<strong> Ok</strong> and your vote will be final. Take into consideration that after
								voting you cannot alter your decision.
							</Modal.Body>
							<Modal.Footer>
								<Button variant="dark" onClick={handleClose}>
									Close
								</Button>
								<Button
									variant="dark"
									onClick={() => {
										// handleVote(PayLoad);
										actions.vote(PayLoad);
										handleClose();
										refreshHardler();
									}}>
									ok
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				);
			})}
		</>
	);
};
