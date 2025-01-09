"use client";
import React, { useEffect } from "react";
import Nav from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import "./aboutus.css";
import Image from "next/image";

function Page() {
  useEffect(() => {
    // Update the document title
    document.title = "About Us";

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "About Swayamprerak"
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content =
        "About Swayamprerak";
      document.head.appendChild(newMeta);
    }
  }, []);
  return (
    <>
      <Nav />
      <div className="container-1">
        <div className="container-merged">
          <div className="block">
            <div className="img-1">
              <Image
                src="/images/spplat.jpg"
                width={200}
                height={100}
                alt="abc"
              />
            </div>
            <h3 className="cn-title">Platform</h3>
            <p className="cn-para">
              We provide a platform to every individual to express their views
              on the aspects.Discuss,motivate & Implement.
            </p>
          </div>
          <div className="block">
            <div className="img-1">
              <Image
                src="/images/spdes.png"
                width={200}
                height={100}
                alt="def"
              />
            </div>
            <h3 className="cn-title">Design</h3>
            <p className="cn-para">
              We motivate our members to design new things for the betterment of
              mankind and help them to work on it.Think,Innovate & Create.
            </p>
          </div>
          <div className="block">
            <div className="img-1">
              <Image
                src="/images/spttp.jpg"
                width={200}
                height={100}
                alt="ghi"
              />
            </div>
            <h3 className="cn-title">Task To Perform</h3>
            <p className="cn-para">
              We do give certain task to perform which enables members to
              think,innovate and to believe in themselves.
            </p>
          </div>
          <div className="block">
            <div className="img-1">
              <Image
                src="/images/sphe.jpg"
                width={200}
                height={100}
                alt="jkl"
              />
            </div>
            <h3 className="c3-title">Hosting Events</h3>
            <p className="c3-para">
              We give an equal opportunity to every member to host events which
              boost their confidence and improves their communication skills.
            </p>
          </div>
          <div className="block">
            <div className="img-1">
              <Image
                src="/images/spadmin.png"
                width={200}
                height={100}
                alt="mno"
              />
            </div>
            <h3 className="c3-title">Administration</h3>
            <p className="c3-para">
              We do have a proper administering team which overlook on every
              indiviual's personal progress with team progress.
            </p>
          </div>
          <div className="block">
            <div className="img-1">
              <Image
                src="/images/spcomp.jpeg"
                width={200}
                height={100}
                alt="pqr"
              />
            </div>
            <h3 className="c3-title">Company</h3>
            <p className="c3-para">
              As team we help each other to upgrade by giving valuable feedbacks
              which upgrades the organization.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Page;
