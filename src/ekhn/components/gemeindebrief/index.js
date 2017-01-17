import React, { Component } from 'react';
import { graphql, gql, Link, withRouter } from 'olymp';
import GemeindebriefItem from './item';
import './gemeindebriefe.less';

@withRouter
@graphql(gql`
  query gemeindebriefList {
    items: gemeindebriefList(sort: {datum: DESC}, limit: 4, query: { state: { eq: PUBLISHED } }) {
      id
      name
      gemeindebrief {
        url
      }
      datum
    }
  }
`)
export default class GemeindebriefBlock extends Component {
  render() {
    const { data, location } = this.props;

    if (location && location.pathname !== '/') return <div />;

    return (
      <div className="gemeindebriefe-block block">
        <h3 style={{ margin: 0 }}>Gemeindebrief</h3>
        <ul>
          {(data.items || []).map(brief =>
            <GemeindebriefItem {...brief} key={brief.id} />
          )}
        </ul>

        <h5><Link to="/gemeinde/gemeindebriefe">Weitere Gemeindebriefe</Link></h5>
      </div>
    );
  }
}
