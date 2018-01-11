import React, { Component } from 'react';
import { AutoComplete, Input } from 'antd';
import { get, debounce } from 'lodash';
import { FaNeuter } from 'olymp-icons';
import { withApollo, graphql } from 'react-apollo';
import { compose, withState } from 'recompose';
import gql from 'graphql-tag';

const enhance = compose(
  withApollo,
  withState('items', 'setItems', []),
  withState('lat', 'setLat', ({ lat }) => lat),
  withState('lng', 'setLng', ({ lng }) => lng),
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
);

@enhance
export default class GeocodeEditor extends Component {
  static defaultProps = {
    value: null,
  };

  onAdd = code => {
    const { items, client, onChange } = this.props;

    this.text = null;
    const { placeId } = items.find(x => x.id === code);

    client
      .query({
        query: gql(`
        query place($placeId: String!) {
          place(placeId: $placeId) {
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
          placeId,
        },
      })
      .then(({ data }) => onChange(data.place))
      .catch(err => console.log(err));
  };

  handleSearch = term => {
    this.text = term;

    if (term) {
      this.performSearch(term);
    }
  };


  performSearch = debounce(
    input => {
      const { client, setItems } = this.props;

      return client
        .query({
          query: gql(`
            query places($input: String!) {
              places(input: $input, lat: 50.103053, lng: 8.677393) {
                id
                placeId
                description
              }
            }
          `),
          variables: {
            input,
          },
        })
        .then(({ data }) => {
          setItems(data.places);
        });
    },
    500,
    { trailing: true, leading: false },
  );

  renderOption = ({ id, description }) => (
    <AutoComplete.Option key={id} text={description}>
      <div style={{ whiteSpace: 'initial', display: 'flex' }}>
        {description}
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
