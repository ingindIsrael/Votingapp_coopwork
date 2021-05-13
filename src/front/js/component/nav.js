import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import "../../styles/tabNav.scss";
import PropTypes from "prop-types";
import { Navbar, Button, Form, FormControl, Nav, NavDropdown } from "react-bootstrap";

export const NewNav = props => {
	const { store, actions } = useContext(Context);
	let isAdmin = sessionStorage.getItem("admin");
	const navForAdmin = () => {
		if (sessionStorage.getItem("admin")) {
			console.log("estamos dentro del primer if TRUE");
			return (
				<>
					<Nav.Link href="/createuser">Edit Users</Nav.Link>
					<Nav.Link href="/createevent">Edit Events</Nav.Link>
					<Nav.Link href="/chat">Set Debate</Nav.Link>
				</>
			);
		} else if (!sessionStorage.getItem("admin")) {
			console.log("estamos dentro del SEGUNDO if FALSE");
			return null;
		}
	};

	return (
		<>
			{/* {props.login ? ( */}
			<Navbar className="NavWhite" variant="dark">
				<Navbar.Brand>
					<i className="far fa-handshake" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/accounts">Home</Nav.Link>

						<Nav.Link
							href="/"
							onClick={() => {
								sessionStorage.clear();
								setLogin(false);
							}}>
							Logout
						</Nav.Link>
						{console.log(sessionStorage.getItem("admin"))}
						{navForAdmin()}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* // ) : ( // <Redirect to="/" />
			)} */}
		</>
	);
};
NewNav.propTypes = {
	login: PropTypes.bool,
	setLogin: PropTypes.func
};
