import React, { Component, PropTypes } from 'react';
import { GoogleMap } from '@olymp/adonis';
import { Input } from '@olymp/adonis/edits';
import { useBlockBase, useBlockResize, useBlockAlign, useBlockToolbar } from '@olymp/adonis/slate';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

const Marker = ({ lat, lng }) => <i style={{marginTop:'-20px'}} className="fa fa-map-marker fa-2x text-primary" />

const defaultAddress = { lat: 59.724465, lng: 30.080121 };
const actions = props => [{
  type: 'gmap.url',
  icon: 'picture-o',
  toggle: () => {
    const { setData, getData, client } = props;
    const current = getData('address');
    const address = window.prompt('Adresse', current ? current.formattedAddress : '');

    if (address) {
      client.query({
        query: gql`query geocode { item: geocode(address:"${address}") { formattedAddress, lat, lng } }`, /* eslint-disable-line no-undef */
        forceFetch: true,
      }).then(x => setData({ address: x.data.item }));
    };
  },
  active: false,
}];

@withApollo
@useBlockBase({ isVoid: true })
@useBlockAlign()
@useBlockResize({ ratio: 7 / 4, coverOnResize: true })
@useBlockToolbar({ actions, remove: true, move: true })
export default class GoogleMapBlock extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    attributes: PropTypes.object,
    getData: PropTypes.func,
  }
  static defaultProps = {
    center: defaultAddress,
    zoom: 16,
  }
  static title = 'GoogleMap';
  static icon = 'map';

  onChangeText = value => {
  }

  render() {
    const { style, getData, className, children, isFocused, attributes } = this.props;
    const address = getData('address', defaultAddress);

    const styles = {
      backgroundColor: 'gray',
      width: '100%',
      height: '100%',
      position: 'relative',
      ...style,
    };

    return (
      <div {...attributes} style={styles} className={className} data-block-active={isFocused}>
        <GoogleMap center={address} zoom={this.props.zoom}>
          <Marker {...address} />
        </GoogleMap>
        {children}
      </div>
    );
  }
}
