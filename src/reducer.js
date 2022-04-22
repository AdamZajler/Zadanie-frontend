import { parse } from "postcss";
import products from "./data";

const reducer = (state, action) => {
	if (action.type === "ADD_TO_CART") {
		let newProduct = products.filter((single) => single.id === action.payload);
		let newProductPrice = parseFloat(newProduct[0].price);

		localStorage.setItem("Cart", JSON.stringify([...state.cart, ...newProduct]));
		return {
			...state,
			cart: [...state.cart, ...newProduct],
			cartSummary: state.cartSummary + newProductPrice,
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
		let deletedProduct;
		let newCart = state.cart.filter((product) => {
			if (flag === true) {
				return product;
			}
			if (product.id !== action.payload && flag === false) {
				return product;
			} else {
				flag = true;
				deletedProduct = product;
				return null;
			}
		});

		localStorage.setItem("Cart", JSON.stringify([...newCart]));
		return {
			...state,
			cart: [...newCart],
			cartSummary: state.cartSummary - parseFloat(deletedProduct.price),
		};
	}
	if (action.type === "INCREASE_PRODUCT") {
		localStorage.setItem(
			"Cart",
			JSON.stringify([...state.cart, ...products.filter((single) => single.id === action.payload)])
		);
		return {
			...state,
			cart: [...state.cart, ...products.filter((single) => single.id === action.payload)],
			cartSummary:
				state.cartSummary + parseFloat(products.filter((single) => single.id === action.payload)[0].price),
		};
	}
	if (action.type === "CHANGE_CURRENT_PAGE") {
		return {
			...state,
			currentPage: action.payload,
		};
	}
	throw new Error("no matching action type");
};

export default reducer;
