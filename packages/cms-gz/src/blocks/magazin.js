import React from 'react';
import { createComponent, Container, Grid, border } from 'olymp-fela';
import { H2, Panel } from '../components';
import { graphql, gql, Link } from 'olymp';

const Image = createComponent(
  ({ theme }) => ({
    marginRight: theme.space2,
    width: 100,
    height: 'auto',
    float: 'left',
  }),
  ({ className, url }) => <img className={className} src={url} alt="" />,
  p => Object.keys(p)
);

const Li = createComponent(
  ({ theme }) => ({
    paddingTop: theme.space2,
    borderBottom: border(theme),
    ':last-of-type': {
      marginBottom: theme.space3,
    },
  }),
  'li',
  p => Object.keys(p)
);

const Tag = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.dark4,
    paddingY: theme.space2,
    paddingX: theme.space3,
    margin: theme.space2,
    marginLeft: 0,
    display: 'inline-block',
    onHover: {
      backgroundColor: theme.color,
      color: theme.light,
    },
  }),
  'div',
  p => Object.keys(p)
);

const component = graphql(
  gql`
  query artikelList {
    items: artikelList {
      id
      name
      farbe
      extrakt
      slug
      bild { width height url crop }
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
)(({ attributes, items, getData, ...props }) =>
  (<Container {...attributes}>
    <Grid>
      <Grid.Item medium={8}>
        {items.map(item =>
          (<Panel
            accent={item.farbe}
            key={item.id}
            title={item.name}
            bordered="Der hallux rigidus"
          >
            <Image value={item.bild} />
            <p>
              {item.extrakt}
            </p>
            <Link to={item.slug}>Weiterlesen...</Link>
          </Panel>)
        )}
      </Grid.Item>
      <Grid.Item medium={4} paddingMini="0.5rem 1rem" paddingMedium="0 1rem">
        <H2>Ausgaben als PDFs</H2>
        <ul>
          <Li>Gesund im Zentrum - <b>Sport</b></Li>
          <Li>Gesund im Zentrum - <b>Gesundheit</b></Li>
          <Li>Gesund im Zentrum - <b>Fitness</b></Li>
        </ul>

        <H2>Schlagworte</H2>
        <Tag>Sport</Tag>
        <Tag>Gesundheit</Tag>
        <Tag>Fitness</Tag>
      </Grid.Item>
    </Grid>
  </Container>)
);

export default {
  key: 'GZK.Collections.MagazinBlock',
  label: 'Magazin',
  category: 'Collections',
  editable: false,
  component,
};
