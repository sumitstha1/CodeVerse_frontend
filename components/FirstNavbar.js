import React from 'react'
import Image from 'next/image'
import { FaViber, FaFacebookF, FaFacebookMessenger, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';

const FirstNavbar = () => {
    return (
        <header className="text-white body-font bg-purple-600">
            <div className="container mx-auto flex flex-wrap md:justify-between flex-col md:flex-row items-center">

                <div className="font-semibold text-sm hidden md:block items-center px-12 py-1">
                    Contact: +977 9815980798
                </div>
                <div className="social md:px-12 py-1 flex items-center">
                    <Link target='_blank' href={"viber://chat/?number=%2B9779815980798"}>
                        <FaViber className='md:mx-4 mx-6' />
                    </Link>
                    <Link target='_blank' href={"https://www.facebook.com/codeverse.np"}>
                        <FaFacebookF className='md:mx-4 mx-6' />
                    </Link>
                    <Link target='_blank' href={"https://m.me/codeverse.np"}>
                        <FaFacebookMessenger className='md:mx-4 mx-6' />
                    </Link>
                    <Link target='_blank' href={"https://instagram.com/codeverse.np/"}>
                        <FaInstagram className='md:mx-4 mx-6' />
                    </Link>
                    <Link target='_blank' href={"mailto:web.codeverse@gmail.com"}>
                        <AiOutlineMail className='md:mx-4 mx-6' />
                    </Link>
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
