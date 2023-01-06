import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Stars = ({ rates }) => {
  const [rating, setRating] = useState(rates);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <FaStar
            className="star"
            color={ratingValue <= rating ? "#FF6060" : "#e4e5e9"}
            size={30}
            key={i++}
          />
        );
      })}
    </div>
  );
};

export default Stars;
