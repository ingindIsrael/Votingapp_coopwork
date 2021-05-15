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
			<Navbar color="lightgray" light expand="md">
				<NavbarBrand>
					<NavLink to="/">
						{" "}
						<i style={{ color: "black" }} className="far fa-handshake" />
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
							<NavLink href="/accounts" onClick={toggle}>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/createuser" onClick={toggle}>
								Edit Users
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/createevent" onClick={toggle}>
								Edit Events
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/chat" onClick={toggle}>
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
