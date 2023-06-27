import Link from 'next/link'
import React from 'react'
import OurTeam from '../../../components/About/OurTeam'
import Image from 'next/image'
import OurValues from '../../../components/About/OurValues'
import OurTeam2 from '../../../components/About/OurTeam2'
import TestimonialSection from '../../../components/TestimonialSection'
import MetaHead from '../../../components/Meta/MetaTagHeader'
import OurWorkingModule from '../../../components/About/OurWorkingModule';
import AboutSection from '../../../components/About/AboutSection'

const About = ({ about, ourvalues }) => {
  return (
    <>
      <MetaHead
        title={"About - CodeVerse | Your Website Development Partner"}
        meta_author={"CodeVerse"}
        meta_keyword={"CodeVerse, CodeVerse Nepal, web development, innovation, customization, solutions, mission, values, expertise, web development company, Nepal, CodeVerse, web development services, website design, custom web development, e-commerce solutions, responsive web design, mobile app development, software development, IT solutions, technology company, digital agency, software company, tech startup, web solutions provider, website development, digital transformation, innovative solutions, creative designs, experienced team, professional services, quality work, customer satisfaction, reliable partner, trusted company, dedicated team, technology experts, cutting-edge solutions, agile development, scalable solutions, user-friendly designs, SEO services, online presence, web application development, WordPress development, PHP development, Laravel development, JavaScript development, front-end development, back-end development, API integration, payment gateway integration, website security, website optimization, digital marketing, social media marketing, branding, UI/UX design, SEO optimization, software solutions, mobile solutions, IT consulting, technology solutions, technology consulting, IT services, software engineering, web solutions, technology partners, business growth, IT infrastructure, cloud solutions, data management, data security, data analytics, digital strategy, software maintenance, IT support, software testing, website maintenance, mobile app maintenance, software upgrades, technology innovation, industry expertise, software deployment, CMS customization, software integration, software solutions, business solutions, enterprise solutions, startup solutions, technology trends, web technologies, software development life cycle, software project management, technology consulting services, software architecture, software testing, software documentation, software training, web hosting, cloud hosting, domain registration, IT solutions provider, software solutions provider, technology solutions provider, IT company, digital solutions provider, software development company"}
        meta_title={"About - CodeVerse | Your Website Development Partner"}
        meta_description={"Learn about CodeVerse, a leading web development company focused on delivering innovative and customized solutions. Discover our mission, values, and the expertise of our dedicated team."}
        meta_image={'/programmer_solo.jpg'}
      />
      <AboutSection about={about} ourvalues={ourvalues}/>
    </>
  )
}

export default About

export async function getServerSideProps(context) {
  try {
    const about_d = await fetch(process.env.API_URL + '/account/about/');
    const about = await about_d.json();
    const ourvalues_d = await fetch(process.env.API_URL + '/account/ourvalue/');
    const ourvalues = await ourvalues_d.json();
    // console.log(json)
    return {
      props: {
        about: about,
        ourvalues: ourvalues,
      },
      notFound: false,
    };

  }
  catch (error) {
    return {
      props: {
        about: [],
        ourvalues: [],
      }
    }
  }
}
