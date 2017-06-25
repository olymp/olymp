import React from 'react';
import { createComponent, Container, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { Blocks } from 'olymp-pages';
import { graphql, gql } from 'olymp';
import VCard from './vcard';
import { ImageStyles } from '../image';
import { withColor } from 'olymp-fela';
import { SlateMate, withBlockTypes } from 'olymp-slate';

const Label = Blocks.ImageBlockLabel.component;

const Slate = withBlockTypes(props => <SlateMate {...props} />);
const component = withColor(
  ({ item }) => item.farbe
)(({ className, attributes, children, item }) =>
  (<div>
    <Peak
      value={item.peak}
      header={item.slogan}
      subheader={item.willkommen}
      color={item.farbe}
    />
    <Container className={className} {...attributes}>
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
  </div>)
);

const componentWithData = graphql(
  gql`
  query einrichtung($id: String) {
    item: einrichtung(id: $id) {
      name
      kurz
      art
      farbe
      slug
      slogan
      willkommen

      etage
      freifeld
      zeiten
      eMail
      fax
      telefon
      telefonPrivat
      website

      peak {
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
      # aesthetik: [NestedEinrichtungLeistung]
      # vorsorgen: [NestedEinrichtungLeistung]
      # leistungen: [NestedEinrichtungLeistung]
      # prophylaxen: [NestedEinrichtungLeistung]
      # personen: [NestedEinrichtungPerson]

      text
    }
  }
`,
  {
    options: ({ id }) => ({
      variables: {
        id: id || 'BJuOod57-',
      },
    }),
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      item: data.item || {},
    }),
  }
)(component);

const Content = createComponent(
  ({ theme }) => ({
    width: '100%',
    paddingX: theme.space3,
  }),
  p => <Grid.Item medium={7} {...p} />,
  p => Object.keys(p)
);

const Peak = createComponent(
  ImageStyles,
  ({ className, header, subheader, ...rest }) =>
    (<div className={className} contentEditable={false}>
      <div>
        <div>
          <Image {...rest} width="100%" />
        </div>
      </div>
      <Label>
        <h1>{header}</h1>
        <p>{subheader}</p>
      </Label>
    </div>),
  p => Object.keys(p)
);

export default {
  key: 'GZK.Collections.OrgBlock',
  label: 'Einrichtung',
  category: 'Collections',
  editable: false,
  component: componentWithData,
  /* styles: ({ theme }) => ({
    '& h1': {
      color: 'white',
      '> span': {
        backgroundColor: org.farbe,
      },
    },
    '& a': {
      color: org.farbe,
    },
  }),*/
};
