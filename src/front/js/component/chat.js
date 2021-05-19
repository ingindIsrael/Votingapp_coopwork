import React from "react";
import "../../styles/chat.scss";
import { ChatWindow } from "./chatWindow";

export const Chat = () => (
	<>
		<h1 className="mt-5 text-center">Debate</h1>
		<div className="mt-5" fluid>
			<ChatWindow />
		</div>
	</>
);
