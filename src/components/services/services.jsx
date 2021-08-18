import React from 'react';
import Slider from 'react-slick';
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PropTypes from 'prop-types';
import Service from '../service/service';
import { withDevice } from '../../hocs/with-device';
import offers from './offers';
import './services.scss';

const Services = ({ isMobile }) => {
  const sliderSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: 'slides',
  };

  return (
    <div id="services" className="services">
      {isMobile
        ? (
          <Slider {...sliderSettings}>
            {offers.map((offer) => <Service key={offer.id} {...offer} />)}
          </Slider>
        ) : (
          <Tabs>
            <TabList className="services__tab-list">
              {offers.map(({ id, category }) => <Tab className={`services__tab services__tab--${id}`} key={id}>{category}</Tab>)}
            </TabList>
            {offers.map((offer) => (
              <TabPanel key={offer.id}>
                <Service {...offer} />
              </TabPanel>
            ))}
          </Tabs>
        )}
    </div>
  );
};

Services.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};

export default withDevice(Services);
