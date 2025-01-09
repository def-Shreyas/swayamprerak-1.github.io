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
        document.title = "Poornbrahma | September";

        // Update meta description
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Donated a Projector to Assist in a School for Hearing and Speech Impaired Children"
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content =
                "Donated a Projector to Assist in a School for Hearing and Speech Impaired Children";
            document.head.appendChild(newMeta);
        }
    }, []);

    const septActivity = [
        '/images/september-1.jpg',
        '/images/september-2.jpg',
        '/images/september-3.jpg',
    ];
    return (
        <>
            <Nav />
            <div className="container">
                <div className='slider-container'>
                    <p><span>Donated a Projector to Assist in a School for Hearing and Speech Impaired Children.</span></p>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1} // Show only one slide at a time
                        loop={true} // Enable looping
                    >
                        {septActivity.map((src, index) => (
                            <SwiperSlide key={index}>
                                <Image src={src} width={800} height={600} alt={`Slide ${index + 1}`} className='slider-image' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p className="location">Location: Omkar School for Hearing and Speech Impaired, Paithan, District Aurangabad.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page