import React, { Component, PropTypes } from 'react';
import Map from 'google-map-react';

export default class GoogleMap extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  }
  render() {
    const { children, center, zoom, ...rest } = this.props;

    return (
      <Map defaultCenter={center} center={center} defaultZoom={zoom} zoom={zoom} {...rest}>
        {children}
      </Map>
    );
  }
}
