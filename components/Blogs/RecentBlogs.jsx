import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecentBlogs = ({ blogs, slug }) => {
    return (
        <div className='md:flex justify-center items-center md:flex-wrap'>
            <div className='px-4 md:w-[90%]'>
                <div className='py-2 text-left md:text-center'>
                    <h2 className='text-3xl font-semibold'>Recent <span className='text-purple-400'>Blogs</span></h2>
                </div>
                <div className='md:flex md:flex-wrap'>
                    {blogs.map((e, index) => {
                        if (index < 3) {
                            if (e.slug != slug) {
                                return (
                                    <div key={e.uid} className='container blog-container my-4 md:w-1/4 md:mr-4'>
                                        <div className='w-full'>
                                            <Image src={e.image} alt='This is a image' height={1000} width={2000} className=' rounded-t-lg' />
                                        </div>
                                        <div className='py-2 px-4'>
                                            <h3 className='text-xl font-semibold'>
                                                {e.title}
                                            </h3>
                                            <p>{e.meta_intro.substr(0, 140)}...</p>
                                            <div className='py-2'>
                                                <Link href={`/blog/${e.slug}`} className='underline hover:no-underline underline-offset-4 text-purple-500'>Learn more</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        }
                    })}


                </div>
            </div>
        </div>
    )
}

export default RecentBlogs
