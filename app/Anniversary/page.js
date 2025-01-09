"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import "./laptop.css";

function page() {
    useEffect(() => {
        // Update the document title
        document.title = "Gallery | Swayamprerak-Anniversary";

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
                <div className="album-container">
                    <div className="album">
                        <Link href="/Gallery/Swayamprerak-Anniversary/First-Anniversary">
                            <Image
                                src="/images/IMG-20240925-WA0028.jpg"
                                alt="poornbrahma"
                                width={300}
                                height={250}
                            />
                            <p>Swayamprerak 1st Anniversary</p>
                        </Link>
                    </div>
                    <div className="album">
                        <Link href="/Gallery/Swayamprerak-Anniversary/Second-Anniversary">
                            <Image
                                src="/images/swayam-anni-1.jpg"
                                alt="poornbrahma"
                                width={300}
                                height={250}
                            />
                            <p>Swayamprerak 2ndAnniversary</p>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default page;
