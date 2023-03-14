//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import {CartContext} from './CartContext'
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <div>
      <BrowserRouter>
      <CartContext.Provider value={{cartItems,setCartItems}}>
          <Link to="/">Home</Link>  | 
          <Link to="/checkout">Cart</Link> | 
          <Routes>
            <Route path="/" element={<ProductList/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/product" element={<ProductDetail/>}>
              <Route path=":id" element={<ProductDetail/>}/>
            </Route>

            <Route path="*" element={<p>404 Not Front</p>}/>
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
