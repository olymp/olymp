import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import renderHelmet from 'olymp-utils/helmet';
import { PrefetchLink as Link } from 'olymp-cms';
import { createComponent, withTheme, SchemaLoader, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import moment from 'moment';
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

const Info = createComponent(
  ({ theme }) => ({
    fontSize: '80%',
    color: theme.dark2,
    marginTop: theme.space3,
  }),
  'div',
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
      <HeaderBlock subheader={getSubheader(item) || ''} color={item.org.color}>
        {item.name}
      </HeaderBlock>
      <Container className={className} color={item.org.color} {...attributes}>
        <Grid size={3}>
          <Grid.Item medium={1}>
            {item.image && <Image value={item.image} alt={item.image.caption} width="100%" />}
            <Info>
              {item.name && (
                <p>
                  <b>Thema</b>: {item.name}
                </p>
              )}
              {item.date && (
                <p>
                  <b>Termin</b>:{' '}
                  {moment(item.date)
                    .format('DD. MMMM YYYY, HH:mm')
                    .replace(', 00:00', '')}{' '}
                  Uhr
                </p>
              )}
              {item.ort && (
                <p>
                  <b>Ort</b>: {item.ort}
                </p>
              )}
            </Info>
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
    query event($id: String) {
      item: event(id: $id, query: { state: { eq: PUBLISHED } }) {
        id
        art
        ort
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
componentWithData.displayName = 'GzEventBlock';

export default {
  type: 'GZK.Collections.TerminBlock',
  label: 'Termin-Detail',
  category: 'Collections',
  isVoid: true,
  kind: 'block',
  component: componentWithData,
};
