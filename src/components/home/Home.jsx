import React from 'react';
import { Link } from 'react-router-dom';
import PestControlImage from "../../assets/HomePage.png"; // Correct path - VERIFY THIS!

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // Optional: For smooth scrolling
        });
      };

    return (
        <div className="mx-auto w-full max-w-7xl">

            {/* Hero Section */}
            <section className="relative overflow-hidden text-white bg-gray-800 rounded-lg sm:mx-16 mx-2">
                <div className="relative z-10 max-w-screen-xl px-4 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-0 mt-40 space-y-6 sm:text-left text-center">
                        <h2 className="text-4xl font-bold sm:text-5xl leading-tight">
                            Protecting Your Home & Business
                            <span className="block text-2xl sm:text-3xl mt-2">From Unwanted Pests</span>
                        </h2>
                        <p className="text-lg sm:text-l leading-relaxed">
                            CPC Pest Control is Kolkata's trusted partner for effective and reliable pest solutions. We protect homes and businesses from termites, rodents, mosquitoes, and more.
                        </p>
                        <Link
                            onClick={scrollToTop} // Call scrollToTop on click
                            className="inline-flex items-center px-6 py-3 font-medium bg-orange-500 hover:bg-orange-700 rounded-lg transition duration-300"
                            to="/services"
                        >
                            {/* Removed the SVG icon */}
                            View Our Services  {/* Text only */}
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full h-full">
                    <img className="w-full h-full object-cover" src={PestControlImage} alt="Pest Control" />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
            </section>


            {/* Call to Action Section (Overlapping Image - Adjusted Width) */}
            <div className="bg-gray-100 py-12 text-center relative z-20 w-full"> {/* Added w-full */}
                <div className="max-w-7xl mx-auto px-4"> {/* Added container for consistent width */}
                    <h2 className="text-2xl font-bold mb-4">Ready to Get Rid of Pests?</h2>
                    <Link  onClick={scrollToTop} to="/contact" className="px-6 py-3 bg-orange-500 hover:bg-orange-700 text-white font-medium rounded-lg transition duration-300">Contact Us Today</Link>
                </div>
            </div>

        </div>
    );
};

export default Home;