import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import data from "./data";

const ProductDetail = () => {
	const context = useGlobalContext();
	const params = useParams();
	const product = data.filter((product) => product.slug === params.productSlug)[0];

	const { id, name, price, currency, image, shortDesc } = product;
	return (
		<>
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
						{name}
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
					<p className="text-primary underline font-bold cursor-pointer flex items-center justify-end">
						<button
							className="mt-2 px-4 py-1 bg-primary text-white flex whitespace-nowrap rounded-lg cursor-pointer hover:bg-primary_hover transition-colors"
							onClick={() => {
								context.addToCart(id);
							}}
						>
							DO KOSZYKA
						</button>
					</p>
				</div>
			</article>
			<Link to={"/"}>
				<span className="bg-primary text-white p-4 rounded-md flex justify-center items-center mt-12 sm:max-w-xs">
					Na stronę listy produktów
				</span>
			</Link>
		</>
	);
};

export default ProductDetail;
