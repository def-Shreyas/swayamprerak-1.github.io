"use client"
import React, {useEffect} from 'react';
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
        document.title = "Poornbrahma | November";

        // Update meta description
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Assistance with wheelchairs and medical beds for the elderly."
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content =
                "Assistance with wheelchairs and medical beds for the elderly.";
            document.head.appendChild(newMeta);
        }
    }, []);

    const septActivity = [
        '/images/november-3.jpg',
        '/images/november-1.jpg',
    ];
    return (
        <>
            <Nav />
            <div className="container">
                <div className='slider-container'>
                    <p><span>Assistance with wheelchairs and medical beds for the elderly.</span></p>
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
                    <p className="location">Location: Prarthana Foundation, Morwanchi, Taluka - Mohol, Solapur.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page