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
import Navbar from "react-bootstrap/Navbar";
import { Chat } from "./chat";
import "../../styles/tabNav.scss";
import BillsChart from "./billsChart";
import PieChart from "./pieChart";
import VerticalBar from "./barChart";
import LineChart from "./line";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Fade from "react-bootstrap/Fade";
import { VoteButons } from "./votebuttons";

export const TabNav = () => {
	const [voteTab, setVoteTab] = useState(false);
	const [accountsTab, setAccountsTab] = useState(true);
	const [billsTab, setBillsTab] = useState(false);
	const [budgetsTab, setBudgetsTab] = useState(false);
	const [debateTab, setDebateTab] = useState(false);

	return (
		<Tab.Container className="container" id="left-tabs-example" defaultActiveKey="first">
			<Row>
				<Col sm={3}>
					<Nav variant="pills" className="flex-column">
						<Nav.Item>
							<Nav.Link
								className="tab rounded-0"
								eventKey="first"
								onClick={() => {
									setVoteTab(false);
									setBillsTab(false);
									setBudgetsTab(false);
									setAccountsTab(true);
									setDebateTab(false);
								}}>
								Accounts
								<i className="fas fa-dollar-sign ml-3" />
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								className="tab rounded-0"
								eventKey="second"
								onClick={() => {
									setVoteTab(false);
									setBillsTab(true);
									setBudgetsTab(false);
									setAccountsTab(false);
									setDebateTab(false);
								}}>
								Bills <i className="fas fa-file-invoice-dollar ml-3" />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								className="tab rounded-0"
								eventKey="third"
								onClick={() => {
									setVoteTab(false);
									setBillsTab(false);
									setBudgetsTab(true);
									setAccountsTab(false);
									setDebateTab(false);
								}}>
								Budgets <i className="fas fa-money-check ml-3" />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								className="tab rounded-0"
								eventKey="fourth"
								onClick={() => {
									setVoteTab(true);
									setBillsTab(false);
									setBudgetsTab(false);
									setAccountsTab(false);
									setDebateTab(false);
								}}>
								Votes <i className="fas fa-address-card ml-3" />
								{/* <i class="fas fa-address-card"></i> */}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								className="tab mb-4 rounded-0 "
								eventKey="fifth"
								onClick={() => {
									setVoteTab(false);
									setBillsTab(false);
									setBudgetsTab(false);
									setAccountsTab(false);
									setDebateTab(true);
								}}>
								Debate <i className="fas fa-comments ml-3" />
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={9}>
					<Tab.Content>
						<Tab.Pane eventKey="first">
							<>
								{accountsTab ? (
									<>
										<LineChart />{" "}
									</>
								) : (
									""
								)}
							</>
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<>
								{billsTab ? (
									<>
										<BillsChart />{" "}
									</>
								) : (
									""
								)}
							</>
						</Tab.Pane>
						<Tab.Pane eventKey="third">
							<></>
							{budgetsTab ? (
								<>
									<VerticalBar />{" "}
								</>
							) : (
								""
							)}
						</Tab.Pane>
						<Tab.Pane eventKey="fourth">
							<>
								<div id="example-collapse-text" className="pie">
									The chart below displays the results of our workplace democracy in real time,
									allowing you to always be to up to date.
								</div>
							</>
							{voteTab ? (
								<>
									<VoteButons />{" "}
								</>
							) : (
								""
							)}
						</Tab.Pane>
						<Tab.Pane eventKey="fifth">
							<div className="container mt-5">
								<p style={{ fontSize: 15 }}>
									Be apart of our workplace democracy and join the debate about whether or not to
									obtain a loan for launching new products
								</p>

								<Link to="/chat" className="p-1 m-1 border border-dark rounded-pill btn-dark button">
									Join
								</Link>
							</div>
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};
