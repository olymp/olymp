import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { renderHelmet } from 'olymp-utils';
import { PrefetchLink } from 'olymp-athena';
import { createComponent, withTheme, SchemaLoader } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { Blocks } from 'olymp-pages';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import { ImageStyles } from '../image/block';
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
const Label = Blocks.ImageBlockLabel.component;
const Header = HeaderBlock.component;
const Container = createComponent(ContainerBlock.styles, ContainerBlock.component, p =>
  Object.keys(p),
);
const Slate = withBlockTypes(props => <SlateMate {...props} />);

const Peak = createComponent(
  props => ({
    ...ImageStyles(props),
    marginBottom: props.theme.space3,
  }),
  ({ className, header, subheader, value, title }) => (
    <div className={className}>
      <Image value={value} alt={title} width="100%" maxHeight={450} maxResolution={750000} />
      {(header || subheader) && (
        <Label>
          <h1>{header}</h1>
          <p>{subheader}</p>
        </Label>
      )}
    </div>
  ),
  p => Object.keys(p),
);

const WhiteLink = createComponent(
  ({ theme }) => ({
    color: theme.light,
    onHover: {
      color: theme.light2,
    },
  }),
  p => <PrefetchLink {...p} />,
  p => Object.keys(p),
);

const getSubheader = (item) => {
  const person = item.person && `von ${item.person.name}`;
  const org = item.org &&
  item.org.slug && <WhiteLink to={item.org.slug}>{item.org.name}</WhiteLink>;

  return (
    person &&
    org && (
      <span>
        {person}, {org}
      </span>
    )
  );
};

const component = withTheme(({ item }) => ({
  color: item.org.color,
}))(({ className, attributes, item }) => (
  <SchemaLoader isLoading={!item.name} schema={loaderSchema}>
    <div>
      {renderHelmet({ description: item.description, image: item.image })}
      {item.image ? (
        <Peak
          title={item.name}
          value={item.image}
          header={item.name}
          subheader={getSubheader(item)}
          color={item.org.color}
        />
      ) : (
        <Header subheader={getSubheader(item)} color={item.org.color}>
          {item.name}
        </Header>
      )}
      <Container className={className} color={item.org.color} {...attributes}>
        <Slate readOnly value={item.text} />
        <PrefetchLink to="/magazin">Zurück zur Übersicht</PrefetchLink>
      </Container>
    </div>
  </SchemaLoader>
));

const componentWithData = graphql(
  gql`
    query article($id: String) {
      item: article(id: $id, query: { state: { eq: PUBLISHED } }) {
        id
        date
        name
        slug
        image {
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

export default {
  type: 'GZK.Collections.ArticleBlock',
  label: 'Artikel',
  category: 'Collections',
  isVoid: true,
  kind: 'block',
  component: componentWithData,
};
