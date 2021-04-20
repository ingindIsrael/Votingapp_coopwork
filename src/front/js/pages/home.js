import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Jumbotron fluid className="jumbotron">
				<Container>
					<h1>CoopWork</h1>
					<p>First time here? Take a minute and register.</p>
				</Container>
			</Jumbotron>
			<Container lg={true}>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Control className="input" type="email" placeholder="Cooperativist Name" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control className="input" type="password" placeholder="Password" />
					</Form.Group>

					<Button className="mb-2 login-button rounded-pill btn-dark">Submit Infomation</Button>
					<br />
					<Button className="login-button btn-dark">Login with Gmail</Button>
				</Form>
			</Container>
		</div>
	);
};
