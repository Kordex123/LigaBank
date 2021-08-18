import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './app.scss';
import Header from '../header/header';
import PromoSlider from '../promo-slider/promo-slider';
import Services from '../services/services';
import Calculator from '../calculator/calculator';
import calculatorConfig from '../calculator/constants';
import Branches from '../branches/branches';
import Footer from '../footer/footer';
import Login from '../login/login';
import Message from '../message/message';

const App = ({ isLoginVisible, isMessageVisible }) => (
  <>
    <Header />
    <main className="main-page">
      <h1 className="visually-hidden">Страница Интернет-банка Лига Банк</h1>
      <PromoSlider />
      <Services />
      <Calculator
        config={calculatorConfig}
      />
      <Branches />
    </main>
    <Footer />
    {isLoginVisible && (
      <Login />
    )}
    {isMessageVisible && (
      <Message />
    )}
  </>
);

App.propTypes = {
  isLoginVisible: PropTypes.bool.isRequired,
  isMessageVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoginVisible: state.login.isVisible,
  isMessageVisible: state.message.isVisible,
});

export default withRouter(connect(mapStateToProps, null)(App));
