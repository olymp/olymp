import React from 'react';
import { createComponent, SchemaLoader } from 'olymp-fela';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { PrefetchLink as Link } from 'olymp-athena';
import { withEdit, withCreate } from 'olymp-collection';
import { range } from 'lodash';
import { H1, Logo } from '../components';

const loaderSchema = [
  {
    height: 0,
  },
  ...range(20).map(i => ({
    height: 43,
    width: '100%',
  })),
];

const StyledLink = createComponent(
  ({ theme }) => ({
    color: theme.dark,
    marginLeft: 20,
    ifSmallDown: {
      display: 'block',
      ellipsis: true,
    },
  }),
  p => <Link {...p} />,
  p => Object.keys(p),
);

const MarginContainer = createComponent(
  ({ theme }) => ({
    marginY: theme.space3,
  }),
  'div',
  p => Object.keys(p),
);

const Item = withEdit('org')(
  createComponent(
    ({ theme, color }) => ({
      position: 'relative',
      width: '100%',
      borderRadius: theme.borderRadius,
      paddingX: theme.space3,
      paddingY: theme.space2,
      '> span': {
        float: 'right',
      },
      '> a': {
        color: theme.dark,
      },
      onHover: {
        backgroundColor: theme.dark5,
        '> a': {
          color,
        },
      },
      ifSmallDown: {
        paddingY: theme.space3,
      },
    }),
    ({ className, children, number }) => (
      <div className={className}>
        {children}
        <Phone href={`tel:${number}`}>{number}</Phone>
      </div>
    ),
    p => Object.keys(p),
  ),
);

const Phone = createComponent(
  ({ theme }) => ({
    float: 'right',
    color: theme.dark,
  }),
  'a',
  p => Object.keys(p),
);

const Info = createComponent(
  ({ theme }) => ({
    paddingTop: theme.space2,
    paddingBottom: theme.space3,
  }),
  'div',
  p => Object.keys(p),
);

const component = withCreate('org')(
  graphql(
    gql`
      query orgList {
        items: orgList(query: { state: { eq: PUBLISHED } }) {
          id
          name
          color
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
        isLoading: data.loading,
        items: data.items || [],
      }),
    },
  )(({ attributes, items, isLoading }) => (
    <MarginContainer {...attributes}>
      <H1>Telefonnummern</H1>
      <Info>Sie erreichen uns unter folgenden Telefonnummern:</Info>
      <SchemaLoader isLoading={isLoading} schema={loaderSchema}>
        <div>
          {items.map(item => (
            <Item number={item.telefon} key={item.id} id={item.id} color={item.color}>
              <Logo color={item.color} icon={16} />
              <StyledLink to={item.slug}>{item.title || item.name}</StyledLink>
            </Item>
          ))}
        </div>
      </SchemaLoader>
    </MarginContainer>
  )),
);

export default {
  type: 'GZK.Collections.PhoneBlock',
  label: 'Telefon',
  category: 'Collections',
  isVoid: true,
  kind: 'block',
  component,
};
