import React from 'react'
import { useRouter } from 'next/router'
import { BsStack, BsDatabase } from 'react-icons/bs';

const ServicesSectionWrapper = () => {

    const router = useRouter();

    return (
        <section className="text-gray-600 body-font bg-gray-100">
            <div className="container px-5 py-12 mx-auto flex flex-wrap w-[90%]">
                <div className='my-10'>
                    <h2 className='text-4xl font-semibold tracking-wider text-purple-600'>Services</h2>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2 md:w-full">
                        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                                <BsStack className='w-8 h-8'/>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">FullStack Development</h2>
                                <p className="leading-relaxed text-base">We offer comprehensive full stack web development services using Django, REST Framework, React, and Next.js. With expertise...</p>
                                <a className="mt-3 text-purple-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2 md:w-full">
                        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                                <BsDatabase className='w-8 h-8'/>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Backend Development</h2>
                                <p className="leading-relaxed text-base">We specialize in Django backend web development, offering tailored solutions for database design...</p>
                                <a className="mt-3 text-purple-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-auto my-5'>
                    <button onClick={() => router.push("/services")} className='bg-purple-500 hover:bg-purple-700 transition ease-in delay-75 duration-100 px-5 py-2 rounded text-white hover:shadow-lg hover:shadow-purple-300'>View All</button>
                </div>
            </div>
        </section>
    )
}

export default ServicesSectionWrapper
