import products from "./data";

const reducer = (state, action) => {
	if (action.type === "ADD_TO_CART") {
		let newProduct = products.filter((single) => single.id === action.payload);
		return {
			...state,
			cart: [...state.cart, ...newProduct],
		};
	}
	if (action.type === "TOGGLE_CART_MODAL") {
		return {
			...state,
			isCartModalOpened: !state.isCartModalOpened,
		};
	}
	throw new Error("no matching action type");
};

export default reducer;
