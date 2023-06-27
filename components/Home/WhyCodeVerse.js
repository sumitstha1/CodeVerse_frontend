import Image from 'next/image'
import React from 'react'
import { Typography } from '@mui/material'

const WhyCodeVerse = ({ content }) => {
    return (
        <section className="text-gray-800 body-font">
            <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image className="object-cover object-center rounded" alt="Choosing CodeVerse" src="/choosing.jpg" width={2410} height={1655} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Why choose <span className='text-purple-600'>CodeVerse?</span>
                    </h1>
                    <p className="mb-8 text-lg leading-relaxed">{content}</p>
                </div>
            </div>
        </section>
    )
}

export default WhyCodeVerse
