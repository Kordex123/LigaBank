import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './promo-slider.scss';
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
            id, text, buttonText, description, url,
          }) => (
            <section className="promo-slide" key={id}>
              <div className="container promo-slide__wrapper">
                <h2 className={`promo-slide__title promo-slide__title--${id}`}>Лига Банк</h2>
                <p className={`promo-slide__text promo-slide__text--${id}`}>{text}</p>
                { buttonText && (<Link className={`button promo-slide__link promo-slide__link--${id}`} to={`#${id}`}><strong>{buttonText}</strong></Link>)}
              </div>
              <picture className="promo-slide__image-container">
                <source type="image/webp" media="(min-width: 1024px)" srcSet={`${url.desktopWebp} 1x, ${url.desktopRetinaWebp} 2x`} />
                <source type="image/webp" media="(min-width: 768px)" srcSet={`${url.tabletWebp} 1x, ${url.tabletRetinaWebp} 2x`} />
                <source type="image/webp" media="(min-width: 320px)" srcSet={`${url.mobileWebp} 1x, ${url.mobileRetinaWebp} 2x`} />
                <source media="(min-width: 1024px)" srcSet={`${url.desktop} 1x, ${url.desktopRetina} 2x`} />
                <source media="(min-width: 768px)" srcSet={`${url.tablet} 1x, ${url.tabletRetina} 2x`} />
                <img className={`promo-slide__image promo-slide__image--${id}`} src={url.mobile} srcSet={`${url.mobileRetina} 2x`} alt={description} />
              </picture>
            </section>
          ))}
        </Slider>
      </section>
    );
  }
}

export default PromoSlider;
