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
import { orderBy, upperFirst, range } from 'lodash';

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

const Column = createComponent(
  ({ theme }) => ({
    textAlign: 'right',
  }),
  p => <Grid.Item {...p} />,
  p => Object.keys(p)
);

const Content = createComponent(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  }),
  'div',
  p => Object.keys(p)
);

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

const TagContainer = createComponent(
  ({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }),
  'div',
  p => Object.keys(p)
);

const Tag = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.dark5,
    paddingY: theme.space1,
    paddingX: theme.space2,
    marginRight: theme.space2,
    marginBottom: theme.space2,
    fontSize: '90%',
    flex: 1,
    whiteSpace: 'nowrap',
    textAlign: 'center',
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
        tags
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
)(({ attributes, items, isLoading }) => {
  const tags = items.reduce((tags, item) => {
    (item.tags || []).forEach((tag) => {
      const index = tags.findIndex(item => item.tag === tag);

      if (index === -1) {
        tags.push({ tag, count: 1 });
      } else {
        tags[index].count += 1;
      }
    });
    return tags;
  }, []);

  return (
    <SchemaLoader isLoading={isLoading} schema={loaderSchema}>
      <Container {...attributes}>
        <Grid>
          <Grid.Item medium={7} paddingMedium="0 0 0 0.5rem">
            {items.map(item =>
              (<Panel
                accent={item.farbe}
                key={item.id}
                title={item.name}
                paddingLeft={0}
              >
                <Img value={item.bild} width={100} ratio={1} avatar />
                <Content>
                  <p>
                    {item.extrakt}
                  </p>
                  {item.slug && <Link to={item.slug}>Weiterlesen...</Link>}
                </Content>
              </Panel>)
            )}
          </Grid.Item>
          <Column
            medium={4}
            offsetMedium={1}
            offsetLarge={1}
            offsetHuge={1}
            paddingMini="0.5rem 1rem 0 1rem"
            paddingMedium="0 0.5rem 0 0"
          >
            <H2 right>Ausgaben als PDFs</H2>
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

            <H2 right>Schlagworte</H2>
            <TagContainer>
              {orderBy(tags, ['count', 'tag'], ['desc', 'asc']).map(tag =>
                (<Tag key={tag.tag}>
                  {upperFirst(tag.tag)} <small>({tag.count})</small>
                </Tag>)
              )}
            </TagContainer>
          </Column>
        </Grid>
      </Container>
    </SchemaLoader>
  );
});

export default {
  key: 'GZK.Collections.MagazinBlock',
  label: 'Magazin',
  category: 'Collections',
  editable: false,
  component,
};
