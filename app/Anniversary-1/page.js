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
        document.title = "1st Swayamprerak-Anniversary";

        // Update meta description
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Swayamprerak's first anniversary"
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content =
                "Swayamprerak's first anniversary";
            document.head.appendChild(newMeta);
        }
    }, []);

    const septActivity = [
        '/images/swayam-1.jpg',
        '/images/swayam-2.jpg',
        '/images/swayam-3.jpg',
        '/images/swayam-4.jpg',
        '/images/swayam-5.jpg',
        '/images/swayam-6.jpg',
        '/images/swayam-7.jpg',
        '/images/swayam-8.jpg',
        '/images/swayam-9.jpg',
        '/images/swayam-10.jpg',
        '/images/swayam-11.jpg',
    ];
    return (
        <>
            <Nav />
            <div className="container">
                <div className='slider-container'>
                    <p><span>Swayamprerak's First Anniversary</span></p>
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
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page