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
    query artikelList {
      items: artikelList(
        sort: { date: DESC }
        query: { state: { ne: REMOVED } }
      ) {
        id
        date
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
      <Panel medium={7} title="Neuigkeiten" accent="rgb(62, 167, 62)">
        <Ul>
          {items.slice(0, 5).map(({ id, bild, org, date, name, slug }) =>
            (<Li key={id}>
              <Img
                value={bild || (org || {}).image}
                width={75}
                ratio={1}
                rounded
                avatar
              />
              <b>
                BEITRAG vom {moment(date).format('DD. MMMM YYYY')}
              </b>
              <p>
                {name}
              </p>
              {slug &&
                <Link to={{ pathname: `/magazin${slug}` }}>
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
  key: 'GZK.Panel.Neuigkeiten',
  label: 'Neuigkeiten, Einrichtungen',
  category: 'Panel',
  editable: false,
  component: ({ className, attributes }) =>
    (<Container {...attributes} className={className}>
      <News />
      <Carousel
        title="Einrichtungen"
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
    </Container>),
};
