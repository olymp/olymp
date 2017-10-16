import React, { Component } from 'react';
import { createComponent, border } from 'olymp-fela';
import { FaAngleRight, FaAngleLeft } from 'olymp-icons';
import { SlateReader } from 'olymp-slate';

const Icon = createComponent(
  ({ theme }) => ({
    float: 'right',
  }),
  ({ className, children }) => <span className={className}>{children}</span>,
  p => Object.keys(p)
);

const Link = createComponent(
  ({ theme, color, active }) => ({
    paddingTop: theme.space1,
    cursor: 'pointer',
    display: 'block',
    borderBottom: active ? border(theme, color) : border(theme, 'transparent'),
    onHover: {
      backgroundColor: theme.dark5,
      borderRadius: theme.borderRadius,
      paddingX: theme.space2,
      marginX: `-${theme.space2}`,
    },
  }),
  ({ className, children, color, active, onClick }) => (
    <div className={className} onClick={onClick}>
      {children}

      <Icon>
        {!active ? (
          <FaAngleRight size={14} color={color} />
        ) : (
          <FaAngleLeft size={14} color={color} />
        )}
      </Icon>
    </div>
  ),
  p => Object.keys(p)
);

const Text = createComponent(
  ({ theme, active }) => ({
    display: active ? 'block' : 'none',
    padding: theme.space2,
    color: theme.dark2,
    hyphens: 'auto',
    textAlign: 'justify',
  }),
  ({ className, children }) => (
    <div className={className}>
      <SlateReader value={children} readOnly />
    </div>
  ),
  p => Object.keys(p)
);

const Container = createComponent(
  ({ theme }) => ({
    marginY: 0,
  }),
  ({ className, name, color, text, active, onClick }) => (
    <div className={className}>
      <Link onClick={onClick} color={color} active={active}>
        {name}
      </Link>
      <Text active={active}>{text}</Text>
    </div>
  ),
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
