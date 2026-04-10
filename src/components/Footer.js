import React from 'react';
import { NavLink } from 'react-router-dom';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/gausatechnology' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/gausa-technology' },
  { label: 'X', href: 'https://x.com/home' },
  { label: 'Fiverr', href: 'https://www.fiverr.com/' },
  { label: 'Freelancer', href: 'https://www.freelancer.in/' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelance-jobs/' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <h3>Gausa Technology</h3>
          <p>
            A dedicated external client team delivering product strategy, design,
            and engineering for fast-moving businesses.
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
            <NavLink to="/pricing">Pricing</NavLink>
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
        <span>© {new Date().getFullYear()} Gausa Technology. All rights reserved.</span>
        <span>Built for external client partners worldwide.</span>
      </div>
    </footer>
  );
}

export default Footer;
