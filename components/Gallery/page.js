"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './laptop.css';

function Page() {
    const images = [
        '/images/swayam-1.jpg',
        '/images/swayam-2.jpg',
        '/images/swayam-3.jpg',
        '/images/swayam-3.jpg',
        '/images/swayam-4.jpg',
        '/images/swayam-5.jpg',
        '/images/swayam-6.jpg',
        '/images/swayam-7.jpg',
        '/images/swayam-8.jpg',
        '/images/swayam-9.jpg',
        '/images/swayam-10.jpg',
        '/images/swayam-11.jpg',
        '/images/swayam-12.jpg',
        '/images/swayam-13.jpg',
        '/images/IMG-20240925-WA0045.jpg',
        '/images/IMG-20240925-WA0054.jpg',
        '/images/IMG-20240925-WA0031.jpg',
        '/images/IMG-20240925-WA0033.jpg',
        '/images/IMG-20240925-WA0034.jpg',
        '/images/IMG-20240925-WA0036.jpg',
        '/images/IMG-20240925-WA0037.jpg',
        '/images/IMG-20240925-WA0015.jpg',
        '/images/IMG-20240925-WA0018.jpg',
        '/images/IMG-20240925-WA0019.jpg',
    ];
    return (
        <>
                <div className='slider-container'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1} // Show only one slide at a time
                        loop={true} // Enable looping
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <Image src={src} width={800} height={600} alt={`Slide ${index + 1}`} className='slider-image' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
        </>
    );
}

export default Page;
