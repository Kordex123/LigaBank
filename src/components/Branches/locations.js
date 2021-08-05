import L from 'leaflet';
import { DeviceTypes } from '../../hocs/withDevice';
import ligaLocationIcon from '../../assets/img/map/branch-icon.svg';

const locations = [
  {
    id: 'novosibirsk',
    center: {
      lat: 55.05,
      lng: 82.95,
    },
  },
  {
    id: 'omsk',
    center: {
      lat: 54.98,
      lng: 73.36,
    },
  },
  {
    id: 'surgut',
    center: {
      lat: 61.25,
      lng: 73.42,
    },
  },
  {
    id: 'tyumen',
    center: {
      lat: 57.15,
      lng: 65.53,
    },
  },
  {
    id: 'saratov',
    center: {
      lat: 51.53,
      lng: 46.03,
    },
  },
  {
    id: 'kazan',
    center: {
      lat: 55.78,
      lng: 49.12,
    },
  },
  {
    id: 'moscow',
    center: {
      lat: 55.76,
      lng: 37.62,
    },
  },
];

const getIconSize = (deviceType) => {
  switch (deviceType) {
    case DeviceTypes.Mobile:
      return [29, 33];
    case DeviceTypes.Tablet:
    case DeviceTypes.Desktop:
      return [35, 40];
    default:
      throw new Error(`unknown device type: ${deviceType}`);
  }
};

const getIconAnchor = (deviceType) => {
  const [width, height] = getIconSize(deviceType);
  return [width / 2, height];
};

const zoom = {
  [DeviceTypes.Mobile]: 5,
  [DeviceTypes.Tablet]: 6,
  [DeviceTypes.Desktop]: 4.5,
};

const mapCenter = {
  [DeviceTypes.Mobile]: {
    lat: 58.39,
    lng: 78.38,
  },
  [DeviceTypes.Tablet]: {
    lat: 58.39,
    lng: 78.38,
  },
  [DeviceTypes.Desktop]: {
    lat: 57.15,
    lng: 60.39,
  },
};

const getBranchIcon = (deviceType) => (
  new L.Icon({
    iconUrl: ligaLocationIcon,
    iconRetinaUrl: ligaLocationIcon,
    iconSize: getIconSize(deviceType),
    iconAnchor: getIconAnchor(deviceType),
    className: 'branches__icon-image',
  })
);

export {
  locations, getBranchIcon, zoom, mapCenter,
};
