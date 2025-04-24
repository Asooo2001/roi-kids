"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./ContactPage.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childName: "",
    course: "Zgjidhni",
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
  
    console.log("Form submitted:", formData)
    alert("Aplikimi u dërgua me sukses!")
  
    setFormData({
      name: "",
      email: "",
      phone: "",
      childName: "",
      course: "Zgjidhni",
    })
  }

  return (
    <div className="contact-page">
      <div className="promotion-banner">
        <p>
          PËRFITONI NGA OFERTA <span className="discount-badge">-50% ZBRITJE</span>
        </p>
      </div>
      <Navbar />

      <div className="contact-hero">
        <div className="contact-form-container">
          <h1>Apliko tani për t'u interesuar rreth kurseve për fëmijë.</h1>
          <p className="contact-subtitle">
            Plotësoni formularin në vijim me informatat tuaja dhe për cilin kurs jeni të interesuar.
          </p>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Emri dhe mbiemri juaj *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Numri i telefonit *</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="childName">Mosha e fëmijës *</label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="course">Kursi për të cilin interesoheni *</label>
                <select  id="course" name="course" value={formData.course} onChange={handleChange} required>
                  <option value="Zgjidhni">Zgjidhni</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Dizajn Grafik">Dizajn Grafik</option>
                  <option value="Programim">Programim</option>
                  <option value="Video Editim">Video Editim</option>
                  <option value="Zhvillues Aplikacioni">Zhvillues Aplikacioni</option>
                </select>
              </div>

              <button type="submit" className="submit-button">
                Apliko
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage
