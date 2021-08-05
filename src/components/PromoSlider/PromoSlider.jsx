import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PromoSlider.scss';
import { HashLink as Link } from 'react-router-hash-link';
import slides from './slides';

class PromoSlider extends PureComponent {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: 'slides',
    };

    return (
      <section className="promo-slider">
        <Slider {...settings}>
          { slides.map(({
            id, text, buttonText, urlDesktop, urlTablet, urlMobile, description,
            urlDesktopWebp, urlTabletWebp, urlMobileWebp,
          }) => (
            <section className="promo-slide" key={id}>
              <div className="container promo-slide__wrapper">
                <h2 className={`promo-slide__title promo-slide__title--${id}`}>Лига Банк</h2>
                <p className={`promo-slide__text promo-slide__text--${id}`}>{text}</p>
                { buttonText && (<Link className={`button promo-slide__link promo-slide__link--${id}`} to={`#${id}`}><strong>{buttonText}</strong></Link>)}
              </div>
              <picture className="promo-slide__image-container">
                <source media="(min-width: 1024px)" srcSet={urlDesktopWebp} />
                <source media="(min-width: 1024px)" srcSet={urlDesktop} />
                <source media="(min-width: 768px)" srcSet={urlTabletWebp} />
                <source media="(min-width: 768px)" srcSet={urlTablet} />
                <source media="(min-width: 320px)" srcSet={urlMobileWebp} />
                <img className={`promo-slide__image promo-slide__image--${id}`} src={urlMobile} alt={description} />
              </picture>
            </section>
          ))}
        </Slider>
      </section>
    );
  }
}

export default PromoSlider;
