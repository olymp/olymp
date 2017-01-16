import React, { Component } from 'react';
import { useItemEdit } from 'olymp/cms';

@useItemEdit
export default class LinksItem extends Component {
  render() {
    const { url, name } = this.props;

    return (
      <li>
        <a href={url} target="_blank" rel="noopener noreferrer" >
          {name}
        </a>
      </li>
    );
  }
}
