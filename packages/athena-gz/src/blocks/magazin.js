import React from 'react';
import {
  createComponent,
  Container,
  Grid,
  border,
  SchemaLoader,
} from 'olymp-fela';
import { H2, Panel } from '../components';
import { graphql, gql, Link } from 'olymp';
import { Image } from 'olymp-cloudinary';
import { range } from 'lodash';

const loaderSchema = [
  {
    height: 0,
  },
  {
    width: 'container',
    grid: [
      {
        medium: 7,
        children: range(9).map(() => ({
          height: 180,
          width: '100%',
        })),
      },
      {
        medium: 5,
        height: 500,
      },
    ],
  },
];

const Img = createComponent(
  ({ theme }) => ({
    float: 'left',
    marginRight: theme.space3,
  }),
  p => <Image {...p} />,
  p => Object.keys(p)
);

const Li = createComponent(
  ({ theme }) => ({
    paddingTop: theme.space2,
    borderBottom: border(theme),
    ':last-of-type': {
      marginBottom: theme.space3,
    },
  }),
  'li',
  p => Object.keys(p)
);

const Tag = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.dark4,
    paddingY: theme.space2,
    paddingX: theme.space3,
    margin: theme.space2,
    marginLeft: 0,
    display: 'inline-block',
    onHover: {
      backgroundColor: theme.color,
      color: theme.light,
    },
  }),
  'div',
  p => Object.keys(p)
);

const component = graphql(
  gql`
    query artikelList {
      items: artikelList {
        id
        name
        farbe
        extrakt
        slug
        bild {
          width
          height
          url
          crop
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
)(({ attributes, items, getData, isLoading, ...props }) =>
  (<SchemaLoader isLoading={isLoading} schema={loaderSchema}>
    <Container {...attributes}>
      <Grid>
        <Grid.Item medium={8} paddingMedium="0 0 0 0.5rem">
          {items.map(item =>
            (<Panel
              accent={item.farbe}
              key={item.id}
              title={item.name}
              paddingLeft={0}
            >
              <Img value={item.bild} width={100} ratio={1} avatar />
              <div>
                <p>
                  {item.extrakt}
                </p>
                {item.slug && <Link to={item.slug}>Weiterlesen...</Link>}
              </div>
            </Panel>)
          )}
        </Grid.Item>
        <Grid.Item
          medium={4}
          paddingMini="0.5rem 1rem 0 1rem"
          paddingMedium="0 0.5rem 0 0"
        >
          <H2>Ausgaben als PDFs</H2>
          <ul>
            <Li>
              Gesund im Zentrum - <b>Sport</b>
            </Li>
            <Li>
              Gesund im Zentrum - <b>Gesundheit</b>
            </Li>
            <Li>
              Gesund im Zentrum - <b>Fitness</b>
            </Li>
          </ul>

          <H2>Schlagworte</H2>
          <Tag>Sport</Tag>
          <Tag>Gesundheit</Tag>
          <Tag>Fitness</Tag>
        </Grid.Item>
      </Grid>
    </Container>
  </SchemaLoader>)
);

export default {
  key: 'GZK.Collections.MagazinBlock',
  label: 'Magazin',
  category: 'Collections',
  editable: false,
  component,
};
