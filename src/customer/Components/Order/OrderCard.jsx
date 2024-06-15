import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border mt-5'>
      <Grid container spacing={2} sx={{justifyContent:'space-evenly'}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70' alt=''/>
                <div className='ml-5 space-y-2'>
                    <p className='mb-2'>Men Formal White Shirt</p>
                    <p className='opacity-50 text-xs font-semibold'>Size:M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color:Black</p>
                </div>
            </div>
        </Grid>

        <Grid item xs={3}>
            <p>₹1099</p>
        </Grid>
        
        <Grid item xs={3}>
           {true && 
            <div>
                <p>
                    <AdjustIcon className='text-green-600 mr-2 text-sm' sx={{width:"15px", height:"15px"}}/>
                    <span>Delivered on March 03</span>
                </p>
                <p className='text-xs'>Your Item Has Been Delivered</p>
            </div>
            }
            {false &&<p>
                <span>Expected Delivery on March 03</span>
            </p>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
