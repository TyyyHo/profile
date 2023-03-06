import React from "react";
import "./contact.scss";

import Title from "../title/bouncy/title"

const Contact = () => {
  return (
    <section id="contactContainer">
      <Title title={"Contact info"}/>

      <section id="info">
      <div className="contactItem">
        <img src="./src/assets/img/contact/call.webp" alt="call" />
        <h3>Phone</h3>
        <p id="phone">0962-067202</p>
      </div>
      <div className="contactItem">
        <img src="./src/assets/img/contact/email.webp" alt="call" />
        <h3>Mail</h3>
        <p id="mail">ty.ho1126@gmail.com</p>
      </div>
      <div className="contactItem">
        <img src="./src/assets/img/contact/location.webp" alt="call" />
        <h3>Location</h3>
        <p id="location">Taichung City</p>
      </div>
      </section>
    </section>
  );
};

export default Contact;
