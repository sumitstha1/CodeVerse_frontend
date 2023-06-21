import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import TestimonialSection from '../../components/TestimonialSection'
import ServicesSectionWrapper from '../../components/Home/ServicesSectionWrapper'
import MetaHead from '../../components/Meta/MetaTagHeader'
import HireMe from '../../components/Home/HireMe'
import WhyCodeVerse from '../../components/Home/WhyCodeVerse'
import { useState, useEffect } from 'react';
import TermsAndConditions from '../../components/TermsandConditions';


export default function Home() {

  return (
    <>
      {/* <Head>
        <title>Home | CodeVerse</title>
        <meta name="description" content="CodeVerse: Transforming Companies with Custom Websites from Nepal. Unlock your business's online potential with our expert web design and development services. We create visually stunning, user-friendly websites tailored to your needs. Explore our innovative digital solutions today and leave a lasting impression on your target audience." />
        <meta name="keywords" content="web design, web development, custom websites, Nepal, digital solutions, codeverse, codeverse nepal"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <div className='bg-black text-purple-600'>hello</div> */}
      <MetaHead
        title={"Home | CodeVerse"}
        meta_author={"CodeVerse"}
        meta_keyword={"web design, web development, custom websites, Nepal, digital solutions, codeverse, codeverse nepal"}
        meta_title={"Home | CodeVerse"}
        meta_description={"CodeVerse: Transforming Companies with Custom Websites from Nepal. Unlock your business's online potential with our expert web design and development services. We create visually stunning, user-friendly websites tailored to your needs. Explore our innovative digital solutions today and leave a lasting impression on your target audience."}
        meta_image={'/code.jpg'}
      />
      <main>
        <section className='w-full banner-img md:h-[50vh] flex items-center justify-center'>
          <div className='text-slate-200 flex items-center flex-col md:w-[50%] w-[80%] md:py-0 py-6'>
            <h2 className='md:text-3xl text-2xl text-purple-400'>#1</h2>
            <h2 className='font-bold md:text-3xl mt-2 text-xl'>Web Developer in Nepal</h2>
            <p className='font-thin md:text-lg mt-6 text-center text-sm leading-normal'>CodeVerse is a dynamic startup based in Nepal, dedicated to developing innovative websites that propel companies to new heights. With our expert team of web designers and developers, we craft tailored digital solutions that seamlessly blend creativity and functionality. Our mission is to empower businesses by creating visually stunning, user-friendly websites that leave a lasting impression on their target audience. Trust CodeVerse to unlock your company&apos;s online potential and take your digital presence to the next level.</p>
            <ScrollLink
              to="hire_me"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className='px-8 md:font-semibold md:text-lg py-2 cursor-pointer bg-purple-500 hover:bg-purple-600 transition ease-in rounded delay-75 duration-150 mt-5'
            >
              Hire us
            </ScrollLink>
          </div>
        </section>
        <WhyCodeVerse />
        <ServicesSectionWrapper />
        <HireMe />
        <TestimonialSection />
        {/* <TermsAndConditions/> */}
      </main>
    </>
  )
}
