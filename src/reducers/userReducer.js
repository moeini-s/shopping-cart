export const UserSignInReducer = (state={},action) => {
    switch (action.type) {
        case "USER_SIGNIN_REQUEST":
            return {loading:true,userInfo:null }
        case "USER_SIGNIN_SUCCESS":
            return {loading:false, userInfo:action.payload}
        case "USER_SIGNIN_FAIL":
            return {loading:false, error:action.payload, userInfo:null}
        case "USER_SIGNOUT":
            return {loading:false, userInfo:null};
        default:
            return state;
    }
}
