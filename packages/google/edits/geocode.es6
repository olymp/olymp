import React, { Component } from 'react';
import { AutoComplete, Input } from 'antd';
import { throttleInput } from 'olymp-utils';
import { FaNeuter } from 'olymp-icons';
import { withApollo, graphql } from 'react-apollo';
import { compose, withState } from 'recompose';
import { get } from 'lodash';
import gql from 'graphql-tag';

const enhance = compose(
  withApollo,
  withState('lat', 'setLat'),
  withState('lng', 'setLng'),
  graphql(
    gql`
      query geocodeList($address: String!) {
        geocodeList(address: $address, region: "DE", language: "DE") {
          id
          streetNumber
          route
          locality
          administrativeAreaLevel1
          administrativeAreaLevel2
          country
          postalCode
          formattedAddress
          lat
          lng
          locationType
          partialMatch
          types
        }
      }
    `,
    {
      options: ({ lat, lng }) => ({
        skip: lat === undefined || lng === undefined,
        variables: {
          address: `${lat}, ${lng}`,
        },
      }),
      props: ({ ownProps, data }) => ({
        ...ownProps,
        value: get(data, 'geocodeList[0]', {}),
      }),
    },
  ),
  withState('items', 'setItems', []),
);

@enhance
export default class GeocodeEditor extends Component {
  static defaultProps = {
    value: null,
  };

  onAdd = code => {
    const { onChange, items } = this.props;

    this.text = null;
    const item = items.find(x => x.id === code);
    onChange(item);
  };
  throttle = throttleInput(500);

  handleSearch = term => {
    this.text = term;

    if (term) {
      this.throttle(() => {
        this.performSearch(term);
      });
    }
  };

  performSearch = address => {
    const { client, setItems } = this.props;

    return client
      .query({
        query: gql(`
            query geocodeList($address: String!) {
              geocodeList(address: $address, region: "DE", language: "DE") {
                id
                streetNumber
                route
                locality
                administrativeAreaLevel1
                administrativeAreaLevel2
                country
                postalCode
                formattedAddress
                lat
                lng
                locationType
                partialMatch
                types
              }
            }
          `),
        variables: {
          address,
        },
      })
      .then(({ data }) => {
        setItems(data.geocodeList);
      });
  };

  renderOption = ({ id, formattedAddress }) => (
    <AutoComplete.Option key={id} text={formattedAddress}>
      <div style={{ whiteSpace: 'initial', display: 'flex' }}>
        {formattedAddress}
      </div>
    </AutoComplete.Option>
  );

  render() {
    const { value, size, placeholder, items, setLat, setLng } = this.props;

    return (
      <AutoComplete
        value={this.text || (value ? value.formattedAddress : '')}
        style={{ width: '100%' }}
        dataSource={(items || []).map(this.renderOption)}
        onSelect={this.onAdd}
        onSearch={this.handleSearch}
        optionLabelProp="text"
      >
        <Input
          placeholder={placeholder || 'Suche ...'}
          size={size}
          suffix={
            <FaNeuter
              size={14}
              onClick={() => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(({ coords }) => {
                    setLat(coords.latitude);
                    setLng(coords.longitude);
                  });
                }
              }}
            />
          }
        />
      </AutoComplete>
    );
  }
}
