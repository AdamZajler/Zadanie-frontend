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
	if (action.type === "REMOVE_PRODUCT") {
		let flag = false;
		let newCart = state.cart.filter((product) => {
			if (flag == true) {
				return product;
			}
			if (product.id !== action.payload && flag == false) {
				return product;
			} else {
				flag = true;
				return;
			}
		});
		return {
			...state,
			cart: [...newCart],
		};
	}
	if (action.type === "INCREASE_PRODUCT") {
		return {
			...state,
			cart: [...state.cart, ...products.filter((single) => single.id === action.payload)],
		};
	}
	throw new Error("no matching action type");
};

export default reducer;
