import React from "react";
import "../pages/Products.css";
import { Fade } from "react-awesome-reveal";
import Carousel from "../components/Carousel";
import Container from "../components/Container";
import prod from "../assets/images/blocks/products/prod.png";
import { products_products } from "../assets/images/images";

function Products() {
  return (
    <Container>
      <div className="page">
        <div className="products">
          <div className="skew-block">
            <Fade triggerOnce>
              <div className="skew-block__block">
                <div className="skew-block__description">
                  <div className="skew-block__title title">
                    <span>PURRFECTO</span>
                  </div>
                  <div className="skew-block__text text">
                    <span>
                      В нашем зоомагазине вы найдете широкий ассортимент товаров
                      для домашних животных: от качественного корма и лакомств
                      до стильных аксессуаров и игрушек. Мы заботимся о здоровье
                      и счастье ваших питомцев!
                    </span>
                  </div>
                </div>
                <div className="skew-block__img">
                  <img src={prod} alt="prod" />
                </div>
              </div>
            </Fade>
          </div>
          <div className="products__product-slider">
            <div className="product">
              <div className="product__block">
                <Fade triggerOnce>
                  <div className="products_title">
                    <span className="title">все продукты</span>
                  </div>
                  <Carousel images={products_products} />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Products;
