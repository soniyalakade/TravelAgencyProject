import React, { useRef, useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import { useLocation } from "react-router-dom";
import GoaImg from "../assets/goa.png";
import KeralaImg from "../assets/kerala.png";
import ManaliImg from "../assets/manali.png";

function Home() {
  const contactRef = useRef(null);
  const location = useLocation();

  // Scroll to Contact section if hash is #contact
  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <>
      {/* IMAGE SLIDER */}
      <ImageSlider />

      {/* FEATURED DESTINATIONS */}
      <section className="featured-section">
        <h2>Explore Our Popular Destinations</h2>
        <div className="featured-cards">
          <div className="card">
            <img src={GoaImg} alt="Goa" />
            <h3>Goa</h3>
            <p>Sun, sand, and sea – enjoy the beaches and nightlife.</p>
          </div>
          <div className="card">
            <img src={KeralaImg} alt="Kerala" />
            <h3>Kerala</h3>
            <p>Backwaters, houseboats, and serene landscapes await you.</p>
          </div>
          <div className="card">
            <img src={ManaliImg} alt="Manali" />
            <h3>Manali</h3>
            <p>Snow-capped mountains and adventure activities.</p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <h2>Why Travel With TravelGo?</h2>
        <p>
          We provide personalized travel packages, expert guidance, and
          unforgettable experiences. Your journey is our passion!
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <h2>Happy Travelers</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "Had an amazing experience! Everything was smooth and
              well-planned."
            </p>
            <h4>- Riya Sharma</h4>
          </div>
          <div className="testimonial-card">
            <p>"Highly recommend TravelGo for their professional service."</p>
            <h4>- Amit Kumar</h4>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section ref={contactRef} id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>We’d love to help you plan your next journey 🌍</p>

        <div className="contact-details">
          <p>
            <strong>Email:</strong> travelgo@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>Address:</strong> Pune, Maharashtra, India
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
