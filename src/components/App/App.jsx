import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.scss';
import Header from '../Header/Header';
import PromoSlider from '../PromoSlider/PromoSlider';
import Services from '../Services/Services';
import Calculator from '../Calculator/Calculator';
import calculatorConfig from '../Calculator/constants';
import Branches from '../Branches/Branches';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Message from '../Message/Message';

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
