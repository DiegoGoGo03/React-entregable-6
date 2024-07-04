import React from 'react';
import './styles/footer.css';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <p>Academlo 2024</p>
      <button onClick={handleScrollToTop} className="scroll-to-top">
        ↑ Back to Top
      </button>
    </footer>
  );
};

export default Footer;

