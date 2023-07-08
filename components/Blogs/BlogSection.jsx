import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogSection = ({ blogList }) => {
    return (
        <section>
            <div className='flex justify-center items-center w-full'>
                <div className='w-[90%]'>
                    <h1 className='text-4xl tracking-wider text-purple-500'>Blogs</h1>
                    <p className='text-base text-gray-500 mt-3'>This is a short description about the blog</p>
                </div>
            </div>
            <div className='flex items-center flex-col md:flex-row md:mx-10 md:max-w-[100vw] md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
                {blogList.map((e) => {
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
                                <p className='mt-5 text-gray-500' >{e.meta_intro.substr(0, 160)}...</p>
                            </div>
                            <Link href={`/blog/${e.slug}`} className='border border-purple-500 text-purple-500 px-8 py-2 hover:bg-purple-500 hover:text-white transition ease-linear delay-75 duration-150 m-2'>View more</Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default BlogSection
