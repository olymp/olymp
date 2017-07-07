import React from 'react';
import { graphql, gql, Helmet, Link } from 'olymp';
import { createComponent, withColor, SchemaLoader, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { Blocks } from 'olymp-pages';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import HeaderBlock from '../header';
import ContainerBlock from '../container-text';

const renderHelmet = ({ slogan, bild } = {}) => {
  const meta = [];
  if (slogan) {
    meta.push({
      name: 'description',
      content: slogan,
    });
    meta.push({
      property: 'og:description',
      content: slogan,
    });
    meta.push({
      property: 'twitter:description',
      content: slogan,
    });
  }
  if (bild) {
    meta.push({
      property: 'og:image',
      content: bild.url,
    });
    meta.push({
      property: 'twitter:image',
      content: bild.url,
    });
    meta.push({
      property: 'twitter:card',
      content: bild.url,
    });
  }

  return <Helmet meta={meta} />;
};

const loaderSchema = [
  {
    height: 450,
    width: '100%',
  },
  {
    width: 'container',
    size: 'small',
    children: [
      {
        width: '100%',
        height: 50,
      },
      {
        width: '100%',
        height: 800,
      },
    ],
  },
];

const Header = HeaderBlock.component;
const Container = createComponent(
  ({ theme }) => ({
    ...ContainerBlock.styles({ theme }),
    paddingTop: theme.space3,
  }),
  ContainerBlock.component,
  p => Object.keys(p)
);
const Slate = withBlockTypes(props => <SlateMate {...props} />);
const Img = createComponent(
  ({ theme }) => ({
    paddingX: theme.space3,
  }),
  p => <Image {...p} />,
  p => Object.keys(p)
);

const WhiteLink = createComponent(
  ({ theme }) => ({
    color: theme.light,
    onHover: {
      color: theme.light2,
    },
  }),
  p => <Link {...p} />,
  p => Object.keys(p)
);

const getSubheader = (item) => {
  const author = item.author && `von ${item.author.name}`;
  const org =
    item.org &&
    <WhiteLink to={item.org.slug}>
      {item.org.name}
    </WhiteLink>;

  return (
    author &&
    org &&
    <span>
      {author}, {org}
    </span>
  );
};

const component = withColor(
  ({ item }) => item.org.farbe
)(({ className, attributes, item }) =>
  (<SchemaLoader isLoading={!item.name} schema={loaderSchema}>
    <div>
      {renderHelmet(item)}
      <Header subheader={getSubheader(item)} color={item.org.farbe}>
        {item.name}
      </Header>
      <Container className={className} color={item.org.farbe} {...attributes}>
        <Grid size={5}>
          <Grid.Item medium={2}>
            {item.bild &&
              <Img value={item.bild} alt={item.bild.caption} width="100%" />}
          </Grid.Item>
          <Grid.Item medium={3}>
            <Slate readOnly value={item.text} />
            <Link to="/news">Zurück zur Übersicht</Link>
          </Grid.Item>
        </Grid>
      </Container>
    </div>
  </SchemaLoader>)
);

const componentWithData = graphql(
  gql`
    query termin($id: String) {
      item: termin(id: $id) {
        id
        art
        ort
        date
        name
        slug
        bild {
          url
          crop
          width
          height
          caption
          source
        }
        extrakt
        tags
        text
        author {
          id
          name
        }
        org {
          id
          name
          slug
          farbe
        }
      }
    }
  `,
  {
    options: ({ editor }) => ({
      variables: {
        id: editor.props.bindingId || 'BJuOod57-',
      },
    }),
    props: ({ ownProps, data }) => {
      const item = data.item || {};

      return {
        ...ownProps,
        data,
        item: {
          ...item,
          org: item.org || {},
        },
      };
    },
  }
)(component);

export default {
  key: 'GZK.Collections.TerminBlock',
  label: 'Termin',
  category: 'Collections',
  editable: false,
  component: componentWithData,
};
