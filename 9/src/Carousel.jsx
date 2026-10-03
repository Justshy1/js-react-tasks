import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default function Carousel({ images }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      id="carousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn('carousel-item', {
              active: index === activeIndex,
            })}
          >
            <img
              alt=""
              className="d-block w-100"
              src={image}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        data-bs-target="#carousel"
        type="button"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        data-bs-target="#carousel"
        type="button"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
// END
