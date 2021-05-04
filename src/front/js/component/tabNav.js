import React, { useState } from "react";
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
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Fade from "react-bootstrap/Fade";

export const TabNav = () => {
	const [open, setOpen] = useState(false);

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
							<>
								<Button
									onClick={() => setOpen(!open)}
									aria-controls="example-fade-text"
									aria-expanded={open}
									className="border border-dark rounded-pill btn-dark button">
									Accounts
								</Button>
								<p>
									<i className="fas fa-dollar-sign" />
								</p>
								<Fade in={open}>
									<div id="example-fade-text">
										<LineChart />
									</div>
								</Fade>
							</>
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<>
								<Button
									onClick={() => setOpen(!open)}
									aria-controls="example-fade-text"
									aria-expanded={open}
									className="border border-dark rounded-pill btn-dark button">
									Bills
								</Button>
								<p>
									<i className="fas fa-file-invoice-dollar" />
								</p>
								<Fade in={open}>
									<div id="example-fade-text">
										<BillsChart />
									</div>
								</Fade>
							</>
						</Tab.Pane>
						<Tab.Pane eventKey="third">
							<>
								<Button
									onClick={() => setOpen(!open)}
									aria-controls="example-fade-text"
									aria-expanded={open}
									className="border border-dark rounded-pill btn-dark button">
									Budgets
								</Button>
								<p>
									<i className="fas fa-money-check" />
								</p>
								<Fade in={open}>
									<div id="example-fade-text">
										<VerticalBar />
									</div>
								</Fade>
							</>
						</Tab.Pane>
						<Tab.Pane eventKey="fourth">
							<>
								<Button
									onClick={() => setOpen(!open)}
									aria-controls="example-collapse-text"
									aria-expanded={open}
									className="border border-dark rounded-pill btn-dark button">
									About
								</Button>
								<Collapse in={open}>
									<div id="example-collapse-text" className="small-container">
										The chart below displays the results of our workplace democracy in real time,
										allowing you to always be to up to date.
									</div>
								</Collapse>
							</>
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
							<Button className="border border-dark rounded-pill btn-dark button">Join Chat</Button>
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};
