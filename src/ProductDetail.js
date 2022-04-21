import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductDetail = () => {
	const params = useParams();

	console.log("kek", params.productSlug);

	return (
		<section className="">
			<h1 className=" text-2xl">Product Detail</h1>
			<p>{params.productSlug}</p>
			<Link to={"/"}>go back</Link>
		</section>
	);
};

export default ProductDetail;
