import React from "react";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="section footer">
      <PageLinks groupClass="footer-links" itemClass="footer-link" nav_id="" />
      <SocialLinks groupClass="footer-icons" itemClass="footer-icon" />

      {/* <ul className="footer-links">
        <li><a href="#home" className="footer-link">home</a></li>
        <li><a href="#about" className="footer-link">about</a></li>
        <li><a href="#services" className="footer-link">services</a></li>
        <li><a href="#tours" className="footer-link">tours</a></li>
    </ul> */}
      {/* <ul className="footer-icons">
        <li><a href="https://www.instagram.com" className ="footer-icon"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com" className ="footer-icon"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://www.x.com" className ="footer-icon"><i className="fa-brands fa-x-twitter"></i></a></li>
    </ul> */}
      <p className="copyright">
        copyright &copy;<span id="date">{new Date().getFullYear()} </span>
        backroads travel tours company all rights reserved
      </p>
    </footer>
  );
}
