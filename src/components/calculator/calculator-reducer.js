const ActionType = {
  UPDATE_LOAN_TYPE: 'UPDATE_LOAN_TYPE',
  UPDATE_COST: 'UPDATE_COST',
  UPDATE_DOWN_PAYMENT: 'UPDATE_DOWN_PAYMENT',
  UPDATE_PERIOD: 'UPDATE_PERIOD',
  TOGGLE_MATERNITY_CAPITAL: 'TOGGLE_MATERNITY_CAPITAL',
  TOGGLE_AC_INSURANCE: 'TOGGLE_AC_INSURANCE',
  TOGGLE_LIFE_INSURANCE: 'TOGGLE_LIFE_INSURANCE',
  INCREMENT_APP_NO: 'INCREMENT_APP_NO',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
};

const calculatorFieldType = {
  COST: 'cost',
  DOWN_PAYMENT: 'downPayment',
  PERIOD: 'period',
};

const defaultPropsByLoanType = {
  mortgage: {
    cost: 2000000,
    downPayment: 200000,
    period: 5,
    isMaternityCapital: true,
    appNo: 10,
    hasError: {
      cost: false,
      downPayment: false,
      period: false,
    },
  },
  car: {
    cost: 500000,
    downPayment: 100000,
    period: 1,
    isACInsurance: true,
    isLifeInsurance: true,
    appNo: 10,
    hasError: {
      cost: false,
      downPayment: false,
      period: false,
    },
  },
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.UPDATE_LOAN_TYPE:
      return {
        loanType: action.payload.loanType,
        ...defaultPropsByLoanType[action.payload.loanType],
      };
    case ActionType.UPDATE_COST:
      return {
        ...state,
        cost: action.payload.cost,
      };
    case ActionType.UPDATE_DOWN_PAYMENT:
      return {
        ...state,
        downPayment: action.payload.downPayment,
      };
    case ActionType.UPDATE_PERIOD:
      return {
        ...state,
        period: action.payload.period,
      };
    case ActionType.TOGGLE_MATERNITY_CAPITAL:
      return {
        ...state,
        isMaternityCapital: !state.isMaternityCapital,
      };
    case ActionType.TOGGLE_AC_INSURANCE:
      return {
        ...state,
        isACInsurance: !state.isACInsurance,
      };
    case ActionType.TOGGLE_LIFE_INSURANCE:
      return {
        ...state,
        isLifeInsurance: !state.isLifeInsurance,
      };
    case ActionType.INCREMENT_APP_NO:
      return {
        ...state,
        appNo: state.appNo + 1,
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        hasError: {
          ...state[action.payload.fieldType],
          [action.payload.fieldType]: action.payload.hasError,
        },
      };
    default:
      return state;
  }
};

export {
  ActionType,
  calculatorFieldType,
  reducer,
};
