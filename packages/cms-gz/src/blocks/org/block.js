import React from 'react';
import { graphql, gql } from 'olymp';
import { createComponent, Grid, withColor, SchemaLoader } from 'olymp-fela';
import { Img } from 'olymp-cloudinary';
import { Blocks } from 'olymp-pages';
import { SlateMate, withBlockTypes } from 'olymp-slate';
import VCard from './vcard';
import { ImageStyles } from '../image';
import HeaderBlock from '../header';
import ContainerBlock from '../container';
import { range } from 'lodash';

const loaderSchema = [
  {
    height: 450,
    width: '100%',
  },
  {
    height: 600,
    width: 'container',
    grid: [
      {
        medium: 5,
      },
      {
        medium: 7,
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

const Content = createComponent(
  ({ theme }) => ({
    width: '100%',
    paddingX: theme.space5,
  }),
  p => <Grid.Item medium={7} {...p} />,
  p => Object.keys(p)
);

const Peak = createComponent(
  props => ({
    ...ImageStyles(props),
    marginBottom: props.theme.space3,
  }),
  ({ className, header, subheader, value }) =>
    (<div className={className}>
      <div>
        <div>
          <Img value={value} width="100%" maxSize={1000} />
        </div>
      </div>
      {(header || subheader) &&
        <Label>
          <h1>{header}</h1>
          <p>{subheader}</p>
        </Label>}
    </div>),
  p => Object.keys(p)
);

const component = withColor(
  ({ item }) => item.farbe
)(({ className, attributes, item }) =>
  (<SchemaLoader isLoading={!item.name} schema={loaderSchema}>
    <div>
      {item.image
        ? <Peak
          value={item.image}
          header={item.slogan}
          subheader={item.willkommen}
          color={item.farbe}
        />
        : <Header subheader={item.willkommen} color={item.farbe}>
          {item.slogan}
        </Header>}
      <Container className={className} color={item.farbe} {...attributes}>
        <Grid>
          <Grid.Item medium={5}>
            <VCard org={item} />
          </Grid.Item>
          <Content>
            <Slate readOnly value={item.text} />
            {/* children*/}
          </Content>
        </Grid>
      </Container>
    </div>
  </SchemaLoader>)
);

const componentWithData = graphql(
  gql`
  query einrichtung($id: String) {
    item: einrichtung(id: $id) {
      id
      name
      title
      art
      farbe
      slug
      slogan
      willkommen

      etage
      freifeld
      openings
      eMail
      fax
      telefon
      telefonPrivat
      website

      image {
        url
        crop
        width
        height
        caption
        source
      }
      logo {
        url
        crop
        width
        height
        caption
        source
      }

      fachrichtungen
      tags
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
      personen {
        id
        name
        beschreibung
        bild {
          url
          crop
          width
          height
          caption
          source
        }
        telefon
        fax
        eMail
        text
      }

      text
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

export default {
  key: 'GZK.Collections.OrgBlock',
  label: 'Einrichtung',
  category: 'Collections',
  editable: false,
  component: componentWithData,
};
