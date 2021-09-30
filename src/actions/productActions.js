import axios from "axios";

export const productList = (category) => {
    var url="";
    if(category=="all"){
        url="https://fakestoreapi.com/products";
    }
    else{
        url=`https://fakestoreapi.com/products/category/${category}`
    }
    return async dispatch =>{
        dispatch({type:"PRODUCT_LIST_REQUEST"});
        axios.get(url).then(res=>{
            const data=res.data;
            dispatch({type:"PRODUCT_LIST_SUCCESS", payload:{products:data}});
        }).catch(err=>{
            dispatch({type:"PRODUCT_LIST_FAIL", payload:err.message});
        })
    }
}

export const productDetail = (id) => {
    return async dispatch =>{
        dispatch({type:"PRODUCT_DETAILS_REQUEST"});
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>{
            const data=res.data;
            dispatch({type:"PRODUCT_DETAILS_SUCCESS", payload:{product:data}});
        }).catch(err=>{
            dispatch({type:"PRODUCT_DETAILS_FAIL",payload:err.message})
        })
    }
}