import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './credit-type-select.scss';
import {
  options as creditTypeSelectOptions, commonOptionStyles, selectedValue, placeholder,
} from './credit-type-select-config';

class CreditTypeSelect extends PureComponent {
  constructor(props) {
    super(props);
    this.onSelectChangeHandler = this.onSelectChangeHandler.bind(this);
  }

  onSelectChangeHandler(selectedOption) {
    const { onSelectChange } = this.props;
    onSelectChange(selectedOption.value);
  }

  render() {
    const { options, customStyles } = this.props;
    return (
      <Select
        label="Опции кредита"
        options={options}
        styles={customStyles}
        onChange={this.onSelectChangeHandler}
        className="credit-type"
        classNamePrefix="react-select"
        isSearchable={false}
        placeholder="Выберите цель кредита"
      />
    );
  }
}

CreditTypeSelect.defaultProps = {
  onSelectChange: () => {},
  options: creditTypeSelectOptions,
  customStyles: {
    control: (baseStyles) => ({
      ...baseStyles,
      ...commonOptionStyles,
      ...selectedValue,
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      ...commonOptionStyles,
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      ...placeholder,
    }),
  },
};

CreditTypeSelect.propTypes = {
  onSelectChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    }),
  ),
  customStyles: PropTypes.shape({
    control: PropTypes.func,
    option: PropTypes.func,
    placeholder: PropTypes.func,
  }),
};

export default CreditTypeSelect;
