import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
let cart = JSON.parse(localStorage.getItem("Cart"));
let cartSummary = 0;
if (!cart) {
	cart = [];
} else {
	cart.map((product) => (cartSummary += parseFloat(product.price)));
}
const initialState = {
	isCartModalOpened: false,
	cart: cart,
	cartSummary: cartSummary,
	total: 0,
	amount: 0,
	currentPage: "Sklep",
};
console.log("wolololo", cartSummary);
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addToCart = (id) => {
		dispatch({ type: "ADD_TO_CART", payload: id });
	};

	const toggleCartModal = () => {
		dispatch({ type: "TOGGLE_CART_MODAL" });
	};

	const removeProduct = (id) => {
		dispatch({ type: "REMOVE_PRODUCT", payload: id });
	};

	const increaseProduct = (id) => {
		dispatch({ type: "INCREASE_PRODUCT", payload: id });
	};

	const changeCurrentPage = (pageName) => {
		dispatch({ type: "CHANGE_CURRENT_PAGE", payload: pageName });
	};
	return (
		<AppContext.Provider
			value={{ ...state, addToCart, toggleCartModal, removeProduct, increaseProduct, changeCurrentPage }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
