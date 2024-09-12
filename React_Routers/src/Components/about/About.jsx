import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className='grid justify-center'>
                <NavLink className={({ isActive }) => `${isActive ? "text-orange-500" : "text-slate-500"} hover:text-black border-2 rounded-lg mt-2 border-black w-fit`} to="name">
                    name
                </NavLink>
            </div>
            <Outlet />
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">About Us</h2>
                    <div className="flex flex-wrap items-center justify-center">
                        {/* About Text */}
                        <div className="w-full md:w-1/2 p-4">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h3>
                            <p className="text-gray-700 mb-4">
                                We are a dedicated team of professionals passionate about delivering quality services. Our goal is to bring the best user experience through our expertise in web development and design.
                            </p>
                            <p className="text-gray-700">
                                With a focus on innovation and continuous improvement, we aim to deliver cutting-edge solutions tailored to your business needs. Our mission is to empower businesses by creating exceptional digital experiences.
                            </p>
                        </div>

                        {/* About Image */}
                        <div className="w-full md:w-1/2 p-4">
                            <img
                                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="About us"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold text-center text-blue-600 mb-6">Our Core Values</h3>
                        <div className="flex flex-wrap justify-center space-y-6 md:space-y-0 md:space-x-6">
                            <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg text-center">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Integrity</h4>
                                <p className="text-gray-600">
                                    We uphold the highest standards of integrity in all of our actions, fostering trust with our clients and partners.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg text-center">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Innovation</h4>
                                <p className="text-gray-600">
                                    We constantly strive to innovate and improve our processes, ensuring that we stay ahead of the curve in the digital space.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg text-center">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">Customer Focus</h4>
                                <p className="text-gray-600">
                                    Our clients are at the heart of everything we do. We work closely with them to understand their needs and deliver exceptional results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default About;
