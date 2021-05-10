import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/home.scss";

export const CreateEvent = () => {
	return (
		<div className="form mx-auto">
			<Jumbotron fluid className="jumbotron text-center">
				<Container>
					<h1>CoopWork</h1>
				</Container>
			</Jumbotron>
			<Container>
				<Form>
					<Form.Group controlId="formBasicName">
						<Form.Control className="input border border-dark" type="name" placeholder="Event Name" />
					</Form.Group>

					<Form.Group controlId="formBasicDate">
						<Form.Control className="input border border-dark" type="date" placeholder="Event Date" />
					</Form.Group>
					<Form.Group controlId="formBasicName">
						<Form.Control className="input border border-dark" type="name" placeholder="Proposal Name" />
					</Form.Group>
					<Form.Group controlId="formBasicName">
						<Form.Control className="input border border-dark" type="name" placeholder="Proposal Name 2" />
					</Form.Group>
					<Button className="mb-2 border border-dark login-button rounded-pill btn-dark">Add Proposal</Button>
				</Form>
			</Container>
		</div>
	);
};
