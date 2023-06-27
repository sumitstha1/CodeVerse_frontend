import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import OurValues from './OurValues'
import OurWorkingModule from './OurWorkingModule'
// import { about } from '../../Data/about'

const AboutSection = ({ about, ourvalues }) => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2">
                        <Image src={"/programmer_solo.jpg"} alt="About Image" width={1000} height={1000} className="w-full h-auto rounded-lg mb-8 shadow-lg" />
                    </div>

                    <div className="md:w-1/2 md:pl-8">
                        {about.map((e) => {
                            return (
                                <>
                                    {e.slug.includes("our-story") && <><h2 className="text-3xl font-bold mb-4">Our <span className='text-purple-500'>Story</span></h2>
                                    <p className="text-gray-800 leading-relaxed mb-6">{e.content}</p></>}

                                    {e.slug.includes("our-mission") && <><h2 className="text-3xl font-bold mb-4">Our <span className='text-purple-500'>Mission</span></h2>
                                    <p className="text-gray-800 leading-relaxed mb-6">{e.content}</p></>}
                                </>
                            )

                        })}

                        <Link href="/contact" className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-600">Contact Us</Link>
                    </div>
                </div>

                <OurValues ourvalues={ourvalues} />
                {/* <OurTeam2 /> */}
                {/* <TestimonialSection /> */}
                <OurWorkingModule />
            </div>
        </section>
    )
}

export default AboutSection
