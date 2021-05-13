import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export const ModalVotes = props => {
	return (
		<Modal show={props.show} onHide={props.handleClose} backdrop="static" keyboard={false}>
			<Modal.Header closeButton>
				<Modal.Title>Modal title</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Are you completely sure you want to vote for? {props.proposal} If so, click on yes and your vote will be
				final. Take into consideration that after voting you cannot alter your decision
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={props.handleClose}>
					Close
				</Button>
				<Button variant="primary">Understood</Button>
			</Modal.Footer>
		</Modal>
	);
};
ModalVotes.propTypes = {
	proposal: PropTypes.string,
	show: PropTypes.bool,
	handleClose: PropTypes.func
};
