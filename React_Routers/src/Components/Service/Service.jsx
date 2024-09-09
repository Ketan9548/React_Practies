import React from 'react';

const Services = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service 1: Fast Delivery */}
                    <div className="bg-white p-6 shadow-md rounded-lg text-center">
                        <div className="text-blue-500 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 10h1l1.68-4.1a1 1 0 011.06-.62l7.58 1.31a1 1 0 01.88.99l.26 6.43m3.04 1.53a3 3 0 01-2.3 3.54l-7.39 1.68a3 3 0 01-3.54-2.3L3 10.27m-1.25-2.8A1 1 0 012 7V5a1 1 0 011-1h2.35a1 1 0 01.93.63l.77 1.94m9.45-.94h5.28m-5.6 5.38l.97-1.94a1 1 0 011.12-.58h3.01"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                        <p className="text-gray-600">Get your products delivered in record time with our fast and reliable delivery service.</p>
                    </div>

                    {/* Service 2: Customer Support */}
                    <div className="bg-white p-6 shadow-md rounded-lg text-center">
                        <div className="text-blue-500 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 9h.01M12 9h.01M16 9h.01M9 13h6m-6 4h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                        <p className="text-gray-600">We are always here to assist you with any queries or issues you might have, day or night.</p>
                    </div>

                    {/* Service 3: Secure Payments */}
                    <div className="bg-white p-6 shadow-md rounded-lg text-center">
                        <div className="text-blue-500 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 10h18M3 6h18M8 20h8M12 4V2m0 20v-2M5 20h2a1 1 0 001-1V4a1 1 0 00-1-1H5a1 1 0 00-1 1v15a1 1 0 001 1z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                        <p className="text-gray-600">Your payments are safe with our top-notch security systems and encryption protocols.</p>
                    </div>

                    {/* Service 4: Easy Returns */}
                    <div className="bg-white p-6 shadow-md rounded-lg text-center">
                        <div className="text-blue-500 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 10v6a1 1 0 001 1h4l2-4h2l2 4h4a1 1 0 001-1v-6M3 14l7-7m10 0l-7 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                        <p className="text-gray-600">Our hassle-free return process ensures that you can shop with confidence.</p>
                    </div>

                    {/* Service 5: Exclusive Discounts */}
                    <div className="bg-white p-6 shadow-md rounded-lg text-center">
                        <div className="text-blue-500 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3v4h18V3m-1 7H4a1 1 0 00-1 1v5a1 1 0 001 1h16a1 1 0 001-1v-5a1 1 0 00-1-1z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Exclusive Discounts</h3>
                        <p className="text-gray-600">Get access to special deals and offers when you shop with us.</p>
                    </div>

                    {/* Service 6: Quality Products */}
                    <div className="bg-white p-6 shadow-md rounded-lg text-center">
                        <div className="text-blue-500 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 12l5-5 4 4L19 7l2 2M3 21v-7a2 2 0 012-2h14a2 2 0 012 2v7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
                        <p className="text-gray-600">Shop with confidence knowing that we offer only the best products available.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
