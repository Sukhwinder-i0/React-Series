import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import SidebarNavbar from '../SidebarNavbar/SidebarNavbar';

// Link is uesd instead of "a tag" cuz page refreshes 
// 

export default function Header() {
    return (
        <header id='header' className="shadow sticky z-50 top-0">
            <nav className="bg-slate-950 shadow-lg shadow-cyan-500 rounded-md border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img 
                            src="./src/assets/logo.png"
                            className="h-12 logo shadow-md"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="hover-lit text-white bg-slate-800 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="hover-lit bg-cyan-500 hover:bg-cyan-300 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-teal-500" : "text-teal-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-teal-500 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-teal-500" : "text-teal-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-teal-500 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-teal-500" : "text-teal-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-teal-500 lg:p-0`
                                    }
                                >
                                   Contact
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-teal-500" : "text-teal-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-teal-500 lg:p-0`
                                    }
                                >
                                   GitHub
                                </NavLink>
                            </li>
                            
                           
                            
                            
                        </ul>
                    </div>
                    <SidebarNavbar/>
                </div>
            </nav>
        </header>
    );
}

