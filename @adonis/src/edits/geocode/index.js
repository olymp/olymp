import React, { Component, PropTypes } from 'react';
import Select2 from '../select2';

export default class GeocodeComponent extends Component {
  static contextTypes = {
    graphql: PropTypes.object.isRequired,
  };

  onChange = (v) => {
    console.log('Change', v, v ? v.map(x => x.id) : undefined);
    const { onChange, updateValue } = this.props;
    (onChange || updateValue)(v ? v.map(x => x.id) : undefined);
  }

  fetch = () => {
    let { name, type, client, patch } = this.props;
    const fetch = () => client.query({
      query: gql`query geolocationList { items: geolocationList() { formattedAddress, lat, lng } }`, /* eslint-disable-line no-undef */
      forceFetch: true,
    }).then(x => x.data.items);
    /* const {graphql} = this.context;
    return graphql.query(gql`
      query getAllFiles {
        result: files {
          id,
          name
        }
      }
    `).then(({data}) => data.result.map(x => ({id: x.name, name: x.name})));*/
  }

  render() {
    const { value } = this.props;
    return (
      <Select2
        valueKey="formattedAddress"
        labelKey="formattedAddress"
        value={this.props.value}
        updateValue={this.onChange}
        options={this.getValue()}
      />
    );
  }
}
