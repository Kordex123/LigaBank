const config = {
  car: {
    cost: {
      min: 500000,
      max: 5000000,
      step: 50000,
    },
    downPayment: {
      minPercent: 20,
      stepPercent: 5,
    },
    period: {
      minYears: 1,
      maxYears: 5,
      step: 1,
    },
    interestRate: {
      standard: {
        threshold: 2000000,
        belowThreshold: 16,
        aboveThreshold: 15,
      },
      insurance: {
        cascoOrLife: 8.5,
        cascoAndLife: 3.5,
      },
    },
    credit: {
      min: 200000,
    },
    income: {
      threshold: 45,
    },
    text: {
      cost: 'автомобиля',
      result: 'автокредита',
      error: 'автокредиты',
      form: 'Автокредит',
    },
  },
  mortgage: {
    cost: {
      min: 1200000,
      max: 25000000,
      step: 100000,
    },
    downPayment: {
      minPercent: 10,
      stepPercent: 5,
    },
    interestRate: {
      threshold: 15,
      belowThreshold: 9.4,
      aboveThreshold: 8.5,
    },
    period: {
      minYears: 5,
      maxYears: 30,
      step: 1,
    },
    maternityCapital: 470000,
    credit: {
      min: 500000,
    },
    income: {
      threshold: 45,
    },
    text: {
      cost: 'недвижимости',
      result: 'ипотеки',
      error: 'ипотечные кредиты',
      form: 'Ипотека',
    },
  },
};

export default config;
