import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';
/* 
Represents an individual item in the shopping cart.
Imports necessary icons and the CartContext for managing cart-related functionality.
Provides buttons to remove items, increase or decrease the quantity, and displays information about the product.
*/
const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  // destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <img className='max-w-[80px]' src={image} alt='' />
        <div className='w-full flex flex-col'>
          {/* title and remove icon */}
          <div className='flex justify-between items-center mb-2'>
            {/* title */}
            <div className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </div>
            {/* remove icon */}
            <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            {/* qty */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              {/* minus icon */}
              <div onClick={() => decreaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer h-full'>
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className='h-full flex justify-center items-center px-2'>{amount}</div>
              {/* plus icon */}
              <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className='flex-1 flex items-center justify-around'>{price} DH</div>
            {/* final price */}
            {/* make the price at 2 decimal */}
            <div className='flex-1 flex justify-end items-center text-primary font-medium '>
              {`${parseFloat(price * amount).toFixed(2)}DH`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
