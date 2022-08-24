import React from "react";
import "./testimonials.css";
import AVTR1 from "../assests/client no1.JPG";
import AVTR2 from "../assests/client.jpg";
import AVTR3 from "../assests/client no 32.JPG";
import AVTR4 from "../assests/client no4.jpg";

import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

  const data = [
    {
      avatar: AVTR1,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Aliquet nec ullamcorper sit amet risus nullam eget felis eget",
    },
    {
      avatar: AVTR2,
      name: "Shatta Wale",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Aliquet nec ullamcorper sit amet risus nullam eget felis eget",
    },
    {
      avatar: AVTR3,
      name: "Kwame Despite",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Aliquet nec ullamcorper sit amet risus nullam eget felis eget",
    },
    {
      avatar: AVTR4,
      name: "Nana Ama McBrown",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Aliquet nec ullamcorper sit amet risus nullam eget felis eget",
    },
  ]
  const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       
       >
        {
        data.map(({ avatar, name, review }, index) => {
          return(
            <SwiperSlide  key = {index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar}/>
            </div>
            <h5 className='client__name'> {name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
          ) 
        })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
