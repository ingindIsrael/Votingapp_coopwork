import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="form mx-auto">
			<Jumbotron fluid className="jumbotron text-center">
				<Container>
					<h1>CoopWork</h1>
				</Container>
			</Jumbotron>

			<Container>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Control
							className="input border border-dark"
							type="email"
							placeholder="Cooperativist Name"
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control className="input border border-dark" type="password" placeholder="Password" />
					</Form.Group>

					<Button className="mb-2 border border-dark login-button rounded-pill btn-dark">
						Submit Infomation
					</Button>
					<br />
					<Button className="login-button border border-dark rounded-pill btn-dark">Login with Gmail</Button>
				</Form>
			</Container>
		</div>
	);
};
