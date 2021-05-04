import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import "../../styles/voting.scss";
import "../../styles/home.scss";

export const Voting = () => {
	return (
		<div className="container mx-auto">
			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Radio aria-label="Yes" />
					Yes
				</InputGroup.Prepend>
				<InputGroup.Prepend>
					<InputGroup.Radio aria-label="No" />
					No
				</InputGroup.Prepend>
			</InputGroup>
		</div>
	);
};
