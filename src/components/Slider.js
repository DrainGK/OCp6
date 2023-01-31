import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [houses, setHouses] = useState([]);
  const length = slides.length;
  const nextSlide = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <button className="left-arrow" onClick={prevSlide}>
        <img src="/arrow-left.svg" alt="arrow" />
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        <img src="/arrow-right.svg" alt="arrow" />
      </button>

      {slides.map((obj, index) => {
        return (
          <div
            className={index === slideIndex ? "slide active" : "slide"}
            key={index}
          >
            {index === slideIndex && <img src={obj} className="image" />}
            <div className="number-slide">
              <p>
                {index + 1}/{length}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
