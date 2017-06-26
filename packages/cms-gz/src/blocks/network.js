import React from 'react';
import { createComponent, Container } from 'olymp-fela';
import { graphql, gql, Link } from 'olymp';
import { H1 } from '../components';

const StyledLink = createComponent(
  ({ color }) => ({
    color,
  }),
  p => <Link {...p} />,
  p => Object.keys(p)
);

const component = graphql(
  gql`
  query netzwerkList {
    items: netzwerkList {
      name
      beschreibung
      bild
      website
      farbe
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
)(({ attributes, children, items }) => <div />);

export default {
  key: 'GZK.Panel.Network',
  label: 'Netzwerk',
  category: 'Panel',
  editable: true,
  component,
};
