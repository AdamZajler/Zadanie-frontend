import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
	return (
		<section className="bg-white rounded-b-md">
			<h1 className="text-lg bg-primary text-white py-1 px-2 rounded-t-md">Lista pakietów</h1>
			{products.map((product) => {
				return <ProductCard key={product.id} product={product} />;
			})}
		</section>
	);
};

const ProductCard = ({ product }) => {
	const context = useGlobalContext();

	const { id, name, price, currency, image, shortDesc, slug } = product;
	return (
		<article
			className="px-6 py-6 flex flex-col items-stretch border-b sm:flex-row last:border-none"
			itemScope
			itemType="http://schema.org/Product"
		>
			<div className="basis-full mb-4 sm:basis-3/12 ">
				<img className="object-cover rounded-lg w-full h-56 sm:w-48 sm:h-60" src={image} alt="" />
			</div>
			<div className="basis-9/12 pl-0 sm:pl-4 lg:pl-0">
				<h2 className=" font-bold text-xl pb-4 max-w-lg" itemProp="name">
					<Link to={`/${slug}`} onClick={() => context.changeCurrentPage("Strona produktu")}>
						{name}
					</Link>
				</h2>
				<div className="flex items-end">
					<p className=" flex flex-col sm:flex-row">
						<span className="sm:pr-6">{shortDesc}</span>
						<span className=" font-bold text-primary text-lg mt-6 text-right sm:self-end">
							<data value={price}>{price}</data>
							&nbsp;{currency}
						</span>
					</p>
				</div>
				<p className="text-primary underline font-bold cursor-pointer flex items-center justify-between">
					<Link to={`/${slug}`} onClick={() => context.changeCurrentPage("Strona produktu")}>
						<span className=" self-end">Zobacz więcej</span>
					</Link>

					<span className=" flex flex-col items-end">
						<button
							className="mt-2 px-4 py-1 bg-primary text-white flex whitespace-nowrap rounded-lg cursor-pointer hover:bg-primary_hover transition-colors"
							onClick={() => {
								console.log("klik");
								context.addToCart(id);
							}}
						>
							DO KOSZYKA
						</button>
					</span>
				</p>
			</div>
		</article>
	);
};

export default ProductList;
