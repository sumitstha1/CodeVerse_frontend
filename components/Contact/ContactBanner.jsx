import Image from 'next/image'
import React from 'react'

const ContactBanner = () => {
  return (
    <section className='contact-banner h-[40vh] flex items-end'>
      <div className='text-slate-100 p-6'>
        <h1 className='text-2xl font-semibold md:font-bold md:text-4xl'>Contact Us</h1>
        <p className='text-base font-thin md:font-normal md:text-lg my-3'>Unleash your potential. Contact us now.</p>
      </div>
    </section>
  )
}

export default ContactBanner
