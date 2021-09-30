const cartReducer = (state=[], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...action.payload];
        case "REMOVE-FROM_CART":
            return state.filter(product=>product!=action.payload);
        case "EMPTY_CART":
            return [];
        default:
            return state;
    }
}
 
export default cartReducer;