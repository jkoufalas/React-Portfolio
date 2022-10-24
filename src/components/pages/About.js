import React from "react";
import portrait from "../../Images/Portrait.png";
import "../../styles/about.css";

export default function About() {
  return (
    <div id="about-me-content">
      <img src={portrait} alt="image_portrait" className="image_portrait" />
      <p>
        My name is John Koufalas and I am 39 years old. My wife's name is
        Christina and we have 4 daughters aged 8, 7 and the twins are 2. I enjoy
        outdoor cooking, this includes, BBQ's, smoking, rotisseries and my wood
        oven.
      </p>
      <br />
      <p>
        I studied at Adelaide University where I recieved a Bachelors Degree in
        Software Engineering graduating in 2002 and a Bachelors Degree in
        Information Technology and Telecommunications with Honors in 2006. I
        started at BAE Systems straight out of university and worked there for 5
        years before moving to the Defence Department where I worked for 9
        years.
      </p>
      <br />
      <p>
        I want to take my current skills and add to them in the area of full
        stack development. I find this area interesting and enjoyable.
      </p>
    </div>
  );
}
