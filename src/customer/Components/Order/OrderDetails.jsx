import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from '@mui/material/colors';

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className='font-semibold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>
        
            <div className='py-20'>
                <OrderTracker activeStep={4}/>
            </div>

            <Grid container className='space-y-5'>

                {[1,1,1,1,1].map((item)=> 
                    <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>
                    <Grid item xs={6} >
                            <div className='flex items-center space-x-4'>
                                <img src='https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70' 
                                alt='' className='h-[5rem] w-[5rem] object-cover object-top'/>

                                <div className='space-y-2 ml-5'>
                                    <p className='font-semibold'>Men Formal White Shirt</p>
                                    <p className='space-x-5 text-xs opacity-50'> <span>Color: White</span> <span>Size: M</span></p>
                                    <p>Seller: linaria</p>
                                    <p>₹999 </p>
                                </div>
                            </div>
                    </Grid>

                    <Grid item >
                            <Box sx={{ color:deepPurple[500] }}>
                                <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2' />
                                <span>Rate & Review Product</span>
                            </Box>
                    </Grid>
                    </Grid>
                )}
            </Grid>
        </div>
    </div>
  )
}

export default OrderDetails
