import React from "react";
import { useGlobalContext } from "../context";

const CartModal = () => {
	const context = useGlobalContext();
	console.log(context.cart);
	return (
		<div className=" absolute top-full right-0 w-full h-full bg-gray text-black">
			{context.cart.length > 0 ? (
				<DisplayItems
					products={context.cart}
					removeProduct={context.removeProduct}
					increaseProduct={context.increaseProduct}
				/>
			) : (
				<h1>empty cart</h1>
			)}
		</div>
	);
};

const DisplayItems = ({ products, removeProduct, increaseProduct }) => {
	const groupById = Object.values(
		products.reduce((group, product) => {
			const { id } = product;
			group[id] = group[id] ?? [];
			group[id].push(product);
			return group;
		}, {})
	);

	return (
		<div>
			{groupById.map((product, index) => {
				return (
					<div key={index} className={`${product[0].id}`}>
						<h1>
							{product[0].name} {product.length}
						</h1>
						<span
							onClick={() => {
								removeProduct(product[0].id);
							}}
						>
							del
						</span>
						<span
							onClick={() => {
								increaseProduct(product[0].id);
							}}
						>
							add
						</span>
					</div>
				);
			})}
		</div>
	);
};
export default CartModal;
