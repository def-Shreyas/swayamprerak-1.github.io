"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import "./laptop.css";

function page() {
  useEffect(() => {
    // Update the document title
    document.title = "Gallery | Poornbrahma";

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Swayamprerak is an NGO by the youth, for the youth, empowering young minds."
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content =
        "Swayamprerak is an NGO by the youth, for the youth, empowering young minds.";
      document.head.appendChild(newMeta);
    }
  }, []);
  return (
    <>
      <Nav />
      <div className="container">
        <div className="events-container">
          <div className="events">
            <div className="event">
              <Link href= "/Gallery/Poornbrahma/May">
                <Image
                  src="/images/may-1.jpg"
                  alt="june-month"
                  width={350}
                  height={300}
                />
                <p>May 2024</p>
              </Link>
            </div>
          </div>
          <div className="events">
            <div className="event">
              <Link href= "/Gallery/Poornbrahma/June">
              <Image
                src="/images/june-2.jpg"
                alt="june-month"
                width={350}
                height={300}
              />
              <p>June 2024</p>
              </Link>
            </div>
          </div>
          <div className="events">
            <div className="event">
              <Link href="/Gallery/Poornbrahma/July">
              <Image
                src="/images/july-2.jpg"
                alt="june-month"
                width={350}
                height={300}
              />
              <p>July 2024</p>
              </Link>
            </div>
          </div>
          <div className="events">
            <div className="event">
              <Link href="/Gallery/Poornbrahma/August">
              <Image
                src="/images/august-15-1.jpg"
                alt="june-month"
                width={350}
                height={300}
              />
              <p>August 2024</p>
              </Link>
            </div>
          </div>
          <div className="events">
            <div className="event">
              <Link href="/Gallery/Poornbrahma/September">
              <Image
                src="/images/september-1.jpg"
                alt="june-month"
                width={350}
                height={300}
              />
              <p>September 2024</p>
              </Link>
            </div>
          </div>
          <div className="events">
            <div className="event">
              <Link href="/Gallery/Poornbrahma/October">
              <Image
                src="/images/october-1.jpg"
                alt="june-month"
                width={350}
                height={300}
              />
              <p>October 2024</p>
              </Link>
            </div>
          </div>
          <div className="events">
            <div className="event">
              <Link href="/Gallery/Poornbrahma/November">
              <Image
                src="/images/november-3.jpg"
                alt="june-month"
                width={350}
                height={300}
              />
              <p>November 2024</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
