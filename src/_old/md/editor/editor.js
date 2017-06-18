import React, { Component } from 'react';
import Slate from 'slate/lib/components/editor';
import createSuggestPlugin from './plugin-suggest';
import createTrailingBlock from './plugin-trailing-block';

export default class SlateEditor extends Component {
  fetch(value) {
    if (!this.props.suggestions) { return Promise.resolve([]); }
    return new Promise((yay) => {
      yay(
        this.props.suggestions.filter(
          x => x.key.toLowerCase().indexOf(value.toLowerCase()) !== -1
        )
      );
    });
  }
  constructor(props) {
    super(props);
    this.plugins = [
      createTrailingBlock({ type: 'paragraph' }),
      createSuggestPlugin({
        trigger: '+',
        groupBy: i => i.key.split('-')[0],
        fetch: this.fetch,
      }),
    ];
  }
  render() {
    const value = this.props.state || this.props.value || Plain.deserialize('');
    return <Slate plugins={this.plugins} state={value} {...this.props} />;
  }
}
