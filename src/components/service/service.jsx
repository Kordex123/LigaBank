import React from 'react';
import PropTypes from 'prop-types';
import './service.scss';
import { HashLink as Link } from 'react-router-hash-link';

const Service = ({
  id,
  title,
  options,
  url,
  imageDescription,
  info,
  link,
}) => (
  <section className="service" key={id}>
    <h2 className={`service__title service__title--${id}`}>
      {title}
    </h2>
    <picture className="service__image-container">
      <source type="image/webp" media="(min-width: 1024px)" srcSet={`${url.desktopWebp} 1x, ${url.desktopRetinaWebp} 2x`} />
      <source type="image/webp" media="(min-width: 768px)" srcSet={`${url.tabletWebp} 1x, ${url.tabletRetinaWebp} 2x`} />
      <source type="image/webp" media="(min-width: 320px)" srcSet={`${url.mobileWebp} 1x, ${url.mobileRetinaWebp} 2x`} />
      <source media="(min-width: 1024px)" srcSet={`${url.desktop} 1x, ${url.desktopRetina} 2x`} />
      <source media="(min-width: 768px)" srcSet={`${url.tablet} 1x, ${url.tabletRetina} 2x`} />
      <img className={`service__image service__image--${id}`} src={url.mobile} srcSet={`${url.mobileRetina} 2x`} alt={imageDescription} />
    </picture>
    <div className="service__list">
      {options.map(({ id: optionId, text }) => (
        <p key={optionId} className={`service__option service__option--${optionId}`}>
          {text}
        </p>
      ))}
    </div>
    {info && (
      <p className={`service__info service__info--${id}`}>
        {info.desc}
        <Link className="service__info-highlight" to={`#${id}`}>{info.link}</Link>
      </p>
    )}
    {link && (<Link className="button button--dark service__link" to={link}>Узнать подробнее</Link>)}
  </section>
);

Service.propTypes = {
  id: PropTypes.string.isRequired,
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  url: PropTypes.shape({
    desktop: PropTypes.string.isRequired,
    desktopWebp: PropTypes.string.isRequired,
    desktopRetina: PropTypes.string.isRequired,
    desktopRetinaWebp: PropTypes.string.isRequired,
    tablet: PropTypes.string.isRequired,
    tabletWebp: PropTypes.string.isRequired,
    tabletRetina: PropTypes.string.isRequired,
    tabletRetinaWebp: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    mobileWebp: PropTypes.string.isRequired,
    mobileRetina: PropTypes.string.isRequired,
    mobileRetinaWebp: PropTypes.string.isRequired,
  }).isRequired,
  imageDescription: PropTypes.string.isRequired,
  info: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

Service.defaultProps = {
  info: null,
  link: null,
};

export default Service;
