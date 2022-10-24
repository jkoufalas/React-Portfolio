import React from "react";

export default function Portfolio(props) {
  return (
    <div className="image-container">
      {/* each image is its own component */}
      <div className="image-container">
        <img
          className="image"
          src={process.env.PUBLIC_URL + props.imageLocation}
          alt="not-found"
        />
      </div>
    </div>
  );
}
