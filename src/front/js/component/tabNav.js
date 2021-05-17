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
								Bills
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
								Budgets
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
								Votes
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								className="tab rounded-0"
								eventKey="fifth"
								onClick={() => {
									setVoteTab(false);
									setBillsTab(false);
									setBudgetsTab(false);
									setAccountsTab(false);
									setDebateTab(true);
								}}>
								Debate
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={9}>
					<Tab.Content>
						<Tab.Pane eventKey="first">
							<>
								<p>
									<i className="fas fa-dollar-sign" />
								</p>
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
								<p>
									<i className="fas fa-file-invoice-dollar" />
								</p>
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
							<>
								<p>
									<i className="fas fa-money-check" />
								</p>
							</>
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
								<div id="example-collapse-text" className="small-container">
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
							<p>
								<i className="fas fa-comments" />
							</p>

							<div className="container">
								<p style={{ fontSize: 15 }}>
									Be apart of our workplace democracy and join the debate about whether or not to
									obtain a loan for launching new products
								</p>
							</div>
							<Button
								className="border border-dark rounded-pill btn-dark button"
								onClick={() => <Chat />}>
								Join Chat
							</Button>
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};
