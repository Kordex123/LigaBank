import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Link } from 'react-router-dom';
import withExpanded from '../../hocs/withExpanded';

const Header = ({ expanded, onExpandedChange }) => {
  const expandedClass = expanded ? 'expanded' : '';
  return (
    <header className="header">
      <div className="header__menu">
        <button className="header__burger burger" type="button" onClick={() => onExpandedChange(true)}>
          <svg className="burger__image" aria-label="Burger menu icon" width="16" height="12" viewBox="0 0 16 12" fill="1f1e25" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H16M0 6H16M0 11H16" stroke="#1F1E25" strokeLinejoin="round" />
          </svg>
        </button>
        <img className="header__logo-image" src="img/header/liga-bank-image.svg" width="18" height="17" alt="Изображение логотипа фирмы Лига Банк" />
        <img className="header__logo" src="img/header/liga-bank-title.svg" width="89" height="11" alt="Название-логотип фирмы Лига Банка" />
      </div>
      <nav className={`header__nav ${expandedClass}`}>
        <ul className="header__nav-list site-list">
          <li className="site-list__item">
            <Link className="site-list__link" to="services">
              Услуги
            </Link>
          </li>
          <li className="site-list__item">
            <Link className="site-list__link" to="credit">
              Рассчитать кредит
            </Link>
          </li>
          <li className="site-list__item">
            <Link className="site-list__link" to="currency-converter">
              Конвертер валют
            </Link>
          </li>
          <li className="site-list__item">
            <Link className="site-list__link" to="contacts">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`header__actions ${expandedClass}`}>
        <button className={`header__login login ${expandedClass}`} type="button">
          <svg
            className={`login__image ${expandedClass}`}
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="1f1e25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.55556 10.4H3.11111V14.4H12.4444V1.6H3.11111V5.6H1.55556V0.8C1.55556 0.587827 1.6375 0.384344 1.78336 0.234315C1.92922 0.0842854 2.12705 0 2.33333 0H13.2222C13.4285 0 13.6263 0.0842854 13.7722 0.234315C13.9181 0.384344 14 0.587827 14 0.8V15.2C14 15.4122 13.9181 15.6157 13.7722 15.7657C13.6263 15.9157 13.4285 16 13.2222 16H2.33333C2.12705 16 1.92922 15.9157 1.78336 15.7657C1.6375 15.6157 1.55556 15.4122 1.55556 15.2V10.4ZM6.22222 7.2V4.8L10.1111 8L6.22222 11.2V8.8H0V7.2H6.22222Z"
              fill="#1F1E25"
            />
          </svg>
          <span className={`login__description ${expandedClass}`}>Войти в Интернет-банк</span>
        </button>
      </div>
      <button className={`header__close-menu close ${expandedClass}`} type="button" onClick={() => onExpandedChange(false)}>
        <svg className="close__image" width="13" height="13" aria-label="Close menu icon" viewBox="0 0 15 15" fill="1f1e25" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7.5 7.5M14 14L7.5 7.5M7.5 7.5L14 1L1 14" stroke="#011C40" strokeWidth="2" />
        </svg>
      </button>
    </header>
  );
};

Header.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onExpandedChange: PropTypes.func.isRequired,
};

export default withExpanded(Header);
