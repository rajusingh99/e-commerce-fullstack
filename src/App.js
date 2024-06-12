import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Navigation from './customer/Navigation/Navigation';
import ProductOverView from './customer/ProductOverview/Overview';
import HomePages from './customer/Pages/Home/HomePages';
import Product from './customer/Product/Product';
import Footer from '../src/customer/Components/Footer'

function App() {
  return (
    <div className="">
      <BrowserRouter>
          <Navigation/>

            {/* <HomePages/> */}
          {/* <ProductOverView/> */}
          <Product/>
          
          <Footer/>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
