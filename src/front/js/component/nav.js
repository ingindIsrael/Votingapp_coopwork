import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export const Nav = () => {
	return (
		<Navbar bg="dark clearfix">
			<Navbar.Brand href="https://www.google.com/">
				<i className="fab fa-google" />
			</Navbar.Brand>
			<Navbar.Brand href="https://www.google.com/maps/">
				<i className="fas fa-map-marker-alt" />
			</Navbar.Brand>

			<Navbar.Brand className="justify-content-end" href="https://www.google.com">
				<i className="fas fa-signal" />
			</Navbar.Brand>
		</Navbar>
	);
};
