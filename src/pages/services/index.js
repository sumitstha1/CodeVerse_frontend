import React from 'react'
import MetaHead from '../../../components/Meta/MetaTagHeader';
import Link from 'next/link';
import Image from 'next/image';
import { MdArrowForwardIos } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'

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
      {services.map((e, index) => {
        if (index % 2 == 0) {
          return (
            <div key={e.id} className='md:w-[80%] my-8 md:flex md:justify-between md:flex-row'>
              <div className='md:w-1/2 md:flex md:justify-between md:items-center'>
                <h1 className='text-2xl tracking-wider text-center font-bold text-purple-500 my-2 md:hidden'>{e.name}</h1>
                <Image src={"/code.jpg"} alt='This is alt text' width={6000} height={4000} className='w-full md:w-[30vw] md:h-[35vh] rounded mt-2' />
              </div>
              <div className='flex items-center md:items-start md:justify-center flex-col md:w-1/2'>
                <h1 className='text-3xl tracking-wider font-bold text-purple-500 my-2 text hidden text-left md:block'>{e.name}</h1>
                <p className='text-justify mt-2'>{e.description}</p>
                <Link href={'#'} className='border border-purple-500 px-10 py-3 rounded text-purple-500 hover:bg-purple-500 hover:text-white transition ease-linear delay-75 duration-150 mt-4'>
                  <div className='flex justify-center items-center'>
                    Learn more <MdArrowForwardIos className='ml-2' />
                  </div>
                </Link>
              </div>
            </div>
          )
        } else {
          return (
            <div key={e.id} className='md:w-[80%] my-8 md:flex md:justify-between md:flex-row-reverse'>
              <div className='md:w-1/2 md:flex md:justify-center md:items-center'>
                <h1 className='text-2xl tracking-wider text-center font-bold text-purple-500 my-2 md:hidden'>{e.name}</h1>
                <Image src={"/code.jpg"} alt='This is alt text' width={6000} height={4000} className='w-full md:w-[30vw] md:h-[35vh] rounded mt-2' />
              </div>
              <div className='flex items-center md:items-start md:justify-center flex-col md:w-1/2'>
                <h1 className='text-3xl tracking-wider font-bold text-purple-500 my-2 text hidden text-left md:block'>{e.name}</h1>
                <p className='text-justify mt-2'>{e.description}</p>
                <Link href={'#'} className='border border-purple-500 px-10 py-3 rounded text-purple-500 hover:bg-purple-500 hover:text-white transition ease-linear delay-75 duration-150 mt-4'>
                  <div className='flex justify-center items-center'>
                    Learn more <MdArrowForwardIos className='ml-2' />
                  </div>
                </Link>
              </div>
            </div>
          )
        }
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
        <div className="container px-5 py-16 mx-auto flex flex-wrap">
          <div className='flex justify-center flex-col md:items-center'>
            <ServiceSection />

            {/* <div className='md:w-[80%] my-8 md:flex md:justify-between md:flex-row'>
              <div className='md:w-1/2 md:flex md:justify-between md:items-center'>
                <h1 className='text-2xl tracking-wider text-center font-bold text-purple-500 my-2 md:hidden'>Deployment/Hosting</h1>
                <Image src={"/code.jpg"} alt='This is alt text' width={6000} height={4000} className='w-full md:w-[30vw] md:h-[35vh] rounded mt-2' />
              </div>
              <div className='flex items-center md:items-start md:justify-center flex-col md:w-1/2'>
                <h1 className='text-3xl tracking-wider font-bold text-purple-500 my-2 text hidden text-left md:block'>Deployment/Hosting</h1>
                <p className='text-justify mt-2'>Experience hassle-free deployment and hosting services with CodeVerse. Our expert team ensures seamless deployment of your websites and applications, providing reliable and secure hosting solutions. Focus on your core business while we take care of the technicalities, ensuring optimal performance and uptime for your online presence. Trust CodeVerse for effortless deployment and hosting, allowing you to scale and grow your digital footprint with confidence.</p>
                <Link href={'#'} className='border border-purple-500 px-6 py-3 rounded text-purple-500 hover:bg-purple-500 hover:text-white transition ease-linear delay-75 duration-150 mt-4'>
                  <div className='flex justify-center items-center'>
                    Learn more <MdArrowForwardIos className='ml-2' />
                  </div>
                </Link>
              </div>
            </div>
            <div className='md:w-[80%] my-8 md:flex md:justify-between md:flex-row-reverse'>
              <div className='md:w-1/2 md:flex md:justify-center md:items-center'>
                <h1 className='text-2xl tracking-wider text-center font-bold text-purple-500 my-2 md:hidden'>Deployment/Hosting</h1>
                <Image src={"/code.jpg"} alt='This is alt text' width={6000} height={4000} className='w-full md:w-[30vw] md:h-[35vh] rounded mt-2' />
              </div>
              <div className='flex items-center md:items-start md:justify-center flex-col md:w-1/2'>
                <h1 className='text-3xl tracking-wider font-bold text-purple-500 my-2 text hidden text-left md:block'>Deployment/Hosting</h1>
                <p className='text-justify mt-2'>Experience hassle-free deployment and hosting services with CodeVerse. Our expert team ensures seamless deployment of your websites and applications, providing reliable and secure hosting solutions. Focus on your core business while we take care of the technicalities, ensuring optimal performance and uptime for your online presence. Trust CodeVerse for effortless deployment and hosting, allowing you to scale and grow your digital footprint with confidence.</p>
                <Link href={'#'} className='border border-purple-500 px-6 py-3 rounded text-purple-500 hover:bg-purple-500 hover:text-white transition ease-linear delay-75 duration-150 mt-4'>
                  <div className='flex justify-center items-center'>
                    Learn more <MdArrowForwardIos className='ml-2' />
                  </div>
                </Link>
              </div>
            </div> */}

            <div className='w-full flex justify-center items-center'>
              <Link
                href="/#hire_us"
                offset={-100}
                className='px-16 border hover:border-purple-500 hover:text-purple-500 text-white hover:bg-transparent bg-purple-500 md:font-semibold md:text-lg py-2 cursor-pointer transition ease-linear rounded delay-75 duration-150 mt-5 '
              >
                <div className='flex justify-center items-center'>
                  Hire us <BsArrowRight className='ml-2 relative '/>
                </div>
              </Link>
            </div>

          </div>

          <div class="flex justify-center mt-10">
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
