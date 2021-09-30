import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {reducer} from "../reducers";

const initialState={
    productList:{products:[],loading:true},
    productDetail:{product:{},loading:true},
    userSignIn: {
        loading:false,
        userInfo: localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")) : null
    },
    cart: localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : []
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore (reducer,initialState,
    composeEnhancer(applyMiddleware(thunk))
) 

