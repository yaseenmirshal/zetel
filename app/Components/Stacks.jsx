'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Stacks = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing style
      once: true, // Only animate once
    });
  }, []);

  return (
    <section className="bg-[#0d0d22] py-16 px-6 md:px-12 lg:px-24 text-white">
      <h2 className="text-3xl font-bold text-purple-500 mb-2" data-aos="fade-up">Our Products</h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side: Images (4 images in grid layout) */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div className="w-full">
            <img src="https://zetel.co.uk/wp-content/uploads/2024/03/IngenicoDX8000.png" alt="Product Image 1" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full">
            <img src="https://bocartholdings.com/wp-content/uploads/2019/09/Integrated-pos-system.png" alt="Product Image 2" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full">
            <img src="https://zetel.co.uk/wp-content/uploads/2024/03/epos-solutions.png" alt="Product Image 3" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full">
            <img src="https://i0.wp.com/tapapos.com/wp-content/uploads/2021/03/home_screen.png?fit=1417%2C1042&ssl=1" alt="Product Image 4" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Right side: Paragraph */}
        <div className="w-full md:w-1/3 text-lg text-left">
          <p className="text-gray-300">
            We just framed here a couple of products, but if you need any other requirements, please feel free to contact our Expert Local Account Manager. As we provide Business services from opening your business banking to all of your business support services, just call us and get your problems solved in no time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stacks;
