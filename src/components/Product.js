// product.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
//import cart context 
import {CartContext} from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext'; // Adjust the path accordingly
import { useContext } from 'react';

const Product = ({ product }) => {
 const {addToCart}= useContext(CartContext)
  // Destructure product
  const { id, image, category, price, title } = product;

  return (
    <div>
      <div className='h-[300px] mb-4 relative overflow-hidden group transition '>
        <div className='w-full h-full flex justify-center items-center'>
          {/* images */}
          <div className='w-[280px] mx-auto flex justify-center items-center'>
            {/* Use the 'src' attribute directly */}
            <img className='max-h-[280px] group-hover:scale-110 transition duration-300' src={image} alt="" />
          </div>
        </div>
        {/* buttons */}
        <div className='absolute top-6 right-11 goup-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={()=>addToCart(product,id)}><div className='flex justify-center items-center text-white w-12 h-12 bg-red-500 '>
            <BsPlus className='text-xl'/>
            </div>
            </button>
            <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl '><BsEyeFill/></Link>
        </div>
      </div>
      {/*category and price and title */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1 '>{title}</h2>
        </Link>
        <h2 className='font-semibold'>{price}DH</h2>
      </div>
    </div>
  );
};

export default Product;

