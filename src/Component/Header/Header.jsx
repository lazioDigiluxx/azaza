import React from "react";
import styles from "./Header.module.css";
import backgroundVideo from "./../../assets/Images/backVideo.mp4";
import MovingComponent from "react-moving-text";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div className={styles.header_main}>
      <video autoPlay muted loop className={styles.background_video}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.left}>
        <h1>
          One-Stop Solutions for{" "}
          <br/>
          <span style={{ display: "inline-block" }}> 
            <TypeAnimation
              sequence={[
                'Website',
                1000,
                'Digital Marketing',
                1000,
                'SEO',
                1000,
                'Email Marketing',
                1000
              ]}
              style={{ fontSize: '1.5em', marginLeft: '10px', color: "white" }} 
              repeat={Infinity}
            />
          </span>{" "}
          Needs!!
        </h1>
      </div>
      <div className={styles.right}>
        <button>
          <MovingComponent
            type="slideInFromLeft"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="2"
            fillMode="none"
            style={{ fontSize: "3rem" }}
          >
            Web Solutions
          </MovingComponent>
        </button>
        <button>
          <MovingComponent
            type="slideInFromRight"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="2"
            fillMode="none"
            style={{ fontSize: "3rem" }}
          >
            SEO Solutions
          </MovingComponent>
        </button>
        <button>
          <MovingComponent
            type="slideInFromLeft"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="2"
            fillMode="none"
            style={{ fontSize: "3rem" }}
          >
            Digital Marketing Solutions
          </MovingComponent>
        </button>
      </div>
    </div>
  );
};

export default Header;
