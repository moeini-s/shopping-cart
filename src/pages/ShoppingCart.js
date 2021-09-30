import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

const ShoppingCart = () => {
    const dispatch=useDispatch();
    const cart=useSelector(state=>state.cart);

    const totalPrice=()=>{
        var total=0.0;
        cart.map(product => {
            total= total+((product.price)*(product.quantity));
        })
        return total.toFixed(2);; 
    }
        
    return ( 
        <div className="shoppingCart">
            <Helmet>
                <title>سبد خرید</title>
            </Helmet>           
        {(cart.length!=0)?
        <>
        <span className="shoppingCart__title">
            <FontAwesomeIcon icon={faShoppingCart} className="fa"/> { }
            سبد خرید { }
            {cart.length}
        </span>
        <span className="shoppingCart__clearAll" onClick={()=>dispatch(emptyCart())}>
            حذف همه
        </span>
        
        <table className="shoppingCart__table">
            <thead className="shoppingCart__table--header">
            <tr>
                <th>تصویر محصول</th>
                <th>مشخصات محصول</th>
                <th>تعداد</th>
                <th>قیمت</th>
                <th>حذف محصول</th>
            </tr>
            </thead>
            {cart.map((Product,i) =>
            <tbody key={i}>
            <tr>
                <td><img src={Product.image}/></td>
                <td><Link to={`/product/${Product.id}`} className="link">{Product.title}</Link></td>
                <td>
                    {Product.quantity} عدد
                </td>
                <td>{Product.price}$</td>
                <td>
                    <FontAwesomeIcon className="fa" onClick={()=>dispatch(removeFromCart(Product))} icon={faTrashAlt} />
                </td>                   
            </tr>
            </tbody>
            
            )}           
        </table>

        <span className="shoppingCart__totalPrice"><b>جمع کل: </b>${totalPrice()}</span>
        <button className="shoppingCart__btn">ادامه فرایند خرید</button>
        </>
         :
        (<div className="shoppingCart__emptyCart">
            <img src={"./img/empty.png"}/>
            <br/>
            سبد خرید  شما خالی است
        </div>)
        }
        </div>
     );
}
 
export default ShoppingCart;