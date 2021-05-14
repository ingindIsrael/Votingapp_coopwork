import React from "react";
import { Link } from "react-router-dom";

export const NewNav = () => {
	return (
        <>
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

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      	<Nav className="ml-auto">
					<Nav.Link href="/accounts">Home</Nav.Link>
					<Nav.Link href="/createuser">Edit Users</Nav.Link>
					<Nav.Link href="/createevent">Edit Events</Nav.Link>
					<Nav.Link href="/chat">Set Debate</Nav.Link>
				</Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
    );
};