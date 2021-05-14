import React from "react";
import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import { TabNav } from "../component/tabNav.js";
import "../../styles/accounts.scss";

export const Accounts = () => {
	return (
		<div className="tabs">
			<TabNav />
		</div>
	);
};
