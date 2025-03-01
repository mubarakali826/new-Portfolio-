import React, {useState, useEffect} from "react";
import "./CustomCarousel.scss";

export default function CustomCarousel({images, interval = 4000}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-button carousel-button-left"
        onClick={prevSlide}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 6L9 12L15 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className="carousel-button carousel-button-right"
        onClick={nextSlide}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 6L15 12L9 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
