import React, { useState } from "react";

const Tour = ({ tour, handleNotInterested }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img alt={tour.name} src={tour.image} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        <p>
          {isReadMore ? `${tour.info.substring(0, 200)}...` : tour.info}
          <button
            onClick={() => {
              setIsReadMore(!isReadMore);
            }}
          >
            {isReadMore ? "Read More" : "Show less"}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            handleNotInterested(tour.id);
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
