import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Form, FormControl, Nav, NavDropdown } from "react-bootstrap";

export const NewNav = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				<i className="far fa-handshake" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav>
						<Nav.Link href="/accounts">Home</Nav.Link>
						<Nav.Link href="/createuser">Edit Users</Nav.Link>
						<Nav.Link href="/createevent">Edit Events</Nav.Link>
						<Nav.Link href="/chat">Set Debate</Nav.Link>
					</Nav>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
