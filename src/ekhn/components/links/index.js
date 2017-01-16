import React, { Component } from 'react';
import { graphql, gql, withRouter } from 'olymp';
import LinksItem from './item';
import './links.less';

@withRouter
@graphql(gql`
  query linkList {
    links: linkList(query: { state: { eq: PUBLISHED } }) {
      id
      name
      url
      tags
    }
  }
`)
export default class LinksBlock extends Component {
  render() {
    const { data, location } = this.props;

    if (location && location.pathname !== '/') return <div />;

    const { links } = data;
    const tags = {};
    (links || []).forEach(link => link.tags.forEach((tag) => {
      if (!tags[tag]) tags[tag] = [];

      tags[tag].push(link);
    }));

    return (
      <div className="links-block block">
        <h3 style={{ margin: 0 }}>Nützliche Links</h3>
        {Object.keys(tags).map(tag => (
          <div key={tag}>
            <h4 style={{ margin: 0 }}>{tag}</h4>
            <ul>
              {tags[tag].map(link => <LinksItem {...link} key={link.id} />)}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
