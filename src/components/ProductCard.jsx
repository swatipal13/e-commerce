import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'

const ProductCard = ({product}) => {
    // console.log(product)
  return (
    <div className='border relative border-gray-200 rounded-md p-3 cursor-pointer hover:scale-101 hover:shadow-2xl transition-all h-max'>
<img src={product.image} className='bg-gray-100 rounded-md aspect-square' alt="" />
<h1 className='line-clamp-2 p-1 font-semibold '>{product.title}</h1>
<p className='my-1 text-lg text-gray-500 font-bold'> ${product.price}</p>
<button className='bg-yellow-500 px-3 py-2 text-md rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold hover:bg-yellow-400 transition-all'>
  <FaCartArrowDown className='w-6 h-6'/> Add to Cart
</button>
    </div>
  )
}

export default ProductCard