import ProfileNav from "../components/ProfileNav";

const ProfileLayout = ({children}) => {
    return (
        <>
        <ProfileNav/>
        {children}
        </>
      );
}
 
export default ProfileLayout;