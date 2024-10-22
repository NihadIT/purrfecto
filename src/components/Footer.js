import React from "react";
import "../components/Footer.css";
import Container from "./Container";
import logo from "../assets/images/logo_v2.png";

function Footer() {
  return (
    <Container>
      <div className="footer">
        <div className="footer__contacts">
          <div className="footer__wrapper">
            <div className="contacts">
              <div className="contacts__column contacts__column--flex">
                <div className="contacts__logo">
                  <div className="logo">
                    <a href="/">
                      <img src={logo} alt className="logo__img" />
                    </a>
                  </div>
                </div>
                <div className="contacts__menu">
                  <nav className="menu-contacts">
                    <ul className="menu-contacts__list">
                      <li className="menu-contacts__item menu-contacts__item">
                        <a href="/" className="menu-contacts__link">
                          <span>Главная</span>
                        </a>
                      </li>
                      <li className="menu-contacts__item menu-contacts__item">
                        <a href="/" className="menu-contacts__link">
                          <span>Продукты</span>
                        </a>
                      </li>
                      <li className="menu-contacts__item menu-contacts__item">
                        <a href="/" className="menu-contacts__link">
                          <span>О бренде</span>
                        </a>
                      </li>
                      <li className="menu-contacts__item menu-contacts__item">
                        <a href="/" className="menu-contacts__link">
                          <span>Акции</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="contacts__column contacts__column--flex contacts__column--pt">
                <div className="contacts__tel">
                  <div className="tel">
                    <div className="tel__label">Телефон горячей линии:</div>
                    <a href="tel:0505724428" className="tel__link">
                      <span>+994 50 572 44 28</span>
                    </a>
                  </div>
                </div>
                <div className="contacts__work-time">
                  <div className="work-time">
                    <div className="work-time__label">
                      Звонки по Азербайджану бесплатно, понедельник-пятница
                    </div>
                    <div className="work-time__time">с 9:00 до 18:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="copyright__text">
                © 2024 ООО «Purrfecto». Все права защищены.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
