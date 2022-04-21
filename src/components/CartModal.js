import React from "react";
import { useGlobalContext } from "../context";

const CartModal = () => {
	const context = useGlobalContext();
	console.log(context.cart);
	return (
		<div className=" absolute top-full right-0 w-full h-full bg-gray text-black">
			{context.cart.length > 0 ? <DisplayItems products={context.cart} /> : <h1>empty cart</h1>}
		</div>
	);
};

const DisplayItems = ({ products }) => {
	const groupById = Object.values(
		products.reduce((group, product) => {
			const { id } = product;
			group[id] = group[id] ?? [];
			group[id].push(product);
			return group;
		}, {})
	);
	console.log(groupById);

	return (
		<div>
			{groupById.map((product, index) => {
				return (
					<h1 key={index}>
						{product[0].name} {product.length}
					</h1>
				);
			})}
		</div>
	);
};
export default CartModal;
