import React from "react";
import { GlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const { closeSubmenu } = GlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            millions of comanies of all sizes-from startups to Fortune 500s-use
            Strip's software and APIs to accept payments, send payouts, and
            manage their businesses online
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="Phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
