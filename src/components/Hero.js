import React from 'react';
// Import images
import minimus2 from '../img/minimus_products/slider/MINIMUS (2).jpg';
// Import link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className=' h-[800px] bg-white bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around items-center h-full">
        {/* Text */}
        <div className='flex flex-col justify-center'>
          {/* Pretitle */}
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-2'></div>
            <span>New trend</span>
          </div>
          {/* Title */}
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            <span className='font-semibold'>WELCOME TO</span> <span  className='font-semibold'>OUR UNIVERSE</span>
          </h1>
          <Link to={ '/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover more</Link>
        </div>
        {/* Image */}
        <div className='hidden lg:block'>
          <img src={minimus2} alt="" className='max-h-[400px]' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
