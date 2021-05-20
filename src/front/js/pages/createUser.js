import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Alert, Modal, Container, Form, Button, Check } from "react-bootstrap";
import "../../styles/home.scss";

export const CreateUser = () => {
	const { store, actions } = useContext(Context);
	const [newUser, setNewUser] = useState({
		email: "",
		fname: "",
		lname: "",
		workerPosition: "",
		admin: false,
		phone: ""
	});

	const [showAlert, setShowAlert] = useState(false);

	if (showAlert) {
		return (
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>New user!</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>A user has been created.</p>
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
				<Form className="col-md-4 col-10 mx-auto">
					<Form.Group controlId="email">
						<Form.Control
							className="input border border-dark"
							onChange={e => setNewUser({ ...newUser, email: e.target.value })}
							type="email"
							placeholder="Worker Email"
						/>
					</Form.Group>

					<Form.Group controlId="fname">
						<Form.Control
							className="input border border-dark"
							onChange={e => setNewUser({ ...newUser, fname: e.target.value })}
							type="name"
							placeholder="Worker First Name"
						/>
					</Form.Group>
					<Form.Group controlId="lname">
						<Form.Control
							className="input border border-dark"
							onChange={e => setNewUser({ ...newUser, lname: e.target.value })}
							type="name"
							placeholder="Worker Last Name"
						/>
					</Form.Group>

					<Form.Group controlId="phone">
						<Form.Control
							className="input border border-dark"
							onChange={e => setNewUser({ ...newUser, phone: e.target.value })}
							type="phone"
							placeholder="Worker Phone"
						/>
					</Form.Group>
					<Form.Group controlId="workerPosition">
						<Form.Control
							className="input border border-dark"
							onChange={e => setNewUser({ ...newUser, workerPosition: e.target.value })}
							type="name"
							placeholder="Worker Position"
						/>
					</Form.Group>
					<Form.Group controlId="Password">
						<Form.Control
							className="input border border-dark"
							onChange={e => setNewUser({ ...newUser, password: e.target.value })}
							type="name"
							placeholder="Worker Password"
						/>
					</Form.Group>
					{/* <Form.Check
						type="switch"
						checked={newUser["admin"]}
						onChange={e => setNewUser(console.log(e.target.value), { ...newUser, admin: e.target.value })}
						id="custom-switch"
						label="Administrative Powers"
					/> */}
					<Form>
						<Form.Group controlId="exampleForm.SelectCustom">
							<Form.Label>Administrative Powers</Form.Label>
							<Form.Control
								as="select"
								onChange={e =>
									setNewUser({ ...newUser, admin: e.target.value == "yes" ? true : false })
								}
								custom>
								<option>yes</option>
								<option>no</option>
							</Form.Control>
						</Form.Group>
					</Form>
					<Button
						className="mb-2 border border-dark login-button rounded-pill btn-dark"
						onClick={() => {
							actions.createuser(newUser);
							setShowAlert(true);
						}}>
						Create User
					</Button>
					<br />
					<Button className="login-button border border-dark rounded-pill btn-dark mb-5">Delete User</Button>
				</Form>
			</div>
		</div>
	);
};
