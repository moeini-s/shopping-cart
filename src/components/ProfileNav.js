import { Link } from 'react-router-dom';

const ProfileNav = () => {
    return ( 
        <div className="profileNav">
            <Link to="/" className="profileNav__link"> صفحه اصلی سایت </Link>
            <Link to="/signout" className="profileNav__link"> خروج </Link>
        </div>
     );
}
 
export default ProfileNav;