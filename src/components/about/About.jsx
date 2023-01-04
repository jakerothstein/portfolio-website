import React from 'react';
import "./about.css"
import Image from "../../assets/Jake.png"
// import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>
            <div className="about__container grid">
                <img src={Image} alt="" className='about__img'/>
                <div className="about__data grid">
                    <div className="about info">
                        <p className="about__description">
                            Hi, I'm Jake Rothstein, a high-school programmer from the bay area. In my free time I enjoy running, hiking and photography in nature.
                        </p>
                        <a href={require("../../assets/Jake-Rothstein-Resume.pdf")}  className="btn" download="Jake Rothstein Resume - 2022">Download Resume</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills_data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Python</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage python"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Go</h3>
                                <span className="skills__number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage go"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills__titles">
                                <h3 className="skills__name">HTML/CSS</h3>
                                <span className="skills__number">50%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage html-css"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<AboutBox />*/} {/* This is the old about section */}
        </section>
    );
};

export default About;