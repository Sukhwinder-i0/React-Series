import React from 'react'

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SidebarNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Button to toggle the sidebar */}
            <button 
                className="lg:hidden p-2 text-teal-100" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Hamburger Icon (can replace with an icon library) */}
                &#9776;
            </button>

            {/* Sidebar for mobile */}
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`fixed left-0 top-0 w-64 h-full bg-slate-950 shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <ul className="flex flex-col mt-4 font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-teal-500" : "text-teal-100"} hover:bg-slate-900 hover:text-teal-500`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-teal-500" : "text-teal-100"} hover:bg-slate-900 hover:text-teal-500`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-teal-500" : "text-teal-100"} hover:bg-slate-900 hover:text-teal-500`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/github"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-teal-500" : "text-teal-100"} hover:bg-slate-900 hover:text-teal-500`
                                }
                            >
                                GitHub
                            </NavLink>
                        </li>
                    </ul>
                    <button 
                        className="absolute top-4 right-4 text-teal-500" 
                        onClick={() => setIsOpen(false)}
                    >
                        &times; {/* Close icon */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SidebarNavbar;
