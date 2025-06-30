import React, { useState } from 'react';

function Trips() {
  const [hoverContact, setHoverContact] = useState(false);

  const trips = [
    {
      title: "Golden Triangle Tour",
      image: "src/images/South_india_temple.webp",
      description: "Explore Delhi, Agra, and Jaipur with our classic Golden Triangle itinerary. Experience India's rich heritage with comfortable stays and guided tours.",
    },
    {
      title: "Rajasthan Heritage Tour",
      image: "src/images/raj_heritage.webp",
      description: "Discover the royal charm of Rajasthan's forts, palaces, and vibrant markets. Perfect for culture enthusiasts and history buffs.",
    },
    {
      title: "South India Temple Tour",
      image: "src/images/trips_img.png",
      description: "Marvel at Dravidian architecture, ancient temples, and rich cultural traditions. A spiritual and cultural journey through southern India.",
    },
  ];

  const styles = {
    hero: {
      backgroundImage: 'url("src/images/Trips_img.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center',
      color: '#fff',
      padding: '120px 20px',
      borderRadius: '15px',
    },
    heroHeading: {
      fontSize: '3rem',
      marginBottom: '20px',
    },
    heroSub: {
      fontSize: '1.6rem',
      maxWidth: '750px',
      margin: '0 auto',
    },
    container: {
      maxWidth: '1200px',
      margin: '50px auto',
      padding: '0 20px',
    },
    tripGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
    card: {
      background: '#fff',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s',
      textAlign: 'center',
    },
    cardImg: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardTitle: {
      fontSize: '1.8rem',
      color: '#1e3a8a',
      margin: '20px 0 10px',
      fontWeight: '600',
    },
    cardDesc: {
      fontSize: '1rem',
      color: '#555',
      padding: '0 20px 20px',
    },
    contactSection: {
      textAlign: 'center',
      backgroundColor: '#f8f8f8',
      padding: '60px 20px',
      marginTop: '50px',
    },
    contactHeading: {
      fontSize: '2rem',
      marginBottom: '20px',
    },
    contactText: {
      fontSize: '1.2rem',
      maxWidth: '700px',
      margin: '0 auto 30px',
    },
    contactBtn: {
      display: 'inline-block',
      padding: '15px 30px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: hoverContact ? '#cf711f' : '#e67e22',
      textDecoration: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s, transform 0.2s',
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      transform: hoverContact ? 'translateY(-2px)' : 'translateY(0)',
    },
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 2.2rem !important;
            }
            h2 {
              font-size: 1.6rem !important;
            }
            p {
              font-size: 1rem !important;
            }
            button {
              padding: 12px 20px !important;
              font-size: 0.9rem !important;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 1.8rem !important;
            }
            h2 {
              font-size: 1.4rem !important;
            }
            p {
              font-size: 0.9rem !important;
            }
            button {
              padding: 10px 18px !important;
              font-size: 0.85rem !important;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroHeading}>Unforgettable Journeys, Timeless Memories</h1>
        <p style={styles.heroSub}>Relive the best moments from our incredible tours across India!</p>
      </section>

      {/* Trips Grid */}
      <section style={styles.container}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '40px' }}>Featured Trips</h2>
        <div style={styles.tripGrid}>
          {trips.map((trip, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img src={trip.image} alt={trip.title} style={styles.cardImg} />
              <h3 style={styles.cardTitle}>{trip.title}</h3>
              <p style={styles.cardDesc}>{trip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <h2 style={styles.contactHeading}>Ready for your next adventure?</h2>
        <p style={styles.contactText}>
          Contact us today to plan a customized trip with Komal Tour India.
        </p>
        <button
          onClick={() => {
            const phoneNumber = "9899817968";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20trips.`;
            window.open(whatsappUrl, '_blank');
          }}
          onMouseEnter={() => setHoverContact(true)}
          onMouseLeave={() => setHoverContact(false)}
          style={styles.contactBtn}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default Trips;
