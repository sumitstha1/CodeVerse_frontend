import React from 'react'
import Image from 'next/image'
import { FaViber, FaFacebookF, FaFacebookMessenger, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const FirstNavbar = () => {
    return (
        <header className="text-white body-font bg-purple-600">
            <div className="container mx-auto flex flex-wrap md:justify-between flex-col md:flex-row items-center">

                <div className="font-semibold text-sm hidden md:block items-center px-12 py-1">
                    Contact: +977 9812345678
                </div>
                <div className="social md:px-12 py-1 flex items-center">
                    <FaViber className='md:mx-4 mx-6'/>
                    <FaFacebookF className='md:mx-4 mx-6'/>
                    <FaFacebookMessenger className='md:mx-4 mx-6'/>
                    <FaInstagram className='md:mx-4 mx-6'/>
                    <AiOutlineMail className='md:mx-4 mx-6'/>
                </div>
                
                {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Home</a>
                    <a className="mr-5 hover:text-gray-900">About us</a>
                    <a className="mr-5 hover:text-gray-900">Services</a>
                    <a className="mr-5 hover:text-gray-900">Portfolio</a>
                </nav> */}
            </div>
        </header>
    )
}

export default FirstNavbar
