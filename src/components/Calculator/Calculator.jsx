import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import './Calculator.scss';
import ReactNumeric from 'react-numeric';
import ReactSlider from 'react-slider';
import { connect } from 'react-redux';
import { ActionType, calculatorFieldType } from './CalculatorReducer';
import { toNumber, toNumberWithSpaces } from '../../utils/number-utils';
import calculatorConfig from './constants';
import withFormVisible from '../../hocs/withFormVisible';
import Form from '../Form/Form';
import CreditTypeSelect from '../CreditTypeSelect/CreditTypeSelect';
import { pluralize, PERIOD_VARIANTS } from '../../utils/pluralize-utils';

const Calculator = (props) => {
  const {
    mortgageSum, interestRate, installment, income,
    loanType, updateLoanType, cost, updateCost,
    downPayment, downPaymentPercent, updateDownPayment, validateDownPayment,
    period, updatePeriod, validatePeriod,
    isMaternityCapital, toggleMaternityCapital,
    isACInsurance, isLifeInsurance, toggleACInsurance, toggleLifeInsurance,
    config,
    formVisible, onFormVisibleChange, appNo, incrementAppNo,
    hasError,
  } = props;

  const hasErrorClass = (type) => (
    hasError[type] ? 'error-parameter' : ''
  );
  const costRef = createRef();

  return (
    <section id="credit" className="calculator container">
      <h2 className="calculator__title">Кредитный калькулятор</h2>
      <div className="calculator__computation">
        <h3 className="calculator__step-title">Шаг 1. Цель кредита</h3>
        <label className="calculator__loan-type-title visually-hidden" htmlFor="loan-type">Опции кредита</label>
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <CreditTypeSelect onSelectChange={updateLoanType} />
        {loanType && (
          <>
            <h3 className="calculator__step-title calculator__step-title--parameters">Шаг 2. Введите параметры кредита</h3>
            <div className="calculator__parameter calculator__parameter--cost">
              <label className="calculator__parameter-title" htmlFor="property-cost">{`Стоимость ${config[loanType].text.cost}`}</label>
              <div className={`frame calculator__parameter-container ${hasErrorClass(calculatorFieldType.COST)}`}>
                <button
                  className="calculator__cost-change calculator__cost-change--dec"
                  type="button"
                  onClick={
                    () => {
                      updateCost(cost - config[loanType].cost.step, downPaymentPercent, config,
                        loanType, costRef);
                    }
                  }
                >
                  <svg className="calculator__image calculator__image--dec" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="16" y2="1" stroke="#1F1E25" strokeWidth="2" />
                  </svg>
                </button>
                <p>
                  <ReactNumeric
                    className="calculator__parameter-val calculator__parameter-val--property-cost"
                    name="property-cost"
                    id="property-cost"
                    ref={costRef}
                    value={cost}
                    minimumValue="0"
                    digitGroupSeparator=" "
                    decimalPlaces={0}
                    onBlur={(event) => (
                      updateCost(toNumber(event.target.value), downPaymentPercent, config,
                        loanType, costRef)
                    )}
                  />
                  <span>рублей</span>
                </p>
                <button
                  className="calculator__cost-change calculator__cost-change--inc"
                  type="button"
                  onClick={
                    // eslint-disable-next-line max-len
                    () => updateCost(cost + config[loanType].cost.step, downPaymentPercent, config,
                      loanType, costRef)
                  }
                >
                  <svg className="calculator__image calculator__image--inc" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H16M8 0V16" stroke="#1F1E25" strokeWidth="2" />
                  </svg>
                </button>
              </div>
              <p className="calculator__parameter-hint calculator__parameter-hint--cost">
                {`От ${toNumberWithSpaces(config[loanType].cost.min)} до ${toNumberWithSpaces(config[loanType].cost.max)} рублей`}
              </p>
            </div>
            <div className="calculator__parameter calculator__parameter--down-payment">
              <label className="calculator__parameter-title" htmlFor="down-payment">Первоначальный взнос</label>
              <ReactNumeric
                className="frame calculator__parameter-val"
                suffixText=" рублей"
                name="down-payment"
                id="down-payment"
                key="down-payment"
                value={downPayment}
                digitGroupSeparator=" "
                decimalPlaces={0}
                minimumValue="0"
                onChange={(event) => {
                  updateDownPayment(toNumber(event.target.value));
                }}
                onBlur={(event) => {
                  validateDownPayment(
                    toNumber(event.target.value), cost, config[loanType].downPayment.minPercent,
                  );
                }}
              />
              {/* </div> */}
              <div className="calculator__slider calculator__slider--down-payment">
                <ReactSlider
                  className="calculator__down-payment-range"
                  thumbClassName="calculator__slider-thumb calculator__slider-thumb--down-payment"
                  trackClassName="calculator__slider-track calculator__slider-track--down-payment"
                  value={downPaymentPercent}
                  step={config[loanType].downPayment.stepPercent}
                  min={config[loanType].downPayment.minPercent}
                  max={100}
                  id="down-payment-range"
                  onChange={(percent) => updateDownPayment((percent * cost) / 100, cost)}
                />
                <label className="calculator__parameter-hint calculator__parameter-hint--down-payment-range-label" htmlFor="down-payment-range">{`${downPaymentPercent.toFixed(0)} %`}</label>
              </div>
            </div>
            <div className="calculator__parameter calculator__parameter--period">
              <label className="calculator__parameter-title" htmlFor="credit-period">Срок кредитования</label>
              <ReactNumeric
                className="frame calculator__parameter-val"
                suffixText=" лет"
                name="credit-period"
                id="credit-period"
                value={period}
                minimumValue="0"
                decimalPlaces={0}
                wheelStep={1}
                onBlur={(event) => {
                  validatePeriod(toNumber(event.target.value), config[loanType].period);
                }}

              />
              <div className="calculator__slider calculator__slider--period">
                <ReactSlider
                  className="calculator__credit-period-range"
                  thumbClassName="calculator__slider-thumb calculator__slider-thumb--credit-period"
                  trackClassName="calculator__slider-track calculator__slider-track--credit-period"
                  value={period}
                  min={config[loanType].period.minYears}
                  max={config[loanType].period.maxYears}
                  step={config[loanType].periodStep}
                  id="credit-period-range"
                  onChange={updatePeriod}
                />
                <label className="calculator__parameter-hint calculator__parameter-hint--period-label" htmlFor="credit-period-range">
                  <span className="calculator__hint">{`${period} ${pluralize(period, PERIOD_VARIANTS)}`}</span>
                  <span className="calculator__hint">{`${config[loanType].period.maxYears} лет`}</span>
                </label>
              </div>
            </div>
            <div className="calculator__discount">
              { loanType === 'mortgage'
                ? (
                  <p>
                    <input
                      className="visually-hidden calculator__discount-val"
                      type="checkbox"
                      id="maternal-capital"
                      name="maternal-capital"
                      defaultChecked={isMaternityCapital}
                      onChange={toggleMaternityCapital}
                    />
                    <label className="calculator__discount-label" htmlFor="maternal-capital">
                      <span className="calculator__discount-desc">Использовать материнский капитал</span>
                    </label>
                  </p>
                ) : (
                  <>
                    <p>
                      <input
                        className="visually-hidden calculator__discount-val"
                        type="checkbox"
                        id="ac-insurance"
                        name="ac-insurance"
                        defaultChecked={isACInsurance}
                        onChange={toggleACInsurance}
                      />
                      <label className="calculator__discount-label" htmlFor="ac-insurance">
                        <span className="calculator__discount-desc">Оформить КАСКО в нашем банке</span>
                      </label>
                    </p>
                    <p>
                      <input
                        className="visually-hidden calculator__discount-val"
                        type="checkbox"
                        id="life-insurance"
                        name="life-insurance"
                        defaultChecked={isLifeInsurance}
                        onChange={toggleLifeInsurance}
                      />
                      <label className="calculator__discount-label" htmlFor="life-insurance">
                        <span className="calculator__discount-desc">Оформить Страхование жизни в нашем банке</span>
                      </label>
                    </p>
                  </>
                )}
            </div>
          </>
        )}
      </div>
      {loanType && (
        mortgageSum > config[loanType].credit.min
          ? (
            <div className="calculator__result">
              <p className="calculator__result-title">Наше предложение</p>
              <div className="calculator__result-item calculator__result-item--mortgage">
                <p className="calculator__result-val calculator__result-val--sum">{`${toNumberWithSpaces(mortgageSum)} рублей`}</p>
                <p className="calculator__result-text">{`Сумма ${config[loanType].text.result}`}</p>
              </div>
              <div className="calculator__result-item calculator__result-item--rate">
                <p className="calculator__result-val calculator__result-val--rate">
                  {interestRate.toFixed(2)}
                  %
                </p>
                <p className="calculator__result-text">Процентная ставка</p>
              </div>
              <div className="calculator__result-item calculator__result-item--installment">
                <p className="calculator__result-val calculator__result-val--installment">{`${toNumberWithSpaces(installment.toFixed(0))} рублей`}</p>
                <p className="calculator__result-text">Ежемесячный платеж</p>
              </div>
              <div className="calculator__result-item calculator__result-item--income">
                <p className="calculator__result-val calculator__result-val--income">{`${toNumberWithSpaces(income.toFixed(0))} рублей`}</p>
                <p className="calculator__result-text">Необходимый доход</p>
              </div>
              <button
                className="button button--dark calculator__show-form"
                type="button"
                onClick={() => {
                  onFormVisibleChange(true);
                }}
              >
                Оформить заявку
              </button>
            </div>
          ) : (
            <div className="calculator__message container">
              <p className="calculator__message-title">{`Наш банк не выдаёт ипотечные кредиты меньше ${toNumberWithSpaces(config[loanType].credit.min)} рублей.`}</p>
              <p className="calculator__message-text">Попробуйте использовать другие параметры для расчёта.</p>
            </div>
          )
      )}
      {loanType && formVisible && (
        <Form
          loanType={loanType}
          cost={cost}
          downPayment={downPayment}
          period={period}
          appNo={appNo}
          incrementAppNo={incrementAppNo}
          config={config}
        />
      )}
    </section>
  );
};

const getInterestRate = (
  {
    loanType, cost, isACInsurance, isLifeInsurance,
  }, downPaymentPercent, config,
) => {
  if (!loanType) {
    return 0;
  }
  const interestRateConfig = config[loanType].interestRate;
  switch (loanType) {
    case 'mortgage':
      return downPaymentPercent < interestRateConfig.threshold
        ? interestRateConfig.belowThreshold
        : interestRateConfig.aboveThreshold;
    case 'car':
      if (isACInsurance && isLifeInsurance) {
        return interestRateConfig.insurance.cascoAndLife;
      }
      if (isACInsurance || isLifeInsurance) {
        return interestRateConfig.insurance.cascoOrLife;
      }
      return cost < interestRateConfig.standard.threshold
        ? interestRateConfig.standard.belowThreshold
        : interestRateConfig.standard.aboveThreshold;
    default:
      return 0;
  }
};

const getDiscount = ({ loanType, isMaternityCapital }, config) => {
  if (loanType === 'mortgage' && isMaternityCapital) {
    return config[loanType].maternityCapital;
  }
  return 0;
};

const validateInputValue = (cost, config, loanType, costRef) => {
  let errorMessage = null;

  if (cost < 0 || cost < config[loanType].cost.min) {
    errorMessage = `Некорректное значение.
    Введите сумму в диапазоне ${toNumberWithSpaces(config[loanType].cost.min)} - ${toNumberWithSpaces(config[loanType].cost.max)} руб.`;
  } else if (cost > config[loanType].cost.max) {
    errorMessage = `Некорректное значение.
    Введите цену в диапазоне ${toNumberWithSpaces(config[loanType].cost.min)} - ${toNumberWithSpaces(config[loanType].cost.max)} руб.`;
  } else {
    costRef.current.input.setCustomValidity('');
  }
  if (errorMessage) {
    costRef.current.input.setCustomValidity(errorMessage);
    costRef.current.input.reportValidity();
    return false;
  }
  return true;
};

