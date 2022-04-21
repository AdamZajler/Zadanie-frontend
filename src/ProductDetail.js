import { useParams } from "react-router-dom";

const ProductDetail = () => {
	const params = useParams();

	console.log("kek", params.productId);

	return (
		<section className=" bg-red-900">
			<h1 className=" text-2xl">Product Detail</h1>
			<p>{params.productId}</p>
		</section>
	);
};

export default ProductDetail;
