import "./Footer.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import balkanmap from "../assets/balkan-map.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="contact-title">Na kontaktoni</h2>
            <div className="map-container">
              <img src={balkanmap} alt="Balkans Map" className="balkans-map" />
            </div>
          </div>

          <div className="footer-center">
            <div className="address-item">
              <FaMapMarkerAlt className="address-icon" />
              <p>Rr. Ukshin Hoti, 43 Pristina, Kosovo,<br></br> 10000</p>
            </div>

            <div className="address-item">
              <FaMapMarkerAlt className="address-icon" />
              <p>Rr. Tirana, Nr 3, Icon Tower, Lakrishte,<br></br> Pristina, Kosovo, 10000</p>
            </div>

            <div className="address-item">
              <FaMapMarkerAlt className="address-icon" />
              <p>Bulevardi Zogu 1, Nr 30, Tirana, Albania<br></br> 1001</p>
            </div>

            <div className="address-item">
              <FaMapMarkerAlt className="address-icon" />
              <p>Vtora Makedonska Brigada 35, Skopje<br></br> 1000, North Macedonia</p>
            </div>

            <div className="address-item">
              <FaMapMarkerAlt className="address-icon" />
              <p>33 City & Central, Marylebone Lane,<br></br> London, England, W1U 2NJ</p>
            </div>
          </div>

          <div className="footer-right">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p>+383 48 180 194</p>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p>+355 68 500 0125</p>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>info@roiacademy.net</p>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>info@roiacademy.net</p>
            </div>

            <div className="social-icons">
              <a href="https://www.facebook.com/roikids.net" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/roikids"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/roi-academy" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <FaLinkedin />
              </a>
              <a href="https://x.com/academy_ro84355" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <p>Copyrights - ROI Kids | All rights reserved 2025.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

