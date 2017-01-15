import React, { Component } from 'react';
import { graphql, gql, Link, withRouter } from 'olymp';
import './gemeindebriefe.less';

@withRouter()
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
            <li key={brief.id}>
              <a href={brief.gemeindebrief.url} target="_blank" rel="noopener noreferrer">
                {brief.name}
              </a>
            </li>
          )}
        </ul>

        <h5><Link to="/gemeinde/gemeindebriefe">Weitere Gemeindebriefe</Link></h5>
      </div>
    );
  }
}
