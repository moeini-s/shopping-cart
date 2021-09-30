import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../actions/cartActions";
import { Link } from 'react-router-dom';

const ShoppingCartInHeader = () => {
    const dispatch=useDispatch();
    const cart=useSelector(state=> state.cart);
    return ( 
        <div className="shoppingCartInHeader"> 
        {(cart.length>0)?
        <>
            <div className="shoppingCartInHeader__row">
                <Link to="/cart" className="shoppingCartInHeader__row--Showcart"> مشاهده سبد خرید </Link>
                <span className="shoppingCartInHeader__row--removeAll" onClick={()=>dispatch(emptyCart())}>حذف همه</span>
            </div>
            
            {cart.map((product,i) =>
            <div className="shoppingCartInHeader__row" key={i}>
                <div className="shoppingCartInHeader__row--pic">
                    <img src={product.image} />
                </div>
                <div className="shoppingCartInHeader__row--quantity">
                    {product.quantity} عدد
                </div>
                <Link to={`/product/${product.id}`} className="shoppingCartInHeader__row--title">{product.title}</Link>                           
                <FontAwesomeIcon className="shoppingCartInHeader__row--trash" onClick={()=>dispatch(removeFromCart(product))} icon={faTrashAlt} />
            </div>
            )}
        </>  
        :
        <div className="shoppingCartInHeader__row">
            <Link to="/cart" className="shoppingCartInHeader__row--Showcart"> مشاهده سبد خرید </Link>
            <div>سبد خرید خالی میباشد</div>
        </div>
        } 
        </div>  
    );
}
export default ShoppingCartInHeader;