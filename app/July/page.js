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
        document.title = "Poornbrahma | July";

        // Update meta description
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Services for Warkaris heading to Pandharpur include a Mridang, five cymbals, shawls, caps, and offered massage using foot massage machines, and copper plate machines"
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content =
                "Services for Warkaris heading to Pandharpur include a Mridang, five cymbals, shawls, caps, and offered massage using foot massage machines, and copper plate machines";
            document.head.appendChild(newMeta);
        }
    }, []);
    const julyActivity = [
        '/images/july-1.jpg',
        '/images/july-2.jpg',
        '/images/july-3.jpg',
        '/images/july-4.jpg',
    ];
    return (
        <>
            <Nav />
            <div className="container">
                <div className='slider-container'>
                    <p>Services for Warkaris heading to Pandharpur include a <span>Mridang, five cymbals, shawls, caps, and offered massage using foot massage machines, and copper plate machines</span></p>
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
                    <p className = "location">Location: Saswad, Pune</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page