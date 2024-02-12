import React from 'react'
import LogoText from '../images/logoText.jpg'

const Hero = () => {
    return (
      <div className='max-w-[1640px] mx-auto'>
        <div className='max-h-[500px] relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full text-gray-200 max-h-[500px]  flex flex-col justify-center'>
            <h1 className='px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>
               <span className='text-orange-500'></span>
            </h1>
            <h1 className='px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>
              <span className='text-orange-500'></span> 
            </h1>
          </div>
          <img
            className='object-cover w-full'
            src={LogoText}
            alt='/'
          />
        </div>
      </div>
    );
  };
  export default Hero;