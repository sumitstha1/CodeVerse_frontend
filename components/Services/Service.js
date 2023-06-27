import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs'
import ServiceSection from '../../components/Services/ServiceSection';

const Service = ({ services }) => {
    return (
        <section className="text-gray-600 body-font">
            <h1 className='text-4xl text-purple-600 tracking-wider font-bold px-5 text-center'>Services</h1>
            <p className='tracking-wide text-center mt-4'>We create stunning, user-friendly websites tailored to your business needs.</p>
            <div className="container px-5 py-16 mx-auto flex flex-wrap">
                <div className='flex justify-center flex-col md:items-center'>
                    <ServiceSection services={services} />

                    <div className='w-full flex justify-center items-center'>
                        <Link
                            href="/#hire_us"
                            offset={-100}
                            className='px-16 border hover:border-purple-500 hover:text-purple-500 text-white hover:bg-transparent bg-purple-500 md:font-semibold md:text-lg py-2 cursor-pointer transition ease-linear rounded delay-75 duration-150 mt-5 '
                        >
                            <div className='flex justify-center items-center'>
                                Hire us <BsArrowRight className='ml-2 relative ' />
                            </div>
                        </Link>
                    </div>

                </div>

                <div class="flex justify-center mt-10">
                    <div class="flex flex-col justify-center">
                        <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                            <div class="overflow-hidden w-full shadow-sm flex flex-col md:flex-row justify-center">
                                <div class="flex flex-col md:flex-row items-center">
                                    <div class=" w-full overflow-hidden">
                                        <Image height={350} width={700} src="https://source.unsplash.com/700x350/?city" alt="" class="rounded" />
                                    </div>
                                    <div class="md:w-2/3 m-4 ">
                                        <div class="font-bold text-black text-3xl m-2">Get Started with Your Business <span className='text-purple-500'>- CodeVerse</span>
                                        </div>
                                        <div class="text-sm md:text-base text-gray-500 mt-4 m-2">
                                            <p>CodeVerse is your trusted partner in building a successful online presence for your business. We specialize in providing comprehensive services that empower entrepreneurs like you to navigate the digital landscape with confidence. From strategic planning and custom website development to branding and design, we have the expertise to bring your business vision to life. With our dedicated team of professionals by your side, you can embark on your business journey knowing that you have the support and guidance you need to thrive. Let&apos;s collaborate and make your entrepreneurial dreams a reality. Contact us today to get started.
                                            </p>
                                        </div>
                                        <div className='mt-6 ml-2'>
                                            <Link href={"/contact"} className='bg-purple-500 rounded-md transition ease-in delay-75 duration-150 hover:bg-purple-600 text-white px-4 py-2 '>Contact now</Link>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Service
