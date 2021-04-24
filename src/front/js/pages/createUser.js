import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/home.scss";

export const CreateUser = () => {
	return (
		<div className="form mx-auto">
			<Jumbotron fluid className="jumbotron text-center">
				<Container>
					<h1>CoopWork</h1>
				</Container>
			</Jumbotron>
			<Container>
				<Form>
					<Form.Group controlId="formBasicId">
						<Form.Control className="input border border-dark" type="id" placeholder="Employee Id" />
					</Form.Group>

					<Form.Group controlId="formBasicName">
						<Form.Control className="input border border-dark" type="name" placeholder="Employee Name" />
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
						<Form.Control className="input border border-dark" type="email" placeholder="Employee Email" />
					</Form.Group>

					<Button className="mb-2 border border-dark login-button rounded-pill btn-dark">Create User</Button>
					<br />
					<Button className="login-button border border-dark rounded-pill btn-dark">Delete User</Button>
				</Form>
			</Container>
		</div>
	);
};
