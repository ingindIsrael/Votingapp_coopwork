import React, { useEffect, useContext, useState, Component } from "react";
import { Context } from "../store/appContext";
import { Quotes } from "./quotes";

export const Footer = () => {
	const [quote, setQuote] = useState([]);
	let quoteList = [
		{ fr: "“Social solidarity is a fact from which no one can escape”", Author: "Errico Malatesta" },
		{ fr: "“dos”", Author: "2Errico Malatesta" },
		{ fr: "“3”", Author: "3Errico Malatesta" },
		{ fr: "“4”", Author: "4Errico Malatesta" },
		{ fr: "“5”", Author: "5Errico Malatesta" }
	];
	let counter = 1;
	useEffect(() => {
		const timer = setInterval(() => {
			setQuote([quoteList[counter].fr, quoteList[counter].Author]);
			if (counter == 4) {
				counter = 0;
			} else {
				counter++;
			}
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<footer className="footer mt-auto py-3 text-center">
			{quote[0]} - <strong>{quote[1]}</strong>
		</footer>
	);
};
