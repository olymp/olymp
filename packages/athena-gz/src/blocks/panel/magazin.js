import React, { Component } from 'react';
import { graphql, gql, Link } from 'olymp';
import { createComponent } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import moment from 'moment';
import Container from './container';
import { Panel, Li } from '../../components';
import Carousel from './carousel';

const Img = createComponent(
  ({ theme }) => ({
    float: 'right',
    marginRight: theme.space3,
    marginBottom: theme.space2,
  }),
  p => <Image {...p} />,
  p => Object.keys(p)
);

const Ul = createComponent(
  ({ theme }) => ({
    width: '100%',
  }),
  'ul',
  p => Object.keys(p)
);

@graphql(
  gql`
    query terminList {
      items: terminList(
        sort: { date: DESC }
        query: { state: { ne: REMOVED } }
      ) {
        id
        date
        art
        name
        slug
        bild {
          id
          url
          caption
          width
          height
        }
        org {
          farbe
          image {
            id
            url
            caption
            width
            height
          }
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
        <Ul>
          {items.slice(0, 5).map(({ id, bild, org, art, name, slug, date }) =>
            (<Li key={id}>
              <Img
                value={bild || (org || {}).image}
                width={75}
                ratio={1}
                rounded
                avatar
              />
              <b>
                {art} am {moment(date).format('DD. MMMM YYYY, HH:mm')} Uhr
              </b>
              <p>
                {name}
              </p>
              {slug &&
                <Link to={{ pathname: `/news${slug}` }}>
                  Nähere Informationen >
                </Link>}
            </Li>)
          )}
        </Ul>
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
