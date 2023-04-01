import React, { useState } from "react";
import "./_Footer.scss";

import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { images } from "../../Constants";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then((data) => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text">
        Take a coffe <span>&</span> chat with me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:codehunterpro@gmail.com" className="p-text">
            codehunterpro@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="+8801581024503" className="p-text">
            (+88) 015-81024503
          </a>
        </div>
      </div>

  {!isFormSubmitted ? <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name='message'
            onChange={handleChangeInput}
          />
        </div>

        <button type="button" className="p-text" onClick={handleSubmit}>
          {loading ? "Sending.." : "Send Message"}
        </button>
      </div>: <div> 
        <h3 className="head-text">Thank you for getting in touch !</h3>
        </div>}


      
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
