import React, { PureComponent } from 'react';
import {
  isDesktop, isMobile, deviceType,
} from 'react-device-detect';

const withDevice = (Component) => {
  class WithDevice extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isMobile,
        isDesktop,
        deviceType,
      };
    }

    render() {
      return (
        <Component
          {...this.state}
        />
      );
    }
  }

  return WithDevice;
};

const DeviceType = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'browser',
};

export { withDevice, DeviceType };
