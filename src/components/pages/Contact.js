import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "../../styles/form.css";
import { motion } from "framer-motion";

//setup imports

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoseFocus = (e) => {
    const { target } = e;
    const inputType = target.name;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      if (!email) {
        setErrorMessage(`Email is invalid`);
        return;
      } else if (!validateEmail(email)) {
        console.log("got here OK");
        setErrorMessage(`Email is invalid!`);
        return;
      } else {
        setErrorMessage(``);
      }
    } else if (inputType === "name") {
      if (!name) {
        setErrorMessage(`Name is invalid`);
        return;
      } else {
        setErrorMessage(``);
      }
    } else {
      if (!email) {
        setErrorMessage(`No Message has been Entered`);
        return;
      } else {
        setErrorMessage(``);
      }
    }
  };

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setname(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (!name) {
      setErrorMessage(`Name is invalid`);
      return;
    }

    if (!message) {
      setErrorMessage(`No Message has been Entered`);
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setname("");
    setMessage("");
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="pageContainer">
        <div className="container contact-form">
          {/* sets up the form */}
          <span className="heading">Contact</span>
          <form className="form d-flex">
            <div className="row justify-content-center">
              <label>Name:</label>
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                onBlur={handleLoseFocus}
                type="text"
                placeholder="name"
                id="name"
              />
              <label>Email:</label>
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                onBlur={handleLoseFocus}
                type="email"
                placeholder="email"
              />
              <label>Message:</label>
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                onBlur={handleLoseFocus}
                type="textarea"
                placeholder="message"
              />
            </div>
          </form>
          {/* error message displays when there is a problem */}
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          {/* form submit */}
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
          <br />
          <br />
        </div>
      </div>
    </motion.div>
  );
}
