import React from 'react';

function Trips() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url(https://komaltourindia.github.io/komal-tour-india/images/trips.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '100px 20px',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Our Trips</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
          Explore our curated trips for unforgettable experiences across India.
        </p>
      </section>

      {/* Trips List */}
      <section style={{ maxWidth: '1200px', margin: '50px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>Featured Trips</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
          }}
        >
          {/* Trip 1 */}
          <div
            style={{
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://komaltourindia.github.io/komal-tour-india/images/trip1.jpg"
              alt="Golden Triangle"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Golden Triangle Tour</h3>
              <p>
                Discover Delhi, Agra, and Jaipur with our classic Golden Triangle itinerary.
              </p>
            </div>
          </div>

          {/* Trip 2 */}
          <div
            style={{
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://komaltourindia.github.io/komal-tour-india/images/trip2.jpg"
              alt="Rajasthan Tour"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Rajasthan Heritage Tour</h3>
              <p>
                Explore royal palaces, vibrant bazaars, and desert landscapes in Rajasthan.
              </p>
            </div>
          </div>

          {/* Trip 3 */}
          <div
            style={{
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://komaltourindia.github.io/komal-tour-india/images/trip3.jpg"
              alt="South India Tour"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>South India Temple Tour</h3>
              <p>
                Experience Dravidian architecture, ancient temples, and rich culture in the south.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          textAlign: 'center',
          backgroundColor: '#f8f8f8',
          padding: '60px 20px',
          marginTop: '50px',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
          Ready for your next adventure?
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 30px' }}>
          Contact us today to plan a customized trip with Komal Tour India.
        </p>
        <a
          href="/contact"
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#e67e22',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default Trips;
