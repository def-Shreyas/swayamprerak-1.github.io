import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import './laptop.css'
import './mobile.css'

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.instagram.com/swayam.prerak?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><Image src="/images/instagram.png" alt="Instagram" width={40} height={40} /></a>
        <a href="https://www.linkedin.com/in/swayamprerak-school-of-inspiration-38a990345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><Image src="/images/linkedin (1).png" alt="LinkedIn" width={40} height={40} /></a>
        {/* <a href="https://chat.whatsapp.com/HvIMXl31Pai6KehgjJ6Zgo"><Image src="/images/whatsapp.png" alt="Whatsapp" width={40} height={40} /></a> */}
        <a href="https://www.youtube.com/@swayamprerak1805"><Image src="/images/youtube.png" alt="YouTube" width={40} height={40} /></a>
      </div>
      <nav className="footer-nav">
        <Link href="/">Home</Link>
        <Link href="/Collaborate">Collaborate</Link>
        <Link href="/About">About Us</Link>
        <Link href="/Gallery">Gallery</Link>
        <Link href="/Members">Our Team</Link>
      </nav>
      <div className="footer-credits">
        <a href= "https://www.instagram.com/oscube_14?igsh=dXI3emtuNDh3Z3l1"><p>Copyright &copy;2024, Designed by OScube</p></a>
      </div>
    </footer>
  );
}

export default Footer;
