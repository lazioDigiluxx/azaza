import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (

    
    <div className={ styles.main}>
      <div className={ styles.contact}>
        <h1>Let’s get in touch</h1>
        <p>We are always ready to solve your problems..</p>
        <h3>Contact Us</h3>
        <p>
          <a href="tel:+919567889900">+(91) 9567889900</a>,{' '}
          <a href="tel:+919922445566">+(91) 9922445566</a>
        </p>
        <p>
          <a href="mailto:lazioteam@gmail.com">lazioteam@gmail.com</a>
        </p>
        <address>
          Lazio Team Chochi Building House(H),<br />
          Thrikkakara P.O, Kochi, Kerala 676709
        </address>
      </div>

      <div className={styles.right}>
        <h3>Great! We're excited to hear from you and let's start something special. Call us for any inquiry.</h3>
        <form className={styles.contact_form}>
          <div className={styles.form_group}>
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.form}>
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.form}>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className={styles.form}>
            <label htmlFor="subject">Subject *</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className={styles.form}>
            <label htmlFor="message">Messages *</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className={ styles.send_button}>Send Messages</button>
        </form>
      </div>
    </div>
  );
};

export default Contact