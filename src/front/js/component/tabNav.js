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
import "../../styles/tabNav.scss";
import BillsChart from "./billsChart";
import PieChart from "./pieChart";
import VerticalBar from "./barChart";
import LineChart from "./line";

export const TabNav = () => {
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row>
				<Col sm={3}>
					<Nav variant="pills" className="flex-column">
						<Nav.Item>
							<Nav.Link className="tab" eventKey="first">
								Accounts
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="tab" eventKey="second">
								Bills
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="tab" eventKey="third">
								Budgets
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="tab" eventKey="fourth">
								Votes
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link className="tab" eventKey="fifth">
								Debate
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={9}>
					<Tab.Content>
						<Tab.Pane eventKey="first">
							<h1>Accounts</h1>
							<p>
								<i className="fas fa-dollar-sign" />
							</p>
							<LineChart />
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<h1>Bills</h1>
							<BillsChart />
						</Tab.Pane>
						<Tab.Pane eventKey="third">
							<h1>Budgets</h1>
							<p>
								<i className="fas fa-money-check" />
							</p>
							<VerticalBar />
						</Tab.Pane>
						<Tab.Pane eventKey="fourth">
							<div className="container">
								<p>Follow the results of our workplace democracy in real time.</p>
							</div>
							<PieChart />
						</Tab.Pane>
						<Tab.Pane eventKey="fifth">
							<p>
								<i className="fas fa-comments" />
							</p>
							<h1>Debate</h1>
							<div className="container">
								<p>
									Be apart of our workplace democracy and join the debate about whether or not to
									obtain a loan for launching new products
								</p>
							</div>
							<button className="border border-dark rounded-pill btn-dark">Click Here</button>
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};
