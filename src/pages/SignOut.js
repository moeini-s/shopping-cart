import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { signOut } from "../actions/userActions";

const SignOut = ({history}) => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(signOut());
        history.push("/");
    },[]);
    
    return ( 
        null
    );
}
 
export default withRouter(SignOut);