import React from 'react';

import about_img from './../../assets/img/about-img.jpg';
import './about.scss';


export const About = () => {
    return (
        <>
        <section className="about bd-container" id="about">
            <div className="title-box">
                <div className="line"> </div>
                <h2 className="section-title">About me</h2>
            </div>
            <span className="section-subtitle">My History</span>
            
            <div className="about-container bd-grid">
                <div className="about-data bdgrid">
                    <p className="about-description"><span>Hello, I am</span><br/>Frontend Developer, Gekk & hardware enthusiast always looking for new challenges about creating and developing web interfaces</p>
                </div>

                <div>
                    <div className="about-number">23</div>
                    <div className="about-achievement">Age</div>
                </div>

                <div>
                    <div className="about-number">3</div>
                    <div className="about-achievement">Years of Experience</div>
                </div>

                <div>
                    <div className="about-number">+5</div>
                    <div className="about-achievement">Projects</div>
                </div>

                <img src={about_img} alt="" className="about-img"/>
            </div>
        </section>
        </>
    )
}