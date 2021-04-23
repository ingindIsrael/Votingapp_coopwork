import React, { useState } from "react";
import { ChatMessageHistory } from "./chatHistory";

export const ChatWindow = () => {
	const [messages, setMessages] = useState([{ message: "Hi Josh" }, { message: "How are you?" }]);
	const [inputText, setInputText] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		const nextMessages = messages.concat([{ message: inputText }]);
		setMessages(nextMessages);
		setInputText("");
	};

	const windowStyles = {
		maxWidth: "40em",
		margin: "1rem auto"
	};

	const formStyles = {
		display: "flex"
	};

	const inputStyles = {
		flex: "1 auto"
	};

	const btnStyles = {
		backgroundColor: "#00d8ff",
		border: "none",
		color: "#336699",
		textTransform: "uppercase",
		letterSpacing: "0.05em",
		fontWeight: "bold",
		fontSize: "0.8em"
	};

	return (
		<div style={windowStyles}>
			<ChatMessageHistory messages={messages} />
			<form style={formStyles} onSubmit={handleSubmit}>
				<input style={inputStyles} type="text" onChange={e => setInputText(e.target.value)} value={inputText} />
				<button style={btnStyles}>Send</button>
			</form>
		</div>
	);
};
