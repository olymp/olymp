import React, { Component } from 'react';
import { Link, withRouter } from 'olymp';
import capitalize from 'lodash/upperFirst';

@withRouter
export default class ItemMore extends Component {
  render() {
    const { location, identifier, children, id, className } = this.props;
    const { pathname, query } = location;

    return (
      <h2 className={className}>
        {(!query || !query[capitalize(identifier)]) && id ? (
          <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: id } }}>
            {children}
          </Link>
        ) : children}
      </h2>
    );
  }
}
