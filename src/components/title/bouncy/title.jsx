import React, { useState } from "react";
import "./title.scss";
import "./title_mobile.scss";

const Title = ({ title }) => {
  const [animation, setAnimation] = useState({});
  const myTitle = title.split("");

  return (
    <div id="titleContainer">
      <h2 className="title">
        {myTitle.map((item, index) => {
          return (
            <span
              key={index}
              className={animation.key === index ? animation.animationName : ""}
              onMouseEnter={() => setAnimation({ animationName: "bouncy", key: index })}
              onClick={() => setAnimation({ animationName: "bouncy", key: index })}
              onAnimationEnd={() => setAnimation({})}
            >
              {item !== " " ? item : <span>&nbsp;</span>}
            </span>
          );
        })}
      </h2>
    </div>
  );
};

export default Title;
