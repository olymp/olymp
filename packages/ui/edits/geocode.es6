import React, { Component } from 'react';
import { Icon, AutoComplete, Input } from 'antd';
import { throttleInput } from 'olymp-utils';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

@withApollo
export default class GeosuggestEdit extends Component {
  static defaultProps = {
    value: null,
  };

  state = {
    items: [],
  };
  throttle = throttleInput(500);

  performSearch = (address) => {
    const { client } = this.props;

    return client
      .query({
        query: gql(`
          query geocodeList($address: String!, $region: String!) {
            geocodeList(address: $address, region: $region) {
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
          region: 'DE',
        },
      })
      .then(({ data }) => {
        this.setState({ items: data.geocodeList });
      });
  };

  onAdd = (code) => {
    const { onChange, value } = this.props;
    const { items } = this.state;
    this.text = null;
    const item = items.find(x => x.id === code);
    onChange(item);
  };

  renderOption = ({ id, formattedAddress }) => (
    <AutoComplete.Option key={id} text={formattedAddress}>
      <div style={{ whiteSpace: 'initial', display: 'flex' }}>{formattedAddress}</div>
    </AutoComplete.Option>
  );

  handleSearch = (term) => {
    const { items, value, onChange, refetch } = this.props;
    this.text = term;
    this.throttle(() => {
      this.performSearch(term);
    });
  };

  render() {
    const { value, size, placeholder } = this.props;
    const { items } = this.state;

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
          addonAfter={<Icon type="search" />}
        />
      </AutoComplete>
    );
  }
}
