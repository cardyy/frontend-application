/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";

const images = [Image1, Image2, Image3];

const BackgroundSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleTransitionEnd = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="background-slideshow">
      <img
        src={images[currentImageIndex]}
        alt="Background image"
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  );
};

export default BackgroundSlideshow;