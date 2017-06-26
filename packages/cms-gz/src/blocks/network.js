import React from 'react';
import { graphql, gql } from 'olymp';
import { createComponent, Container, Grid } from 'olymp-fela';
import { Img } from 'olymp-cloudinary';

const Image = createComponent(
  ({ theme }) => ({
    marginX: 'auto',
    marginBottom: theme.space3,
    filter: 'grayscale(100%)',
    opacity: 0.3,
    transition: 'opacity .4s ease,filter .4s ease',
    onHover: {
      filter: 'none',
      opacity: 1,
    },
  }),
  p => <Img {...p} />,
  p => Object.keys(p)
);

const Item = createComponent(
  ({ theme }) => ({
    padding: theme.space2,
    marginY: theme.space2,
    textAlign: 'center',
  }),
  ({ className, website, name, tags, bild, size }) =>
    (<Grid.Item className={className} mini={size} medium={1} gridSize={size}>
      <a href={website} rel="noopener noreferrer">
        <Image
          value={bild}
          options={{ c: 'pad' }}
          maxSize={200}
          width="70%"
          ratio={1}
        />
        <h3>{name}</h3>
        <p>{tags.join(', ')}</p>
      </a>
    </Grid.Item>),
  p => Object.keys(p)
);

const component = graphql(
  gql`
  query netzwerkList {
    items: netzwerkList {
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
      website
      farbe
      tags
    }
  }
`,
  {
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      items: data.items || [],
    }),
  }
)(
  createComponent(
    ({ theme }) => ({
      backgroundColor: theme.dark5,
      marginY: theme.space3,
      paddingY: theme.space2,
    }),
    ({ className, attributes, items }) =>
      (<div className={className} {...attributes}>
        <Container>
          <Grid size={items.length}>
            {items.map(item =>
              <Item {...item} size={items.length} key={item.id} />
            )}
          </Grid>
        </Container>
      </div>),
    p => Object.keys(p)
  )
);

export default {
  key: 'GZK.Panel.Network',
  label: 'Netzwerk',
  category: 'Panel',
  editable: false,
  component,
};
