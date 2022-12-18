import React, { useState } from "react";

const StarRating = ({
  count,
  value,
  inactiveColor = "#ddd",
  size = 24,
  activeColor = "#f00",
  onChange,
  disabled,
}) => {
  const stars = Array.from({ length: count }, () => <span>&#9733;</span>);

  const handleChange = (value) => {
    onChange(value + 1);
  };

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span
            className={`star ${disabled ? "star-disabled" : ""}`}
            key={index}
            style={{ color: style, width: size, height: size, fontSize: size }}
            onClick={() => handleChange(index)}
          >
            {s}
          </span>
        );
      })}
      {/* {value} */}
    </div>
  );
};
export default StarRating;
