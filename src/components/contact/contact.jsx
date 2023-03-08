import React from "react";
import "./contact.scss";
import "./contact_mobile.scss";

import { ReactComponent as Call } from "/src/assets/img/contact/call.svg";
import { ReactComponent as Mail } from "/src/assets/img/contact/mail.svg";
import { ReactComponent as Location } from "/src/assets/img/contact/location.svg";

import Title from "../title/bouncy/title";

const Contact = () => {
  function copy(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <section id="contactContainer">
      <Title title={"Contact info"} />

      <section id="info">
        <div className="contactItem call" onClick={() => copy("0962-067202")}>
          <Call />
          <h3>Phone</h3>
          <p id="phone">0962-067202</p>
        </div>
        <div className="contactItem mail" onClick={() => copy("ty.ho1126@gmail.com")}>
          <Mail />
          <h3>Mail</h3>
          <p id="mail">ty.ho1126@gmail.com</p>
        </div>
        <div className="contactItem location" onClick={() => copy("Taichung City")}>
          <Location />
          <h3>Location</h3>
          <p id="location">Taichung City</p>
        </div>
      </section>
    </section>
  );
};

export default Contact;
