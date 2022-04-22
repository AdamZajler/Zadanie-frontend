import React from "react";
import { useGlobalContext } from "../context";

const CartModal = () => {
	const context = useGlobalContext();
	console.log(context.cart);
	return (
		<div className=" absolute top-full right-0 mt-2 px-6 py-4 rounded-lg bg-white text-black border">
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
					<div
						key={index}
						className=" flex justify-between  items-center text-sm border-b pb-2 pt-2 last:border-none"
					>
						<div className="font-bold text-left">{product[0].name}</div>
						<div className=" ml-2 flex justify-between">
							<div
								className="p-1 h-6 w-6 border rounded-md flex content-center justify-center"
								onClick={() => {
									removeProduct(product[0].id);
								}}
							>
								<img src="/minus.svg" />
							</div>
							<p className="mx-2 flex justify-center items-center h-6">{product.length}</p>
							<div
								className="p-1 h-6 w-6 border rounded-md flex content-center justify-center"
								onClick={() => {
									increaseProduct(product[0].id);
								}}
							>
								<img src="/plus.svg" />
							</div>
							<div className="ml-2">
								{product[0].price}
								{product[0].currency}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default CartModal;
