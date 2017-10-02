import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { renderHelmet } from 'olymp-utils';
import { PrefetchLink as Link } from 'olymp-athena';
import { createComponent, withTheme, SchemaLoader, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import ContainerBlock from 'olymp-pages/blocks/container-text';
import HeaderBlock from '../components/header';

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
  p => Object.keys(p),
);

const Slate = withBlockTypes(props => <SlateMate {...props} />);

const Content = createComponent(
  ({ theme }) => ({
    paddingLeft: theme.space3,
  }),
  p => <Grid.Item {...p} />,
  p => Object.keys(p),
);

const WhiteLink = createComponent(
  ({ theme }) => ({
    color: theme.light,
    onHover: {
      color: theme.light2,
    },
  }),
  p => <Link {...p} />,
  p => Object.keys(p),
);

const getSubheader = (item) => {
  const person = item.person && `von ${item.person.name}`;
  const org = item.org && <WhiteLink to={item.org.slug}>{item.org.name}</WhiteLink>;

  return (
    person &&
    org && (
      <span>
        {person}, {org}
      </span>
    )
  );
};

const component = withTheme(
  ({ item }) =>
    (item.org.color
      ? {
        color: item.org.color,
      }
      : {}),
)(({ className, attributes, item }) => (
  <SchemaLoader isLoading={!item.name} schema={loaderSchema}>
    <div>
      {renderHelmet({ description: item.description, image: item.image })}
      <Header subheader={getSubheader(item) || ''} color={item.org.color}>
        {item.name}
      </Header>
      <Container className={className} color={item.org.color} {...attributes}>
        <Grid size={3}>
          <Grid.Item medium={1}>
            {item.image && <Image value={item.image} alt={item.image.caption} width="100%" />}
          </Grid.Item>
          <Content medium={2}>
            <Slate readOnly value={item.text} />
            <Link to="/news">Zurück zur Übersicht</Link>
          </Content>
        </Grid>
      </Container>
    </div>
  </SchemaLoader>
));

const componentWithData = graphql(
  gql`
    query news($id: String) {
      item: news(id: $id, query: { state: { eq: PUBLISHED } }) {
        id
        art
        date
        name
        slug
        image {
          id
          url
          crop
          width
          height
          caption
          source
        }
        description
        tags
        text {
          id
          nodes
        }
        person {
          id
          name
        }
        org {
          id
          name
          slug
          color
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
  },
)(component);
componentWithData.displayName = 'GzNewsDetailBlock';
export default {
  type: 'GZK.Collections.NewsDetailBlock',
  label: 'Neuigkeit-Detail',
  category: 'Collections',
  isVoid: true,
  kind: 'block',
  component: componentWithData,
};
