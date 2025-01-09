"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Nav from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import "./laptop.css";

function page() {
  useEffect(() => {
    // Update the document title
    document.title = "Poornbrahma | May";

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Poornbrahma events held in the month of May where we provided nests for birds and provided water to birds"
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content =
        "Swayamprerak is an NGO by the youth, for the youth, empowering young minds.";
      document.head.appendChild(newMeta);
    }
  }, []);

  const mayActivity = [
    "/images/may-1.jpg",
    "/images/may-2.jpg",
    "/images/may-3.jpg",
  ];
  return (
    <>
      <Nav />
      <div className="container">
        <div className="slider-container">
          <p>Arrangement of water for birds and nests for sparrows.</p>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1} // Show only one slide at a time
            loop={true} // Enable looping
          >
            {mayActivity.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  width={800}
                  height={600}
                  alt={`Slide ${index + 1}`}
                  className="slider-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
