import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white p-4 mt-8 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
                <nav>
                    <ul className="flex space-x-4">
                        <NavLink to="/privacy" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"} hover:text-gray-200`}>
                            Privacy Policy
                        </NavLink>
                        <NavLink to="/terms" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"} hover:text-gray-200`}>
                            Terms of Service
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-orange-500" : "text-black"} hover:text-gray-200`}>
                            Contact Us
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
