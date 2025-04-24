"use client"

import { useState } from "react"
import "./Hero.css"
import {Link} from "react-router-dom"

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Digital Marketing",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
   
    alert("Aplikimi u dërgua me sukses!")
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "Digital Marketing",
    })
  }

  return (
    <section className="hero">
      <div className="container">
     
        <div className="hero-content">
        
          <div className="hero-text">
           
            <h1>ROI Kids është një<br></br> mrekulli teknologjike<br></br> për fëmijët!</h1>
            <p>
              Ne ofrojmë një mjedis mësimor argëtues dhe interaktiv ku fëmijët<br></br> mund të eksplorojnë botën e teknologjisë
              së informacionit. Nga <br></br> kodimi deri te krijimtaria digjitale, programet tona janë krijuar për të<br></br> ndërtuar
              mendjet e të fëmijëve, për të rritur aftësitë e tyre teknike<br></br> dhe kreative dhe për t'i përgatitur ata për
              të tashmen dhe ardhmen<br></br> digjitale.
            </p>
            <p className="cta-text">Le të fillojmë së bashku udhëtimin teknologjik!</p>
            <Link to="https://roiacademy.net/aplikoni/" className="btn-register">
              REGJISTROHU →
            </Link>
          </div>
    
          <div className="application-form" id="apply-form">
            <h2>APLIKO TANI</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Emri dhe Mbiemri"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Tel."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select name="course" value={formData.course} onChange={handleChange}>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Dizajn Grafik">Dizajn Grafik</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="Python">Python</option>
                  <option value="JAVA">JAVA</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Video Animation">Video Animation</option>
                  <option value="Siguri Kibernetike">Siguri Kibernetike</option>
                  <option value="React JS">React JS</option>

                </select>
              </div>
              <button type="submit" className="btn-submit">
                APLIKO
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
