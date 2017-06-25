import React from 'react';
import { createComponent, Container } from 'olymp-fela';
import { H1 } from '../components';

const MarginContainer = createComponent(
  ({ theme }) => ({
    marginY: theme.space3,
  }),
  p => <Container {...p} />,
  p => Object.keys(p)
);

const Entry = createComponent(
  ({ theme }) => ({
    width: '100%',
    borderRadius: theme.borderRadius,
    paddingX: theme.space3,
    paddingY: theme.space2,
    '> span': {
      float: 'right',
    },
    onHover: {
      backgroundColor: theme.dark5,
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

export default {
  key: 'GZK.Collections.PhoneBlock',
  label: 'Telefon',
  category: 'Collections',
  editable: true,
  component: ({ attributes, children }) =>
    (<MarginContainer>
      <H1>Telefonnummern</H1>
      <Info>Sie erreichen uns unter folgenden Telefonnummern:</Info>
      <Entry number="06195 6772 200">
        <a href="#">Privatpraxis für HNO-Heilkunde</a>
      </Entry>
      <Entry number="06195 6772 200">
        <a href="#">Privatpraxis für HNO-Heilkunde</a>
      </Entry>
      <Entry number="06195 6772 200">
        <a href="#">Privatpraxis für HNO-Heilkunde</a>
      </Entry>
      <Entry number="06195 6772 200">
        <a href="#">Privatpraxis für HNO-Heilkunde</a>
      </Entry>
      <Text {...attributes}>
        {children}
      </Text>
    </MarginContainer>),
};
