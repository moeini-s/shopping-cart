import axios from "axios";
import { useEffect, useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

const SideNav = (props) => {
    const navState=props.navState;
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories").then(res=>{
            setCategories(res.data);
        }
        )
    },[])
    return ( 
        <div className={navState? "sideNav active" : "sideNav"}>
            <div className="sideNav__header">دسته بندی</div>
            {categories.map((category,i)=>{
                return <Link to={`/category/${category}`} key={i} className="sideNav__category">{category}</Link>
            })}
            <span className="sideNav__closeNavBtn" onClick={props.closeNav}>
                <FontAwesomeIcon icon={faTimes}/>
            </span>
        </div>

    );
}
 
export default SideNav;