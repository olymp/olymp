import React, { Component } from 'react';
import { useItemEdit } from 'olymp/cms';

@useItemEdit
export default class GemeindebriefItem extends Component {
  render() {
    const { id, gemeindebrief, name } = this.props;

    return (
      <li>
        <a href={gemeindebrief.url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </li>
    );
  }
}
