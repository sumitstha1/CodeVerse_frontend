import Image from 'next/image'
import React from 'react'
import { Typography } from '@mui/material'

const WhyCodeVerse = () => {
    return (
        <section className="text-gray-800 body-font">
            <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image className="object-cover object-center rounded" alt="Choosing CodeVerse" src="/choosing.jpg" width={2410} height={1655} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Why choose <span className='text-purple-600'>CodeVerse?</span>
                    </h1>
                    <p className="mb-8 text-lg leading-relaxed">When it comes to choosing a web development partner, CodeVerse stands out as the ultimate choice. With a team of highly skilled experts, we bring a wealth of experience and expertise to every project. What sets us apart is our unwavering commitment to customization and tailored solutions. We take the time to understand your unique needs, goals, and brand identity, ensuring that every aspect of your website reflects your vision. Our innovative approach keeps us at the forefront of industry trends, enabling us to create cutting-edge solutions that make you stand out from the competition. At CodeVerse, we are results-driven, focusing on delivering tangible outcomes that drive your success. We believe in open and transparent communication, collaborating closely with you throughout the process to ensure your expectations are not only met but exceeded. Our dedication to customer satisfaction goes beyond the initial project, as we offer ongoing support and maintenance to keep your website secure, up-to-date, and optimized for performance. Choose CodeVerse for an exceptional web development experience that is tailored to your needs and brings your vision to life.</p>
                </div>
            </div>
        </section>
    )
}

export default WhyCodeVerse
