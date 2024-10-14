// src/components/ParallaxGyro.js
import React, { useEffect, useState } from "react";
import Gyro from "./../../assets/Images/information_3715765.png";
import styles from "./Parellax.module.css";

const ParallaxGyro = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = clientX / window.innerWidth - 0.5; // Normalize to -0.5 to 0.5
      const y = clientY / window.innerHeight - 0.5; // Normalize to -0.5 to 0.5
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Adjust image transform based on mouse position
  const imageStyle = {
    transform: `translateZ(-50px) rotateY(${mousePosition.x * 20}deg) rotateX(${mousePosition.y * -20}deg)`,
  };

  return (
    <div className={styles.parallaxContainer}>
      <div className={styles.parallaxLayer} style={imageStyle}>
        <img
          src={Gyro}
          alt="Parallax Background"
          className={styles.parallaxImage}
        />
       
      </div>
    </div>
  );
};

export default ParallaxGyro;
