import { RemoveCircleOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'
import { Button } from '@headlessui/react';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
              <img src='https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70' 
              alt='Jeans' className='w-full h-full object-cover object-top'/>
            </div>

            <div className='ml-5 space-y-1'>
                <p className='font-semi-bold'>Male Slim Mid Rise Jeans</p>
                <p className='opacity-70'>Size:L white</p>
                <p className='opacity-70 mt-2'>Seller: Crishatilyo 2fashion</p>

                <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                    <p className='font-semi-bold'>₹199</p>
                    <p className='opacity-50 line-through'>₹211</p>
                    <p className='font-semi-bold text-green-600'>5% off</p>
                </div>
            </div>

        </div>
            <div className='lg:flex items-center lg:space-x-10 pt-0'>
                <div className='flex items-center space-x-2'>
                    <IconButton sx={{color:"RGB(145,85,253)"}}><RemoveCircleOutline/></IconButton>

                    <span className='py-1 px-7 border rounded-sm'>5 </span>
                        <IconButton sx={{color:"RGB(145,85,253)"}}><AddCircleOutlineIcon/></IconButton>
                   
                </div>

                <div>
                    <Button sx={{color:"RGB(145,85,253)"}}>Remove</Button>
                </div>
            </div>
    </div>
  )
}

export default CartItem
