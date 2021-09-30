import { toast } from "react-toastify";

export const addToCart = (product)  => {
    var cart=[];
    if(localStorage.getItem("cart")){
        cart=JSON.parse(localStorage.getItem("cart"));
        let isInCart=cart.some(p=> p.id===product.id);
        if(isInCart){
            cart=cart.map(p=>{
                if(p.id===product.id){
                    return {...p,quantity:product.quantity};
                }
                else{
                    return p;
                }
            })
        }
        else{
            cart=[...cart,product];
        }
    localStorage.setItem("cart",JSON.stringify([...cart]));
    }
    else{
        cart=[product];
        localStorage.setItem("cart",JSON.stringify([product]));
    }
    toast.success("محصول به سبد خرید اضافه شد");
    return {type:"ADD_TO_CART",payload:cart}
}

export const removeFromCart = (product)  => {
    if(localStorage.getItem("cart")){
        let cart=JSON.parse(localStorage.getItem("cart"));
        if(cart.length==1){
            localStorage.removeItem("cart");
        }
        else{
            cart=cart.filter(p=>p.id!==product.id);
            localStorage.setItem("cart",JSON.stringify(cart));
        }  
    }
    toast.success("محصول از سبد خرید حذف شد");
    return {type:"REMOVE-FROM_CART",payload:product}
}

export const emptyCart = ()  => {
    if(localStorage.getItem("cart")){
        localStorage.removeItem("cart");
    }
    return {type:"EMPTY_CART"}
}