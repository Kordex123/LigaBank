import L from 'leaflet';
import { DeviceType } from '../../hocs/with-device';
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
    case DeviceType.MOBILE:
      return [29, 33];
    case DeviceType.TABLET:
    case DeviceType.DESKTOP:
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
  [DeviceType.MOBILE]: 5,
  [DeviceType.TABLET]: 6,
  [DeviceType.DESKTOP]: 4.5,
};

const mapCenter = {
  [DeviceType.MOBILE]: {
    lat: 58.39,
    lng: 78.38,
  },
  [DeviceType.TABLET]: {
    lat: 58.39,
    lng: 78.38,
  },
  [DeviceType.DESKTOP]: {
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
