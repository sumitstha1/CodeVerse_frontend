import React from 'react'
import { GiFizzingFlask, GiEarthAsiaOceania } from 'react-icons/gi';
import { IoAnalytics } from 'react-icons/io5';
import { BsCode } from 'react-icons/bs';
import { BiRevision, BiSupport } from 'react-icons/bi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const OurWorkingModule = () => {
  return (
    <section class="text-gray-600 body-font">
      <h1 className='text-center sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900'>Our <span className='text-purple-500'>Working Module</span></h1>
      <div class="container px-5 py-16 mx-auto flex flex-wrap">
        <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">1</div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg> */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-12 h-12'>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 6C10.4919 6 4 12.4919 4 20.5C4 38.5 28 42 28 42V35H29.5C37.5081 35 44 28.5081 44 20.5C44 12.4919 37.5081 6 29.5 6H18.5ZM24 23.5C25.3807 23.5 26.5 22.3807 26.5 21C26.5 19.6193 25.3807 18.5 24 18.5C22.6193 18.5 21.5 19.6193 21.5 21C21.5 22.3807 22.6193 23.5 24 23.5ZM34.5 21C34.5 22.3807 33.3807 23.5 32 23.5C30.6193 23.5 29.5 22.3807 29.5 21C29.5 19.6193 30.6193 18.5 32 18.5C33.3807 18.5 34.5 19.6193 34.5 21ZM16 23.5C17.3807 23.5 18.5 22.3807 18.5 21C18.5 19.6193 17.3807 18.5 16 18.5C14.6193 18.5 13.5 19.6193 13.5 21C13.5 22.3807 14.6193 23.5 16 23.5Z" fill="#A855F7"/>
              </svg>  
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Initial Consultation</h2>
              <p class="leading-relaxed">We begin by scheduling an initial consultation with you to understand your requirements, goals, and vision for your project.</p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">2</div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg> */}
              <IoAnalytics className='w-12 h-12' />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Requirement Analysis</h2>
              <p class="leading-relaxed">Our team of experts conducts a thorough analysis of your requirements, taking into consideration factors such as target audience, functionality, design preferences, and technical specifications.</p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">3</div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg> */}
              <BsCode className='w-12 h-12'/>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Design and Development</h2>
              <p class="leading-relaxed">Our talented design and development team works closely with you to create a visually appealing and functional solution.</p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">4</div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg> */}
              <GiFizzingFlask className='w-12 h-12' />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Testing</h2>
              <p class="leading-relaxed">We conduct rigorous testing procedures to identify and resolve any issues or bugs.</p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">5</div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg> */}
              <BiRevision className='w-12 h-12' />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Client Review and Revisions</h2>
              <p class="leading-relaxed">We value your feedback and encourage you to review the work-in-progress at various stages. </p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">6</div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg> */}
              <HiOutlineRocketLaunch className="w-12 h-12"/>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Deployment and Launch</h2>
              <p class="leading-relaxed">Once all the development and revisions are complete, we proceed with the deployment and launch of your project.</p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">7</div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg> */}
              <BiSupport className='w-12 h-12' />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Ongoing Support and Maintenance</h2>
              <p class="leading-relaxed">Our commitment to your success extends beyond the launch. We offer ongoing support and maintenance services to address any issues, provide updates, and ensure the optimal performance and security of your solution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWorkingModule
