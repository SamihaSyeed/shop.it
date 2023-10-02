import React from 'react'
import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProjectDisplay from '../components/ProjectDisplay/ProjectDisplay';
const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Features />
        <ProjectDisplay />
        <Footer />
    </div>
  )
}

export default Home