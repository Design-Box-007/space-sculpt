"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const TextMarquee: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 py-10 overflow-hidden rotate-[5deg]">
      {/* First marquee: Scrolls from left to right */}
      <Marquee
        direction="left"
        gradient={false} // disables fade gradient
        speed={90} // adjust speed as needed
      >
        <span className="whitespace-nowrap text-[30px] leading-[80px] lg:text-[80px] lg:leading-[165px] font-medium mx-5 font-cinzel">
          Experience the art of interior transformation
        </span>
      </Marquee>

      {/* Second marquee: Scrolls from right to left */}
      <Marquee direction="right" gradient={false} speed={90}>
        <span className="whitespace-nowrap text-[30px] leading-[105px] lg:text-[80px] lg:leading-[165px] font-medium mx-5 font-cinzel">
          Where every detail is crafted to perfection.
        </span>
      </Marquee>
    </div>
  );
};

export default TextMarquee;
