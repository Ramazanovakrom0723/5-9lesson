import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import Slider from "react-slick";
import "./carousel.css"; 

const cars = {
  'Model S': [img1],
  'Model 3': [img2],
  'Model X': [img3],
  'Model Y': [img4]
};

const Carousel = ({ selectedModel }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  if (!selectedModel || !cars[selectedModel]) {
    return <div>No images found for the selected model</div>;
  }

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {cars[selectedModel].map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={selectedModel} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

export default Carousel;
