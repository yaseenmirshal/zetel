'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id='about' className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        
        {/* Text Section */}
        <div 
          className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12"
          data-aos="fade-right" // Text section will slide in from the right
        >
          <h2 className="text-3xl font-bold text-violet-500 mb-2">
            HOW IT WORKS ?
          </h2>
          {/* <h3 className="text-xl font-semibold text-[#3E2723] mb-4">Elevating Your Digital Future</h3> */}
          <p className="text-gray-600 leading-relaxed">
          Our EPOS solutions are industry specific as we believe there is no generic prescription for specific requirements. Our team of experts are constantly working to give our customers the best of industry latest features and our products are in no doubt that we hold an enviable market position in all industries we serve. We have dedicated technical and customer support teams who work around the clock in line with our philosophy of customer satisfaction as a definitive ultimate goal.
          </p>
         
          {/* Our Journey Section */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-violet-500 mb-2">
              WHY WE ARE HELPING CHARITIES ?
            </h2>
            <p className="text-gray-600 leading-relaxed">
            As business and human being we are committed to help who are in need of some help.that is why we will pay some percentage from our profits to the UK Charities. who are day night working to reduce poverty and homelessness also we are helping to create our world more carbon free Green environment.
            </p>
          </div>
        </div>

        {/* Illustration Section */}
        <div 
          className="lg:w-1/2 flex justify-center lg:justify-end"
          data-aos="fade-right" // Illustration will slide in from the left
        >
          <img
            src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/302541b1-76cd-4603-b140-2b94743fd89b.png?auto=format&q=50"
            alt="About Ranzom Softnet Illustration"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default About;