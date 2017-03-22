import React, { Component } from 'react';
import { Link, withRouter } from 'olymp';
import capitalize from 'lodash/upperFirst';

@withRouter
export default class ItemMore extends Component {
  render() {
    const { location, identifier, more, id } = this.props;
    const { pathname, query, search } = location;

    if (query && query[capitalize(identifier)]) {
      delete query[capitalize(identifier)];

      return (
        <p>
          <Link to={{ pathname, query }}>
            <i className="fa fa-angle-double-left" /> Zurück zur Übersicht
          </Link>
        </p>
      );
    }

    return !!more && (
      <p>
        <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: id } }}>
          <i className="fa fa-angle-double-right" /> {more}
        </Link>
      </p>
    );
  }
}
