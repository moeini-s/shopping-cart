import {Redirect, Route, Switch, HashRouter} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import ProductDetail from './pages/ProductDetail';
import UserProfile from './pages/UserProfile';
import ProfileLayout from './layouts/ProfileLayout';
import ShoppingCart from './pages/ShoppingCart';
import { useSelector } from 'react-redux';
import CategoryProducts from './pages/CategoryProducts';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const userInfo=useSelector(state=>state.userSignIn.userInfo);
  return ( 
    <HashRouter basename="/">
      <ToastContainer/>
      <Switch>
      <Route path={["/profile"]}>
          <ProfileLayout>
            <Switch>
              <Route exact path="/profile" component={()=> userInfo!==null? <UserProfile/> : <Redirect to="/" /> } />
            </Switch>
          </ProfileLayout>
        </Route>
        <Route path={["/"]}>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/product/:id" component={ProductDetail} />
              <Route exact path="/signin" render={()=>userInfo!==null? <Redirect to="/" /> : <SignIn/> } />
              <Route exact path="/signout" render={()=>userInfo!==null? <SignOut/> : <Redirect to="/" />} />
              <Route exact path="/cart" render={()=> <ShoppingCart/> } />
              <Route exact path="/category/:category" component={CategoryProducts} />
            </Switch>  
          </MainLayout>
        </Route>
      </Switch>
    </HashRouter>
  );
}
 
export default App;

