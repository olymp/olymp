import React, { Component, PropTypes } from 'react';
import Select2 from '../select2';

export default class TagsComponent extends Component {
  static contextTypes = {
    graphql: PropTypes.object.isRequired,
  };

  onChange = (v) => {
    console.log('Change', v, v ? v.map(x => x.id) : undefined);
    const { onChange, updateValue } = this.props;
    (onChange || updateValue)(v ? v.map(x => x.id) : undefined);
  }

  getValue = () => {
    if (this.props.value) {
      return this.props.value.map(x => ({ id: x, name: x }));
    } return null;
  }

  fetch = () => {
    return Promise.all([]).then(x => this.getValue());
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
        valueKey="id"
        labelKey="name"
        value={this.getValue()}
        allowCreate
        addLabelText="'{label}' hinzufügen ..."
        updateValue={this.onChange}
        multi
        options={this.getValue()}
      />
    );
  }
}
