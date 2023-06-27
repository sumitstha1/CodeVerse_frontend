import React from 'react'
import MetaHead from '../../../components/Meta/MetaTagHeader';
import Link from 'next/link';
import Image from 'next/image';
import { MdArrowForwardIos } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
import ServiceSection from '../../../components/Services/ServiceSection';
import Service from '../../../components/Services/Service';

const Services = ({ services }) => {
  return (
    <>
      <MetaHead
        title={"Services - CodeVerse | Your Website Development Partner"}
        meta_author={"CodeVerse"}
        meta_keyword={"web development services, full-stack development, back-end development, API development, front-end development, CodeVerse, codeverse, codeverse nepal, CodeVerse Nepal, CodeVerse Services, codeverse service, Custom website development, E-commerce solutions, Responsive web design, Mobile app development, CMS development, Website maintenance, UI/UX design, SEO services, Web application development, WordPress development, Shopify development, PHP development, Laravel development, JavaScript development, Front-end development, Back-end development, API integration, Payment gateway integration, Website security"}
        meta_title={"Services - CodeVerse | Your Website Development Partner"}
        meta_description={"Discover the comprehensive range of web development services offered by CodeVerse. We specialize in full-stack development, back-end development, API development, and front-end development. Elevate your online presence with our expertise and innovative solutions."}
        meta_image={'/code.jpg'}
      />
      <Service services={services} />
    </>
  )
}

export default Services

export async function getStaticProps(context) {
  try {
    const services_d = await fetch(process.env.API_URL + '/service/');
    const services = await services_d.json();
    // console.log(json)
    return {
      props: {
        services: services,
      },
      notFound: false,
    };

  }
  catch (error) {
    return {
      props: {
        profile: [],
      }
    }
  }
}
