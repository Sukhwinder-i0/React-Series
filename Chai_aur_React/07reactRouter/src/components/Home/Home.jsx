import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-slate-950 mx-auto w-full max-w-7xl p-8">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-2">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl text-teal-100 font-bold sm:text-5xl ">
                            Work with Us
                            <span className="hidden sm:block text-lg font-normal mt-10 mb-4 text-gray-200">We are passionate about harnessing the power of technology to drive your business forward. As a leading software development agency, we specialize in creating custom software solutions tailored to meet your unique needs. Whether you’re a startup looking to launch your first product or an established enterprise seeking to enhance your digital presence, we’re here to help you succeed.</span>
                        </h2>

                        <Link
                            className=" hover-lit inline-flex items-center px-6 py-3 font-medium bg-cyan-500 rounded-lg hover:bg-cyan-300"
                            to="/"
                        >
                            {/* <svg
                                
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg> */}
                            &nbsp;Start Woking
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="./src/assets/softwaredev.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="w-80 animate-pulse" src="./src/assets/softwaredev2.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium"></h1>
        </div>
    );
}
