import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Navigation from './customer/Navigation/Navigation';
import HomePages from './customer/Pages/Home/HomePages';
import Product from './customer/Product/Product';
import Footer from '../src/customer/Components/Footer'
import ProductDetails from './customer/ProductDetails/ProductDetails';
import Cart from './customer/Components/Cart/Cart';
import Checkout from './customer/Components/Checkout/Checkout';

function App() {
  return (
    <div className="">
      <BrowserRouter>
          <Navigation/>

            {/* <HomePages/> */}

          {/* <Product/> */}
          {/* <ProductDetails/> */}
          
          {/* <Cart/> */}
          <Checkout/>

          <Footer/>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
