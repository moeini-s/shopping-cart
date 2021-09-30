import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartInHeader from './ShoppingCartInHeader';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideNav from './SideNav';

const Header = () => {
    const userInfo=useSelector(state=>state.userSignIn.userInfo);
    const[navState,setNavState]=useState(false);
    return ( 
        <div className="header">
            <div className="header__body">
                <div className="header__body__right">
                    <Link to="/" className="header__body__right--logo">Online Store</Link>
                    <span className="header__body__right--sideNavBtn" onClick={()=>setNavState(!navState)}>
                        <FontAwesomeIcon icon={faBars}/> دسته بندی
                    </span>
                    <SideNav navState={navState} closeNav={()=>setNavState(false)}/>
                </div>
                
            <div className="header__body__left">
                {userInfo==null?
                <>
                <Link to="/signin" className="header__body__left--signIn">ورود</Link>
                </>
                :
                <>
                <Link to="/profile" className="header__body__left--profile">{userInfo.username}</Link>
                <Link to="/signout" className="header__body__left--signOut">خروج </Link>
                </>
                }
                <div className="header__body__left--cart">
                    <div className="Mobilecart">
                        <Link to="/cart" className="link">سبد خرید</Link>
                    </div>
                    <div className="Desktopcart">
                        سبد خرید
                        <ShoppingCartInHeader/>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default Header;