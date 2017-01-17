import React, { Component } from 'react';
import TerminMiniItem from './item';
import './termine.less';

export default class TerminMiniBlock extends Component {
  render() {
    const { items } = this.props;

    if (!items) {
      return (
        <div style={{ width: '100%' }}>
          <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem', margin: 0 }}>
            <i className="fa fa-refresh fa-spin fa-fw" />
          </h1>
        </div>
      );
    }

    if (!items.length) {
      return (
        <div style={{ width: '100%' }}>
          <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem', margin: 0 }}>
            Keine Termine vorhanden!
          </h1>
        </div>
      );
    }

    return (
      <div style={{ width: '100%', marginTop: '.5rem' }}>
        <div>
          {items.map(x => <TerminMiniItem {...x} key={x.id} />)}
        </div>
      </div>
    );
  }
}