const mapStateToProps = (state, ownProps) => {
  const { downPayment, cost, period } = state.calculator;
  const downPaymentPercent = (downPayment / cost) * 100;
  const mortgageSum = cost - downPayment - getDiscount(state.calculator, ownProps.config);
  const interestRate = getInterestRate(state.calculator, downPaymentPercent, ownProps.config);
  const monthlyInterestRate = (interestRate / 100) / 12;
  const denominator = (((1 + monthlyInterestRate) ** (period * 12)) - 1);
  const installment = mortgageSum * (monthlyInterestRate + monthlyInterestRate / denominator);
  return ({
    ...state.calculator,
    ...ownProps,
    downPaymentPercent,
    mortgageSum,
    interestRate,
    installment,
    income: (installment * 100) / 45,
  });
};

const mapDispatchToProps = (dispatch) => ({
  updateDownPayment: (downPayment) => {
    dispatch({
      type: ActionType.UPDATE_DOWN_PAYMENT,
      payload: {
        downPayment,
      },
    });
  },
  validateDownPayment: (downPayment, cost, minPercent) => {
    dispatch({
      type: ActionType.UPDATE_DOWN_PAYMENT,
      payload: {
        downPayment: Math.min(Math.max(downPayment, (minPercent * cost) / 100), cost),
      },
    });
  },
  updateCost: (cost, downPaymentPercent, config, loanType, costRef) => {
    const isFieldValid = validateInputValue(cost, config, loanType, costRef);
    if (isFieldValid) {
      dispatch({
        type: ActionType.UPDATE_COST,
        payload: {
          cost,
        },
      });
      dispatch({
        type: ActionType.UPDATE_DOWN_PAYMENT,
        payload: {
          downPayment: (cost * downPaymentPercent) / 100,
        },
      });
    }
    dispatch({
      type: ActionType.SET_ERROR,
      payload: {
        fieldType: calculatorFieldType.COST,
        hasError: !isFieldValid,
      },
    });
  },
  updatePeriod: (period) => {
    dispatch({
      type: ActionType.UPDATE_PERIOD,
      payload: {
        period,
      },
    });
  },
  validatePeriod: (period, { minYears, maxYears }) => {
    dispatch({
      type: ActionType.UPDATE_PERIOD,
      payload: {
        period: Math.min(Math.max(period, minYears), maxYears),
      },
    });
  },
  updateLoanType: (loanType) => {
    dispatch({
      type: ActionType.UPDATE_LOAN_TYPE,
      payload: {
        loanType,
      },
    });
  },
  toggleMaternityCapital: () => {
    dispatch({
      type: ActionType.TOGGLE_MATERNITY_CAPITAL,
    });
  },
  toggleACInsurance: () => {
    dispatch({
      type: ActionType.TOGGLE_AC_INSURANCE,
    });
  },
  toggleLifeInsurance: () => {
    dispatch({
      type: ActionType.TOGGLE_LIFE_INSURANCE,
    });
  },
  incrementAppNo: () => {
    dispatch({
      type: ActionType.INCREMENT_APP_NO,
    });
  },
});

