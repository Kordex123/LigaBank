import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PromoSlider.scss';
import slides from './slides';
// import { Link } from "react-router-dom";

class PromoSlider extends PureComponent {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: 'slides',
    };

    return (
      <Slider {...settings}>
        { slides.map((slide) => (
          <section className="promo-slider" key={slide.id}>
            <div className="container promo-slider__wrapper">
              <h2 className={`promo-slider__title promo-slider__title--${slide.id}`}>Лига Банк</h2>
              <p className={`promo-slider__text promo-slider__text--${slide.id}`}>{slide.text}</p>
              { slide.buttonText && (<a className={`button promo-slider__link promo-slider__link--${slide.id}`} href={slide.id}>{slide.buttonText}</a>)}
            </div>
            <picture className="promo-slider__image-container">
              <source media="(min-width: 1024px)" srcSet={slide.urlDesktop} />
              <source media="(min-width: 768px)" srcSet={slide.urlTablet} />
              <img className={`promo-slider__image promo-slider__image--${slide.id}`} src={slide.urlMobile} alt={slide.description} />
            </picture>
          </section>
        ))}
      </Slider>
    );
  }
}

export default PromoSlider;
