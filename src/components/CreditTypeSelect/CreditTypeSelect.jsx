import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './CreditTypeSelect.scss';

class CreditTypeSelect extends PureComponent {
  constructor(props) {
    super(props);
    this.options = [
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
    // this.state = {
    //   selectedOption: null,
    // };
    const commonOptionStyles = {
      width: '100%',
      // height: '60px',
      padding: '12px 35px 12px 13px',
      textAlign: 'left',
      backgroundColor: 'transparent',
      color: '#1f1e25',
      borderBottom: '1px solid #c1c2ca',
      letterSpacing: '0.02em',
      // '@media only screen and (min-width: 1024px)' : {
      //   fontSize: ''
      // }
    };

    const selectedValue = {
      borderColor: '#1f1e25',
      backgroundColor: 'transparent',
    };

    this.customStyles = {
      control: (baseStyles) => ({
        ...baseStyles,
        ...commonOptionStyles,
        ...selectedValue,
        fontWeight: 700,
        letterSpacing: '-0.02em',
      }),
      option: (baseStyles) => ({
        ...baseStyles,
        ...commonOptionStyles,
        fontWeight: 400,
      }),
      placeholder: (baseStyles) => ({
        ...baseStyles,
        // ...commonOptionStyles,
        fontWeight: 700,
        color: '#1f1e25',
      }),
    };
    this.onSelectChangeHandler = this.onSelectChangeHandler.bind(this);
  }

  onSelectChangeHandler(selectedOption) {
    const { onSelectChange } = this.props;
    onSelectChange(selectedOption.value);

    // this.setState({
    //   selectedOption,
    // });
  }

  render() {
    return (
      <Select
        label="Опции кредита"
        options={this.options}
        styles={this.customStyles}
        onChange={this.onSelectChangeHandler}
        className="credit-type"
        classNamePrefix="react-select"
        isSearchable={false}
        placeholder="Выберите цель кредита"
        // menuIsOpen
      />
    );
  }
}

CreditTypeSelect.defaultProps = {
  onSelectChange: () => {},
};

CreditTypeSelect.propTypes = {
  onSelectChange: PropTypes.func,
};

export default CreditTypeSelect;
