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
        document.title = "Gallery | Tree-Plantation";

        // Update meta description
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Tree Plantation Drive on August 15 at Kanifnath Temple, Pune"
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content =
                "Tree Plantation Drive on August 15 at Kanifnath Temple, Pune";
            document.head.appendChild(newMeta);
        }
    }, []);
    const septActivity = [
        '/images/tree-plant5.jpg',
        '/images/tree-plant1.jpg',
        '/images/tree-plant2.jpg',
        '/images/tree-plant3.jpg',
        '/images/tree-plant4.jpg',
    ];
    return (
        <>
            <Nav />
            <div className="container">
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
                        {septActivity.map((src, index) => (
                            <SwiperSlide key={index}>
                                <Image src={src} width={800} height={600} alt={`Slide ${index + 1}`} className='slider-image' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p className="location">Location: Kanifnath Temple, Pune </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page