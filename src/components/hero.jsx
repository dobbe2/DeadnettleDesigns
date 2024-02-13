import React from 'react'
import LogoText from '../images/logoText.jpg'
import OrangeLeaf from '../images/orangeLeaf.jpeg'

const Hero = () => {
    return (
      <section
      style={{backgroundImage: `url(${OrangeLeaf})`}} 
  className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-yellow-200 sm:text-5xl">
        Deadnettle

        <strong className="block font-extrabold text-rose-200"> Designs </strong>
      </h1>

      <p className="max-w-lg mt-4 text-white sm:text-xl/relaxed">
      Jewelry inspired by the Pacific Northwest
      </p>

      <div className="flex flex-wrap gap-4 mt-8 text-center">
        <a
          href="#"
          className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    );
  };
  export default Hero;