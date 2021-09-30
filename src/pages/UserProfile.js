import { useSelector } from "react-redux";
import {Helmet} from "react-helmet";

const UserProfile = () => {
    const userInfo=useSelector(state=> state.userSignIn.userInfo);
    return ( 
        <div className="userProfile">
            <Helmet>
                <title>پروفایل کاربر</title>
            </Helmet>
            <h1 className="userProfile__title">اطلاعات کاربری</h1>
            <div> <b>نام کاربری: </b> {userInfo.username}</div>
        </div>
     );
}
 
export default UserProfile;