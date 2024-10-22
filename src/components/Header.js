import React, { useState, useEffect } from "react";
import "./Header.css";
import Container from './Container';
import logo from "../assets/images/logo_v2.png"; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <Container>
      <div className="header">
        <div className="header__body">
          <div className="header__logo">
            <div className="logo">
              <a href="/" className="logo__link">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <div className="header__menu">
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    <span>ГЛАВНАЯ</span>
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#/products" className="menu__link">
                    <span>ПРОДУКТЫ</span>
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#/about" className="menu__link">
                    <span>О НАС</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="/" className="menu__link" onClick={toggleMenu}>
                  <span>ГЛАВНАЯ</span>
                </a>
              </li>
              <li className="menu__item">
                <a href="#/products" className="menu__link" onClick={toggleMenu}>
                  <span>ПРОДУКТЫ</span>
                </a>
              </li>
              <li className="menu__item">
                <a href="#/about" className="menu__link" onClick={toggleMenu}>
                  <span>О НАС</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
}

export default Header;
