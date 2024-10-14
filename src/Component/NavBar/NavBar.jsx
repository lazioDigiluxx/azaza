import React from 'react';
import styles from './NavBar.module.css';
import logo from './../../assets/Images/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </li>
        <li>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={styles.navLink}>About Us</Link>
        </li>
        <li>
          <Link to="/Services" className={styles.navLink}>Services</Link>
        </li>
        <li>
          <Link to="/Contact" className={styles.navLink}>Contact Us</Link>
        </li>
        <li>
          <Link to="/careers" className={styles.navLink}>Careers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
