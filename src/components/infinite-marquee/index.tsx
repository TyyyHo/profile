import React from "react";
import Marquee from "react-fast-marquee";
import { TechStackList } from "../../lib/constant";

const speed = 80;
const direction = "left";

export default function InfiniteMarquee() {
  return (
    <div id="infiniteMarquee">
      <Marquee speed={speed} direction={direction} pauseOnHover>
        {TechStackList.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
