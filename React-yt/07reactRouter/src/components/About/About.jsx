import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-slate-950">
            <div className="container m-auto px-6 text-teal-300 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img 
                            src="https://images.pexels.com/photos/4065133/pexels-photo-4065133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-100 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-200">
                        We are a passionate team of developers, designers, and strategists committed to bringing your vision to life. With years of experience in the industry, we specialize in creating innovative software solutions that cater to your unique needs.
                        </p>
                        <p className="mt-4 text-gray-200">
                        We envision a future where technology seamlessly integrates with business processes, driving innovation and success. Our goal is to be a trusted partner for companies looking to leverage technology to gain a competitive edge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}