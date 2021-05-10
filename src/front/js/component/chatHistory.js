import React from "react";
import { ChatMessage } from "./chatMessage.js";
import PropTypes from "prop-types";

export const ChatMessageHistory = props => {
	console.log(props);
	var createMessage = function(message, index) {
		var liStyles = {
			backgroundColor: index % 2 == 1 ? "#ddd" : "#efefef",
			padding: "1rem",
			borderBottom: "1px solid #ddd"
		};

		return (
			<li style={liStyles} key={message.id}>
				<ChatMessage message={message.commentTXT} />
			</li>
		);
	};

	var ulStyles = {
		listStyle: "none",
		margin: 0,
		padding: 0
	};

	return <ul style={ulStyles}>{props.messages.map((message, index) => createMessage(message, index))}</ul>;
};

var MESSAGES = [{ message: "Hi Josh" }, { message: "How are you?" }];

ChatMessageHistory.propTypes = {
	messages: PropTypes.array
};
