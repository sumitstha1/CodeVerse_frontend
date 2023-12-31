import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const TestomonialSection = ({ testomonials }) => {

  

  return (
    <div className=" w-50 px-4 bg-gray-100 py-10" data-aos="zoom-in">
      <h3 className="text-center text-gray-900 text-xl">Testimonials</h3>
      <h3 className="text-center text-purple-500 text-4xl font-bold">
        What Our Clients Say
      </h3>
      <div className="px-8 ">
        <Testomonial testomonials={testomonials} />
      </div>
    </div>
  );
};
const TestomonialCard = ({ name, detail, profile, company }) => {
  return (
    <>
      <div className="overflow-hidden my-9 border-2 shadow-sm rounded-md p-3 bg-white">
        <div className="flex justify-between">
          <div className="flex">
            <Image width="100" height="100" src={profile} alt="profile" />
            <div className="px-2">
              <h3 className="text-black font-bold">{company}</h3>
              <h4>{name}</h4>
            </div>
          </div>
        </div>
        <div className="md:h-14">
          <p className="w-full">{detail}</p>
        </div>
      </div>
    </>
  );
};


const Testomonial = () => {
    const testimonials = [
        {
          id: 1,
          name: 'John Doe',
          role: 'CEO',
          image: 'https://source.unsplash.com/100x100/?man,boy',
          content: 'Tailblocks provides the best Tailwind CSS components and blocks to create unique websites within minutes. It has greatly improved our front-end web development process.',
        },
        {
          id: 2,
          name: 'Hari Prashad',
          role: 'HR Manager',
          image: 'https://source.unsplash.com/100x100/?boy',
          content: "I'm impressed with the range of Tailwind CSS components offepurple by Tailblocks. It has made building beautiful websites so much easier and efficient.",
        },
        {
          id: 3,
          name: 'Sita Kumari',
          role: 'SEO Executive',
          image: 'https://source.unsplash.com/100x100/?girl',
          content: "I'm impressed with the range of Tailwind CSS components offepurple by Tailblocks. It has made building beautiful websites so much easier and efficient.",
        },
        {
          id: 4,
          name: 'Gita Maya',
          role: 'Manager',
          image: 'https://source.unsplash.com/100x100/?girl',
          content: "I'm impressed with the range of Tailwind CSS components offepurple by Tailblocks. It has made building beautiful websites so much easier and efficient.",
        },
        // Add more testimonial objects as needed
      ];

      const settings = {
        dots: true, // Show pagination dots
        infinite: true, // Enable infinite looping
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 2, // Number of testimonials to show at once
        slidesToScroll: 1, // Number of testimonials to scroll at once
        autoplay: true, // Enable autoplay
        autoplaySpeed: 5000, // Autoplay delay in milliseconds
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1, // Show 1 testimonial on smaller screens
              dots: false,
              arrows: false
            },
          },
        ],
      };


  return (
    <Slider {...settings}>
      {testimonials.map((t) => {
        return (
          <SwiperSlide key={t.id}>
            <TestomonialCard
              key={t.id}
              name={t.name}
              detail={t.content}
              profile={t.image}
              company={t.role}
            />
          </SwiperSlide>
          // <SwiperSlide key={t.id}>
          //   <TestomonialCard
          //     key={t.id}
          //     name={t.name}
          //     detail={t.detail}
          //     profile={t.profile}
          //     company={t.company}
          //   />
          // </SwiperSlide>
        );
      })}
    </Slider>
  );
};





export default TestomonialSection;
