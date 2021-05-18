import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LineChart } from "../component/line";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import "../../styles/home.scss";

export const Home = props => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const Handlerlogin = e => {
		e.preventDefault();

		fetch(`${process.env.BACKEND_URL}/api/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email: email, password: password })
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);

				sessionStorage.clear();
				sessionStorage.setItem("token", data.access_token);
				sessionStorage.setItem("admin", data.user.admin);
				props.setLogin(true);
			})
			.catch(error => console.log(error));
	};
	console.log("este es el admin ", sessionStorage.getItem("admin"));
	return (
		<div className="container-fluid mt-5 text-center">
			{props.login ? <Redirect to="/accounts" /> : ""}
			<div className="row">
				<h1 className="mx-auto mb-5">CoopWork</h1>
			</div>
			<div className="row">
				<Form className="col-md-4 col-10 mx-auto">
					<Form.Group controlId="formBasicEmail">
						<Form.Control
							className="input col-12 border border-dark"
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
				</Form>
			</div>
		</div>
	);
};
Home.propTypes = {
	login: PropTypes.bool,
	setLogin: PropTypes.func
};
