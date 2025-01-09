"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import Nav from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import "./laptop.css";

function page() {
    useEffect(() => {
        // Update the document title
        document.title = "2nd Swayamprerak-Anniversary";

        // Update meta description
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "2nd Swayamprerak-Anniversary"
            );
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content =
                "2nd Swayamprerak-Anniversary";
            document.head.appendChild(newMeta);
        }
    }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="youtube">
          <a href="https://www.youtube.com/live/ozMrXyz___A?si=E1N8RlXXLI-RNLHv">
            <Image
              src="/images/swayam-anni-1.jpg"
              alt="invitation"
              width={300}
              height={300}
            />
          </a>
          <p>
            Photos are not available for this event as the meeting was help
            online.
            <br />
            <span>Click on the image to view the meeting</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
