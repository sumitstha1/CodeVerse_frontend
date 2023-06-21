import Link from 'next/link'
import React from 'react'
import OurTeam from '../../../components/About/OurTeam'
import Image from 'next/image'
import OurValues from '../../../components/About/OurValues'

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <Image src={"/programmer_solo.jpg"} alt="About Image" width={1000} height={1000} className="w-full h-auto rounded-lg mb-8 shadow-lg" />
          </div>

          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Our <span className='text-purple-500'>Story</span></h2>
            <p className="text-gray-800 leading-relaxed mb-6">In the dynamic landscape of Nepal, CodeVerse was born with a mission to revolutionize web design. Driven by passion and expertise, we empower businesses with captivating websites that deliver exceptional results. Join us on this transformative journey to elevate your online presence and unlock the true potential of your brand.</p>

            <h2 className="text-3xl font-bold mb-4">Our <span className='text-purple-500'>Mission</span></h2>
            <p className="text-gray-800 leading-relaxed mb-6">At CodeVerse, our mission is to empower businesses and individuals with transformative digital solutions. Through innovative thinking, cutting-edge technology, and creative expertise, we create impactful websites and experiences. Our goal is to establish a strong online presence, engage audiences, and drive success. With collaborative partnerships, personalized strategies, and ongoing support, we exceed expectations and deliver results. Join us on a remarkable digital journey to unlock your full potential.</p>

            <Link href="/contact" className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg font-bold hover:bg-purple-600">Contact Us</Link>
          </div>
        </div>

        <OurValues />
        <OurTeam />
      </div>
    </section>
  )
}

export default About
