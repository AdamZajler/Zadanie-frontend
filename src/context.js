import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
const initialState = {
	isCartModalOpened: false,
	cart: [],
	total: 0,
	amount: 0,
};

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
	return (
		<AppContext.Provider value={{ ...state, addToCart, toggleCartModal, removeProduct, increaseProduct }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
