import React, { useState } from 'react';

function Tours() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const featuredTours = [
    {
      id: 1,
      title: "Golden Triangle Tour (Delhi – Agra – Jaipur)",
      images: [
        "Red_fort.webp",
        "src/images/Cover-TajMahal.webp",
        "pink_city.webp",
      ],
      highlights: [
        "Dive into Delhi’s culture and cuisine",
        "Visit the majestic Taj Mahal",
        "Explore Jaipur's royal palaces",
        
      ],
    },
    {
      id: 2,
      title: "Himalayan Bike Adventure (Kalka – Shimla – Lahaul Spiti – Dharamshala)",
      images: [
        "shimla.webp",
        "Real_shimla.webp",
        "dharamshala.webp",
      ],
      highlights: [
        "Ride scenic mountain highways",
        "Camp under the stars",
        "Experience Tibetan monasteries & local culture",
      ],
    },
    {
      id: 3,
      title: "Char Dham Yatra",
      images: [
        "Yamunotri.webp",
        "Gangotri.webp",
        "char-dham.webp",
      ],
      highlights: [
        "Seek blessings at 4 sacred temples",
        "Enjoy breathtaking Himalayan views",
        "Spiritual rejuvenation in Rishikesh",
      ],
    },
    {
      id: 4,
      title: "Agra to Jaipur & Rajasthan Tour (Agra – Jaipur)",
      images: [
        "Golden_tri.webp",
        "Jaipur.webp",
        "Rajasthan.webp",
      ],
      highlights: [
        "Witness sunrise at the Taj Mahal",
        "Visit Pink City's forts & palaces",
        "Desert charm of Pushkar & Jaisalmer",
      ],
    },
  ];

  const styles = {
    sectionHero: {
      backgroundImage: "url('Tour_TajMahal.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '550px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '15px',
    },
    overlay: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    heroText: {
      textAlign: 'center',
      color: '#fff',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '10px',
      color: 'white',
    },
    subheading: {
      fontSize: '1.4rem',
      margin: '0',
      color: 'white',
    },
    tourContainer: {
      padding: '60px 20px',
      backgroundColor: '#f0f4f8',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    tourGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr', // One card per row
      gap: '30px',
    },
    tourCard: {
      background: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      textAlign: 'center',
    },
    tourHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
    },
    imageGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr', // Three images side by side
      gap: '10px',
      marginBottom: '1rem',
    },
    tourImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    tourTitle: {
      fontSize: '1.8rem',
      color: '#1e3a8a',
      margin: '1rem 0 0.5rem',
      fontWeight: '600',
    },
    highlightList: {
      paddingLeft: '20px',
      color: '#333',
      fontSize: '1rem',
      textAlign: 'left',
      marginBottom: '1rem',
    },
    bookBtn: {
      display: 'inline-block',
      padding: '10px 20px',
      backgroundColor: '#3b82f6',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '25px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s, transform 0.2s',
    },
    bookHover: {
      backgroundColor: '#1e40af',
      transform: 'translateY(-2px)',
    },
  };

  // Function to open WhatsApp
  const handleBookNow = (tourId) => {
    const phoneNumber = "9899817968";
    const tour = featuredTours.find(t => t.id === tourId);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(tour.title)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <section style={styles.sectionHero}>
        <div style={styles.overlay}>
          <div style={styles.heroText}>
            <h2 style={styles.heading}>Discover India's Most Popular Trips</h2>
            <p style={styles.subheading}>Curated Experiences for Unforgettable Journeys</p>
          </div>
        </div>
      </section>

      <div style={styles.tourContainer}>
        <div style={styles.tourGrid}>
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              style={{
                ...styles.tourCard,
                ...(hoveredCard === tour.id ? styles.tourHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(tour.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.imageGrid}>
                {tour.images.map((image, index) => (
                  <img key={index} src={image} alt={`${tour.title} - Place ${index + 1}`} style={styles.tourImage} />
                ))}
              </div>
              <h3 style={styles.tourTitle}>{tour.title}</h3>
              <ul style={styles.highlightList}>
                {tour.highlights.map((highlight, index) => (
                  <li key={index}>• {highlight}</li>
                ))}
              </ul>
              <a
                href={`/book/${tour.id}`}
                style={{
                  ...styles.bookBtn,
                  ...(hoveredCard === tour.id ? styles.bookHover : {}),
                }}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tours;