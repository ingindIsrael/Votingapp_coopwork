import React, { useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Quotes } from "./quotes";

export const Footer = () => {
	const { store, actions } = useContext(Context);
	return (
		<footer className="footer mt-auto py-3 text-center">
			<Quotes api={store.quotes} />
		</footer>
	);
};
