import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <img src="src/images/komalorg.jpg" alt="Komal Tour India Logo"  style={{ height: '80px' }} />
        <div className="logo">Komal Tour India</div>
        
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/tours" className={({ isActive }) => (isActive ? 'active' : '')}>
              Tours
            </NavLink>
          </li>
          <li>
            <NavLink to="/trips" className={({ isActive }) => (isActive ? 'active' : '')}>
              Trips
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;