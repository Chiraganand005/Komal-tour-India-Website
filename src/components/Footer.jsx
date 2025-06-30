import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#1a1a1a',
      color: '#f2f2f2',
      padding: '40px 20px 0',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '20px',
    },
    column: {
      flex: '1 1 200px',
      minWidth: '200px',
    },
    columnHeading: {
      fontSize: '1.2rem',
      color: '#f1c40f',
      marginBottom: '15px',
    },
    link: {
      display: 'block',
      color: '#f2f2f2',
      textDecoration: 'none',
      marginBottom: '8px',
      fontSize: '0.95rem',
    },
    iconText: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      fontSize: '0.95rem',
    },
    icon: {
      marginRight: '10px',
      color: '#f1c40f',
    },
    bottom: {
      borderTop: '1px solid #444',
      textAlign: 'center',
      padding: '20px',
      fontSize: '0.85rem',
      marginTop: '30px',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '10px',
      fontSize: '1.5rem',
    },
    socialLink: {
      color: '#f2f2f2',
      transition: 'color 0.3s',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Popular Tours */}
        <div style={styles.column}>
          <h4 style={styles.columnHeading}>Popular Tours</h4>
          <a href="/Trips#Rajasthan-Heritage-Tour" style={styles.link}>Rajasthan Heritage Tour</a>
          <a href="/Trips#Agra_Jaipur" style={styles.link}>Delhi-Agra-Jaipur</a>
          <a href="/Tours#Himalayan-trek" style={styles.link}>Himalayan Bike Adventures</a>
          <a href="/Tours#Golden-triangle-tour" style={styles.link}>Golden Triangle Tour</a>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.columnHeading}>Quick Links</h4>
          <a href="/" style={styles.link}>Home</a>
          <a href="/about" style={styles.link}>About Us</a>
          <a href="/services" style={styles.link}>Services</a>
          <a href="/Tours" style={styles.link}>Tours</a>
        </div>

        {/* Contact Info */}
        <div style={styles.column}>
          <h4 style={styles.columnHeading}>Contact Info</h4>
          <div style={styles.iconText}><span style={styles.icon}>📍</span>Ballabgarh, Faridabad (Haryana) 121004</div>
          <div style={styles.iconText}><span style={styles.icon}>📞</span>+91 9958164882</div>
          <div style={styles.iconText}><span style={styles.icon}>✉️</span>contactus.komaltourindia@gmail.com</div>
        </div>

        {/* About Us */}
        <div style={styles.column}>
          <h4 style={styles.columnHeading}>About Us</h4>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            Komal Tour India acts as an integrator of the travel industry in India by providing one-stop, end-to-end solutions for your every travel & comfort need.
          </p>
          <div style={styles.socialIcons}>
            <a href="https://www.facebook.com/profile.php?id=61570273687955" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/komaltourindia/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaInstagram />
            </a>
            <a href="mailto:contactus.komaltourindia@gmail.com" style={styles.socialLink}>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        ©2025, All Rights Reserved, Komal Tour India | Developed by He_who_code with ❤️
      </div>
    </footer>
  );
}

export default Footer;
