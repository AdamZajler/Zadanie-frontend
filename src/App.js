import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import data from "./data";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail.js";

function App() {
	return (
		<div className="App container mx-auto px-4 py-6 2xl:container xl:container lg:container md:container sm:container xs:container">
			<header className="">
				<Navbar pageTitle={"Sklep"} />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<ProductList products={data} />}></Route>
					<Route path="/:productId" element={<ProductDetail />}></Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
