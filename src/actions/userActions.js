import axios from "axios";
import { toast } from "react-toastify";

export const signIn = (username, password) => 
  async (dispatch) => {
    dispatch({type:"USER_SIGNIN_REQUEST"});
    axios.post("https://fakestoreapi.com/auth/login", {"username":username,"password":password})
    .then(res=>{
      const response=res.data;
      if(response.token){
        localStorage.setItem("userInfo",JSON.stringify({"username":username, "password":password}));
        dispatch({ type:"USER_SIGNIN_SUCCESS", payload: {"username":username, "password":password} });
        toast.success("کاربر با موفقیت وارد شد",{position:"top-right"});
      }
      else{
        dispatch({type:"USER_SIGNIN_FAIL", payload:response.msg});
        toast.error("نام کاربری یا رمز عبور اشتباه است",{position:"top-right"});
      }
      
    })
    .catch(err=>{
      dispatch({type:"USER_SIGNIN_FAIL", payload:err.message});
      toast.error("خطا",{position:"top-right"});
    });
};
export const signOut = () => {
  localStorage.removeItem("userInfo");
  toast.success("کاربر با موفقیت از حساب کاربری خارج شد");
  return {type:"USER_SIGNOUT"} 
};