import React from 'react'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import MetaHead from '../../../components/Meta/MetaTagHeader'
import ServiceContent from '../../../components/Services/ServiceContent'

const ServiceSlug = ({ service }) => {

  const router = useRouter();

  const { slug } = router.query;

  console.log(service.meta)

  return (
    <>
      <MetaHead
        title={service.title}
        meta_author={"CodeVerse"}
        meta_keyword={service.meta && service.meta.keywords}
        meta_title={service.title}
        meta_description={"Learn about CodeVerse, a leading web development company focused on delivering innovative and customized solutions. Discover our mission, values, and the expertise of our dedicated team."}
        meta_image={'/programmer_solo.jpg'}
      />
      <section className='h-[50vh]'>
        <div className='w-full h-[50vh]'>
          <Image src={process.env.WEB_URL + service.banner_image} width={3000} height={2000} alt='Banner Image' className='h-full bg-blend-darken mix-blend-darken' />
        </div>
        <div className='relative md:-top-32 -top-48 md:left-10 text-slate-200 max-w-[100vw] w-full'>
          <p className='md:text-xl text-base w-full'>{service.title}</p>
          <h1 className='md:text-4xl text-2xl'>{service.title_quote}</h1>
        </div>
      </section>
      <section>
        <div className='md:px-24 px-8 py-12 md:mx-28'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='md:text-3xl text-2xl text-purple-500 font-semibold'>{service.title}</h1>
            <p className='font-thin text-gray-500 italic text-center'>&quot;{service.title_quote}&quot;</p>
          </div>
          <div className='mt-10'>
            <ServiceContent description={service.description} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceSlug

export const getStaticProps = async ({ params }) => {
  const response = await fetch(process.env.API_URL + `/service/${params.slug}`);
  const service = await response.json();

  return {
    props: {
      service,
    },
  };
};

export const getStaticPaths = async () => {
  // Fetch the list of services to generate dynamic paths
  const response = await fetch(process.env.API_URL + '/service/');
  const services = await response.json();

  // Generate an array of paths based on the services' slugs
  const paths = services.map((service) => ({
    params: { slug: service.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};