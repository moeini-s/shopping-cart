import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

const Products = ({products}) => {
    const dispatch=useDispatch();
    return ( 
    <div className="products">
        {products.map((product,i)=>
            <div className="products__product" key={i}>
            <img src={product.image} className="products__product--pic"/>
            <Link to={`/product/${product.id}`} className="products__product--title">
                {product.title}
            </Link>
            <div className="products__product--price">
                {product.price}
            </div>
            <button className="products__product--addTocart" onClick={()=>dispatch(addToCart({...product,quantity:1}))}>
                افزودن به سبد خرید
            </button>
            </div>
        )
        }
    </div>
    );
}
 
export default Products;