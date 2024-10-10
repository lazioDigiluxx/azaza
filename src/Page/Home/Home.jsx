import React from 'react'
import styles from './Home.module.css'
import Header from '../../Component/Header/Header'
import NavBar from '../../Component/NavBar/NavBar'
import AboutUs from '../AboutUs/AboutUs'
const Home = () => {
  return (
    <div className={styles.main}>
        <NavBar/>
        <Header/>
        <AboutUs/>
    </div>
   
  )
}

export default Home
