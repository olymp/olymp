import React, { Component, PropTypes } from 'react';
import Select2 from '../select2';

export default class Suggestion extends Component {
  static contextTypes = {
    apiClient: PropTypes.object.isRequired,
  };

  prepareData(data) {
    const { name } = this.props;
    let _data = [];

    data.map(suggestionArray => suggestionArray[name] && suggestionArray[name].length ? suggestionArray[name].map(suggestion => {
      if (!_data.filter(x => x.id == suggestion).length) {
        _data.push({
          id: suggestion,
          name: suggestion,
        });
      }
    }) : null);

    return _data;
  }

  render() {
    const { apiClient } = this.context;
    const { collection, name, value, updateValue } = this.props;

    const _value = value && Array.isArray(value) ? value : [value];

    return (
      <Select2 value={_value.map(x => (x ? { id: x, name: x } : null))}
        allowCreate
        updateValue={(v) => updateValue(v ? v.map(x => x.id) : null)}
        multi
        fetch={() => apiClient.get('/' + collection + '/suggestions/' + name).then(data => this.prepareData(data))}
      />
    );
  }
}
