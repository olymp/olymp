import React from 'react';
import { renderHelmet } from 'olymp-utils';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { createComponent, Grid, withTheme, SchemaLoader } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { Blocks } from 'olymp-pages';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import VCard from './vcard';
import { ImageStyles } from '../image/block';
import HeaderBlock from '../header';
import ContainerBlock from '../container';

const loaderSchema = [
  {
    height: 450,
    width: '100%',
  },
  {
    width: 'container',
    grid: [
      {
        medium: 5,
        children: [
          {
            height: 100,
          },
          {
            height: 200,
          },
          {
            height: 400,
          },
        ],
      },
      {
        medium: 7,
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

const Content = createComponent(
  ({ theme }) => ({
    width: '100%',
    paddingX: theme.space5,
    '& img': {
      borderRadius: theme.borderRadius,
    },
    ifSmallDown: {
      paddingX: theme.space3,
    },
  }),
  p => <Grid.Item {...p} />,
  p => Object.keys(p),
);

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

const component = withTheme(({ item }) => ({
  color: item.color,
}))(({ className, attributes, item }) => (
  <SchemaLoader isLoading={!item.name} schema={loaderSchema}>
    <div>
      {renderHelmet({
        description: item.slogan,
        image: item.logo || item.image,
      })}
      {item.image ? (
        <Peak
          title={item.name || item.titel}
          value={item.image}
          header={item.slogan}
          subheader={item.description}
          color={item.color}
        />
      ) : (
        <Header subheader={item.description} color={item.color}>
          {item.slogan}
        </Header>
      )}
      <Container className={className} color={item.color} {...attributes}>
        <Grid>
          <Grid.Item large={5}>
            <VCard org={item} />
          </Grid.Item>
          <Content large={7}>
            <Slate readOnly value={item.text} />
            {/* children */}
          </Content>
        </Grid>
      </Container>
    </div>
  </SchemaLoader>
));

const componentWithData = graphql(
  gql`
    query org($id: String) {
      item: org(id: $id, query: { state: { eq: PUBLISHED } }) {
        id
        name
        title
        art
        color
        slug
        slogan
        description
        etage
        freifeld
        openings
        eMail
        fax
        telefon
        telefonPrivat
        website
        fachrichtungen
        tags
        text
        image {
          id
          url
          crop
          width
          height
          caption
          source
        }
        logo {
          id
          url
          crop
          width
          height
          caption
          source
        }
        aesthetik {
          id
          link
          name
          text
        }
        vorsorgen {
          id
          link
          name
          text
        }
        leistungen {
          id
          link
          name
          text
        }
        prophylaxen {
          id
          link
          name
          text
        }
        persons {
          id
          name
          description
          telefon
          fax
          eMail
          text
          image {
            id
            url
            crop
            width
            height
            caption
            source
          }
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
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      item: data.item || {},
    }),
  },
)(component);

export default {
  type: 'GZK.Collections.OrgBlock',
  label: 'Einrichtung',
  category: 'Collections',
  isVoid: true,
  kind: 'block',
  component: componentWithData,
};
