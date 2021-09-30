import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from '../actions/userActions';
import {Helmet} from "react-helmet";

const SignIn = ({history}) => {

    const dispatch=useDispatch();
    const {userInfo,loading,error}=useSelector(state=>state.userSignIn);
    const[username,setusername]=useState("");
    const[password,setpassword]=useState("");

    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(signIn(username,password)); 
    }
    if(userInfo){
        setTimeout(()=>history.replace("/"),1000);
    }
    var login= 
    <div className="signIn">
        <h1>ورود به سایت</h1>
        <form onSubmit={handleSubmit}>
            <label>نام کاربری</label>
            <input placeholder="mor_2314" type="text" name="username" onChange={(e)=>setusername(e.target.value)} required/>
            <label>رمز عبور</label>
            <input placeholder="83r5^_" type="password" name="password" onChange={(e)=>setpassword(e.target.value)} required/>               
            <input type="submit" className="btn" value="ورود"/>
        </form>
    </div>
    return (     
        <>
        <Helmet>
            <title>ورود به سایت</title>
        </Helmet>
        {loading? <div className="loader"></div>
        : error?  <><div className="error">{error}</div>{login}</>
        :
        <>
        {login}
        </>
        
        }
        </>
    );
}
export default SignIn;