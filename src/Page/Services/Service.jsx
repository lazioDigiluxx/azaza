import React from 'react'
import styles from "./Services.module.css"
import ParallaxGyro from '../../Component/Gyro/Parallax';

const Service = () => {
  return (
    <div className={styles.mainService}>
      <h1>Digital Solution</h1>
        <p>We focus on crafting digital experiences that drive the growth of your business. Through our designs, we create a path for your business to expand and thrive in the digital landscape.</p>
        <ParallaxGyro/>

    </div>
  )
}

export default Service
