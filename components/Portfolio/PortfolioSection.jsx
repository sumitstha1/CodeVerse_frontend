import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { portfolios } from '../../Data/portfolios'

const PortfolioSection = () => {
    return (
        <div>
            <div className='flex justify-center items-center w-full'>
                <div className='w-[90%]'>
                    <h1 className='text-4xl tracking-wider text-purple-500'>Portfolio</h1>
                    <p className='text-base text-gray-500 mt-3'>This is a short description about the portfolio</p>
                </div>
            </div>
            {/* <div className='md:flex justify-center'>
                <div className='px-2 md:px-0 flex flex-wrap mt-4 md:w-[90%]'>
                    <div className='bg-gray-200 md:mx-2 px-2 py-4 rounded-lg shadow-lg mb-4 md:w-1/4'>
                        <Link href={"https://sumitstha.pythonanywhere.com"}>
                            <div>
                                <Image src={"/choosing.jpg"} width={2410} height={1655} alt='Portfolio Image' className='rounded' />
                            </div>
                            <div className='mt-2'>
                                <h3>Hosptial Management System</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div> */}

            <div className='flex items-center flex-col md:flex-row md:mx-10 md:max-w-[100vw] md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
                {portfolios.map((e) => {
                    // console.log(process.env.WEB_URL + e.image)
                    return (
                        <div key={e.uid} className='w-[95%] my-5 md:w-full md:mx-2 flex-wrap'>
                            <div class="relative p-2 ">
                                <div class="overflow-hidden rounded">
                                    <Image src={`${e.image}`} alt='This is blog pic' height={4024} width={6024} className='rounded w-full h-[40vh] transform transition-transform ease-in-out duration-1000 hover:scale-110' />
                                </div>
                            </div>
                            <div className='my-6 p-2'>
                                <h1 className='text-xl font-semibold text-gray-700'>{e.title}</h1>
                            </div>
                            <Link href={e.url} target='_blank' className='border border-purple-500 text-purple-500 px-8 py-2 hover:bg-purple-500 hover:text-white transition ease-linear delay-75 duration-150 m-2'>View site</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PortfolioSection
