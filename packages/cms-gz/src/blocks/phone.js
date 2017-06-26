import React from 'react';
import { createComponent, Container } from 'olymp-fela';
import { graphql, gql, Link } from 'olymp';
import { H1, Logo } from '../components';

const StyledLink = createComponent(
  ({ theme }) => ({
    color: theme.dark,
    marginLeft: 20,
  }),
  p => <Link {...p} />,
  p => Object.keys(p)
);

const MarginContainer = createComponent(
  ({ theme }) => ({
    marginY: theme.space3,
  }),
  p => <Container {...p} />,
  p => Object.keys(p)
);

const Entry = createComponent(
  ({ theme, color }) => ({
    position: 'relative',
    width: '100%',
    borderRadius: theme.borderRadius,
    paddingX: theme.space3,
    paddingY: theme.space2,
    '> span': {
      float: 'right',
    },
    onHover: {
      backgroundColor: theme.dark5,
      '> a': {
        color,
      },
    },
  }),
  ({ className, children, number }) =>
    (<p className={className}>
      {children}
      <Phone href={`tel:${number}`}>{number}</Phone>
    </p>),
  p => Object.keys(p)
);

const Phone = createComponent(
  ({ theme }) => ({
    float: 'right',
    color: theme.dark,
  }),
  'a',
  p => Object.keys(p)
);

const Info = createComponent(
  ({ theme }) => ({
    paddingTop: theme.space2,
    paddingBottom: theme.space3,
  }),
  'div',
  p => Object.keys(p)
);

const Text = createComponent(
  ({ theme }) => ({
    paddingY: theme.space3,
  }),
  'div',
  p => Object.keys(p)
);

const component = graphql(
  gql`
  query einrichtungList {
    items: einrichtungList {
      id
      name
      farbe
      title
      telefon
      slug
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
)(({ attributes, children, items }) =>
  (<MarginContainer>
    <H1>Telefonnummern</H1>
    <Info>Sie erreichen uns unter folgenden Telefonnummern:</Info>
    {items.map(item =>
      (<Entry number={item.telefon} key={item.id} color={item.farbe}>
        <Logo color={item.farbe} icon={16} />
        <StyledLink to={item.slug}>
          {item.title || item.name}
        </StyledLink>
      </Entry>)
    )}
    <Text {...attributes}>
      {children}
    </Text>
  </MarginContainer>)
);

export default {
  key: 'GZK.Collections.PhoneBlock',
  label: 'Telefon',
  category: 'Collections',
  editable: true,
  component,
};
