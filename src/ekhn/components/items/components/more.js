import React, { Component } from 'react';
import { Link, withRouter } from 'olymp';
import capitalize from 'lodash/upperFirst';

@withRouter
export default class ItemMore extends Component {
  render() {
    const { location, identifier, more, id } = this.props;
    const { pathname, query } = location;

    return (
      <div>
        {(!query || !query[capitalize(identifier)]) && more ? (
          <p>
            <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: id } }}>
              <i className="fa fa-angle-double-right" /> {more}
            </Link>
          </p>
        ) : undefined}

        {query && query[capitalize(identifier)] ? (
          <p>
            <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: null } }}>
              <i className="fa fa-angle-double-left" /> Zurück zur Übersicht
            </Link>
          </p>
        ) : undefined}
      </div>
    );
  }
}
