import React from 'react'
import styles from './Home.module.css'
import Header from '../../Component/Header/Header'
import NavBar from '../../Component/NavBar/NavBar'
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../../Component/Footer/Footer'
import Service from '../Services/Service'
import Project from '../../Component/Projectidea/Project'
const Home = () => {
  return (
    <div className={styles.main}>
        <NavBar/>
        <br/>
        <Header/>
        <AboutUs/>
        <Service/>
        <Project/>
        <Footer/>
    </div>
   
  )
}

export default Home
