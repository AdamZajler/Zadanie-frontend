import React from "react";
import { useGlobalContext } from "../context";

const CartModal = () => {
	const context = useGlobalContext();
	return (
		<div className=" absolute top-full right-0 mt-2 px-6 py-4 rounded-lg bg-white text-black border">
			{context.cart.length > 0 ? (
				<>
					<DisplayItems products={context.cart} />{" "}
					<div className="flex text-lg">
						<p className="mr-2">Podsumowanie: </p>
						{context.cartSummary}
						{context.cart[0].currency}
					</div>
				</>
			) : (
				<h1>empty cart</h1>
			)}
		</div>
	);
};

const DisplayItems = ({ products }) => {
	function handleProductGroupSummary(group) {
		let summary = 0;
		group.map((singleProduct) => {
			let productPrice = parseFloat(singleProduct.price);
			return (summary += productPrice);
		});
		return summary;
	}

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
				const priceSummary = handleProductGroupSummary(product);
				return <SingleCartElement key={index} product={product} priceSummary={priceSummary} />;
			})}
		</div>
	);
};

const SingleCartElement = ({ product, priceSummary }) => {
	const context = useGlobalContext();

	return (
		<div className=" flex justify-between  items-center text-sm border-b pb-2 pt-2 last:border-none">
			<div className="font-bold text-left">{product[0].name}</div>
			<div className=" ml-2 flex justify-between">
				<div
					className="p-1 h-6 w-6 border rounded-md flex content-center justify-center"
					onClick={() => {
						context.removeProduct(product[0].id);
					}}
				>
					<img src="/minus.svg" alt="" />
				</div>
				<p className="mx-2 flex justify-center items-center h-6">{product.length}</p>
				<div
					className="p-1 h-6 w-6 border rounded-md flex content-center justify-center"
					onClick={() => {
						context.increaseProduct(product[0].id);
					}}
				>
					<img src="/plus.svg" alt="" />
				</div>
				<div className="ml-2">
					{priceSummary}
					{product[0].currency}
				</div>
			</div>
		</div>
	);
};
export default CartModal;
