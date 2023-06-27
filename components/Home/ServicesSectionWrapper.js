import React from 'react'
import { useRouter } from 'next/router'
import { BsStack, BsDatabase } from 'react-icons/bs';
import Link from 'next/link';

const Service = ({ serviceList }) => {
    // const serviceList = [
    //     {
    //         name: "Fullstack Development",
    //         detail: "This is a demo detail lorem45 osidfjiosd dsougsdoijf osdjgs dfj dsofjsd fsd foisd fosdi fds fsdiofsdj fsdjsdf jsd fisd iofs fsfsfsdf sf sd jfs fio sdf sd jdsfjiwe8f 9we ufj fijf9sdfiosdfj sidfosidfsdoif soid fiosjdfi osdfs fsd jf isdf",
    //         slug: "full-stack-development"
    //     },
    //     {
    //         name: "Backend Development",
    //         detail: "This is a demo detail lorem45 osidfjiosd dsougsdoijf osdjgs dfj dsofjsd fsd foisd fosdi fds fsdiofsdj fsdjsdf jsd fisd iofs fsfsfsdf sf sd jfs fio sdf sd jdsfjiwe8f 9we ufj fijf9sdfiosdfj sidfosidfsdoif soid fiosjdfi osdfs fsd jf isdf",
    //         slug: "back-end-development"
    //     },
    //     {
    //         name: "Frontent Development",
    //         detail: "This is a demo detail lorem45 osidfjiosd dsougsdoijf osdjgs dfj dsofjsd fsd foisd fosdi fds fsdiofsdj fsdjsdf jsd fisd iofs fsfsfsdf sf sd jfs fio sdf sd jdsfjiwe8f 9we ufj fijf9sdfiosdfj sidfosidfsdoif soid fiosjdfi osdfs fsd jf isdf",
    //         slug: "front-end-development"
    //     },
    // ]

    return (
        <>
        {serviceList.map((e, i) => {
            if (e.slug == "full-stack-development" || e.slug == "back-end-development") {
                return (
                    <div key={e.uid} className="p-4 lg:w-1/2 md:w-full">
                        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                            {e.slug.includes("full-stack-development") && <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                                <BsStack className='w-8 h-8'/>
                            </div>}
                            {e.slug.includes("back-end-development") && <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                                <BsDatabase className='w-8 h-8'/>
                            </div>}
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{e.title}</h2>
                                <p className="leading-relaxed text-base">{e.meta_description.substr(0, 130)}...</p>
                                <Link href={`/services/${e.slug}`} className="mt-3 text-purple-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        })}
        </>
    )
}

const ServicesSectionWrapper = ({ serviceList }) => {

    const router = useRouter();

    return (
        <section className="text-gray-600 body-font bg-gray-100">
            <div className="container px-5 py-12 mx-auto flex flex-wrap w-[90%]">
                <div className='my-10'>
                    <h2 className='text-4xl font-semibold tracking-wider text-purple-600'>Services</h2>
                </div>
                <div className="flex flex-wrap -m-4">
                    <Service serviceList={serviceList} />
                    {/* <div className="p-4 lg:w-1/2 md:w-full">
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
                    </div> */}
                </div>
                <div className='mx-auto my-5'>
                    <button onClick={() => router.push("/services")} className='bg-purple-500 hover:bg-purple-700 transition ease-in delay-75 duration-100 px-5 py-2 rounded text-white hover:shadow-lg hover:shadow-purple-300'>View All</button>
                </div>
            </div>
        </section>
    )
}

export default ServicesSectionWrapper
