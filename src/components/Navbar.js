import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, toggleMenu } from '../features/ui/uiSlice';
import logo from '../assets/logo.jpg';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
];

function Navbar() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink
          to="/"
          className="navbar__brand"
          onClick={() => dispatch(closeMenu())}
          aria-label="Gausa Technology"
        >
          <span className="logo-glow">
            <img src={logo} alt="Gausa Technology logo" />
          </span>
        </NavLink>

        <button
          className="navbar__toggle"
          type="button"
          onClick={() => dispatch(toggleMenu())}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links ${isMenuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
              onClick={() => dispatch(closeMenu())}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-cta" onClick={() => dispatch(closeMenu())}>
            Start a Project
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
