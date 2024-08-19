import React from "react";
import aboutImg from "../images/tour1.jpg";
import Title from "./Title";

export default function About() {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} alt="high mountains" className="about-photo" />
        </div>
        <article className="about-info">
          <h3>Explore the difference</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
            eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
            assumenda quibusdam!
          </p>
          <a href="#home" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}
