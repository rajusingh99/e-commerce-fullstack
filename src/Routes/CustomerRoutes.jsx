import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePages from '../customer/Pages/Home/HomePages'
import Cart from '../customer/Components/Cart/Cart'
import Navigation from '../customer/Navigation/Navigation'
import Footer from '../customer/Components/Footer'
import Product from '../customer/Product/Product'
import ProductDetails from '../customer/ProductDetails/ProductDetails'
import Checkout from '../customer/Components/Checkout/Checkout'
import Order from '../customer/Components/Order/Order'
import OrderDetails from '../customer/Components/Order/OrderDetails'

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation/>
      </div>

      <Routes>
        <Route path='/' element={<HomePages/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>} ></Route>
        <Route path='/product/:productId' element={<ProductDetails/>} ></Route>
        <Route path='/checkout' element={<Checkout/>} ></Route>
        <Route path='/account/order' element={<Order/>} ></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>} ></Route>
      </Routes>

          {/* <Order/> */}
          {/* <OrderDetails/> */}

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
