const reducer = (state, action) => {
	if (action.type === "ADD_TO_CART") {
		return {
			...state,
			cart: state.cart + 1,
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
