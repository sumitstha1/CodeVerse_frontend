import Image from 'next/image'
import React from 'react'
import { FaBeer } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SecondNavbar = () => {
    const router = useRouter();
    return (
        <header className="text-gray-600 body-font md:sticky md:top-0 bg-white md:z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:ml-12">
                    <Image src="/code_verse_transparent.png" alt="Logo" className='w-[120px]' height={85} width={301} />
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:mx-2">
                    <Link href={"/"} className="md:mx-7 mr-4 md:text-lg text-base hover:text-purple-500 transition ease-in duration-100">Home</Link>
                    <Link href={"/about"} className="md:mx-7 mr-4 md:text-lg text-base hover:text-purple-500 transition ease-in duration-100">About us</Link>
                    <Link href={"/services"} className="md:mx-7 mr-4 md:text-lg text-base hover:text-purple-500 transition ease-in duration-100">Services</Link>
                    {/* <Link href={"/portfolio"} className="md:mx-7 mr-4 md:text-lg text-base hover:text-purple-500 transition ease-in duration-100">Portfolio</Link> */}
                    <Link href={"/blog"} className="md:mx-7 mr-4 md:text-lg text-base hover:text-purple-500 transition ease-in duration-100">Blogs</Link>
                </nav>
                <button onClick={() => router.push("/contact")} className="inline-flex items-center md:text-lg text-base border-0 py-2 px-3 focus:outline-none rounded text-white hover:text-purple-200 mt-4 md:mt-0 md:mr-12 bg-gradient-to-tl from-purple-500 to-teal-500 transition ease-in duration-100 delay-75">Contact us</button>
            </div>
        </header>
    )
}

export default SecondNavbar
