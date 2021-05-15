import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
	return (
		<div className="inputs mx-auto">
			<Jumbotron fluid className="jumbotron text-center">
				<Container>
					<h1>CoopWork</h1>
				</Container>
			</Jumbotron>
			<Container>
				<Form onSubmit={e => handlerSubmit(e)}>
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
						onClick={() => setAddProposal([...addProposal, ""])}>
						Add Proposal
					</Button>

					<Button className="mb-2 border border-dark login-button rounded-pill btn-dark" type="submit">
						Create Event
					</Button>
				</Form>
			</Container>
		</div>
	);
};
