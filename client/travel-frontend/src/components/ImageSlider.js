import React, { useEffect, useState } from "react";
import goa from "../assets/image1.png";
import manali from "../assets/image2.jpg";
import paris from "../assets/image3.jpg";
import bali from "../assets/image4.png";

const images = [goa, manali, paris, bali];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="slider">
        <img src={images[currentIndex]} alt="Travel Destination" />
      </div>
    </div>
  );
}

export default ImageSlider;
