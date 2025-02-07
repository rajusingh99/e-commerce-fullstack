
import React from 'react';
import CartItem from './CartItem';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()

  const handleCheckout = () =>{
    navigate('/checkout?step=2')
  }
  return (
    <div className='container mt-10 mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:px-16 gap-5'>
        <div className='lg:col-span-2'>
         {[1,1,1,1].map((item)=><CartItem />)} 
        </div>
      
        <div className='px-4 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border p-4'>
            <p className='uppercase font-bold opacity-60'>Price details</p>
            <hr/>

            <div className='space-y-3 font-semibold'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹4597</span>
              </div>

              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className='text-green-600 font-semibold'>-₹3419</span>
              </div>

              <div className='flex justify-between pt-3 text-black'>
                <span>Delivery Fee</span>
                <span className='text-green-600 font-semibold'>Free</span>
              </div>
          
              <div className='flex justify-between pt-3 text-black'>
                <span>Total Amount</span>
                <span className='text-green-600 font-semibold'>₹1278</span>
              </div>
              
            </div>

          </div>
            <Button onClick={handleCheckout}  variant='contained w-full mt-5' sx={{px:'2.5rem', py:'.7rem',backgroundColor:'#9155fd',mt:'15px',color:'white','&:hover':{backgroundColor:'#7b4acb'}  }}>
                Checkout
           </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
