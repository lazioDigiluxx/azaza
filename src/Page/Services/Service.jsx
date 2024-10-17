import React, { useEffect, useState } from "react";
import styles from "./Services.module.css";
import ServiceCard from "./../../Component/SericeCard/ServiceCard";

import webIcon from "./../../assets/Images/coding.png";
import seoIcon from "./../../assets/Images/seo.png";
import socialmediaIcon from "./../../assets/Images/social-media_13561895.png";
import graphicdesignIcon from "./../../assets/Images/graphics_10258724.png";

const Service = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true); // Trigger animation after component mounts
    }, 100); // Delay to ensure component has rendered

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.mainService}>
      <h1 className={`${styles.movingText} ${animate ? styles.show : ""}`}>
        Digital Solution
      </h1>
      <br/>
      <p className={`${styles.movingText} ${animate ? styles.show : ""}`}>
        We focus on crafting digital experiences that drive the growth of your
        business. Through our designs, we create a path for your business to
        expand and thrive in the digital landscape.
      </p>
    
      <div className={styles.mainServicesub}>
        <ServiceCard
          icon={webIcon}
          title="Web Development"
          href="/services/web-development"
          description="We create responsive and high-performance websites tailored to your business needs, ensuring a seamless user experience across all devices."
        />
        <ServiceCard
          icon={seoIcon}
          title="SEO Optimization"
          href="/services/seo-optimization"
          description="Our SEO services enhance your online visibility, driving organic traffic and improving your website's ranking on search engines."
        />
        <ServiceCard
          icon={graphicdesignIcon}
          title="Graphic Design"
          href="/services/graphic-design"
          description="We provide innovative graphic design solutions that effectively communicate your brand identity and engage your target audience."
        />
        <ServiceCard
          icon={socialmediaIcon}
          title="Social Media Marketing"
          href="/services/social-media-marketing"
          description="We help you build and manage your brand's presence on social media platforms, enhancing engagement and driving growth."
        />
      </div>
    </div>
  );
};

export default Service;
