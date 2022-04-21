import React from "react";
import { useGlobalContext } from "../context";
import CartModal from "./CartModal";

const Navbar = ({ pageTitle }) => {
	const context = useGlobalContext();
	console.log(context);
	return (
		<nav className=" pb-4">
			<h1 className=" text-2xl flex items-center justify-between font-bold relative">
				{pageTitle}
				<button
					className=" text-2xl px-4 py-4 bg-primary text-white rounded-xl leading-none cursor-pointer"
					onClick={() => {
						context.toggleCartModal();
					}}
				>
					KOSZYK
					{context.isCartModalOpened ? <CartModal /> : ""}
				</button>
			</h1>
		</nav>
	);
};

export default Navbar;
