import React from 'react';
import renderHelmet from 'olymp-utils/helmet';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {
  createComponent,
  Grid,
  withTheme,
  SchemaLoader,
  Container,
} from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import * as Blocks from 'olymp-pages/blocks';
import { SlateReader } from 'olymp-slate';
import VCard from './vcard';
import { ImageStyles } from '../image/block';
import HeaderBlock from '../../components/header';

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
  p => Object.keys(p)
);

const Peak = createComponent(
  props => ({
    ...ImageStyles(props),
    marginBottom: props.theme.space3,
  }),
  ({ className, header, subheader, value, title }) => (
    <div className={className}>
      <Image
        value={value}
        alt={title}
        width="100%"
        maxHeight={450}
        maxResolution={750000}
      />
      {(header || subheader) && (
        <Label>
          <h1>{header}</h1>
          <p>{subheader}</p>
        </Label>
      )}
    </div>
  ),
  p => Object.keys(p)
);

const component = withTheme(
  ({ item }) =>
    item.color
      ? {
          color: item.color,
        }
      : {}
)(({ className, attributes, item }) => (
  <SchemaLoader isLoading={!item.name} schema={loaderSchema}>
    <div {...attributes}>
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
        <HeaderBlock subheader={item.description} color={item.color}>
          {item.slogan}
        </HeaderBlock>
      )}
      <Container className={className}>
        <Grid>
          <Grid.Item large={5}>
            <VCard org={item} />
          </Grid.Item>
          <Content large={7}>
            <SlateReader readOnly value={item.text} />
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
        text {
          nodes
        }
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
          text {
            nodes
          }
        }
        vorsorgen {
          id
          link
          name
          text {
            nodes
          }
        }
        leistungen {
          id
          link
          name
          text {
            nodes
          }
        }
        prophylaxen {
          id
          link
          name
          text {
            nodes
          }
        }
        persons {
          id
          name
          description
          telefon
          fax
          eMail
          text {
            nodes
          }
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
  }
)(component);

componentWithData.displayName = 'GzOrgBlock';
export default {
  type: 'GZK.Collections.OrgBlock',
  label: 'Einrichtung',
  category: 'Daten',
  isVoid: true,
  kind: 'block',
  component: componentWithData,
};
