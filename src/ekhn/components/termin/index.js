import React, { Component } from 'react';
import TerminMiniItem from './item';
import './termine.less';

export default class TerminMiniBlock extends Component {
  render() {
    const { items } = this.props;

    return (
      <div style={{ width: '100%', marginTop: '.5rem' }}>
        <div>
          {items.map(x => <TerminMiniItem {...x} key={x.id} />)}
        </div>
      </div>
    );
  }
}
