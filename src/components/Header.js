import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
//slide bar context 
import { SlidebarContext } from '../contexts/SidebarContext';
//cart context 
import { CartContext } from '../contexts/CartContext';
//import icons 
import {BsBag} from 'react-icons/bs'
//import logo
import {Link} from 'react-router-dom';
//import logo
import  logo  from '../img/minimus_products/slider/unnamed.jpg';

const Header = () => {
  //header state
  //manage if the header is active or not
   const [isActive, setIsActive]=useState(false);
  //control the state of the side bar
   const {isOpen,setisOpen}= useContext(SlidebarContext);
  //number of items in the cart
   const {itemAmount}=useContext(CartContext);
   //event listener when the value of scroll is greater than 60px the style is gonna change
   useEffect(()=>{
    window.addEventListener('scroll' , ()=>{
      window.scrollY > 60? setIsActive(true) : setIsActive(false);
    })
   })
  return <header className={`${isActive ?'bg-white py-4 shadow-md':'bg-none py-6'} fixed w-full z-10  transition-all`}>
    <div className='container mx-auto flex items-center justify-between h-full '>
 {/*logo */}
    <Link to={'/'}>
      <div>
        <img className='w-[40px]' src={logo} alt="" />
      </div>
    </Link>
    {/*cart */}
    <div onClick={()=>setisOpen(!isOpen)} className='cursor-pointer flex relative '>
      <BsBag className='text-2xl '/>
      <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center '>{itemAmount}</div>
      </div>
      </div>
  </header>;
};

export default Header;
