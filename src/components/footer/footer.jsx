import React from 'react';
import './footer.scss';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper container">
      <svg className="footer__logo-image" role="img" aria-label="Лого интернет банка" width="113" height="16" viewBox="0 0 114 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref="img/footer/liga-logo.svg#liga-logo-footer" />
      </svg>
      <ul className="footer__service-list">
        <li className="footer__service-item">
          <Link className="footer__service-link" to="#services"><strong>Услуги</strong></Link>
        </li>
        <li className="footer__service-item">
          <Link className="footer__service-link" to="#credit"><strong>Рассчитать кредит</strong></Link>
        </li>
        <li className="footer__service-item">
          <Link className="footer__service-link" to="#branch"><strong>Контакты</strong></Link>
        </li>
        <li className="footer__service-item">
          <Link className="footer__service-link" to="feedback"><strong>Задать вопрос</strong></Link>
        </li>
      </ul>
      <div className="footer__licence">
        <address className="footer__licence-right footer__licence-right--address">150015, г. Москва, ул. Московская, д. 32</address>
        <p className="footer__licence-right footer__licence-right--number"> Генеральная лицензия Банка России №1050</p>
        <p className="footer__licence-right footer__licence-right--date">Ⓒ Лига Банк, 2019</p>
      </div>
      <div className="footer__phone-wrapper footer__phone-wrapper--mobile">
        <a className="footer__phone footer__phone--mobile" href="tel:*904">*0904</a>
        <p className="footer__phone-description footer__phone-description--mobile">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
      </div>
      <div className="footer__phone-wrapper footer__phone-wrapper--for-all">
        <a className="footer__phone footer__phone--for-all" href="tel:88001112233">8 800 111 22 33</a>
        <p className="footer__phone-description footer__phone-description--for-all">Бесплатный для всех городов России</p>
      </div>
      <ul className="footer__social-list">
        <li className="footer__social-item footer__social-item--facebook">
          <Link className="footer__social-link" to="facebook">
            <svg className="footer__social-image footer__social-image--facebook" aria-label="Посетите нас на facebook" width="9" height="16" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="img/footer/facebook-icon.svg#facebook-image" />
            </svg>
          </Link>
        </li>
        <li className="footer__social-item footer__social-item--instagram">
          <Link className="footer__social-link" to="instagram">
            <svg className="footer__social-image footer__social-image--instagram" aria-label="Посетите нас на instagram" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="img/footer/instagram-icon.svg#instagram-image" />
            </svg>
          </Link>
        </li>
        <li className="footer__social-item footer__social-item--twitter">
          <Link className="footer__social-link" to="twitter">
            <svg className="footer__social-image footer__social-image--twitter" aria-label="Посетите нас на Twitter" width="16" height="13" viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="img/footer/twitter-icon.svg#twitter-image" />
            </svg>
          </Link>
        </li>
        <li className="footer__social-item footer__social-item--youtube">
          <Link className="footer__social-link" to="youtube">
            <svg className="footer__social-image footer__social-image--youtube" aria-label="Посетите нас на Youtube" width="16" height="13" viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="img/footer/youtube-icon.svg#youtube-image" />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
