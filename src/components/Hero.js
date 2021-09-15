import React from 'react';
import ButtonTwo from './ButtonTwo';
import './Hero.scss';
import HeroImage from './Ellipsefirst.png';
import Header from './Header';
import HeroImageOne from './Ellipsefourth.png';
import HeroImageTwo from './Ellipsesecond.png';
import HeroImageThree from './Ellipsethird.png';

const Hero = () => {
    return (
        <Header>
             <div id="home" className="hero-section">
            <div className="container">
                <div className="row align-items-center text-white">
                    <div className="col-md-5 intros">
                        <h1 className="display-2">
                            <span className="display-2--intro">Welcome to <br /> the &#60;Creek/&#62; </span>
                            </h1>
                            <p className="display-2--desc">
                            TechCreek is a habitat for the teeming population of youths making sense of their lives with digital skills and competencies, and actively involved in the development of the 'new economy' for Rivers State
                            </p>
                       <ButtonTwo />
                    </div>
                    <div className="col-md-2 intros">
                    </div>
                    <div className="col-md-5 intros hero-img text-end">
                    <img src={HeroImageThree} alt="hero" className="image hero-img first-hero-img" />
                        <img src={HeroImageOne} alt="hero" className="image hero-img second-hero-img" />
                        <img src={HeroImageTwo} alt="hero" className="image hero-img third-hero-img" />
                        <img src={HeroImage} alt="hero" className="image hero-image" />
                    </div>
                </div>
            </div>
        </div>
        </Header>
            
    )
}

export default Hero;
