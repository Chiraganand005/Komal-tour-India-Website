import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{
        width: '100%',
        backgroundColor: '#1e3a8a',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        padding: '10px 0',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="src/images/komalorg.jpg"
            alt="Komal Tour India Logo"
            style={{
              height: '65px',
              width: '85px',
              borderRadius: '65%',
              objectFit: 'cover',
              border: '2px solid #333',
              marginRight: '10px',
            }}
          />
          <span
            style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'white',
              letterSpacing: '1px',
            }}
          >
            Komal Tour India
          </span>
        </div>

        {/* Hamburger button for small screens */}
        <button
          onClick={toggleMenu}
          style={{
            display: 'none', // hidden by default, shown via media query below
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '25px',
            height: '20px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          id="hamburger-button"
        >
          <span
            style={{ height: '3px', width: '100%', backgroundColor: 'white' }}
          ></span>
          <span
            style={{ height: '3px', width: '100%', backgroundColor: 'white' }}
          ></span>
          <span
            style={{ height: '3px', width: '100%', backgroundColor: 'white' }}
          ></span>
        </button>

        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '20px',
            margin: 0,
            padding: 0,
          }}
          className="navbar-links"
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
              style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? 'active' : '')}
              style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Services"
              className={({ isActive }) => (isActive ? 'active' : '')}
              style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Tours"
              className={({ isActive }) => (isActive ? 'active' : '')}
              style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}
            >
              Tours
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Trips"
              className={({ isActive }) => (isActive ? 'active' : '')}
              style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}
            >
              Trips
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? 'active' : '')}
              style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Responsive dropdown menu */}
      {isMenuOpen && (
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            margin: 0,
            padding: '20px',
            backgroundColor: '#fff',
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
          className="mobile-menu"
        >
          <li>
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AboutUs"
              onClick={() => setIsMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Services"
              onClick={() => setIsMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Tours"
              onClick={() => setIsMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}
            >
              Tours
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Trips"
              onClick={() => setIsMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}
            >
              Trips
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              onClick={() => setIsMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}

      {/* Inline responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .navbar-links {
              display: none !important;
            }
            #hamburger-button {
              display: flex !important;
            }
          }


           @media (max-width: 768px) {
      .navbar-links {
        display: none !important;
      }
      #hamburger-button {
        display: flex !important;
      }
    }
    .navbar-links li a,
    .mobile-menu li a {
      color: #333; /* default dark text */
      transition: all 0.3s ease;
    }
    .navbar-links li a:hover,
    .mobile-menu li a:hover {
      background-color: #e67e22; /* premium orange button feel */
      color: #fff; /* white text for perfect contrast */
      padding: 8px 12px;
      border-radius: 4px;
    }
      .navbar-links li a.active,
.mobile-menu li a.active {
  border-bottom: 2px solid #e67e22; /* active page ke niche orange underline */
  font-weight: 600; /* active link thoda bold bhi lage */
  padding-bottom: 4px; /* underline aur text ke beech gap */
}
           
    
    
  `}  
        
      </style>
    </nav>
  );
}

export default Navbar;
