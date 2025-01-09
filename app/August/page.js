"use client"
import React, { useEffect } from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Nav from '@/components/Navbar/page'
import Footer from '@/components/Footer/page'
import './laptop.css'

function page() {
    useEffect(() => {
        // Update the document title
        document.title = "Poornbrahma | August";

        // Update meta description
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Distribution of Sanitary napkin vending machine and disposal machine, as well as distribution of sanitary pads to schoolgirls on August 15"
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content =
                "Distribution of Sanitary napkin vending machine and disposal machine, as well as distribution of sanitary pads to schoolgirls on August 15";
            document.head.appendChild(newMeta);
        }
    }, []);

    const augustActivity = [
        '/images/august-15-1.jpg',
        '/images/august-15-2.jpg',
        '/images/august-15-3.jpg',
        '/images/august-15-4.jpg',
        '/images/august-15-5.jpg',
        '/images/august-15-6.jpg',
        '/images/august-15-7.jpg',
    ];
    return (
        <>
            <Nav />
            <div className="container">
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
    )
}

export default page