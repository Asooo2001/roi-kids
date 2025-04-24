import { FaUsers, FaLaptop, FaClock } from "react-icons/fa"
import "./Features.css"

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon training">
              <FaUsers />
            </div>
            <div className="feature-content">
              <h3>Trajnim & Praktikë</h3>
              <p>240+ fëmijë të trajnuar ndër vite.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon physical">
              <FaLaptop />
            </div>
            <div className="feature-content">
              <h3>Fizikisht dhe Online</h3>
              <p>Trajnimet mbahen në kohë reale fizikisht dhe online.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon quality">
              <FaClock />
            </div>
            <div className="feature-content">
              <h3>Kohë kualitative</h3>
              <p>Reduktohet koha e humbur në pajisje teknologjike dhe investohet në krijimtari digjitale.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

