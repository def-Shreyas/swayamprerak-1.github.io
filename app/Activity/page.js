'use client'
import React, {useEffect} from 'react'
import Image from 'next/image'
import Nav from '@/components/Navbar/page'
import Footer from '@/components/Footer/page'
import './laptop.css'

function Page() {
  useEffect(() => {
    // Update the document title
    document.title = "Activities";

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
        <div className="activity-container">
          <div className="activity-img-container">
            <div className="activity-img">
              <Image src="/images/bhagwad-geeta.png" width={500} height={350} alt="Bhagavad-gita"/>
            </div>
            <div className="activity-name">
              <h2>प्रवास गीतेचा - शोध स्वतःचा</h2>
            </div>
          </div>
          <div className="activity-des">
            <p>The Bhagavad Gita, a sacred Hindu scripture, holds profound importance in guiding human life. It imparts timeless wisdom on duty. righteousness, and the pursuit of self-realization. Serving as a spiritual guide, it teaches resilience, ethical conduct, and the art of balancing ones duties in the complex tapestry of existence, fostering inner harmony.</p>
          </div>
        </div>

        <div className="activity-container">
          <div className="activity-img-container">
            <div className="activity-img">
              <Image src="/images/vachak.jpg" width={500} height={350} alt="Bhagavad-gita" />
            </div>
            <div className="activity-name">
              <h2>वाचक कट्टा</h2>
            </div>
          </div>
          <div className="activity-des">
            <p>Reading is a gateway to knowledge, fostering intellectual growth and empathy. Joining a readers club enhances this experience by creating a community where diverse perspectives converge. Such clubs promote discussion, critical thinking. and a shared appreciation for literature, fostering a sense of camaraderie and expanding horizons in our journey of lifelong learning.</p>
          </div>
        </div>

        <div className="activity-container">
          <div className="activity-img-container">
            <div className="activity-img">
              <Image src="/images/vaad.jpg" width={500} height={350} alt="Bhagavad-gita" />
            </div>
            <div className="activity-name">
              <h2>वाद - संवाद</h2>
            </div>
          </div>
          <div className="activity-des">
            <p>
              Debate and staying informed about current affairs are vital components of an engaged and informed society. They cultivate critical thinking, enhance communication skills, and foster a deeper understanding of global issues. In an ever-
              changing world, being well- versed in current affairs empowers individuals to make informed decisions, shaping a more knowledgeable and aware community.
            </p>
          </div>
        </div>

        <div className="activity-container">
          <div className="activity-img-container">
            <div className="activity-img">
              <Image src="/images/poornabrahma.jpg" width={500} height={350} alt="Bhagavad-gita" />
            </div>
            <div className="activity-name">
            <h2>पूर्णब्रह्म</h2>
            </div>
          </div>
          <div className="activity-des">
          <p><span class = "swayam">Swayamprerak</span> actively engages its members in a collective effort to support the underprivileged by collecting a minimum contribution of 100 rupees from each member. These funds are utilized to purchase valuable items such as food, clothing, or educational materials, which are then donated to those in need. This initiative fosters a sense of unity and compassion among members while making a meaningful impact on the lives of the less fortunate.</p>
          </div>
        </div>

      <div className="activity-container">
        <div className="activity-img-container">
          <div className="activity-img">
            <Image src="/images/shiv-charitr.png" width={500} height={350} alt="Bhagavad-gita" />
          </div>
          <div className="activity-name">
            <h2>शिवआख्यान</h2>
          </div>
        </div>
        <div className="activity-des">
          <p>
            <span className="swayam">Swayamprerak</span> organized an inspiring session on the life and legacy of Chhatrapati Shivaji Maharaj, one of India’s greatest warrior kings. The session highlighted his visionary leadership, administrative prowess, and dedication to justice and equality. It aimed to instill a sense of pride, patriotism, and ethical values among participants, drawing lessons from his remarkable journey to empower and unite communities.
          </p>
        </div>
      </div>

      <div className="activity-container">
        <div className="activity-img-container">
          <div className="activity-img">
            <Image src="/images/tree.jpg" width={500} height={350} alt="Bhagavad-gita" />
          </div>
          <div className="activity-name">
            <h2>वृक्ष लागवड</h2>
          </div>
        </div>
        <div className="activity-des">
          <p>
            Tree plantation is one of the core initiatives undertaken by <span className = "swayam">Swayamprerak</span>, reflecting its commitment to environmental sustainability. Through extensive tree-planting drives, the organization has contributed to combating climate change, improving air quality, and fostering biodiversity. By involving local communities and volunteers, the NGO not only plants trees but also nurtures a sense of environmental responsibility, ensuring a greener, healthier future for generations to come.
          </p>
        </div>
      </div>
        <Footer />
    </>
  )
}

export default Page