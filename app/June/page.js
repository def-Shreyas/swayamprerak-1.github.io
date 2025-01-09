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
        document.title = "Poornbrahma | June";

        // Update meta description
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Provision of raincoats for school students in Melghat conducted in the month of June"
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content =
                "Provision of raincoats for school students in Melghat conducted in the month of June";
            document.head.appendChild(newMeta);
        }
    }, []);

    const juneActivity = [
        '/images/june-2.jpg',
        '/images/june-3.jpg',
        '/images/june-1.jpg',
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
            </div>
            <Footer />
        </>
    )
}

export default page