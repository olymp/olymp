import React, { Component } from 'react';
import { cn } from 'olymp';
import TerminMiniItem from './item';

export default class TerminMiniBlock extends Component {
  render() {
    const { items, className } = this.props;

    return (
      <div className={cn(className, 'termin-mini-block')} style={{ width: '100%', marginTop: '.5rem' }}>
        <div>
          {items.map(x => <TerminMiniItem {...x} key={x.id} />)}
        </div>
      </div>
    );
  }
}
