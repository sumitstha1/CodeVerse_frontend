import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { MdArrowForwardIos } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
import { services } from '../../Data/services';

const ServiceSection = () => {
    return (
        <>
            {services.map((e, index) => {
                if (index % 2 == 0) {
                    return (
                        <div key={e.id} className='md:w-[80%] my-8 md:flex md:justify-between md:flex-row'>
                            <div className='md:w-1/2 md:flex md:justify-between md:items-center'>
                                <h1 className='text-2xl tracking-wider text-center font-bold text-purple-500 my-2 md:hidden'>{e.name}</h1>
                                <Image src={"/code.jpg"} alt='This is alt text' width={6000} height={4000} className='w-full md:w-[30vw] md:h-[35vh] rounded mt-2' />
                            </div>
                            <div className='flex items-center md:items-start md:justify-center flex-col md:w-1/2'>
                                <h1 className='text-3xl tracking-wider font-bold text-purple-500 my-2 text hidden text-left md:block'>{e.name}</h1>
                                <p className='text-justify mt-2'>{e.description}</p>
                                <Link href={'#'} className='border border-purple-500 px-10 py-3 rounded text-purple-500 hover:bg-purple-500 hover:text-white transition ease-linear delay-75 duration-150 mt-4'>
                                    <div className='flex justify-center items-center'>
                                        Learn more <MdArrowForwardIos className='ml-2' />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div key={e.id} className='md:w-[80%] my-8 md:flex md:justify-between md:flex-row-reverse'>
                            <div className='md:w-1/2 md:flex md:justify-center md:items-center'>
                                <h1 className='text-2xl tracking-wider text-center font-bold text-purple-500 my-2 md:hidden'>{e.name}</h1>
                                <Image src={"/code.jpg"} alt='This is alt text' width={6000} height={4000} className='w-full md:w-[30vw] md:h-[35vh] rounded mt-2' />
                            </div>
                            <div className='flex items-center md:items-start md:justify-center flex-col md:w-1/2'>
                                <h1 className='text-3xl tracking-wider font-bold text-purple-500 my-2 text hidden text-left md:block'>{e.name}</h1>
                                <p className='text-justify mt-2'>{e.description}</p>
                                <Link href={'#'} className='border border-purple-500 px-10 py-3 rounded text-purple-500 hover:bg-purple-500 hover:text-white transition ease-linear delay-75 duration-150 mt-4'>
                                    <div className='flex justify-center items-center'>
                                        Learn more <MdArrowForwardIos className='ml-2' />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default ServiceSection
