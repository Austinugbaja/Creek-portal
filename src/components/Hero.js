import React from 'react';
import ButtonTwo from './ButtonTwo';
import './Hero.scss';
import HeroImage from './Ellipsefirst.png';
import Header from './Header';

const Hero = () => {
    return (
        <Header>
             <div id="home" className="hero-section">
            <div className="container">
                <div className="row align-items-center text-white">
                    <div className="col-md-6 intros">
                        <h1 className="display-2">
                            <span className="display-2--intro">Welcome to <br /> the Creek </span>
                            </h1>
                            <p className="display-2--desc">
                            TechCreek is a habitat for the teeming population of youths making sense of their lives with digital skills and competencies, and actively involved in the development of the 'new economy' for Rivers State
                            </p>
                       <ButtonTwo />
                    </div>
                    <div className="col-md-6 intros hero-img text-end">
                        <img src={HeroImage} alt="hero image" className="image-fluid" />
                    </div>
                </div>
            </div>
        </div>
        </Header>
            
    )
}

export default Hero;
