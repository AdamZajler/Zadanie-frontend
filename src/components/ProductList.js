import React from "react";
import { useGlobalContext } from "../context";

const ProductList = ({ products }) => {
	return (
		<section>
			<h1 className="text-lg bg-primary text-white py-1 px-2 rounded-t-md">Lista pakietów</h1>
			{products.map((product) => {
				return <ProductCard key={product.id} product={product} />;
			})}
		</section>
	);
};

const ProductCard = ({ product }) => {
	const context = useGlobalContext();

	const { id, name, price, currency, image, shortDesc } = product;
	return (
		<article className="px-6 py-6 flex items-stretch border-b" itemScope itemType="http://schema.org/Product">
			<div className="basis-3/12">
				<img className=" w-48 h-60 object-cover rounded-lg" src={image} alt="" />
			</div>
			<div className="basis-9/12 sm:pl-6 pl-0">
				<h2 className=" font-bold text-xl pb-4 max-w-lg" itemProp="name">
					{name}
				</h2>
				<div className="flex items-end">
					<p className=" pr-10">{shortDesc}</p>
					<span className=" flex flex-col items-end">
						<span className=" font-bold text-primary text-lg">
							<data value={price}>{price}</data>
							&nbsp;{currency}
						</span>
						<button
							className="mt-2 px-4 py-1 bg-primary text-white flex whitespace-nowrap rounded-lg cursor-pointer"
							onClick={() => {
								console.log("klik");
								context.addToCart(id);
							}}
						>
							DO KOSZYKA
						</button>
					</span>
				</div>
				<p className="mt-2 text-primary underline font-bold cursor-pointer">Zobacz więcej</p>
			</div>
		</article>
	);
};

export default ProductList;
