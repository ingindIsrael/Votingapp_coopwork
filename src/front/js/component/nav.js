import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Form, FormControl, Nav, NavDropdown } from "react-bootstrap";

export const NewNav = () => {
	return (
		<Navbar bg="dark clearfix">
			<Navbar.Brand>
				<i className="far fa-handshake" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/accounts">Home</Nav.Link>
					<Nav.Link href="/createuser">Edit Users</Nav.Link>
					<Nav.Link href="/createevent">Edit Events</Nav.Link>
					<Nav.Link href="/chat">Set Debate</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
