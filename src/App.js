import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";

function App() {
	return (
		<div className="App container mx-auto px-4 py-6 2xl:container xl:container lg:container md:container sm:container xs:container">
			<header className="">
				<Navbar pageTitle={"Sklep"} />
			</header>
			<main>
				<ProductList />
			</main>
		</div>
	);
}

export default App;
