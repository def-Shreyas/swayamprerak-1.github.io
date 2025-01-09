"use client";
import React, { useEffect } from "react";
import Nav from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import "./laptop.css";

function Page() {
  useEffect(() => {
    // Update the document title
    document.title = "Members";

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", "Swayamprerak's members");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Swayamprerak's members";
      document.head.appendChild(newMeta);
    }
  }, []);
  return (
    <>
      <Nav />
      <div className="container">
        <div className="member-container">
          <div className="member-image">
            <Image
              src="/images/sagardada.jpg"
              alt="sagar-dada"
              width={340}
              height={400}
            />
          </div>
          <div className="member-details">
            <p>Sagar Dani</p>
            <span>Founder & President</span>
            <br />
            Owner of Gurumouli Enterprises, Parivartan Consultancy, and
            President of Entrueprenuer International of Pimpri-Chinchwad branch.
            <br />
          </div>
        </div>

        <div className="member-container">
          <div className="member-image">
            <Image
              src="/images/jayashree-mam.jpg"
              alt="Jayashree Mohite"
              width={340}
              height={400}
            />
          </div>
          <div className="member-details">
            <p>Jayashree Mohite</p>
            <span>Vice-President</span>
            <br />
            Working as assisant professor lecturer at CES's Dr. A.B.Telang
            Senior college of Arts, Science and Commerce Nigdi
            <br />
          </div>
        </div>

        <div className="member-container">
          <div className="member-image">
            <Image
              src="/images/sonali-mam.jpg"
              alt="Sonali Deshmukh"
              width={340}
              height={400}
            />
          </div>
          <div className="member-details">
            <p>Prof. Sonali Deshmukh</p>
            <span>Secretary</span>
            <br />
            Working as lecturer at VPS College Lonavla. Founding member
            of Swayamprerak.
            <br />
          </div>
        </div>

        <div className="member-container">
          <div className="member-image">
            <Image
              src="/images/sarvesh.jpg"
              alt="Sarvesh Bendre"
              width={390}
              height={400}
            />
          </div>
          <div className="member-details">
            <p>Sarvesh Bendre</p>
            <span>Program Officer</span>
            <br />
            Founder and CEO of OScube, leading the vision and strategy to
            deliver innovative, user-centric solutions that empower businesses
            and drive digital transformation.
            <br />
          </div>
        </div>

        <div className="member-container">
          <div className="member-image">
            <Image
              src="/images/mayuri-s.jpg"
              alt="Mayuri S."
              width={390}
              height={400}
            />
          </div>
          <div className="member-details">
            <p>Mayuri Sonavane</p>
            <span>Advisory Board</span>
            <br />
            Mayuri has experience of working as a Business Analyst in IT
            industry since last 9+ years. She has worked with the services
            clients across the globe and have consulted them to improve, enhance
            and grow with their products. She has active involvements in
            Swayamprerak activities. Apart from this she enjoys painting,
            sketching and writing poems. Her poem based on Swayamprerak theme
            has been acknowledged by the Swayamprerak team members.
            <br />
          </div>
        </div>

        <div className="member-container">
          <div className="member-image">
            <Image
              src="/images/rameshwar-dada.jpg"
              alt="Rameshwar Nalawade"
              width={390}
              height={400}
            />
          </div>
          <div className="member-details">
            <p>Rameshwar Nalawade</p>
            <span>Advisory Board</span>
            <br />
            Working as Software Engineer specializing in .NET Development
            <br />
          </div>
        </div>

        <div className="member-container">
          <div className="member-image">
            <Image
              src="/images/pratik-sir.jpg"
              alt="Pratik Anjalenkar"
              width={390}
              height={400}
            />
          </div>
          <div className="member-details">
            <p>Pratik Anjalenkar</p>
            <span>Treasurer</span>
            <br />
            I am a CA Final student and currently pursuing my CA Industrial
            Training at Mahindra & Mahindra Financial Services Limited, Mumbai ,
            in the Finance function, specializing in Accounts and Tax.
            <br />
          </div>
        </div>

        <div className="member-container">
          <div className="member-image">
            <Image
              src="/images/dhanashree-mam.jpg"
              alt="Dhanashree Patil"
              width={340}
              height={400}
            />
          </div>
          <div className="member-details">
            <p>Dhanashree Patil</p>
            <span>Project Manager</span>
            <br />
            Working as Network Security Engineer at Aisan Infotel Private
            Limited
            <br />
          </div>
        </div>

        <div className="member-container">
          <div className="member-image">
            <Image
              src="/images/devyani-mam.png"
              alt="Devyani Bhosale"
              width={340}
              height={400}
            />
          </div>
          <div className="member-details">
            <p>Devyani Bhosale</p>
            <span>Volunteer Co-ordinator</span>
            <br />
            A dedicated dental student with a strong commitment to utilizing her knowledge and skills to contribute to positive social change.
            <br />
          </div>
        </div>

        <div className="member-container">
          <div className="member-image">
            <Image
              src="/images/aum-sir.jpg"
              alt="Devyani Bhosale"
              width={340}
              height={400}
            />
          </div>
          <div className="member-details">
            <p>Aum Patil</p>
            <span>PR Officer</span>
            <br />
            A dedicated software engineering student with a passion for
            transforming innovative ideas into functional, impactful solutions
            that enhance everyday life.
            <br />
          </div>
        </div>

        <div className="member-container">
          <div className="member-image">
            <Image
              src="/images/gurudeep.png"
              alt="Gurudeep Khairnar"
              width={340}
              height={400}
            />
          </div>
          <div className="member-details">
            <p>Gurudeep Khairnar</p>
            <span>Field Officer</span>
            <br />
            Student of BDS final year
            <br />
          </div>
        </div>

        <div className="member-container">
          <div className="member-image">
            <Image
              src="/images/shreyas-1.jpg"
              alt="shreyas"
              width={340}
              height={400}
            />
          </div>
          <div className="member-details">
            <p>Shreyas Moolya</p>
            <span>Asst. Program Officer</span>
            <br />
            Founder and Managing Director of OScube, driving innovation and
            delivering cutting-edge solutions to empower businesses.
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
