"use client"

import { useState, useEffect } from "react"
import "./TestimonialSlider.css"
import member1 from "../assets/testimonials/artim.png"
import member2 from "../assets/testimonials/vesa.png"
import member3 from "../assets/testimonials/taulant.png"
import member4 from "../assets/testimonials/diona.png"
import member5 from "../assets/testimonials/klevjan.png"

const testimonials = [
  {
    id: 1,
    name: "Artim Ramadani",
    role: "Python",
    image: member1,
    quote:
      "Eksperienca në ROI Academy më ka ndihmuar shumë në zhvillimin e aftësive në Python. Trajneri me plot vullnet është munduar që ligjëratat t'i bëjë sa më cilësore për nga efikasiteti dhe qartësia.",
  },
  {
    id: 2,
    name: "Vesa Zekaj",
    role: "Mobile App Dev.",
    image: member2,
    quote:
      "Trajnimi në ROI Academy ka qenë një eksperiencë mahnitëse. Kam mësuar shumë gjëra të shpjeguara në mënyrë të përkryer. Ky trajnim mbi të gjitha më ka ndihmuar të gjej veten dhe të hap dyer të reja për ëndrrat e mia.",
  },
  {
    id: 3,
    name: "Taulant Fazliu",
    role: "Web Development",
    image: member3,
    quote:
      "Me ndihmën dhe mentorimin e shkëlqyer të trajneres, unë arrita të fitoj dije në bazat e programimit në Web, hap ky gjigand për mua, për fillimin e karrierës sime në fushën e zhvillimit të softuerit.",
  },
  {
    id: 4,
    name: "Diona Namoni",
    role: "Marketing Digjital",
    image: member4,
    quote:
      "Eksperienca në ROI Academy ka qenë përtej pritshmërive personale. Njohuritë e fituara në Digital Marketing janë shumë të vlefshme dhe një perspektivë e re. Pjesëmarrja në këtë trajnim ishte një mundësi fantastike për të përparuar në karrierë.",
  },
  {
    id: 5,
    name: "Klevjan Prifti",
    role: "Java",
    image: member5,
    quote:
      "Ky trajnim më ka ndihmuar që të përvetësoj njohuritë bazë në Java.Kënaqësi ishte të jem te ROI Academy me një trajnere të mrekullueshme.Dashuria për këtë profesion nuk vdes kurrë.",
  },
]

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState([])
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    
    let testimonialsToShow = 3
    if (windowWidth < 992) {
      testimonialsToShow = 2
    }
    if (windowWidth < 768) {
      testimonialsToShow = 1
    }

    
    const startIndex = currentSlide
    let endIndex = startIndex + testimonialsToShow

    
    const visibleItems = []
    for (let i = 0; i < testimonialsToShow; i++) {
      const index = (startIndex + i) % testimonials.length
      visibleItems.push(testimonials[index])
    }
    
    setVisibleTestimonials(visibleItems)
  }, [currentSlide, windowWidth])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="container">
        <h2 className="testimonial-title">Fëmijët dhe prindërit flasin për ROI Kids!</h2>

        <div className="testimonial-slider">
          <button className="slider-arrow prev" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="testimonial-container">
            {visibleTestimonials.map((testimonial) => (
              <div className="testimonial-item" key={testimonial.id}>
                <div className="profile-section">
                <div className="profile-image">
                  <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                </div>
                <div className="profile-info">
                  <h3>{testimonial.name}</h3>
                  <p className="role">{testimonial.role}</p>
                </div></div>
                <div className="testimonial-card">
                  <p>{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-arrow next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
