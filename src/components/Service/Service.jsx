import React from 'react';
import PropTypes from 'prop-types';
import './Service.scss';
import { HashLink as Link } from 'react-router-hash-link';

const Service = ({
  id,
  title,
  options,
  urlDesktop,
  urlTablet,
  urlMobile,
  imageDescription,
  info,
  link,
}) => (
  <section className="service" key={id}>
    <h2 className={`service__title service-title--${id}`}>
      {title}
    </h2>
    <picture className="service__image-container">
      <source media="(min-width: 1024px)" srcSet={urlDesktop} />
      <source media="(min-width: 768px)" srcSet={urlTablet} />
      <img className={`service__image service__image--${id}`} src={urlMobile} alt={imageDescription} />
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
  urlDesktop: PropTypes.string.isRequired,
  urlTablet: PropTypes.string.isRequired,
  urlMobile: PropTypes.string.isRequired,
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
