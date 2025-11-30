'use client';
import React, { useEffect } from 'react';

function MainNavbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  
  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }

  // Function to handle smooth scrolling to sections
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Close mobile menu if open
      if (document.querySelector('.navbar .navbar-collapse').classList.contains('show')) {
        document.querySelector('.navbar .navbar-collapse').classList.remove('show');
      }
    }
  };
  
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a 
          className="logo icon-img-100" 
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
        >
          <img src="/assets/imgs/logo-light.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"   
                href="#home"
                onClick={(e) => scrollToSection(e, 'home')}
              >
                <span className="rolling-text">About Us</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
              >
                <span className="rolling-text">Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
              >
                <span className="rolling-text">Team</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                <span className="rolling-text">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="#contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            <span className="text">Let&apos;s Talk</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;