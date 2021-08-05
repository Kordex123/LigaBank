import React from 'react';
import PropTypes from 'prop-types';
import './Branches.scss';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
  getBranchIcon, locations, mapCenter, zoom,
} from './locations';
import { DeviceTypes, withDevice } from '../../hocs/withDevice';

const Branches = ({ deviceType }) => (
  <section id="branch" className="branches container">
    <h2 className="branches__title">Отделения Лига Банка</h2>
    <MapContainer
      className="branches__map"
      center={mapCenter[deviceType]}
      zoom={zoom[deviceType]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      { locations.map(({ id, center: { lat, lng } }) => (
        <Marker className={`branches__location branches__location--${id}`} key={id} icon={getBranchIcon(deviceType)} position={[lat, lng]} />
      ))}
    </MapContainer>
  </section>
);

Branches.propTypes = {
  deviceType: PropTypes.oneOf(Object.values(DeviceTypes)).isRequired,
};

export default withDevice(Branches);
