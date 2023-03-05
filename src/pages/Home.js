import React from "react";
import Typewriter from "typewriter-effect";
import { introdata } from "../content";
import "../styles/home.css";
import sky from "../assets/sky-home.jpg";
import headshot from "../assets/hel-headshot1.png";

function Home() {
  return (
    <>
      <section id="home" className="home">
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${sky})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <div>
                  <img className="h_img" src={headshot} />
                </div>
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
