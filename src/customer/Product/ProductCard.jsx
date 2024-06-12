import React from 'react'
import './style.scss'

const ProductCard = ({product}) => {
  console.log(product,'product')
  return (
    <div className='ProductCard cursor-pointer' key={product.title}>
      <div className='card h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' 
          src={product.imageUrl} 
          alt='card Image'
        />
      </div>

      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'> {product.brand}</p>
          <p>{product.title}</p>
        </div>

        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>{product.discountedPrice}</p>
          <p className='line-through opacity-50'>{product.price}</p>
          <p className='text-green-600 font-semibold'>{product.discountPersent} % off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
