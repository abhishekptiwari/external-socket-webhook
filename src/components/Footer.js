import React from 'react';
import { NavLink } from 'react-router-dom';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/gausatechnology' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/gausa-technology' },
  { label: 'Fiverr', href: 'https://www.fiverr.com/' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelance-jobs/' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <h3>Gausa Technology</h3>
          <p>
            Building high-quality websites and apps for businesses worldwide.
          </p>
          <div className="footer__cta">
            <NavLink to="/contact" className="button button--ghost">
              Schedule a Call
            </NavLink>
          </div>
        </div>

        <div className="footer__links">
          <div>
            <span className="footer__title">Pages</span>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </div>
          <div>
            <span className="footer__title">Social</span>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Gausa Technology. All rights reserved. Since 2020.</span>
        <span>Building high-quality websites and apps for businesses worldwide.</span>
      </div>
    </footer>
  );
}

export default Footer;
