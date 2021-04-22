import React from "react";
import "../../styles/chat.scss";

export const Chat = () => (
	<div className="container" fluid>
		<div className="form-group">
			<label>Comment</label>
			<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
			<button type="button" className="btn btn-dark rounded-pill">
				Submit
			</button>
		</div>
	</div>
);
