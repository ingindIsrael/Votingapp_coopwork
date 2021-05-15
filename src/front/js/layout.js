import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { CreateUser } from "./pages/createUser.js";
import NewNav from "./component/nav";
import { Footer } from "./component/footer";
import { Accounts } from "./pages/account";
import { CreateEvent } from "./pages/createEvent.js";
import { Chat } from "./component/chat.js";
import { LineChart } from "./component/line.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [login, setLogin] = useState(false);

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NewNav login={login} setLogin={setLogin} />
					{/* <TabNav /> */}
					<Switch>
						<Route exact path="/">
							<Home login={login} setLogin={setLogin} />
						</Route>
						<Route exact path="/accounts">
							<Accounts />
						</Route>
						<Route exact path="/chat">
							<Chat />
						</Route>
						<Route exact path="/createuser">
							<CreateUser />
						</Route>
						<Route exact path="/createEvent">
							<CreateEvent />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
