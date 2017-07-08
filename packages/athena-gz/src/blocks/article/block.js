import React from 'react';
import { graphql, gql, Link, renderHelmet } from 'olymp';
import { createComponent, withColor, SchemaLoader } from 'olymp-fela';
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
const Container = createComponent(
  ContainerBlock.styles,
  ContainerBlock.component,
  p => Object.keys(p)
);
const Slate = withBlockTypes(props => <SlateMate {...props} />);

const Peak = createComponent(
  props => ({
    ...ImageStyles(props),
    marginBottom: props.theme.space3,
  }),
  ({ className, header, subheader, value, title }) =>
    (<div className={className}>
      <Image
        value={value}
        alt={title}
        width="100%"
        maxHeight={450}
        maxResolution={750000}
      />
      {(header || subheader) &&
        <Label>
          <h1>
            {header}
          </h1>
          <p>
            {subheader}
          </p>
        </Label>}
    </div>),
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
    item.org && item.org.slug &&
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
      {item.bild
        ? <Peak
          title={item.name}
          value={item.bild}
          header={item.name}
          subheader={getSubheader(item)}
          color={item.org.farbe}
        />
        : <Header subheader={getSubheader(item)} color={item.org.farbe}>
          {item.name}
        </Header>}
      <Container className={className} color={item.org.farbe} {...attributes}>
        <Slate readOnly value={item.text} />
        <Link to="/magazin">Zurück zur Übersicht</Link>
      </Container>
    </div>
  </SchemaLoader>)
  );

const componentWithData = graphql(
  gql`
    query artikel($id: String) {
      item: artikel(id: $id) {
        id
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
  key: 'GZK.Collections.ArticleBlock',
  label: 'Artikel',
  category: 'Collections',
  editable: false,
  component: componentWithData,
};
