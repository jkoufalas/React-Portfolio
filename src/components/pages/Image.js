import React from "react";

export default function Portfolio(props) {
  return (
    <div className="image-container">
      <div className="image-container">
        <img className="image" src={props.imageLocation} alt="img-responsive" />
      </div>
    </div>
  );
}
