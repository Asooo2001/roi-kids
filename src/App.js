import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Programs from './components/Programs'
import AboutUs from "./components/AboutUs"
import TeamSection from "./components/TeamSection"
import Teachers from "./components/Teachers"
import TestimonialSlider from "./components/TestimonialSlider"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import ContactPage from "./pages/ContactPage"


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {
    <div className="App">
      <div className="promotion-banner">
        <p>
          PËRFITONI NGA OFERTA <span className="discount-badge">-50% ZBRITJE</span>
        </p>
      </div>
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <AboutUs/>
      <TeamSection />
      <Teachers />
      <TestimonialSlider />
      <Footer />
      
    </div> } />
    <Route path = "/contact" element ={<ContactPage />} />
    </Routes>
    </Router>
  )
}

export default App

