const options = [
  {
    label: 'Ипотечное кредитование',
    value: 'mortgage',
    className: 'calculator__loan-type-option',
  },
  {
    label: 'Автомобильное кредитование',
    value: 'car',
    className: 'calculator__loan-type-option',
  },
];

const commonOptionStyles = {
  width: '100%',
  padding: '12px 35px 12px 13px',
  textAlign: 'left',
  backgroundColor: 'transparent',
  color: '#1f1e25',
  borderBottom: '1px solid #c1c2ca',
  fontWeight: 400,
  // letterSpacing: '0.02em',
  // '@media only screen and (min-width: 1024px)' : {
  //   fontSize: ''
  // }
};

const selectedValue = {
  borderColor: '#1f1e25',
  backgroundColor: 'transparent',
  fontWeight: 700,
  letterSpacing: '-0.02em',
};

const placeholder = {
  fontWeight: 700,
  color: '#1f1e25',
};

export {
  options, commonOptionStyles, selectedValue, placeholder,
};
