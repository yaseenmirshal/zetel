import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Stacks from './Components/Stacks';

export default function Home() {
  return (
    <>
      <div id='home' className="bg-[#0a012a] min-h-screen mt-14 md:mt-0 flex flex-col justify-center items-center text-white overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 flex justify-center items-center text-[80px] sm:text-[150px] lg:text-[200px] font-extrabold text-[#0a012a] opacity-10">
          ZETEL
        </div>

        {/* Main content container with flex row for side-by-side layout */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full space-y-10 md:space-y-0 px-4 sm:px-8 md:px-16">
          {/* Text content aligned to the left */}
          <div className=" md:text-left md:w-1/2 mt-14">
            <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-400 mb-2">
              ZETEL IS A PROVIDER OF CAR PAYEMENT & EPOS SERVICES
            </p>

            <h1 className="text-4xl text-start sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            The Largest Epos and Payment<br />  <span className="text-violet-500">Solutions Company</span> 
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8">
            We are Authorized  Merchant Payments company that specialises in Card Acquiring for SME’s across the UK. Founded in UK, Our mission is to provide payments solutions for SME’s that make payments easy for the Traders.  
            </p>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-4 md:space-x-5">
              <a href='' target='_blank'>
              <button className="bg-transparent w-44 md:w-auto border border-violet-500 text-white px-4 sm:px-6 py-2 rounded-full text-sm md:text-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-200">
                Connect us now!
              </button>
              </a>
              <div className="flex space-x-3">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-500 text-base hover:bg-violet-500 hover:text-white p-2  rounded-full border border-violet-500 transition duration-200"
                >
                  <FaInstagram />
                </a>

                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-500 hover:bg-violet-500 hover:text-white p-2 text-base rounded-full border border-violet-500 transition duration-200"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-500 hover:bg-violet-500 hover:text-white p-2 text-base rounded-full border border-violet-500 transition duration-200"
                >
                  <FaLinkedin />
                </a>

               
              </div>
            </div>
          </div>

          {/* Illustration on the right */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
            <img
              src="./epos.png" // Updated src path
              alt="Illustration"
              className="w-[250px] sm:w-[350px] md:w-[420px] h-auto"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-28 mb-16 md:mb-0 flex flex-wrap justify-around w-full text-center space-y-8 sm:space-y-0">
          <div className="w-1/2 sm:w-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold">4054</h2>
            <p className="text-gray-400 text-sm sm:text-lg">Projects Completed</p>
          </div>
          <div className="w-1/2 sm:w-auto text-center ">
            <h2 className="text-4xl sm:text-5xl font-bold mt-[-35px] md:mt-0">2548</h2>
            <p className="text-gray-400 text-sm sm:text-lg">Cup of Tea</p>
          </div>
          <div className="w-1/2 sm:w-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold">3652</h2>
            <p className="text-gray-400 text-sm sm:text-lg">Happy Clients</p>
          </div>
          <div className="w-1/2 sm:w-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold">2548</h2>
            <p className="text-gray-400 text-sm sm:text-lg">Business Plan</p>
          </div>
        </div>
      </div>
      <About/>
      <Service/>
      {/* <Works/> */}
      <Stacks/>
      <Contact/>
     
    </>
  );
}