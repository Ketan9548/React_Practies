import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">My Website</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"} hover:text-gray-200`}>
                                Home
                            </NavLink>
                            <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"} hover:text-gray-200`}>
                                About
                            </NavLink>
                            <NavLink to="/services" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"} hover:text-gray-200`}>
                                Services
                            </NavLink>
                            <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"} hover:text-gray-200`}>
                                Contact
                            </NavLink>
                            <NavLink to="/linkedin" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"} hover:text-gray-200`}>
                                Linkedin
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
