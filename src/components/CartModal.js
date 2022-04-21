import React from "react";
import { useGlobalContext } from "../context";

const CartModal = () => {
	const context = useGlobalContext();
	console.log(context);
	return (
		<div>
			<h1>koszyk</h1>
		</div>
	);
};

export default CartModal;
