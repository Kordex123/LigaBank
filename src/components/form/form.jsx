import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import InputMask from 'react-input-mask';
import { ActionType, MessageContentTypes } from '../message/message-reducer';
import './form.scss';
import { toNumberWithSpaces } from '../../utils/number-utils';
import { declinateWordByCount, YEAR_DECLENSIONS } from '../../utils/declination-utils';

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.onFullNameChangeHandler = this.onFullNameChangeHandler.bind(this);
    this.onPhoneChangeHandler = this.onPhoneChangeHandler.bind(this);
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.state = {
      fullName: '',
      phone: '',
      email: '',
    };
  }

  componentDidMount() {
    scroller.scrollTo('form');
  }

  onFullNameChangeHandler(event) {
    this.setState({ fullName: event.target.value });
  }

  onPhoneChangeHandler(event) {
    this.setState({ phone: event.target.value });
  }

  onEmailChangeHandler(event) {
    this.setState({ email: event.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const { incrementAppNo, showMessage } = this.props;
    incrementAppNo();

    const { fullName, phone, email } = this.state;
    localStorage.setItem('UserData', JSON.stringify({ fullName, phone, email }));

    showMessage(MessageContentTypes.Contact);
  }

  render() {
    const {
      cost, downPayment, period, loanType, appNo, config,
    } = this.props;
    const { fullName, phone, email } = this.state;
    return (
      <section className="form">
        <h3 className="form-title">Шаг 3. Оформление заявки</h3>
        <form className="form__app" action="https://echo.htmlacademy.ru" method="POST" onSubmit={this.onSubmitHandler}>
          <fieldset className="form__subsection form__subsection--credit-terms">
            <p className="form__item">
              <input className="form__value" name="app-number" id="app-number" value={`№ ${appNo.toString().padStart(4, 0)}`} readOnly />
              <label className="form__text" htmlFor="app-number">Номер заявки</label>
            </p>
            <p className="form__item">
              <input className="form__value" name="app-purpose" id="app-purpose" value={config[loanType].text.form} readOnly />
              <label className="form__text" htmlFor="app-purpose">Цель кредита</label>
            </p>
            <p className="form__item">
              <input className="form__value" name="app-cost" id="app-cost" value={`${toNumberWithSpaces(cost)} рублей`} readOnly />
              <label className="form__text" htmlFor="app-cost">{`Стоимость ${config[loanType].text.cost}`}</label>
            </p>
            <p className="form__item">
              <input className="form__value" name="app-down-payment" id="app-down-payment" value={`${toNumberWithSpaces(downPayment)} рублей`} readOnly />
              <label className="form__text" htmlFor="app-down-payment">Первоначальный взнос</label>
            </p>
            <p className="form__item">
              <input className="form__value" name="app-credit-period" id="app-credit-period" value={`${period} ${declinateWordByCount(period, YEAR_DECLENSIONS)}`} readOnly />
              <label className="form__text" htmlFor="app-credit-period">Срок кредитования</label>
            </p>
          </fieldset>
          <fieldset className="form__subsection form__subsection--person">
            <p className="form__person-item form__person-item--full-name">
              <input
                className=" frame form__person-value form__person-value--full-name"
                name="full-name"
                id="full-name"
                placeholder="ФИО"
                pattern="([A-Za-z]+\s){1,2}[A-Za-z]+"
                title="Фамилия Имя Отчество"
                required
                onChange={this.onFullNameChangeHandler}
                value={fullName}
                autoComplete="off"
              />
              <label className="visually-hidden" htmlFor="full-name">Фамилия Имя Отчество</label>
            </p>
            <p className="form__person-item form__person-item--phone">
              <InputMask
                className="frame form__person-value form__person-value--phone"
                mask="+7 (999) 999-99-99"
                name="phone"
                id="phone"
                placeholder="Телефон"
                required
                onChange={this.onPhoneChangeHandler}
                value={phone}
              />
              <label className="visually-hidden" htmlFor="phone">Номер телефона</label>
            </p>
            <p className="form__person-item form__person-item--email">
              <input
                className="frame form__person-value form__person-value--phone--email"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                required
                onChange={this.onEmailChangeHandler}
                value={email}
                autoComplete="off"
              />
              <label className="visually-hidden" htmlFor="email">Электронный адрес</label>
            </p>
          </fieldset>
          <input className="button button--dark form__submit" type="submit" value="Отправить" />
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cost: PropTypes.number.isRequired,
  downPayment: PropTypes.number.isRequired,
  period: PropTypes.number.isRequired,
  loanType: PropTypes.string.isRequired,
  appNo: PropTypes.number.isRequired,
  incrementAppNo: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
  config: PropTypes.shape({
    mortgage: PropTypes.shape({
      text: PropTypes.shape({
        result: PropTypes.string,
        form: PropTypes.string,
        cost: PropTypes.string,
      }),
    }),
    car: PropTypes.shape({
      text: PropTypes.shape({
        result: PropTypes.string,
        form: PropTypes.string,
        cost: PropTypes.string,
      }),
    }),
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  showMessage: (payload) => {
    dispatch({
      type: ActionType.SHOW_MESSAGE,
      payload,
    });
  },
});

export default connect(null, mapDispatchToProps)(Form);
