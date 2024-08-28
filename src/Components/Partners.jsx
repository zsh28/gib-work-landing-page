import React from "react";
import Marquee from "react-fast-marquee";

import anchor from "../assets/Partners/anchor.png";
import deanslist from "../assets/Partners/deanslist.jpg";
import pubkey from "../assets/Partners/pubkey.png";
import realms from "../assets/Partners/realms.jpg";
import solciv from "../assets/Partners/solciv.jpg";
import tokengator from "../assets/Partners/tokengator.jpeg";

// Custom image URLs
const customIcons = [
  { src: anchor, alt: "anchor" },
  { src: deanslist, alt: "deanslist" },
  { src: pubkey, alt: "pubkey" },
  { src: realms, alt: "realms" },
  { src: solciv, alt: "solciv" },
  { src: tokengator, alt: "tokengator" },
];

const Partners = () => {
  return (
    <div className="py-12 max-w-[1200px] w-full h-auto justify-center items-center text-center mx-auto px-4">
    <h2 className="text-black font-bold text-[32px] mb-10 text-center">Trusted By</h2>
      {/* Marquee for left to right scrolling */}
      <Marquee
        direction="right"
        speed={50}
        pauseOnHover={false}
        loop={0}
        gradient={true}
        gradientWidth={50}
        gradientColor="#8151fd"
        style={{ borderRadius: "8px" }}
      >
        {customIcons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            style={{
              margin: "0 50px",
              height: "100px",
              width: "100px",
              borderRadius: "100%",
            }}
          />
        ))}
      </Marquee>

      <div className="mt-5">
        {/* Marquee for right to left scrolling */}
        <Marquee 
        direction="left" 
        speed={50} 
        pauseOnHover={false} 
        loop={0}
        gradient={true}
        gradientWidth={50}
        gradientColor="#8151fd"
        style={{ borderRadius: "8px" }}
        >
          {customIcons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              style={{
                margin: "0 50px",
                height: "100px",
                width: "100px",
                borderRadius: "100%",
              }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
