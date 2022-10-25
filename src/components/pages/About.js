import React from "react";
import portrait from "../../Images/Portrait.png";
import "../../styles/about.css";
import { motion } from "framer-motion";

//setup imports

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="pageContainer">
        <span className="heading">About Me</span>
        <br />
        <br />
        <img src={portrait} alt="image_portrait" className="image_portrait" />
        <p>
          My name is John Koufalas and I am 40 years old. My wife's name is
          Christina and we have 4 daughters aged 8, 7 and the twins are 2. I
          enjoy outdoor cooking, this includes, BBQ's, smoking, rotisseries and
          my wood oven.
        </p>
        <br />
        <p>
          Full stack web developer with software engineering experience educated
          at the University of Adelaide. Skills in front and back end with
          strengths in meeting deadlines, problem solving, and teamwork.
          Passionate about programming and enjoy tackling challenging
          programming activities and collaborating with others to create
          meaningful web applications. With previous experience as a software
          developer, and a drive to learn and succeed I can provide a unique and
          valuable perspective.
        </p>
        <br />
      </div>
    </motion.div>
  );
}
