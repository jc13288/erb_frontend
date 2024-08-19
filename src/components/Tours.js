import React from 'react';
import Title from './Title';

export default function Tours() {
  return (
    <section className="section" id="tours">
    <Title title="featured" subTitle="tours"/>
    <div className="section-center tours-center">
            {/* <!--* first tour --> */}
            <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/bull.jpeg" className="tour-img" alt="tour image1"/>
                    <p className="tour-date">August 26th, 2024</p>
                </div>
                <div className="tour-info">
                    <div className="tour-title">
                        <h4>Tibet adventure</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet voluptatum.</p>
                    <div className="tour-footer">
                        <p><span><i className="fa fa-map"></i></span>China</p>
                        <p>6 days</p>
                        <p>from $2100</p>
                    </div>
                </div>
            </article>
            {/* <!--* second tour --> */}
            <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/bird.jpeg" className="tour-img" alt="tour image2"/>
                    <p className="tour-date">September 15th, 2024</p>
                </div>
                <div className="tour-info">
                    <div className="tour-title">
                        <h4>Amazon adventure</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet voluptatum.</p>
                    <div className="tour-footer">
                        <p><span><i className="fa fa-map"></i></span>Brazil</p>
                        <p>10 days</p>
                        <p>from $4300</p>
                    </div>
                </div>
            </article>
            {/* <!--* third tour --> */}
            <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/hedgehog.jpeg" className="tour-img" alt="tour image3"/>
                    <p className="tour-date">Octuber 8th, 2024</p>
                </div>
                <div className="tour-info">
                    <div className="tour-title">
                        <h4>City adventure</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet voluptatum.</p>
                    <div className="tour-footer">
                        <p><span><i className="fa fa-map"></i></span>UK</p>
                        <p>10 days</p>
                        <p>from $3000</p>
                    </div>
                </div>
            </article>
            {/* <!--* fourth tour --> */}
            <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/squirrel.jpeg" className="tour-img" alt="tour image4"/>
                    <p className="tour-date">Feberary 10th, 2024</p>
                </div>
                <div className="tour-info">
                    <div className="tour-title">
                        <h4>Nordic adventure</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet voluptatum.</p>
                    <div className="tour-footer">
                        <p><span><i className="fa fa-map"></i></span>Norway</p>
                        <p>15 days</p>
                        <p>from $5000</p>
                    </div>
                </div>
            </article>
    </div>
</section>
  );
}
