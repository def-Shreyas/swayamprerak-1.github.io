"use client";
import React, {useEffect} from "react";
import Nav from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import Gallery from "@/components/Gallery/page";
import Image from "next/image";
import Link from 'next/link';
import "./laptop.css";

function page() {
  useEffect(() => {
    // Update the document title
    document.title = "Home";

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

          {/* Introduction */}
          <div className="intro">
          <h1><span>Welcome To <span className = "sagariya">Sagariya Foundation</span> driven</span><br /> Swayamprerak</h1>
            <p>
              Swayamprerak - School of Inspiration is an NGO by the youth, for the youth, dedicated to empowering young minds to discover their
              potential and contribute meaningfully to society. We provide a platform for youth to build self-confidence, express their thoughts, and
            develop leadership skills through diverse activities such as the <span className="activities">Reader’s Club</span>, fostering a love for reading and critical thinking; <span className="activities">Debates</span>,
            encouraging analytical thinking and public speaking; <span className="activities">Bhagavad Gita sessions</span>, imparting timeless wisdom for clarity and purpose; and
            <span className="activities"> donations to schools and community groups, supporting underprivileged sections of society</span>. Guided by the inspiring philosophies of
              Chhatrapati Shivaji Maharaj, symbolizing courage and visionary leadership, and Swami Vivekananda, embodying self-belief and ethical
              excellence, we aim to create a generation of confident, value-driven individuals. At Swayamprerak, we are more than an NGO; we are a
              movement to inspire and enable the youth to lead purposeful lives while shaping a better tomorrow.
            </p>
          </div>

        <div className="idols-container">
          {/* Our Idols */}
          <h1>Our Idols</h1>
          <div className="idols">
            <Image
              src="/images/shivaji_maharaj.jpeg"
              alt="shivaji maharaj"
              width={300}
              height={300}
            />
            <Image
              src="/images/swamiji.jpeg"
              alt="swami"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="president-container">
          <Link href="/Members"><h1>Meet our Founder</h1></Link>
          <div className="president">
            <Link href="/Members"><Image src="/images/sagardada.jpg" alt="president" width={300} height={390} /></Link>
            <div className="member-details">
              <Link href="/Members">
                <p>Sagar Dani</p>
                <span>Founder & Entrepreneur</span></Link>
              <br />
              Owner of Gurumouli Enterprises, Parivartan Consultancy, and
              President of Entrueprenuer International of Pimpri-Chinchwad branch.
            </div>
          </div>
        </div>

        {/* Our motto */}
        <div className="motto">
          <h1>Our Motto</h1>
          <p>All power is within you.</p>
          <p>You can do anything and everything.</p>
        </div>

        {/* Our Vision */}
        <div className="motto">
          <h1>Our Vision</h1>
          <p>
            To inspire Youth and strengthen
            them Physically, Mentally, Emotionally & Spiritually by sharing knowledge.
          </p>
        </div>

        <div className="mission-container">
          <h1>Our Mission</h1>
          <div className="missions">
            <p className="mission">
              1.To provide them with proper guidance for better studies.
            </p>
            <p className="mission">
              2.To organize various programs to uplift the Mental, Emotional and
              Spiritual condition of today’s youth by guiding them to fulfil
              their dreams.
            </p>
            <p className="mission">
              3.To strive to provide the resources needed to build strong youth
              and to create a nurturing environment for them.
            </p>
          </div>
        </div>
        <div className="gallery">
          <Gallery />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
