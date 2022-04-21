import React from "react";

const Navbar = ({ pageTitle }) => {
	return (
		<nav className=" pb-4">
			<h1 className=" text-2xl flex items-center justify-between font-bold">
				{pageTitle}
				<button className=" text-2xl px-4 py-4 bg-primary text-white rounded-xl leading-none cursor-pointer">
					KOSZYK
				</button>
			</h1>
		</nav>
	);
};

export default Navbar;
