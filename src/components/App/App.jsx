import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import PromoSlider from '../PromoSlider/PromoSlider';

const App = () => (
  <>
    <Header />
    <main className="main-page">
      <h1 className="visually-hidden">Страница Интернет-банка Лига Банк</h1>
      <PromoSlider />
    </main>
    <div className="footer" />
  </>
);

export default App;
