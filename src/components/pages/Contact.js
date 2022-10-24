import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "../../styles/form.css";

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setname("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="container contact-form">
      <span className="heading">Contact</span>
      <form className="form col-lg-6 offset-lg-3">
        <div className="row justify-content-center">
          <label for="name">Name:</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <label for="email">Email:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <label for="message">Message:</label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="textarea"
            placeholder="message"
          />
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <button type="button" onClick={handleFormSubmit}>
        Submit
      </button>
      <br />
      <br />
    </div>
  );
}
