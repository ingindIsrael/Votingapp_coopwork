import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Quotes = () => {
	const { store, actions } = useContext(Context);
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	useEffect(() => {
		getQuote();
		actions.allcomments();
	}, []);

	const getQuote = props => {
		let url = localStorage.getItem("quotes");
		// `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
		fetch(url)
			.then(res => res.json())
			.then(data => {
				let dataQuotes = data.quotes;
				let randomNum = Math.floor(Math.random() * dataQuotes.length);
				let randomQuote = dataQuotes[randomNum];

				setQuote(randomQuote.quote);
				setAuthor(randomQuote.author);
			});
	};

	const handleClick = () => {
		getQuote();
	};

	return (
		<div id="quote-box">
			<div id="text">
				<p>{quote}</p>
			</div>
			<div id="author">
				<p>{author}</p>
			</div>

			<div id="buttons">
				<button onClick={handleClick} id="new-quote">
					New Quote
				</button>
			</div>
		</div>
	);
};
Quotes.propTypes = {
	api: PropTypes.object
};
