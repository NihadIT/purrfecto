import React from "react";
import "../pages/Home.css";
import { Fade } from "react-awesome-reveal";
import Container from "../components/Container";
import Slider from "../components/Slider";
import Carousel from "../components/Carousel";
import { products_home } from "../assets/images/images";

function Home() {
  return (
    <Container>
      <div className="page">
        <div className="home">
          <div className="slider">
            <Fade triggerOnce>
              <Slider />
            </Fade>
          </div>
          <Fade triggerOnce>
            <div className="product">
              <div className="product__block">
                <Carousel images={products_home} />
              </div>
            </div>
          </Fade>
          <div className="skew-block">
            <Fade triggerOnce>
              <div className="skew-block__block">
                <div className="skew-block__description">
                  <div className="skew-block__title title">
                    <span>ОТБОРНОЕ</span>
                    <span>КАЧЕСТВО</span>
                  </div>
                  <div className="skew-block__text text">
                    <span>
                      Наши корма и лакомства тщательно сушатся в горячем
                      воздухе, что делает их не только вкусными, но и полезными
                      для здоровья ваших питомцев. Мы заботимся о том, чтобы
                      каждое лакомство было максимально свежим, натуральным и
                      хрустящим, обеспечивая вашим любимцам радость и пользу в
                      каждом кусочке!
                    </span>
                  </div>
                  <div className="skew-block__btn">
                    <a href="/about" className="button">
                      <span>узнать больше</span>
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
