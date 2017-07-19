import React from 'react';
import {
  createComponent,
  Container,
  Grid,
  border,
  SchemaLoader,
} from 'olymp-fela';
import { graphql, gql } from 'olymp-utils';
import { Link } from 'olymp-router';
import { Image } from 'olymp-cloudinary';
import { FaDownload } from 'olymp-icons';
import { withEdit, withCreate } from 'olymp-collection';
import { orderBy, upperFirst, range } from 'lodash';
import moment from 'moment';
import { H2, Panel, Item as ListItem } from '../components';

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

export const Column = createComponent(
  ({ theme }) => ({
    textAlign: 'right',
    '> h2': {
      marginBottom: theme.space0,
    },
    '> h2:not(:first-child)': {
      marginTop: theme.space4,
    },
  }),
  p => <Grid.Item {...p} />,
  p => Object.keys(p)
);

export const Content = createComponent(
  ({ theme }) => ({
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    maxWidth: '100%',
    paddingLeft: theme.space2,
    marginBottom: `-${theme.space3}`,
    '> a': {
      marginTop: theme.space3,
      color: theme.color,
    },
  }),
  'div',
  p => Object.keys(p)
);

export const Img = createComponent(
  ({ theme }) => ({
    float: 'left',
    marginRight: theme.space2,
    alignSelf: 'flex-start',
  }),
  p => <Image {...p} />,
  p => Object.keys(p)
);

export const Li = createComponent(
  ({ theme }) => ({
    paddingY: theme.space3,
    borderBottom: border(theme, theme.dark4),
    onHover: {
      // backgroundColor: theme.dark5,
    },
    ':last-of-type': {
      marginBottom: theme.space3,
    },
  }),
  'li',
  p => Object.keys(p)
);

const DownloadLink = createComponent(
  ({ theme }) => ({
    color: theme.dark,
    '> svg': {
      marginLeft: theme.space2,
    },
  }),
  'a',
  p => Object.keys(p)
);

const Item = withEdit('magazin')(props => {
  const { name, description, slug, org, date, person } = props;

  const image = props.image ||
  org.logo || {
    url:
      'https://res.cloudinary.com/djyenzorc/image/upload/v1499270971/kdmxe7pl54cqtdfc7ggy.jpg',
    width: 400,
    height: 300,
  };

  return (
    <Grid>
      <Panel
        accent={org.color}
        title={name}
        subtitle={`${moment(date).format('DD. MMMM YYYY')}, ${person.name ||
          'Redaktion'}`}
      >
        <Img value={image} width={160} avatar />
        <Content>
          <p>
            {description}
          </p>
          {slug &&
            <Link to={{ pathname: `/magazin${slug}` }}>Weiterlesen...</Link>}
        </Content>
      </Panel>
    </Grid>
  );
});

const Listing = withCreate('magazin')(({ items }) =>
  <div>
    {items.map(item =>
      <Item
        {...item}
        org={item.org || {}}
        person={item.person || {}}
        key={item.id}
      />
    )}
  </div>
);

const TagContainer = createComponent(
  () => ({
    hasFlex: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  }),
  'div',
  p => Object.keys(p)
);

const Tag = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.dark5,
    paddingY: theme.space1,
    paddingX: theme.space2,
    marginLeft: theme.space3,
    marginY: theme.space1,
    fontSize: '90%',
    flexGrow: 1,
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
    query articleList {
      items: articleList(
        sort: { date: DESC }
        query: { state: { eq: PUBLISHED } }
      ) {
        id
        name
        description
        date
        slug
        tags
        state
        image {
          id
          width
          height
          url
          crop
        }
        org {
          id
          name
          logo {
            id
            width
            height
            url
            crop
          }
          color
        }
        person {
          id
          name
        }
      }
      pdfs: fileList(query: { tags: { in: "GiZ" }, state: { eq: PUBLISHED } }) {
        id
        url
        caption
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
)(({ attributes, items, pdfs, isLoading }) => {
  const tags = items.reduce((tags, item) => {
    (item.tags || []).forEach(tag => {
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
            <Listing items={items} />
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
            {pdfs.map((pdf, i) =>
              <ListItem key={i}>
                <DownloadLink
                  rel="noopener noreferrer"
                  href={pdf.url}
                  target="_blank"
                >
                  Gesund im Zentrum - <b>{pdf.caption}</b>
                  <FaDownload size={15} />
                </DownloadLink>
              </ListItem>
            )}

            <H2 right>Schlagworte</H2>
            <TagContainer>
              {orderBy(tags, ['count', 'tag'], ['desc', 'asc']).map(tag =>
                <Tag key={tag.tag}>
                  {upperFirst(tag.tag)} <small>({tag.count})</small>
                </Tag>
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
