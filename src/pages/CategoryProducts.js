import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {productList} from '../actions/productActions';
import Products from '../components/Products';
import {Helmet} from "react-helmet";

const CategoryProducts = (props) => {
    const {category}=props.match.params;
    const dispatch=useDispatch();
    const {products,loading,error}=useSelector(state=>state.productList);
    useEffect(()=>{
        dispatch(productList(category));
    },[category])
    return ( 
        <div>
            <Helmet>
                <title>{category} دسته بندی</title>
            </Helmet>
            {(loading==true)? <div className="loader"></div>
            : error ? <div className="error">{error}</div>
            :
            <Products products={products}/>
            }
        </div>
    );
}
 
export default CategoryProducts;