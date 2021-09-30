import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { productDetail } from "../actions/productActions";
import {Helmet} from "react-helmet";

const ProductDetail = (props) => {
    const id=props.match.params.id;
    const {product,loading,error}=useSelector(state=>state.productDetail);
    const [quantity,setQuantity]=useState(1);
    const dispatch=useDispatch();
    const cart=useSelector(state=>state.cart);
    useEffect(()=>{
        dispatch(productDetail(id));
    },[])
    return ( 
        <div>
           {(loading==true)? <div className="loader"></div>
            :
            error? <div className="error">{error}</div>
            :
            <div className="productDetail">
                <Helmet>
                    <title>{product.title}</title>
                </Helmet>
                <div className="productDetail__pic">
                    <img src={`${product.image}`} />
                </div>
                <div className="productDetail__information">
                    <div className="productDetail__information--title">{product.title}</div>
                    <div className="productDetail__information--price"><b>قیمت: </b>{product.price}$</div>
                    <Link to={`/category/${product.category}`} className="productDetail__information--category"><b>دسته بندی: </b>
                    {product.category}
                    </Link>
                    <br/>
                    <span onClick={()=>setQuantity(quantity+1)} className="productDetail__information--increment">
                    +
                    </span>
                    <span className="productDetail__information--quantity">{ } {quantity}{ } </span>
                    <span onClick={()=>{(quantity)>1 && setQuantity(quantity-1)}} className="productDetail__information--decrement">
                    -
                    </span>
                    <button className="productDetail__information--addTocart" onClick={()=>dispatch(addToCart({...product,quantity}))}>
                        افزودن به سبد خرید
                    </button>
                    <div>
                    {(cart.length!=0)&& cart.some(p=>product.id==p.id)&&
                    <div>در سبد شما موجود است</div>
                    }
                    </div>
                </div>
                
                <h2>توضیحات: </h2>
                <div className="productDetail__description">{product.description}</div>
            </div>
            }
        </div>
    );
}
 
export default ProductDetail;