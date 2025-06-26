function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <h1>About Komal Tours</h1>
        <div className="about-content">
          <img src="src/images/Dwarf002.jpg" alt="About Komal Tours" className="about-image" />
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              For over 35 years, I have had the privilege of showing travelers the incredible beauty, rich culture, and hidden gems of India. What started as a passion has grown into a lifetime commitment to creating unforgettable experiences for our guests. Through the years, we have earned the trust of thousands of visitors from around the world. Our dedication to personalized service, attention to detail, and deep local knowledge has made us a preferred choice for those seeking authentic Indian travel experiences.
            </p>
          </div>  
          <div className="Experience-text">
            <h2>Experience & Legacy</h2>
            <p>
              With over 35+ years of experience, Komal Tour India has been a trusted name in the travel industry, crafting unforgettable journeys across North India and beyond. Over the years, we have served thousands of satisfied travelers, delivering exceptional experiences with our expertise and deep understanding of India's diverse landscapes and cultures.

Our long-standing presence in the industry is a testament to the trust and satisfaction of our customers. Whether it's the royal palaces of Rajasthan, the serene valleys of Himachal, or the spiritual ghats of Varanasi, we bring you journeys filled with comfort, adventure, and authenticity.
            </p>
          </div>
          <div className="Mission-text">
            <h2>Our Missions & Vision</h2>
            <p>
              
              <li>To be the most reliable and innovative travel company, providing personalized tours that inspire and delight every traveler.</li>
              <li>To make travel across India effortless and memorable, ensuring that every journey we curate leaves an everlasting impact on our travelers.</li>
              
            </p>
          </div>
        </div>
{/* 35 + Years of Experience */}
        <section className="Experience-section">
        <div className="Experience-container">
          <h2>Our 35+ Years Of Experience</h2>
          <div className="Experience-grid">
            <div className="Experience-card">
              <img src="src/images/Temple-Tour.jpg" alt="Temple Tour" />
              <h3>Temple Tour</h3>
            </div>
            <div className="Experience-card">
              <img src="src/images/Shopping-Assistance.jpg" alt=" Shoppping assist Images" />
              <h3> Shopping Assistance </h3>
            </div>
            <div className="Experience-card">
              <img src="src/images/Authentic-Food.jpg" alt=" Authentic Food " />
              <h3> Authentic Food</h3>
            </div>
            <div className="Experience-card">
              <img src="src/images/School-Charity.jpg" alt=" School Charity " />
              <h3> School Charity</h3>
            </div>

            <div className="Experience-card">
              <img src="src/images/tajmahal.webp" alt=" Taj Mahal" />
              <h3> Taj Mahal</h3>
            </div>
            <div className="Experience-card">
              <img src="src/images/Village-Tour.jpg" alt=" Village Tour" />
              <h3> Village Tour </h3>
            </div>
            <div className="Experience-card">
              <img src="src/images/Trip-Assistance.jpg" alt=" Trip Assistance " />
              <h3>Trip Guidance & Assistance</h3>
            </div>
            <div className="Experience-card">
              <img src="src/images/Airport-Assistance.jpg" alt=" Airport Assistance " />
              <h3> Airport Assistance </h3>
            </div>
            
          </div>
        </div>
      </section>


        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="/assets/images/team1.jpg" alt="Team Member 1" />
              <h3>Komal Sharma</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-card">
              <img src="/assets/images/team2.jpg" alt="Team Member 2" />
              <h3>Rahul Verma</h3>
              <p>Head of Operations</p>
            </div>
            <div className="team-card">
              <img src="/assets/images/team3.jpg" alt="Team Member 3" />
              <h3>Priya Singh</h3>
              <p>Tour Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;