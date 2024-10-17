import React from 'react';
import styles from './AboutUs.module.css';
import NavBar from '../../Component/NavBar/NavBar';
import Card from '../../Component/AboutMotion/Card';
import logo from "./../../assets/Images/logo.png";
import Footer from '../../Component/Footer/Footer';
const AboutUs = () => {
  const cardTexts = [
    "Welcome to Lazio Digilux! We are a dynamic digital marketing agency, established in 2021 and located in Thrikkakara, Kochi. " +
    "We offer a wide range of services, including digital marketing, web development, graphic design, video creation, photography, and a lot more. " +
    "Our team of experienced and talented professionals is dedicated to helping businesses of all sizes grow their online presence and reach their target audience. " +
    "We understand the importance of creating a strong online presence for businesses in today's digital age, and we work hard to create custom marketing strategies that are tailored to each client's specific needs. " +
    "If you are looking for a digital marketing agency that can help you take your business to the next level, then Lazio Digilux is the perfect choice for you."
  ];

  return (
    <div className={styles.aboutUsMain}>
      {/* <img src={logo} alt="Company Logo" className={styles.logoImg} /> */}
      {/* <NavBar />  */}
      <div className={styles.heroSection}>
        <h1 className={styles.heading}>
      
          <span className={styles.line1}>We Grow Brands,</span>
          <span className={styles.line2}>Create Experience,</span>
          <span className={styles.line3}>Solve Business Problems</span>
        
        </h1>
        <p className={styles.subText}>
          Empowering businesses with cutting-edge digital solutions and strategies.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {cardTexts.map((text, index) => (
          <Card key={index} text={text} index={index} />
        ))}
        <button>
          <span role="img" aria-label="explore">Explore</span>
        </button>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default AboutUs;
