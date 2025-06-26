function Tours() {
  const tourData = [
    {
      id: 1,
      title: "Rajasthan Adventure",
      description: "Explore the royal palaces and deserts of Rajasthan.",
      image: "/assets/images/rajasthan-adventure.jpg",
    },
    {
      id: 2,
      title: "Goa Beaches",
      description: "Relax on the sunny beaches of Goa.",
      image: "/assets/images/goa-beaches.jpg",
    },
    {
      id: 3,
      title: "Himalayan Trek",
      description: "Embark on an adventure in the Himalayas.",
      image: "/assets/images/himalayan-trek.jpg",
    },
  ];

  const toursPageStyle = {
    padding: '60px 0',
    backgroundColor: '#f0f4f8',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#1e3a8a',
    marginBottom: '2rem',
    fontWeight: '600',
    textAlign: 'center',
  };

  const tourGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
  };

  const tourCardStyle = {
    background: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  };

  const tourCardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
  };

  const tourImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
  };

  const tourTitleStyle = {
    fontSize: '1.5rem',
    color: '#2b2b2b',
    margin: '1rem 0 0.5rem',
  };

  const tourDescriptionStyle = {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '1rem',
  };

  const bookBtnStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#3b82f6',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '25px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
  };

  const bookBtnHoverStyle = {
    backgroundColor: '#1e40af',
    transform: 'translateY(-2px)',
  };

  return (
    <div style={toursPageStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Explore Our Tours</h2>
        <div style={tourGridStyle}>
          {tourData.map((tour) => (
            <div
              key={tour.id}
              style={tourCardStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, tourCardHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, tourCardStyle)}
            >
              <img src={tour.image} alt={tour.title} style={tourImageStyle} />
              <h3 style={tourTitleStyle}>{tour.title}</h3>
              <p style={tourDescriptionStyle}>{tour.description}</p>
              <a
                href={`/book/${tour.id}`}
                style={bookBtnStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, bookBtnHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, bookBtnStyle)}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tours;