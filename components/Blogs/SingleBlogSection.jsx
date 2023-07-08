import Image from 'next/image'
import React from 'react'

const SingleBlogSection = ({ blog }) => {

  const m_introduction = blog.introduction
    .replace(/<h1>/g, '<h1 class="text-3xl">')
    .replace(/<h2>/g, '<h2 class="text-2xl font-semibold">')
    .replace(/<h3>/g, '<h3 class="text-xl">')
    .replace(/<p>/g, '<p class="text-lg">');

  return (
    <div className='md:flex justify-center md:my-4'>
      <div className='md:w-[90%]'>
        <div>
          <Image src={blog.image} height={1655} width={2410} alt='Blog Image' className='w-full md:px-4' />
          <p>&nbsp;</p>
          <h1 className='text-gray-800 font-bold text-3xl md:text-5xl p-4'>{blog.title}</h1>
        </div>
        <p>&nbsp;</p>
        <main>
          <div className='px-4'>
            <article className='text-gray-800' dangerouslySetInnerHTML={{ __html: m_introduction }}>
              
            </article>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SingleBlogSection
