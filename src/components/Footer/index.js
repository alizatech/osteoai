import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <div className="Footer-left">
          <h2>Osteo <span className="highlight">Aid</span></h2>
          <p>Transforming the future of osteoarthritis care.</p>
        </div>
        <div className="Footer-right">
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="Footer-bottom">
        <p>© 2024 Osteo Aid. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
