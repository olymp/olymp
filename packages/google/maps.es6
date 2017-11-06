import React from 'react';
import { createComponent } from 'olymp-fela';
import ReactMap from 'google-map-react';

const defaultCenter = { lat: 59.938043, lng: 30.337157 };
const defaultZoom = 9;

const StyledMap = createComponent(
  () => ({
    height: '100%',
    width: '100%',
    '& *': {
      overflow: 'visible',
    },
  }),
  ({ className, options, ...rest }) => (
    <div className={className}>
      <ReactMap
        options={{
          minZoomOverride: true,
          minZoom: 2,
          ...(options || {}),
        }}
        {...rest}
      />
    </div>
  ),
  p => Object.keys(p),
);

const Marker = createComponent(
  ({ theme, active, $hover, onHover }) => ({
    display: 'block',
    fill: active ? theme.color : theme.dark2,
    // opacity: !onHover || active || $hover ? 1 : 0.8,
    cursor: !!onHover && 'pointer',
  }),
  ({ className, onHover }) => (
    <svg
      onMouseOver={onHover}
      className={className}
      width={40}
      height={40}
      viewBox="0 0 1792 1792"
    >
      <path d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z" />
    </svg>
  ),
  p => Object.keys(p),
);

const GoogleMap = ({ children, center, zoom, key, ...rest }) => (
  <StyledMap
    defaultCenter={defaultCenter}
    center={center}
    defaultZoom={defaultZoom}
    zoom={zoom}
    bootstrapURLKeys={{ key }}
    {...rest}
  >
    {children}
  </StyledMap>
);
GoogleMap.defaultProps = {
  center: defaultCenter,
  zoom: defaultZoom,
  key: process.env.GOOGLE_MAPS_KEY,
};
GoogleMap.Marker = Marker;
export default GoogleMap;
