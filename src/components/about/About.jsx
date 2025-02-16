import React from 'react';
import VirusDisinfectionImage from "../../assets/VirusDisinfection-cuate.png";

export default function About() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // Optional: For smooth scrolling
        });
      };

    return (
        <div className="py-16 bg-gray-100">
            <div className="container m-auto px-6 text-gray-800 md:px-12 xl:px-6">
                <div className="flex flex-col md:flex-row gap-8 lg:items-start"> {/* Changed to items-start */}

                    <div className="md:w-6/12 lg:w-5/12 mt-4 md:mt-0"> {/* Increased width, added margin top */}
                        <img
                            src={VirusDisinfectionImage}
                            alt="Virus Disinfection"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>

                    <div className="md:w-6/12 lg:w-7/12"> {/* Adjusted width for balance */}
                        <h2 className="text-3xl text-gray-900 font-bold md:text-4xl mb-4">
                            About CPC Pest Control
                        </h2>

                        {/* ... (rest of your text content remains the same) */}
                        <p className="mt-4 text-lg text-justify">
                            CPC Pest Control is a leading pest control service provider in West Bengal currently serving Kolkata and nearby towns, dedicated to protecting homes and businesses from unwanted pests. With over 15 recurring clients, we have established a reputation for delivering effective and reliable pest control solutions.
                        </p>

                        <p className="mt-4 text-lg text-justify">
                            We offer a wide range of services, including termite control, rodent control, mosquito control, and more. Our team of experienced professionals uses the latest techniques and environmentally friendly products to ensure the complete elimination of pests and prevent future infestations.
                        </p>

                        <p className="mt-4 text-lg text-justify">
                            At CPC Pest Control, we understand the importance of a pest-free environment. We are committed to providing our clients with personalized service and customized solutions to meet their specific needs. Our goal is to create a safe and healthy environment for our clients, their families, and their employees.
                        </p>

                        <div className="mt-8">
                            <br />
                            <br />
                            
                            <h3 className="text-xl font-semibold mb-2">Company Details</h3>
                            <br />
                            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:grid-cols-1">
                                <dt className="font-medium">Nature of Business:</dt>
                                    <dt className="font-medium">CEO:</dt>
                                    <dt className="font-medium">GST Registration Date:</dt>
                                    <dt className="font-medium">Legal Status of Firm:</dt>
                                    <dt className="font-medium">Annual Turnover:</dt>
                                    <dt className="font-medium">GST Partner Name:</dt>
                                    <dt className="font-medium">Banker:</dt>
                                    <dt className="font-medium">GST No.:</dt>
                                </div>
                                <div> {/* Values in their own column */}
                                    <dd>Service Provider &amp; Supplier of Services</dd>
                                    <dd>Tapan Chowdhury</dd>
                                    <dd>28-11-2021</dd>
                                    <dd>Proprietorship</dd>
                                    <dd>0 - 40 L</dd>
                                    <dd>Tapan Chowdhury</dd>
                                    <dd>Indian Bank</dd>
                                    <dd>19AHMPC3254H1ZC</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="mt-8 text-center md:text-left">
                            <p className="text-lg">
                                Contact us today for a free consultation and let us help you create a pest-free environment!
                            </p>
                            {/* ... (contact button/link) */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}