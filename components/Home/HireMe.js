import React from 'react'
import { useEffect } from 'react';

const HireMe = () => {
    return (
        <div>
            {/* <h1>Hire Us</h1> */}
            <section className='body-font text-gray-600 flex justify-center'>
                <div className='lg:w-[90%] w-[100%] h-full px-5 py-6 flex justify-center items-center flex-col md:justify-start md:items-start'>
                    <h1 className='text-4xl font-semibold tracking-wider text-purple-600 text-center md:text-start'>Hire Us</h1>
                    <div className=' flex lg:justify-between lg:flex-row flex-col h-full my-8'>
                        <div className='lg:w-1/2 w-[100%] mr-2 h-full flex justify-center items-center lg:justify-start'>
                            <div className='w-[85%] lg:flex lg:justify-center items-center flex-col h-full ' >
                                <h2 className='text-2xl py-5 text-center lg:text-start'>&quot;<span className='text-purple-700'>CodeVerse:</span> Elevate Your Digital Presence, Choose Excellence!&quot;</h2>
                                <p className='py-5 text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestiae. Consequuntur doloremque odio atque ab ipsam magnam repellendus, nobis beatae similique fuga iure veniam facere dolorem quisquam harum corporis esse quae officiis provident debitis aperiam! Fuga eligendi quidem rerum non eum impedit minima accusantium aspernatur!</p>
                            </div>
                        </div>
                        <div className='lg:w-1/2 w-[100%] md:px-5 py-2' data-aos="fade-left" id='hire_me'>
                            <form>
                                <div className='flex md:flex-row flex-col justify-between mx-6 mt-4'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="name">Name <span className='text-red-600'>*</span></label>
                                        <input type="text" name="name" className='px-2 mt-2 w-64 py-1 border rounded border-gray-600 text-gray-800' />
                                    </div>
                                    <div className='flex flex-col md:mt-0 mt-4'>
                                        <label htmlFor="name">Company Name</label>
                                        <input type="text" name="name" className='px-2 mt-2 w-64 py-1 border rounded border-gray-600 text-gray-800' />
                                    </div>
                                </div>
                                <div className='flex md:flex-row flex-col justify-between mx-6 mt-4'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="name">Contact Number <span className='text-red-600'>*</span></label>
                                        <input type="text" name="name" className='px-2 mt-2 w-64 py-1 border rounded border-gray-600 text-gray-800' />
                                    </div>
                                    <div className='flex flex-col md:mt-0 mt-4'>
                                        <label htmlFor="name">Email <span className='text-red-600'>*</span></label>
                                        <input type="email" name="name" className='px-2 mt-2 w-64 py-1 border rounded border-gray-600 text-gray-800' />
                                    </div>
                                </div>


                                <div className='flex flex-col mx-6 mt-4'>
                                    <label for="underline_select" class="sr-only">Underline select </label>
                                    <select id="underline_select" class="block w-64 lg:w-72 py-2.5 px-0 text-base text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>Choose a country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                                <button type='submit' className='bg-purple-500 mx-5 md:mx-6 hover:bg-purple-700 transition ease-in delay-75 duration-100 md:px-5 px-4 py-2 rounded my-6 text-white hover:shadow-lg hover:shadow-purple-300 text-sm md:text-base'>Hire Now</button>
                            </form>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default HireMe
