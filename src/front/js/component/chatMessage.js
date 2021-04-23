import React from "react";
import PropTypes from "prop-types";

export const ChatMessage = props => {
	return (
		<p style={{ marginBottom: 0 }}>
			{props.message}
			<br />
		</p>
	);
};
ChatMessage.propTypes = {
	message: PropTypes.string
};
