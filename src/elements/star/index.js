import React from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  console.log(decimals)

  const star = [];

  let lefpost = 0;

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    lefpost = lefpost + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5)
    star.push(
      <div
        className="star"
        key={`star-withDecimal`}
        style={{ left: lefpost, height: height, width: decimals*width - spacing }}
      ></div>
    );
  const starPlaceHolder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceHolder.push(
      <div
        className="star placeholder"
        key={`star-placeholder${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceHolder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
