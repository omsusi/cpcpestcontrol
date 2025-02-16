// TakeService.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TakeService = () => {
    const navigate = useNavigate();
    const { serviceName } = useParams();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        area: '',
        service: serviceName || '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const services = [
        "Bed Bug Control", "Cockroach Control", "Alphamethrin 10 Sc",
        "Cockroach Paste Agent", "Mosquito Control", "Fly Control",
        "Termite Pre-construction", "Snake Control", "Rodent Control",
        "Termite Control",
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Full Name is required';
        }

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Email is not valid';
        }

        const phoneRegex = /^\d{10}$/; // 10 digits only
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }

        if (!formData.address) {
            newErrors.address = 'Address is required';
        }

        if (!formData.area) {
            newErrors.area = 'Area is required';
        } else if (isNaN(formData.area) || parseFloat(formData.area) < 0) {
            newErrors.area = 'Area must be a non-negative number';
        }

        if (!formData.message) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const formDataToSend = new FormData(e.target);
            formDataToSend.append("access_key", "c05766a8-7c24-425f-bd0b-4217a1718913");

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formDataToSend,
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`HTTP error ${response.status}: ${errorData.message || response.statusText}`);
                }

                const res = await response.json();

                if (res.success) {
                    console.log('Success', res);
                    alert('Message sent successfully!');
                    e.target.reset();
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        address: '',
                        area: '',
                        service: serviceName || '',
                        message: '',
                    });
                    setErrors({}); // Clear errors
                    navigate('/services');
                } else {
                    console.error('Submission failed:', res);
                    alert('Message sending failed. Please try again later.');
                }
            } catch (error) {
                console.error('Fetch error:', error);
                alert('An error occurred. Please try again later.');
            }
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // Optional: For smooth scrolling
        });
      };

    const servicesDesp = [
        {
            title: "Bed Bug Control",
            description: `Are bed bugs turning your nights into a nightmare? Don't suffer any longer! Our comprehensive bed bug elimination services are your ticket to a peaceful and healthy sleep.
    
    We understand the stress and discomfort bed bugs can cause, and we're here to help. Our expert technicians use proven, cutting-edge methods to locate and eradicate every last bed bug, ensuring a truly pest-free environment.
    
    Plus, we'll give you personalized tips to prevent future infestations. Reclaim your restful nights – contact us for a free inspection and say goodbye to bed bugs for good! Price: ₹4/sq.ft`,
        },
        {
            title: "Cockroach Control",
            description: `Cockroaches are more than just unsightly; they're a serious health hazard, spreading bacteria and triggering allergies. Take back your home or business with our highly effective cockroach treatments.
    
    We don't just eliminate the roaches you see; we target their hiding places and breeding grounds to prevent future outbreaks. Our team uses safe yet powerful methods, so you can rest assured your family, pets, and customers are protected.
    
    A cleaner, healthier space is within reach – contact us today for a free quote! Price: ₹2.5/sq.ft`,
        },
        {
            title: "Mosquito Control",
            description: `Tired of being a mosquito's personal buffet? Reclaim your backyard and enjoy the outdoors again with our effective mosquito control solutions.
    
    We create a mosquito-free zone around your property, so you can host barbecues, relax on the patio, and let your kids play without the constant buzzing and bites. Our treatments are tailored to your property's unique needs, ensuring maximum effectiveness.
    
    Don't let mosquitoes ruin your summer – get in touch for a free consultation! Contact us for pricing.`,
        },
        {
            title: "Fly Control",
            description: `Flies are more than just annoying; they can contaminate food and spread disease. Keep your home or business hygienic and comfortable with our professional fly control services.
    
    We identify the source of your fly problem and implement targeted solutions to eliminate them quickly and effectively. From restaurants to homes, we've got you covered.
    
    Say goodbye to swatting and hello to a fly-free environment – contact us for a free quote! Contact us for pricing.`,
        },
        {
            title: "Snake Control",
            description: `Discovering a snake on your property can be a terrifying experience. Protect your loved ones with our safe and humane snake removal and prevention services.
    
    Our experienced handlers will carefully remove any existing snakes and implement preventative measures to keep them from returning. We'll also educate you on how to make your property less attractive to snakes.
    
    Your peace of mind is our priority – contact us for expert snake control! Contact us for pricing.`,
        },
        {
            title: "Rodent Control",
            description: `Rats and mice can cause extensive damage to your property, gnawing through wires, insulation, and even structural elements. Protect your investment with our comprehensive rodent control services.
    
    We'll identify entry points, eliminate existing rodents, and implement preventative measures to keep them from coming back. Don't let rodents turn your property into their playground – secure your space today! Price: ₹1/sq.ft`,
        },
        {
            title: "Termite Control",
            description: `Termites are silent destroyers, capable of causing devastating damage to your home or business before you even notice they're there. Don't wait until it's too late!
    
    Our termite control solutions are designed to protect your property from these wood-eating pests. We offer thorough inspections, customized treatment plans, and ongoing preventative measures to ensure your property remains termite-free for years to come.
    
    Invest in the long-term health of your property – contact us for a termite inspection! Price: ₹4.5/sq.ft.`,
        },
        {
            title: "Alphamethrin 10 Sc",
            description: `Looking for a powerful and versatile pest control solution? Alphamethrin 10 SC is a broad-spectrum insecticide effective against a wide range of pests.
    
    Whether you're dealing with ants, cockroaches, or other unwelcome guests, Alphamethrin 10 SC can get the job done. Contact us for pricing, availability, and expert advice on how to use this product safely and effectively.
    
    Our team is here to help you choose the right pest control solutions for your needs. Contact us for pricing and availability.`,
        },
        {
            title: "Cockroach Paste Agent",
            description: `Frustrated with ineffective cockroach baits? Our cockroach paste agent is a targeted and highly effective solution for eliminating these persistent pests.
    
    This powerful paste attracts and eliminates roaches quickly, keeping your home or business clean and hygienic. Contact us for pricing and expert application guidance, and say goodbye to cockroaches for good! Contact us for pricing and application.`,
        },
        {
            title: "Termite Pre-construction",
            description: `Building your dream home or business? Don't let termites turn it into a nightmare. Pre-construction termite treatment is a crucial investment that will protect your property from these destructive pests for years to come.
    
    Our preventative treatments create a barrier against termites, ensuring the structural integrity of your building and saving you thousands in potential repairs down the line. Build with confidence – contact us for a pre-construction termite treatment plan! Contact us for pricing.`,
        },
    ];

    const selectedService = servicesDesp.find(service => service.title === decodeURIComponent(serviceName));
    const serviceDescription = selectedService ? selectedService.description : "Service description not available.";


    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
                    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                        <div className="mt-8 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                                    <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                        Get in touch for {serviceName || "a service"}
                                    </h1>
                                    <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                        Fill in the form to start a conversation
                                    </p>
                                    <p className="text-normal text-md sm:text-lg font-medium text-gray-600 mt-1">
                                        We value our customers and are eager to assist you.
                                    </p>
                                    <br />
                                    <br />

                                    {/* Improved spacing and styling for description */}
                                    <div className="mt-4">  {/* Added margin top */}
                                        <p className="text-normal text-md sm:text-lg font-medium text-gray-700 text-justify"> {/* Slightly darker text */}
                                            {serviceDescription}
                                        </p>
                                    </div>
                                            {/* ... any other information you want to display */}
                                        </div>

                        <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                                    required
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Contact Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none ${errors.phone ? 'border-red-500' : ''}`}
                                    required
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className={`w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none ${errors.address ? 'border-red-500' : ''}`}
                                    required
                                />
                                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}

                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    required
                                >
                                    <option value="">Select a service</option>
                                    {services.map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>

                                <input
                                    type="number"
                                    name="area"
                                    placeholder="Area (Sq.ft)"
                                    value={formData.area}
                                    onChange={handleChange}
                                    className={`w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none ${errors.area ? 'border-red-500' : ''}`}
                                    required
                                />
                                {errors.area && <p className="text-red-500 text-sm mt-1">{errors.area}</p>}

                                <textarea
                                    name="message"
                                    placeholder="Add your message (max 200 words)"
                                    rows={5}
                                    maxLength={200}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none resize-none ${errors.message ? 'border-red-500' : ''}`}
                                    required
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}

                                <button
                                    type="submit"
                                    className="md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                                >
                                    Submit
                                </button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TakeService;