import React, { useEffect } from "react";
import "./laptop.css";
import "./tablet.css";
import "./large-mobile.css";
import "./medium-mobile.css";
import "./small-mobile.css";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Page = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true }); // Pause the timeline initially
    const menu = document.querySelector(".hamburger");
    const close = document.querySelector(".cross");

    tl.to(".menubar", {
      right: 0,
      opacity: 1,
    }).from(".menubar-items", {
      x: 30,
      stagger: 0.08,
      opacity: 0,
    });

    menu.addEventListener("click", () => {
      tl.play(); // Play the entire timeline
    });

    close.addEventListener("click", () => {
      tl.reverse(); // Reverse the timeline when closing
    });
  });

  useEffect(() => {
    const items = document.querySelectorAll(".nav-items a");

    items.forEach((item) => {
      item.addEventListener("click", () => {
        item.style.color = "black"; // Change color to black when clicked
      });
    });
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="leftNav">
          <div className="logo">
            <Image src="/images/new-logo.png" width={80} height={80} alt="logo" />
          </div>
        </div>
        <div className="laptopNav">
          <div className="nav-items">
            <Link href="/">Home</Link>
          </div>
          <div className="nav-items">
            <Link href="/Members">Members</Link>
          </div>
          <div className="nav-items">
            <Link href="/Gallery">Gallery</Link>
          </div>
          <div className="nav-items">
            <Link href="/Collaborate">Collaborate</Link>
          </div>
          <div className="nav-items">
            <Link href="/Activity" aria-selected="true">
              Activities
            </Link>
          </div>
          <div className="nav-items">
            <Link href="/About">About Us</Link>
          </div>
        </div>
        <div className="txt">
          <p>स्वयमपरेरक </p>
        </div>
        <div className="hamburger">
          <Image
            src="/images/hamburger(1).png"
            width={30}
            height={30}
            alt="Menu"
          />
        </div>
      </div>
      <div className="menubar">
        <div className="cross">
          <Image src="/images/cross.png" width={30} height={30} alt="Cancel" />
        </div>
        <div className="menubar-items">
          <Link href="/">Home</Link>
        </div>
        <div className="menubar-items">
          <Link href="/Members">Members</Link>
        </div>
        <div className="menubar-items">
          <Link href="/Gallery">Gallery</Link>
        </div>
        <div className="menubar-items">
          <Link href="/Collaborate">Collaborate</Link>
        </div>
        <div className="menubar-items">
          <Link href="/Activity">Activities</Link>
        </div>
        <div className="menubar-items">
          <Link href="/About">About Us</Link>
        </div>
      </div>
    </>
  );
};

export default Page;
