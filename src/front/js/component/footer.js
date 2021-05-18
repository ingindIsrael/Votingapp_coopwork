import React, { useEffect, useContext, useState, Component } from "react";
import { Context } from "../store/appContext";
import { Quotes } from "./quotes";

export const Footer = () => {
	const [quote, setQuote] = useState([]);
	let quoteList = [
		{ fr: "“Social solidarity is a fact from which no one can escape”", Author: "Errico Malatesta" },
		{
			fr: "“Don’t compete! competition is always injurious and you have plenty of resources to avoid it!”",
			Author: "Pyotr Kropotkin"
		},
		{
			fr: "“Political Freedom without economic equality is a pretense, a fraud, a lie; workers want no lying”",
			Author: "Mikhail Bakunin"
		},
		{
			fr: "“We are nothing if we walk alone; everything when we walk together in step with other dignified feet”",
			Author: "Rafael Sebastián Guillén Vicente"
		},
		{ fr: "“We are gonna figth racism with solidarity”", Author: "Fred Hampton" }
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
		}, 6000);
		return () => clearInterval(timer);
	}, []);

	return (
		<footer
			style={{ fontSize: "0.7em" }}
			className="footer mt-auto mb-0 py-3 text-center border border-top border-bottom-0 border-left-0 border-right-0 border-dark">
			{quote[0]} - <strong>{quote[1]}</strong>
		</footer>
	);
};
