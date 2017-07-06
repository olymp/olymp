import React, { Component } from 'react';
import {
  createComponent,
  Container,
  Grid,
  border,
  SchemaLoader,
} from 'olymp-fela';
import { graphql, gql, Link } from 'olymp';
import { Image } from 'olymp-cloudinary';
import { FaDownload } from 'olymp-icons';
import { orderBy, upperFirst, range } from 'lodash';
import { H2, Panel } from '../components';

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
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  }),
  'div',
  p => Object.keys(p)
);

export const Img = createComponent(
  ({ theme }) => ({
    float: 'left',
    marginRight: theme.space3,
    alignSelf: 'flex-start',
  }),
  p => <Image {...p} />,
  p => Object.keys(p)
);

export const More = createComponent(
  ({ theme }) => ({
    marginTop: theme.space3,
    marginBottom: `-${theme.space3}`,
    color: theme.dark2,
    cursor: 'pointer',
    onHover: {
      color: theme.color,
    },
  }),
  ({ open, ...p }) =>
    (<div {...p}>
      {open ? 'Weniger...' : 'Weiterlesen...'}
    </div>),
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

class Item extends Component {
  state = { open: false };

  render() {
    const { name, extrakt, slug, org } = this.props;

    const bild = this.props.bild ||
    org.logo || {
      url:
        'https://res.cloudinary.com/djyenzorc/image/upload/v1499270971/kdmxe7pl54cqtdfc7ggy.jpg',
      width: 400,
      height: 300,
    };

    return (
      <Panel accent={org.farbe} title={name}>
        <Img value={bild} width={160} avatar />
        <Content>
          <p>
            {extrakt}
          </p>
          {slug &&
            <Link to={{ pathname: `/magazin${slug}` }}>
              <More />
            </Link>}
        </Content>
      </Panel>
    );
  }
}

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
    marginLeft: theme.space3,
    marginY: theme.space1,
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
      items: artikelList(sort: { date: DESC }) {
        id
        name
        extrakt
        slug
        tags
        state
        bild {
          width
          height
          url
          crop
        }
        org {
          name
          logo {
            width
            height
            url
            crop
          }
          farbe
        }
        author {
          name
        }
      }
      pdfs: fileList(query: { tags: { in: "GiZ" } }) {
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
      items: (data.items || []).filter(item => item.state !== 'REMOVED'),
      pdfs: (data.pdfs || []).filter(item => item.state !== 'REMOVED'),
    }),
  }
)(({ attributes, items, pdfs, isLoading }) => {
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
              <Item {...item} org={item.org || {}} key={item.id} />
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
              {pdfs.map((pdf, i) =>
                (<Li key={i}>
                  <DownloadLink
                    rel="noopener noreferrer"
                    href={pdf.url}
                    target="_blank"
                  >
                    Gesund im Zentrum - <b>{pdf.caption}</b>
                    <FaDownload size={15} />
                  </DownloadLink>
                </Li>)
              )}
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
