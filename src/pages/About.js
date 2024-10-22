import React from "react";
import "./About.css";
import { Fade } from "react-awesome-reveal";
import Container from "../components/Container";
import skew_img from "../assets/images/blocks/about/wall_2.png";

function About() {
  return (
    <Container>
      <div className="page">
        <div className="about">
          <div className="about__philosophy">
            <div className="about-philosophy__body">
              <Fade triggerOnce>
                <div className="about-philosophy__column">
                  <div className="about-philosophy__content">
                    <div className="about-philosophy__title title">
                      <span>Наша философия</span>
                    </div>
                    <div className="about-philosophy__text text">
                      <p>
                        Мы тщательно отбираем продукцию, предлагая только то,
                        что прошло наши строгие стандарты качества и
                        безопасности.
                      </p>
                      <p>
                        Мы понимаем, насколько важны ваши питомцы, поэтому
                        каждый наш товар отобран с любовью и заботой.
                      </p>
                      <p>
                        Наша цель - сделать жизнь ваших домашних животных более
                        комфортной, здоровой и радостной.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="skew-block">
            <div className="skew-block__body">
              <div className="skew-block__column">
                <div className="skew-block__youtobe">
                  <img src={skew_img} alt="img" />
                </div>
              </div>
              <div className="skew-block__column">
                <div className="skew-block__content">
                  <Fade triggerOnce>
                    <div className="skew-block__info">
                      <div className="skew-block__title title">
                        <span>Качество PURRFECTO</span>
                      </div>
                      <div className="skew-block__text text">
                        <p>
                          Наш ассортимент включает продукцию от надежных
                          производителей, чтобы обеспечить здоровье и комфорт
                          ваших питомцев. Мы заботимся о ваших любимцах так же,
                          как и вы.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="video-block">
              <div className="video-block__title">PURINA® PRO PLAN®</div>
              <div className="video-block__body">
                <iframe
                  src="https://www.youtube.com/embed/oVV-NTRZOCA?si=9zWUCJFoaa-ZhAYj"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
