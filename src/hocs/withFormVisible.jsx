import React, { PureComponent } from 'react';

const withFormVisible = (Component) => {
  class WithFormVisible extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        formVisible: false,
      };

      this.onFormVisibleChangeHandler = (formVisible) => {
        this.setState({ formVisible });
      };
    }

    render() {
      const { formVisible } = this.state;
      return (
        <Component
          formVisible={formVisible}
          onFormVisibleChange={this.onFormVisibleChangeHandler}
          {...this.props}
        />
      );
    }
  }

  return WithFormVisible;
};

export default withFormVisible;
