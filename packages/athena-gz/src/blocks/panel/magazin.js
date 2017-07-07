import React, { Component } from 'react';
import { graphql, gql } from 'olymp';
import moment from 'moment';
import Container from './container';
import { Panel, Li, H2 } from '../../components';
import Carousel from './carousel';

@graphql(
  gql`
    query terminList {
      items: terminList(
        sort: { date: ASC }
        query: { state: { ne: REMOVED }, date: { gt: ${moment().valueOf()} } }
      ) {
        id
        date
        art
        name
        slug
        org {
          farbe
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
class News extends Component {
  render() {
    const { items } = this.props;
    return (
      <Panel medium={7} title="Veranstaltungen" accent="rgb(73, 146, 195)">
        <ul>
          {items.slice(0, 5).map(item =>
            (<Li key={item.id}>
              <b>
                {item.art} am {moment(item.date).format(
                  'DD. MMMM YYYY, HH:mm'
                )}{' '}
                Uhr
              </b>
              <p>
                {item.name}
              </p>
            </Li>)
          )}
        </ul>
      </Panel>
    );
  }
}

export default {
  key: 'GZK.Panel.Magazin',
  label: 'Magazin, Veranstaltungen',
  category: 'Panel',
  editable: false,
  component: ({ className, attributes }) =>
    (<Container {...attributes} className={className}>
      <Carousel
        title="Magazin"
        size={5}
        items={[
          {
            url:
              'https://res.cloudinary.com/djyenzorc/image/upload/v1482483297/Z1pLCLtn51l_edd3gh.jpg',
          },
          {
            url:
              'https://res.cloudinary.com/djyenzorc/image/upload/v1482483297/ZJwg-TF0c51l_xfh4q5.jpg',
          },
          {
            url:
              'https://res.cloudinary.com/djyenzorc/image/upload/v1482483297/Wke6YQMjq1x_vprqa2.jpg',
          },
        ]}
      />
      <News />
    </Container>),
};
