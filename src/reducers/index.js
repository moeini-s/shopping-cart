import { combineReducers } from "redux";
import { productDetailReducer, productListReducer } from "./productReducer";
import { UserSignInReducer } from "./userReducer";
import CartReducer from './cartReducer';
export const reducer=combineReducers({
    productList:productListReducer,
    productDetail:productDetailReducer,
    userSignIn:UserSignInReducer,
    cart:CartReducer
});