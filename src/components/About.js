import React from 'react'
import LearnImage from './learnImage.png';
import './About.scss';


const About = () => {



    return (
        <div id="about" className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={LearnImage} alt="Learn Image" className=""/>
                    </div>
                    <div className="col-md-6">
                        <span className="about-heading-one">Learn</span><span className="about-course">courses</span>
                        <h1 className="about-heading-two">Get job-ready for an in-demand career.</h1> 
                        <p className="fw-light about-desc">
                        We provide avenues of continuous development for learners to acquire new skills and practical competences to meet the ever evolving needs of mankind. Explore our training programs for different categories of learners.
                        </p>
                    </div>
                    <div className="col-md-2">
                    <button className="learn-button">view courses</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
