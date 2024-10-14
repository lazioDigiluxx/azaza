import React from 'react'
import styles from './Home.module.css'
import Header from '../../Component/Header/Header'
import NavBar from '../../Component/NavBar/NavBar'
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../../Component/Footer/Footer'
const Home = () => {
  return (
    <div className={styles.main}>
        <NavBar/>
        <Header/>
        <AboutUs/>
        <Footer/>
    </div>
   
  )
}

export default Home
