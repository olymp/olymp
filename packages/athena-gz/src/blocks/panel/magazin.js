import React, { Component } from 'react';
import { graphql, gql, Link } from 'olymp';
import { border } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import map, {
  createSkeletorComponent,
  withSkeletor,
  image,
} from 'olymp-skeletor';
import Container from './container';
import { Panel } from '../../components';
import List from './list';

const MagazinItem = createSkeletorComponent(
  ({ theme, color = theme.color, skeletor }) => ({
    float: 'left',
    marginRight: theme.space3,
    marginBottom: theme.space3,
    textAlign: 'center',
    '> div': {
      display: 'block',
      border: border(theme),
    },
    onHover: {
      color,
      '> div': {
        border: border(theme, color),
      },
    },
    '> span': {
      ...skeletor.background(),
    },
  }),
  'a',
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
        extrakt
        slug
        bild {
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
          id
          name
        }
      }
      pdfs: fileList(
        sort: { createdAt: DESC }
        query: { tags: { in: "GiZ" }, state: { ne: REMOVED } }
      ) {
        id
        url
        caption
        width
        height
        createdAt
      }
    }
  `,
  {
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      isLoading: data.loading,
      items: data.items || [],
      pdfs: data.pdfs || [],
    }),
  }
)
@withSkeletor
class Magazin extends Component {
  render() {
    const { items, pdfs, attributes, className, isLoading } = this.props;

    return (
      <Container {...attributes} className={className}>
        <List
          size={7}
          title="Unser Magazin"
          accent="#8e44ad"
          items={items}
          path="magazin"
          isLoading={isLoading}
        />
        <Panel
          medium={5}
          title={<Link to={{ pathname: '/magazin/' }}>Magazine als PDF</Link>}
          accent="#8e44ad"
        >
          {map(
            item =>
              (<MagazinItem
                rel="noopener noreferrer"
                href={item.url}
                target="_blank"
                color="#8e44ad"
                key={item.id}
              >
                <Image value={item} width={100} />
                <span>
                  {item.caption}
                </span>
              </MagazinItem>),
            pdfs.slice(0, 9),
            () => image(300, 400),
            9
          )}
        </Panel>
      </Container>
    );
  }
}

export default {
  key: 'GZK.Panel.Magazin',
  label: 'Magazin',
  category: 'Panel',
  editable: false,
  component: Magazin,
};
