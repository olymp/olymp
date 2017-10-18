import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Container from './container';
import List from './list';

// date: { gt: ${moment().subtract(6, 'months').valueOf()}}
@graphql(
  gql`
    query eventList {
      events: eventList(
        sort: { date: DESC }
        query: { state: { eq: PUBLISHED } }
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
          color
          slug
          image {
            id
            url
            caption
            width
            height
          }
        }
        person {
          id
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
      events: data.events || [],
    }),
  }
)
@graphql(
  gql`
    query newsList {
      news: newsList(
        sort: { date: DESC }
        query: { state: { eq: PUBLISHED } }
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
          color
          slug
          image {
            id
            url
            caption
            width
            height
          }
        }
        person {
          id
          name
        }
      }
    }
  `,
  {
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      isLoading: data.loading || ownProps.isLoading,
      news: data.news || [],
    }),
  }
)
class Neues extends Component {
  render() {
    const { events, news, attributes, className, isLoading } = this.props;

    return (
      <Container {...attributes} className={className}>
        <List
          title="Neuigkeiten"
          accent="rgb(62, 167, 62)"
          items={news}
          size={6}
          path="news"
          isLoading={isLoading}
        />
        <List
          title="Veranstaltungen"
          accent="rgb(73, 146, 195)"
          items={events.filter(
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
  type: 'GZK.Panel.Neues',
  label: 'Neues',
  category: 'Kacheln',
  isVoid: true,
  kind: 'block',
  component: Neues,
};
