import React from 'react';
import { graphql, gql, renderHelmet, Link } from 'olymp';
import { createComponent, withColor, SchemaLoader, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import HeaderBlock from '../header';
import ContainerBlock from '../container-text';

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

const Content = createComponent(
  ({ theme }) => ({
    paddingLeft: theme.space3,
  }),
  p => <Grid.Item {...p} />,
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
      {renderHelmet({ description: item.extrakt, image: item.bild })}
      <Header subheader={getSubheader(item)} color={item.org.farbe}>
        {item.name}
      </Header>
      <Container className={className} color={item.org.farbe} {...attributes}>
        <Grid size={3}>
          <Grid.Item medium={1}>
            {item.bild &&
              <Image value={item.bild} alt={item.bild.caption} width="100%" />}
            <Link to="/news">Zurück zur Übersicht</Link>
          </Grid.Item>
          <Content medium={2}>
            <Slate readOnly value={item.text} />
            <Link to="/news">Zurück zur Übersicht</Link>
          </Content>
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