Calculator.defaultProps = {
  config: calculatorConfig,
  cost: null,
  downPayment: null,
  downPaymentPercent: null,
  period: null,
  isMaternityCapital: true,
  isACInsurance: true,
  isLifeInsurance: true,
  loanType: '',
  credit: 0,
  appNo: 0,
  hasError: {
    cost: false,
    downPayment: false,
    period: false,
  },
};

Calculator.propTypes = {
  cost: PropTypes.number,
  downPayment: PropTypes.number,
  downPaymentPercent: PropTypes.number,
  period: PropTypes.number,
  loanType: PropTypes.string,
  isMaternityCapital: PropTypes.bool,
  toggleMaternityCapital: PropTypes.func.isRequired,
  isACInsurance: PropTypes.bool,
  isLifeInsurance: PropTypes.bool,
  toggleACInsurance: PropTypes.func.isRequired,
  toggleLifeInsurance: PropTypes.func.isRequired,
  updateDownPayment: PropTypes.func.isRequired,
  validateDownPayment: PropTypes.func.isRequired,
  updateCost: PropTypes.func.isRequired,
  updateLoanType: PropTypes.func.isRequired,
  updatePeriod: PropTypes.func.isRequired,
  validatePeriod: PropTypes.func.isRequired,
  mortgageSum: PropTypes.number.isRequired,
  interestRate: PropTypes.number.isRequired,
  installment: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  credit: PropTypes.number,
  formVisible: PropTypes.bool.isRequired,
  onFormVisibleChange: PropTypes.func.isRequired,
  incrementAppNo: PropTypes.func.isRequired,
  appNo: PropTypes.number,
  hasError: PropTypes.shape({
    cost: PropTypes.bool,
    downPayment: PropTypes.bool,
    period: PropTypes.bool,
  }),
  config: PropTypes.shape({
    mortgage: PropTypes.shape({
      credit: PropTypes.shape({
        min: PropTypes.number,
      }),
    }),
    car: PropTypes.shape({
      credit: PropTypes.shape({
        min: PropTypes.number,
      }),
    }),
  }),
};

export default withFormVisible(connect(mapStateToProps, mapDispatchToProps)(Calculator));
