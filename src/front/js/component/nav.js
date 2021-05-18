import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Toggle,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from "reactstrap";
import "../../styles/nav.scss";

const Example = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div id="header-container">
			<Navbar color="dark" light expand="md">
				<NavbarBrand>
					<NavLink to="/">
						{" "}
						<i className="far fa-handshake text-light" />
					</NavLink>
				</NavbarBrand>
				<NavbarToggler onClick={toggle}>
					{/* Close mark */}
					<div id="close-icon" className={isOpen ? "open" : ""}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					{/* close mark ends */}
				</NavbarToggler>
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto nav" navbar>
						<NavItem>
							<NavLink className="text-light" href="/accounts" onClick={toggle}>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="text-light" href="/createuser" onClick={toggle}>
								Edit Users
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="text-light" href="/createevent" onClick={toggle}>
								Edit Events
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="text-light" href="/chat" onClick={toggle}>
								Set Debate
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Example;
