import React, { PureComponent } from 'react';

const withPasswordHidden = (Component) => {
  class WithPasswordHidden extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPasswordHidden: true,
      };

      this.togglePasswordHiddenChangeHandler = () => {
        const { isPasswordHidden } = this.state;
        this.setState({ isPasswordHidden: !isPasswordHidden });
      };
    }

    render() {
      const { isPasswordHidden } = this.state;
      return (
        <Component
          isPasswordHidden={isPasswordHidden}
          togglePasswordHiddenChange={this.togglePasswordHiddenChangeHandler}
        />
      );
    }
  }

  return WithPasswordHidden;
};

export default withPasswordHidden;
