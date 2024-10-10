import React from 'react'
import styles from "./Header.module.css"
import backgroundVideo from "./../../assets/Images/backVideo.mp4"
const Header = () => {
  return (
    <div className={styles.header_main}>
        <video autoPlay muted loop className={styles.background_video}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.left}>
        <h1>One-Stop Solutions for All Your IT Needs!!</h1>
      </div>
      
    </div>
  )
}

export default Header
