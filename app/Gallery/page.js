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
    document.title = "Gallery";

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Gallery"
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content =
        "Gallery";
      document.head.appendChild(newMeta);
    }
  }, []);
  return (
    <>
      <Nav />
      <div className="container">
        <div className="album-container">
          <div className="album">
            <Link href="/Gallery/Poornbrahma">
              <Image
                src="/images/july-2.jpg"
                alt="poornbrahma"
                width={300}
                height={250}
              />
              <p>पूर्णब्रह्म</p>
            </Link>
          </div>
          <div className="album">
            <Link href= "/Gallery/Swayamprerak-Anniversary">
            <Image
              src="/images/IMG-20240925-WA0028.jpg"
              alt="poornbrahma"
              width={300}
              height={250}
            />
            <p>स्वयंप्रेरक वर्धापनदिन</p>
            </Link>
          </div>
          <div className="album">
            <Link href="/Gallery/Tree-plantation">
            <Image
              src="/images/tree-plant5.jpg"
              alt="poornbrahma"
              width={300}
              height={250}
            />
            <p>वृक्ष लागवड</p>
            </Link>
          </div>
          {/* <div className="album">
            <Image src="/images/july-2.jpg" alt="poornbrahma" width={300} height={250} />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
