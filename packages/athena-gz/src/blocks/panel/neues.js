import React, { Component } from 'react';
import { graphql, gql } from 'olymp';
import Container from './container';
import List from './list';

// date: { gt: ${moment().subtract(6, 'months').valueOf()}}
@graphql(
  gql`
    query eventList {
      items: eventList(
        sort: { date: DESC }
        query: { state: { ne: REMOVED } }
      ) {
        id
        date
        art
        name
        description
        slug
        image {
          id
          url
          caption
          width
          height
        }
        org {
          id
          name
          farbe
          slug
          image {
            id
            url
            caption
            width
            height
          }
        }
        author {
          name
        }
      }
    }
  `,
  {
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      isLoading: data.loading,
      items: data.items || [],
    }),
  }
)
class Neues extends Component {
  render() {
    const { items, attributes, className, isLoading } = this.props;

    return (
      <Container {...attributes} className={className}>
        <List
          title="Neuigkeiten"
          accent="rgb(62, 167, 62)"
          items={items.filter(
            item => item.art === 'PUBLIKATION' || item.art === 'PRESSE'
          )}
          size={6}
          path="news"
          isLoading={isLoading}
        />
        <List
          title="Veranstaltungen"
          accent="rgb(73, 146, 195)"
          items={items.filter(
            item => item.art === 'VERANSTALTUNG' || item.art === 'VORTRAG'
          )}
          size={6}
          path="news"
          isLoading={isLoading}
        />
      </Container>
    );
  }
}

export default {
  key: 'GZK.Panel.Neues',
  label: 'Neues',
  category: 'Panel',
  editable: false,
  component: Neues,
};
