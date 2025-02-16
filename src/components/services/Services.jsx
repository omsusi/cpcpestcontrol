import React from 'react';
import { Link } from 'react-router-dom';
import BedBug from '../../assets/bedbug.jpg';
import CockroachControl from '../../assets/cockroach.jpg';
import MosquitoControl from '../../assets/mosquito.jpg';
import FlyControl from '../../assets/flycontrol.png';
import TermitePreConstruction from '../../assets/termite.jpg';
import SnakeControl from '../../assets/snake.webp';
import RodentControl from '../../assets/rodent.webp';
import TermiteControl from '../../assets/termitecontrollast.webp';
import Alphamethrin10Sc from '../../assets/Alphamethrin10Scban.png';
import CockroachPasteAgent from '../../assets/cockroachpaste.jpg';

const Services = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // Optional: For smooth scrolling
        });
      };
    const services = [
        {
            title: "Bed Bug Control",
            description: "Comprehensive bed bug elimination services. Price: ₹4/sq.ft",
            image: BedBug,
            link: "/bed-bug-control" // Corrected link
        },
        {
            title: "Cockroach Control",
            description: "Effective cockroach treatments for your home or business. Price: ₹2.5/sq.ft",
            image: CockroachControl,
            link: "/cockroach-control" // Corrected link
        },
        {
            title: "Mosquito Control",
            description: "Effective mosquito control solutions. Contact us for pricing.",
            image: MosquitoControl,
            link: "/mosquito-control" // Corrected link
        },
        {
            title: "Fly Control",
            description: "Professional fly control services. Contact us for pricing.",
            image: FlyControl,
            link: "/fly-control" // Corrected link
        },
        {
            title: "Snake Control",
            description: "Safe and effective snake removal and prevention. Contact us for pricing.",
            image: SnakeControl,
            link: "/snake-control" // Corrected link
        },
        {
            title: "Rodent Control",
            description: "Comprehensive rodent control services. Price: ₹1/sq.ft",
            image: RodentControl,
            link: "/rodent-control" // Corrected link
        },
        {
            title: "Termite Control",
            description: "Protect your property with our termite control solutions. Price: ₹4.5/sq.ft",
            image: TermiteControl,
            link: "/termite-control" // Corrected link
        },
        {
            title: "Alphamethrin 10 Sc",
            description: "Effective pest control product available in liquid form. Contact us for pricing and availability.",
            image: Alphamethrin10Sc,
            link: "/alphamethrin-10-sc" // Corrected link
        },
        {
            title: "Cockroach Paste Agent",
            description: "Effective cockroach paste. Contact us for pricing and application.",
            image: CockroachPasteAgent,
            link: "/cockroach-paste-agent" // Corrected link
        },
        {
            title: "Termite Pre-construction",
            description: "Pre-construction termite treatment for long-lasting protection. Contact us for pricing.",
            image: TermitePreConstruction,
            link: "/termite-pre-construction" // Corrected link
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {services.map((service) => (
                    <div key={service.title} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full">
                        <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg flex-shrink-0" />
                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-700 mb-4 flex-grow">{service.description}</p>
                            <div className="mt-auto">
                                <Link onClick={scrollToTop}
                                    to={`/take-service/${encodeURIComponent(service.title)}`}
                                    className="block w-full text-center bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                                >
                                    Take Service
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;