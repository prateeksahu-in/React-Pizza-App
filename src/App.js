import{BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './pages/home';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import ProductsPage from './pages/ProductsPage';
import {CartContext} from './CartContext';
import { useEffect,useState } from 'react';

const App =() =>{
const [cart,setCart] = useState({});
//Fetch cart from loacal storage
useEffect(() => {
   const cart = window.localStorage.getItem('cart');
   setCart(JSON.parse(cart));
}, []);

useEffect(() => {
   window.localStorage.setItem('cart',JSON.stringify(cart));
}, [cart])

    return  (
        <>
            <Router>
                <CartContext.Provider value={{cart,setCart}}>
                    <Navigation/>
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/products" exact component={ProductsPage}></Route>
                        <Route path="/products/:_id" exact component={SingleProduct}></Route>
                        <Route path="/cart" component={Cart}></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    )
}

export default App;