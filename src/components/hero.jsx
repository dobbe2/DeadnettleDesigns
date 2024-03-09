import React from 'react';
import LogoText from '../images/logoText.jpg';
import OrangeLeaf from '../images/orangeLeaf.jpeg';
import ColorInspiration from '../images/inspirationByColor.jpeg';
import Carnelian from '../images/CarnelianClusterBrassChainEarrings.jpg';
import Deadnettle from '../images/deadnettle.jpg';

const Hero = () => {
    return (

  <section className="mb-32 text-center background-radial-gradient lg:text-left">
    <div style={{backgroundImage: `url(${Deadnettle})`}} className="relative overflow-hidden bg-cover bg-no-repeat bg-[70%] h-[80vh]">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.5)] bg-fixed">
        <div className="flex flex-col items-center justify-around h-full md:flex-row">
          <div className="max-w-[800px] px-6 py-6 md:text-left text-white md:py-0 md:px-12">
            <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
              Deadnettle <br /><span>Designs</span>
            </h2>
            <p className="text-xl">
            Jewelry inspired by the Pacific Northwest
            </p>
          </div>
          <div className='flex justify-center'>
            <img className="max-w-[450px] w-[80%] rounded-lg shadow-lg items-center" src={ColorInspiration} />
          </div>
        </div>
      </div>
    </div>
  </section>
//       <section
//       style={{backgroundImage: `url(${WetBerries})`}} 
//   className="relative bg-center bg-no-repeat bg-cover"
// >
//   <div
//     className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
//   ></div>

//   <div
//     className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
//   >
//     <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
//       <h1 className="text-3xl font-extrabold text-yellow-200 sm:text-5xl">
//         Deadnettle

//         <strong className="block font-extrabold text-rose-200"> Designs </strong>
//       </h1>

//       <p className="max-w-lg mt-4 text-white sm:text-xl/relaxed">
//       Jewelry inspired by the Pacific Northwest
//       </p>

//       {/* <div className="flex flex-wrap gap-4 mt-8 text-center">
//         <a
//           href="#"
//           className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
//         >
//           Get Started
//         </a>

//         <a
//           href="#"
//           className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
//         >
//           Learn More
//         </a>
//       </div> */}
//     </div>
//     <div className="w-full overflow-hidden rounded-lg aspect-h-1 aspect-w-1 sm:aspect-h-3 sm:aspect-w-2">
//       <img src={Carnelian} className='className="object-cover object-center w-full h-full group-hover:opacity-75'/>
//     </div>
//   </div>
// </section>

    );
  };
  export default Hero;