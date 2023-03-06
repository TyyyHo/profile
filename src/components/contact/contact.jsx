import React from "react";
import "./contact.scss";
import "./contact_mobile.scss";

import { ReactComponent as Call } from "/src/assets/img/contact/call.svg";
import { ReactComponent as Mail } from "/src/assets/img/contact/mail.svg";
import { ReactComponent as Location } from "/src/assets/img/contact/location.svg";

import Title from "../title/bouncy/title";

const Contact = () => {
  return (
    <section id="contactContainer">
      <Title title={"Contact info"} />

      <section id="info">
        <div className="contactItem call">
          <Call />
          <h3>Phone</h3>
          <p id="phone">0962-067202</p>
        </div>
        <div className="contactItem mail">
          <Mail />
          <h3>Mail</h3>
          <p id="mail">ty.ho1126@gmail.com</p>
        </div>
        <div className="contactItem location">
          <Location />
          <h3>Location</h3>
          <p id="location">Taichung City</p>
        </div>
      </section>
    </section>
  );
};

export default Contact;
