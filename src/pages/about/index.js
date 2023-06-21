import Link from 'next/link'
import React from 'react'
import OurTeam from '../../../components/About/OurTeam'
import Image from 'next/image'
import OurValues from '../../../components/About/OurValues'
import OurTeam2 from '../../../components/About/OurTeam2'
import TestimonialSection from '../../../components/TestimonialSection'
import MetaHead from '../../../components/Meta/MetaTagHeader'

const About = () => {
  return (
    <>
      <MetaHead
        title={"About"}
        meta_author={"CodeVerse"}
        meta_keyword={"CodeVerse, CodeVerse Nepal, web development, innovation, customization, solutions, mission, values, expertise, web development company, Nepal, CodeVerse, web development services, website design, custom web development, e-commerce solutions, responsive web design, mobile app development, software development, IT solutions, technology company, digital agency, software company, tech startup, web solutions provider, website development, digital transformation, innovative solutions, creative designs, experienced team, professional services, quality work, customer satisfaction, reliable partner, trusted company, dedicated team, technology experts, cutting-edge solutions, agile development, scalable solutions, user-friendly designs, SEO services, online presence, web application development, WordPress development, PHP development, Laravel development, JavaScript development, front-end development, back-end development, API integration, payment gateway integration, website security, website optimization, digital marketing, social media marketing, branding, UI/UX design, SEO optimization, software solutions, mobile solutions, IT consulting, technology solutions, technology consulting, IT services, software engineering, web solutions, technology partners, business growth, IT infrastructure, cloud solutions, data management, data security, data analytics, digital strategy, software maintenance, IT support, software testing, website maintenance, mobile app maintenance, software upgrades, technology innovation, industry expertise, software deployment, CMS customization, software integration, software solutions, business solutions, enterprise solutions, startup solutions, technology trends, web technologies, software development life cycle, software project management, technology consulting services, software architecture, software testing, software documentation, software training, web hosting, cloud hosting, domain registration, IT solutions provider, software solutions provider, technology solutions provider, IT company, digital solutions provider, software development company"}
        meta_title={"About"}
        meta_description={"Learn about CodeVerse, a leading web development company focused on delivering innovative and customized solutions. Discover our mission, values, and the expertise of our dedicated team."}
        meta_image={'/programmer_solo.jpg'}
      />
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
          <OurTeam2 />
          {/* <TestimonialSection /> */}
        </div>
      </section>
    </>
  )
}

export default About
