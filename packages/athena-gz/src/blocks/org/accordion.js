import React, { Component } from 'react';
import { createComponent, border } from 'olymp-fela';
import { FaAngleRight, FaAngleLeft } from 'olymp-icons';
import { SlateMate } from 'olymp-slate';

const Icon = createComponent(
  ({ theme }) => ({
    float: 'right',
  }),
  ({ className, children }) =>
    (<span className={className}>
      {children}
    </span>),
  p => Object.keys(p)
);

const Link = createComponent(
  ({ theme, farbe, active }) => ({
    paddingTop: theme.space1,
    cursor: 'pointer',
    display: 'block',
    borderBottom: active ? border(theme, farbe) : border(theme, 'transparent'),
    onHover: {
      backgroundColor: theme.dark5,
      borderRadius: theme.borderRadius,
      paddingX: theme.space2,
      marginX: `-${theme.space2}`,
    },
  }),
  ({ className, children, farbe, active, onClick }) =>
    (<div className={className} onClick={onClick}>
      {children}

      <Icon>
        {!active
          ? <FaAngleRight size={14} color={farbe} />
          : <FaAngleLeft size={14} color={farbe} />}
      </Icon>
    </div>),
  p => Object.keys(p)
);

const Text = createComponent(
  ({ theme }) => ({
    padding: theme.space2,
    color: theme.dark2,
    hyphens: 'auto',
    textAlign: 'justify',
  }),
  ({ className, children }) =>
    (<div className={className}>
      <SlateMate value={children} readOnly />
    </div>),
  p => Object.keys(p)
);

const Container = createComponent(
  ({ theme }) => ({
    marginY: 0,
  }),
  ({ className, name, farbe, text, active, onClick }) =>
    (<div className={className}>
      <Link onClick={onClick} farbe={farbe} active={active}>
        {name}
      </Link>
      {active &&
        <Text>
          {text}
        </Text>}
    </div>),
  p => Object.keys(p)
);

export default class Accordion extends Component {
  state = { active: false };

  render() {
    const { active } = this.state;

    return (
      <Container
        {...this.props}
        active={active}
        onClick={() => this.setState({ active: !active })}
      />
    );
  }
}
