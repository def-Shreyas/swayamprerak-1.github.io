"use client";
import React from "react";
import Nav from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import "./laptop.css";

function page() {
  return (
    <>
      <Nav />
      <div className="joinus-container">
        <div className="joinus-img-container">
          <img
            src="/images/partners.png"
            width={350}
            height={350}
            alt="partner"
          />
            <a href="https://chat.whatsapp.com/HvIMXl31Pai6KehgjJ6Zgo" className="a"><button className="btn">Join Us</button></a>
        </div>
        <div className="joinus-info-container">
          <div className="heading-container">
            <h1>Why Join Us ?</h1>
            <div className="info-container">
              <p>
                Joining Swayamprerak means becoming part of a dynamic community
                committed to personal growth and societal betterment. Here’s why
                you should embark on this journey with us:
              </p>
              <ul className="ul-container">
                <li className="li-container">
                  Express & Innovate: Share your ideas, discuss, and implement
                  solutions for real-world challenges.
                </li>
                <li className="li-container">
                  Build Confidence & Skills: Improve your communication,
                  debating, and leadership abilities.
                </li>
                <li className="li-container">
                  Learn & Lead: Gain knowledge, inspire others, and grow as a
                  leader.
                </li>
                <li className="li-container">
                  Collaborate & Host: Work in teams, host events, and boost your
                  public speaking and management skills.
                </li>
                <li className="li-container">
                  Grow Together: Receive valuable feedback and track your
                  progress in a supportive environment.
                </li>
              </ul>
              <p>
                Join us to think, create, and inspire while making a difference
                for yourself and others!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
