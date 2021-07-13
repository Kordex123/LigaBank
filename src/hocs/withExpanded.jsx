import React, { PureComponent } from 'react';

const withExpanded = (Component) => {
  class WithExpanded extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        expanded: false,
      };

      this.onExpandedChangeHandler = (expanded) => {
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

  return WithExpanded;
};

export default withExpanded;
