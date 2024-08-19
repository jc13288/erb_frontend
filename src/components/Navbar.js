import React from "react";
// import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
//import logo from "../logo.svg";
import logo from "../images/reshot-icon-mill.svg";
import { useState } from "react";

export default function Navbar() {
  const [isToggled, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggled);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="index.html" className="nav-logo">
            <img src={logo} alt="logo" />
          </a>
          <button
            onClick={handleToggle}
            // className={`"nav-toggle" ${isToggled ? "show-links" : ""}`}
            className="nav-toggle"
            id="nav-toggle"
            type="button"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks
          groupClass={isToggled ? "nav-links show-links" : "nav-links"}
          itemClass="nav-link"
          nav_id="nav-links"
        />

        <SocialLinks groupClass="nav-icons" itemClass="nav-icon" />
        {/* <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li>
                <a key={link.id} href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul> */}

        {/* <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <li>
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div> */}
      </div>
    </nav>
  );
}
