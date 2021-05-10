import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LineChart } from "../component/line";
// import { DoughnutChart } from "../component/linechart";
import { useHistory } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "../../styles/home.scss";

export const Home = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const Handlerlogin = e => {
		e.preventDefault();
		actions.login({ email: email, password: password }, history);
	};
	return (
		<div className="form mx-auto">
			<Jumbotron fluid className="jumbotron text-center">
				<Container>
					<h1>CoopWork</h1>
				</Container>
			</Jumbotron>

			<Container>
				{/* <DoughnutChart /> */}
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Control
							className="input border border-dark"
							type="email"
							placeholder="Worker Name"
							onChange={e => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control
							className="input border border-dark"
							type="password"
							placeholder="Password"
							onChange={e => setPassword(e.target.value)}
						/>
					</Form.Group>

					<Button
						className="mb-2 border border-dark login-button rounded-pill btn-dark"
						onClick={Handlerlogin}>
						Submit Infomation
					</Button>
					<br />
					<Button className="login-button border border-dark rounded-pill btn-dark">Login with Gmail</Button>
				</Form>
			</Container>
		</div>
	);
};
