import React from 'react';
import Map from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Marker = ({ lat, lng }) => <i style={{ marginTop: '-20px' }} className="fa fa-map-marker fa-2x text-primary" />;

const defaultCenter = { lat: 59.938043, lng: 30.337157 };
const defaultZoom = 9;

const GoogleMap = ({ children, center, zoom, key, ...rest }) => (
  <Map
    defaultCenter={defaultCenter}
    center={center}
    defaultZoom={defaultZoom}
    zoom={zoom}
    bootstrapURLKeys={{
      key: key || process.env.GM_KEY,
    }}
    {...rest}
  >
    <AnyReactComponent
      lat={59.955413}
      lng={30.337844}
      text="Kreyser Avrora"
    />
    {children}
  </Map>
);
GoogleMap.defaultProps = {
  center: defaultCenter,
  zoom: defaultZoom,
};
GoogleMap.Marker = Marker;
export default GoogleMap;
