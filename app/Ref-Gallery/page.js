"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Nav from '@/components/Navbar/page';
import Footer from '@/components/Footer/page';
import './laptop.css';

function Page() {
  const juneActivity = [
    '/images/june-1.jpg',
    '/images/june-2.jpg',
    '/images/june-3.jpg',
  ];

  const julyActivity = [
    '/images/july-1.jpg',
    '/images/july-2.jpg',
    // '/images/july-3.jpg',
  ]

  const treePlantation = [
    '/images/tree-plant5.jpg',
   '/images/tree-plant1.jpg',
    '/images/tree-plant2.jpg',
    '/images/tree-plant3.jpg',
    '/images/tree-plant4.jpg',
  ];
  const augustActivity = [
    '/images/august-15-1.jpg',
    '/images/august-15-2.jpg',
    '/images/august-15-3.jpg',
  ];
  return (
    <>
      <Nav />
      <div className="container">
        <div className='slider-container'>
          <p><span>Provision of raincoats for school students in Melghat.</span></p>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1} // Show only one slide at a time
            loop={true} // Enable looping
          >
            {juneActivity.map((src, index) => (
              <SwiperSlide key={index}>
                <Image src={src} width={800} height={600} alt={`Slide ${index + 1}`} className='slider-image' />
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="location">Location: Zilla Parishad School, Khirpani, Chikhaldara (Melghat), District - Amravati.</p>
        </div>

        <div className='slider-container'>
          <p><span>Provision of raincoats for school students in Melghat.</span></p>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1} // Show only one slide at a time
            loop={true} // Enable looping
          >
            {julyActivity.map((src, index) => (
              <SwiperSlide key={index}>
                <Image src={src} width={800} height={600} alt={`Slide ${index + 1}`} className='slider-image' />
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="location">Location: Zilla Parishad School, Khirpani, Chikhaldara (Melghat), District - Amravati.</p>
        </div>

        <div className='slider-container'>
          <p><span>Tree Plantation Drive</span> on August 15</p>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1} // Show only one slide at a time
            loop={true} // Enable looping
          >
            {treePlantation.map((src, index) => (
              <SwiperSlide key={index}>
                <Image src={src} width={800} height={600} alt={`Slide ${index + 1}`} className='slider-image' />
              </SwiperSlide>
            ))}
          </Swiper>
          <p className = "location">Location: Kanifnath Temple, Pune</p>
        </div>

        <div className='slider-container'>
          <p>Distribution of <span>Sanitary napkin vending machine and disposal machine</span>, as well as distribution of<span> sanitary pads to schoolgirls</span> on August 15</p>
          <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1} // Show only one slide at a time
          loop={true} // Enable looping
          >
          {augustActivity.map((src, index) => (
            <SwiperSlide key={index}>
            <Image src={src} width={800} height={600} alt={`Slide ${index + 1}`} className='slider-image' />
            </SwiperSlide>
          ))}
          </Swiper>
          <p className="location">Location: Wakeshwar Vidyalaya and Junior College, Peth, Taluka - Ambegaon, District - Pune.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
