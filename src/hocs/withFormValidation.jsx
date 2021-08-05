import React, { PureComponent } from 'react';

const withFormValidation = (Component) => {
  class WithFormValidation extends PureComponent {
    constructor(props) {
      super(props);

      // this.state = {
      //   invalidField: false,
      // };

      this.onFormValidationHandler = (expanded) => {
        this.setState({ expanded });
      };
    }

    render() {
      const { expanded } = this.state;
      return (
        <Component
          expanded={expanded}
          onExpandedChange={this.onExpandedChangeHandler}
        />
      );
    }
  }

  return WithFormValidation;
};

export default withFormValidation;
