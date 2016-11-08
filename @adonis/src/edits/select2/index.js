import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

export default class Selector extends Component {
  static propTypes = {
    allowCreate: PropTypes.bool,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    fetch: PropTypes.func,
    updateValue: PropTypes.func,
    onChange: PropTypes.func,
    valueKey: PropTypes.string,
    labelKey: PropTypes.string,
    multi: PropTypes.bool,
    newOptionCreator: PropTypes.func,
    addLabelText: PropTypes.string,
    noResultsText: PropTypes.string,
  }
  static defaultProps = {
    valueKey: 'value',
    labelKey: 'label',
    fetch: null,
    placeholder: 'Auswählen ...',
    options: [],
    addLabelText: 'Add "{label}"',
    noResultsText: 'Keine Ergebnisse.',
  };

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { fetch } = this.props;

    if (fetch && {}.toString.call(fetch) === '[object Function]') {
      fetch().then(results => {
        this.setState({ results });
      });
    }
  }

  updateValue = v => {
    const { updateValue, onChange, valueKey, multi, labelKey } = this.props;
    const update = updateValue || onChange;
    if (!v) {
      update(null, null);
    } else if (multi) {
      update(v.map(v2 => {
        if (v2[`_${labelKey}`]) {
          v2[labelKey] = v2[`_${labelKey}`];
          delete v2[`_${labelKey}`];
        } return v2;
      }), Array.isArray(v) ? v.map(item => item[valueKey]) : []);
    } else {
      if (v[`_${labelKey}`]) {
        v[labelKey] = v[`_${labelKey}`];
        delete v[`_${labelKey}`];
      } update(v[valueKey], v);
    }
  }

  filterOptionsAllowCreate = (options = [], filter, currentValues = []) => {
    const { valueKey, labelKey, allowCreate, newOptionCreator, addLabelText } = this.props;
    let filteredOptions;

    options = options.filter(x => currentValues.filter(y => x[valueKey] === y[valueKey]).length === 0);
    if (allowCreate) {
      filteredOptions = [];

      if (filter && filter.length >= 1) { // If a filter is present
        options.forEach(option => {
          if (typeof option[valueKey] === 'string') {
            if (option[valueKey].toLowerCase().indexOf(filter.toLowerCase()) > -1) {
              filteredOptions.push(option);
            }
          } else if (option[valueKey] === filter) {
            filteredOptions.push(option);
          }
        });
      } else { // Show everything available that's not already selected if no filter is used
        options.forEach(option => {
          if (currentValues.map(x => x[valueKey]).indexOf(option[valueKey]) === -1) {
            filteredOptions.push(option);
          }
        });
      }

      // Only display  `Add ${filter}` if no other options are available
      if (filteredOptions.length === 0 && filter) {
        const creator = x => {
          let v = newOptionCreator ? newOptionCreator(x) : {};
          if (typeof v !== 'object') {
            v = { [valueKey]: v };
          }
          if (labelKey === valueKey) {
            return { [valueKey]: x, ...v };
          }
          const tlabel = v[labelKey] || x;
          delete v[labelKey];
          return {
            [labelKey]: addLabelText.replace('{label}', x),
            [valueKey]: x,
            ...v,
            [`_${labelKey}`]: tlabel,
          };
        };
        filteredOptions.push(creator(filter));
      }
    }

    return filteredOptions || options;
  }

  filterOptions = (options, filterString, values) => {
    const { valueKey } = this.props;
    if (!values) return options;
    return options.filter(
      option => values.filter(
        value => option[valueKey] === value[valueKey]
      ).length === 0
    );
  }

  getValue = () => {
    const { multi, valueKey, value } = this.props;
    const { results } = this.state;

    const getVal = x => typeof x === 'string' ? x : x[valueKey];
    if (results && multi && Array.isArray(value)) {
      return value.map(
        v => results.filter(option => option[valueKey] === getVal(v))[0]
      );
    } else if (results && !multi && value) {
      return results.filter(option => option[valueKey] === getVal(value))[0];
    } return value;
  }

  render() {
    const { options, allowCreate } = this.props;
    const { results } = this.state;
    const value = this.getValue();

    return (
      <Select
        {...this.props}
        value={value}
        searchable
        options={results || options}
        onChange={this.updateValue}
        filterOptions={allowCreate ? this.filterOptionsAllowCreate : this.filterOptions}
      />
    );
  }
}
