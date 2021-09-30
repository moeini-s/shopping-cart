import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {productList} from '../actions/productActions';
import Products from '../components/Products';


const Home = () => {
    const dispatch=useDispatch();
    const {products,loading,error}=useSelector(state=>state.productList);
    useEffect(()=>{
        dispatch(productList("all"));
    },[])
    return ( 
        <div>

            { (loading==true)? <div className="loader"></div>
            : error ? <div className="error">{error}</div>
            :
            <Products products={products}/>
            }
        </div>
    );
}
 
export default Home;