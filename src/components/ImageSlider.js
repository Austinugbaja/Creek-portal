import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UpdateImage from './components/update-image.png';

const ImageSlider = () => {
    const settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
      }

    return (
        <div {...settings}>
     <div className="card-wrapper">
     <div className="card" style="width: 18rem;">
             <img src={UpdateImage} className="card-img-top" alt="image card" />
                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                         </p>
                  </div>
                  <div className="card-body">
                     <a href="#" className="card-link">Card link</a>
                     <a href="#" className="card-link">Another link</a>
                  </div>
          </div>
     </div>
   </div>
    )
}

export default ImageSlider;
