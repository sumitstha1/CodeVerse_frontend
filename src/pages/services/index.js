import React from 'react'
import MetaHead from '../../../components/Meta/MetaTagHeader';
import Link from 'next/link';
import Image from 'next/image';

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      name: "Full-stack Development",
      description: "Unlock the full potential of your digital vision with CodeVerse's comprehensive full-stack development services. Our skilled team of developers excels in both front-end and back-end technologies, enabling us to create dynamic and intuitive web applications tailored to your unique requirements. From designing captivating user interfaces to building robust server-side systems, we cover every aspect of the development process. Experience the power of seamless integration, smooth functionality, and stunning aesthetics with our full-stack development expertise. Let us bring your ideas to life and elevate your online presence to new heights."
    },
    {
      id: 2,
      name: "Back-end Development",
      description: "Empower your digital ecosystem with CodeVerse's exceptional back-end development services. Our dedicated team of back-end developers specializes in building robust, scalable, and secure server-side solutions that power your web applications. From architecting efficient databases to implementing complex business logic, we ensure seamless integration and optimal performance. Trust us to handle the intricacies of server management, API development, and data processing, so you can focus on delivering a seamless user experience. With CodeVerse's back-end development expertise, unlock the full potential of your applications and drive your business forward."
    },
    {
      id: 3,
      name: "API Development",
      description: "Unleash the potential of your applications with CodeVerse's expert API development services. Our skilled team specializes in creating robust and scalable APIs that enable seamless integration with various platforms and third-party services. From designing intuitive API architectures to implementing secure authentication and data management, we ensure smooth and efficient communication between different systems. Whether you need RESTful APIs, GraphQL, or custom API solutions, we have the expertise to deliver high-performing and reliable APIs tailored to your specific needs. Trust CodeVerse to empower your applications with the power of seamless connectivity and unleash their full potential."
    },
    {
      id: 4,
      name: "Front-end Development",
      description: "Elevate your user experience with CodeVerse's exceptional front-end development services. Our talented team of front-end developers crafts visually stunning and interactive web interfaces that captivate users and drive engagement. With expertise in HTML, CSS, and JavaScript frameworks, we ensure responsive designs, seamless navigation, and intuitive user interfaces. From creating pixel-perfect layouts to optimizing performance across devices, we bring your ideas to life with meticulous attention to detail. Trust CodeVerse to deliver captivating front-end experiences that leave a lasting impression on your audience and elevate your brand presence online."
    },
    {
      id: 5,
      name: "Deployment / Hosting",
      description: "Experience hassle-free deployment and hosting services with CodeVerse. Our expert team ensures seamless deployment of your websites and applications, providing reliable and secure hosting solutions. Focus on your core business while we take care of the technicalities, ensuring optimal performance and uptime for your online presence. Trust CodeVerse for effortless deployment and hosting, allowing you to scale and grow your digital footprint with confidence."
    },
  ];
  return (
    <>
      {services.map((e) => {
        return (
          <div key={e.id} className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{e.name}</h2>
                <p className="leading-relaxed text-base">{e.description.substr(0, 140)}...</p>
                <a className="mt-3 text-purple-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )

}

const Services = () => {
  return (
    <>
      <MetaHead
        title={"Services"}
        meta_author={"CodeVerse"}
        meta_keyword={"web development services, full-stack development, back-end development, API development, front-end development, CodeVerse, codeverse, codeverse nepal, CodeVerse Nepal, CodeVerse Services, codeverse service, Custom website development, E-commerce solutions, Responsive web design, Mobile app development, CMS development, Website maintenance, UI/UX design, SEO services, Web application development, WordPress development, Shopify development, PHP development, Laravel development, JavaScript development, Front-end development, Back-end development, API integration, Payment gateway integration, Website security"}
        meta_title={"Services"}
        meta_description={"Discover the comprehensive range of web development services offered by CodeVerse. We specialize in full-stack development, back-end development, API development, and front-end development. Elevate your online presence with our expertise and innovative solutions."}
        meta_image={'/code.jpg'}
      />
      <section className="text-gray-600 body-font">
        <h1 className='text-4xl text-purple-600 tracking-wider font-bold px-5 text-center'>Services</h1>
        <p className='tracking-wide text-center mt-4'>We create stunning, user-friendly websites tailored to your business needs.</p>
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4 justify-center">
            <ServiceSection />
            {/* <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">FullStack Development</h2>
                <p className="leading-relaxed text-base">We offer comprehensive full stack web development services using Django, REST Framework, React, and Next.js. With expertise...</p>
                <a className="mt-3 text-purple-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Backend Development</h2>
                <p className="leading-relaxed text-base">We specialize in Django backend web development, offering tailored solutions for database design, authentication configuration, and admin panel development. With expertise...</p>
                <a className="mt-3 text-purple-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div> */}
          </div>
          <div class="flex justify-center">
            <div class="flex flex-col justify-center">
              <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                <div class="overflow-hidden w-full shadow-sm flex flex-col md:flex-row justify-center">
                  <div class="flex flex-col md:flex-row items-center">
                    <div class=" w-full overflow-hidden">
                      <Image height={350} width={700} src="https://source.unsplash.com/700x350/?city" alt="" class="rounded" />
                    </div>
                    <div class="md:w-2/3 m-4 ">
                      <div class="font-bold text-black text-3xl m-2">Get Started with Your Business <span className='text-purple-500'>- CodeVerse</span>
                      </div>
                      <div class="text-sm md:text-base text-gray-500 mt-4 m-2">
                        <p>CodeVerse is your trusted partner in building a successful online presence for your business. We specialize in providing comprehensive services that empower entrepreneurs like you to navigate the digital landscape with confidence. From strategic planning and custom website development to branding and design, we have the expertise to bring your business vision to life. With our dedicated team of professionals by your side, you can embark on your business journey knowing that you have the support and guidance you need to thrive. Let&apos;s collaborate and make your entrepreneurial dreams a reality. Contact us today to get started.
                        </p>
                      </div>
                      <div className='mt-6 ml-2'>
                        <Link href={"/contact"} className='bg-purple-500 rounded-md transition ease-in delay-75 duration-150 hover:bg-purple-600 text-white px-4 py-2 '>Contact now</Link>

                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
