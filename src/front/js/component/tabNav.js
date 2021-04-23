import React from "react";
import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import { Chat } from "./chat";

export const TabNav = () => {
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row>
				<Col sm={3}>
					<Nav variant="pills" className="flex-column">
						<Nav.Item>
							<Nav.Link eventKey="first">Accounts</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second">Bills</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="third">Budgets</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="fourth">Votes</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="fifth">Debate</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={9}>
					<Tab.Content>
						<Tab.Pane eventKey="first">
							<p>
								<i className="fas fa-dollar-sign" />
							</p>
							<p>Accounts</p>
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<p>
								<i className="fas fa-file-invoice" />
							</p>
							<p>Bills</p>
						</Tab.Pane>
						<Tab.Pane eventKey="third">
							<p>
								<i className="fas fa-money-check" />
							</p>
							<p>Budgets</p>
						</Tab.Pane>
						<Tab.Pane eventKey="fourth">
							<p>
								<i className="fas fa-sticky-note" />
							</p>
							<p>Votes</p>
						</Tab.Pane>
						<Tab.Pane eventKey="fifth">
							<p>
								<i className="fas fa-comments" />
							</p>
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};
