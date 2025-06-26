import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Hero />
      <section className="featured-tours">
        <div className="container">
          <h2>Featured Tours</h2>
          <div className="tour-grid">
            <div className="tour-card">
              <img src="src/images/Rajasthan.webp" alt="Rajasthan Tourism" />
              <h3>Rajasthan Adventure</h3>
              <p>Explore the royal palaces and deserts of Rajasthan.</p>
            </div>
            <div className="tour-card">
              <img src="src/images/goa.webp" alt="Goa Beaches" />
              <h3>Goa Beaches</h3>
              <p>Relax on the sunny beaches of Goa.</p>
            </div>
            <div className="tour-card">
              <img src="src/images/Hiamlayan-trek.webp" alt="" />
              <h3>Himalayan Trek</h3>
              <p>Embark on an adventure in the Himalayas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Services Provided by Us</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="src/images/Varanai_tour.webp" alt="Tour & Travel" />
              <h3>Trips & Plans</h3>
              <p>Comfortable and reliable trip & travel across India.</p>
            </div>
            <div className="service-card">
              <img src="src/images/buses-web.webp" alt="Buses Tour Images" />
              <h3> Travelling Service</h3>
              <p>Luxury Buses & SUVs for a premium travel experience.</p>
            </div>
            <div className="service-card">
              <img src="src/images/7.jpg" alt="Guidance Tour " />
              <h3>Tour Guidance</h3>
              <p>Provide Perfect Guidance  for group tours and Travels.</p>
            </div>
            <div className="service-card">
              <img src="src/images/Hotel.webp" alt="Hotel images " />
              <h3>Hotels & Restrooms </h3>
              <p> Clean and Highly Equipped living Space for Rest and sleep.</p>
            </div>
            
          </div>
          <Link to="/Services" className="explore-btn">
            Explore More..
          </Link>
        </div>
      </section>

      {/* one More Section Why choose Komal Tour India */}

      <section className="why-choose-us">
        <div className="container">
          <h2>Discover India's Hidden Gems With KOMAL TOUR INDIA</h2>
          <div className="choose-grid">
            <div className="choose-card">
              <img src="/src/images/Dwarf002.jpg" alt="Expert Guides" />
              <h3>Mr Mark</h3>
              <p>For over 35 years, I have had the privilege of showing travelers the incredible beauty, rich culture, and hidden gems of India. What started as a passion has grown into a lifetime commitment to creating unforgettable experiences for our guests. Through the years, we have earned the trust of thousands of visitors from around the world. Our dedication to personalized service, attention to detail, and deep local knowledge has made us a preferred choice for those seeking authentic Indian travel experiences..</p>
            </div>
            
          </div>
          <Link to="/About" className="learn-more-btn">
            Learn More..
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;

