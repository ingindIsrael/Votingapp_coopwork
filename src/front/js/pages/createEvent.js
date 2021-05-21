import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Jumbotron, Modal, Container, Form, Button } from "react-bootstrap";
import "../../styles/home.scss";

export const CreateEvent = () => {
	const { store, actions } = useContext(Context);
	const [addProposal, setAddProposal] = useState(["", ""]);
	const [eventNAME, setEventNAME] = useState("");
	const [eventDATE, setEventDATE] = useState("");
	useEffect(() => console.log(addProposal), [addProposal]);
	const handlerSubmit = e => {
		e.preventDefault();
		actions.createevent({
			eventNAME,
			eventDATE,
			listPROPOSAL: addProposal
		});
		setEventNAME("");
		setEventDATE("");
		setAddProposal(["", ""]);
	};
	const handlerProposal = (index, value) => {
		let proposals = addProposal;
		proposals[index] = value;
		setAddProposal(proposals);
	};
	const [showAlert, setShowAlert] = useState(false);

	if (showAlert) {
		return (
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>New event!</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>A voting event has been created.</p>
				</Modal.Body>

				<Modal.Footer>
					<Button href="/accounts" variant="dark">
						Go to home
					</Button>
				</Modal.Footer>
			</Modal.Dialog>
		);
	}
	return (
		<div className="container-fluid mt-5 text-center">
			<div className="row">
				<h1 className="mx-auto mb-5">CoopWork</h1>
			</div>
			<div className="row">
				<Form
					className="col-md-4 col-10 mx-auto"
					onSubmit={e => {
						handlerSubmit(e);
						setShowAlert(true);
					}}>
					<Form.Group controlId="formBasicName">
						<Form.Control
							className="input border border-dark"
							type="name"
							placeholder="Event Name"
							onChange={e => setEventNAME(e.target.value)}
							value={eventNAME}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicDate">
						<Form.Control
							className="input border border-dark"
							type="date"
							placeholder="Event Date"
							onChange={e => setEventDATE(e.target.value)}
						/>
					</Form.Group>
					{addProposal.map((proposal, key) => {
						return (
							<Form.Group controlId="formBasicName" key={key}>
								<Form.Control
									className="input border border-dark"
									type="name"
									placeholder="Proposal Name"
									// onChange={e => setNewUser({ ...addProposal, e.target.value })}
									onChange={e => handlerProposal(key, e.target.value)}
									// value={proposal}
								/>
							</Form.Group>
						);
					})}
					<Button
						className="mb-2 border border-dark login-button rounded-pill btn-dark"
						onClick={() => {
							setAddProposal([...addProposal, ""]);
							setShowAlert(true);
						}}>
						Add Proposal
					</Button>

					<Button
						className="mb-2 border border-dark login-button rounded-pill btn-dark"
						type="submit"
						// onClick={() => {
						// 	handlerSubmit();
						// 	setShowAlert(true);
						// }}>
						// {" "}
					>
						Create Event
					</Button>
				</Form>
			</div>
		</div>
	);
};
