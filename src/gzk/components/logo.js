import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';

export default class Logo extends Component {
  static defaultProps = {
    title: 'OP Zentrum',
    text: 'Im GesundheitsZentrum',
  }

  render() {
    const { title, text, icon, color } = this.props;

    if (icon) {
      return (
        <Icon color={color} width={20} height={20} icon />
      );
    }

    return (
      <Icon color={color} width={221} height={41}>
        <Title color={color}>{title}</Title>
        <SubTitle color={color}>{text}</SubTitle>
      </Icon>
    );
  }
}

const LogoBig = createComponent(({ color }) => ({
  fill: color,
}), ({ className }) => (
  <path
    className={className}
    d="M23.9999995 24 L24 2.7 C24 2.7 23.3 0.7 21.9 1 C18.4139693 1.9 12 4 8.2 8 C4.5754908 11.8 1.7 18.9 1 22.3 C0.709504296 24.1 3.1 24 3.1 24 L23.9999995 24 Z"
  />
), p => Object.keys(p));

const LogoSmall = createComponent(() => ({
  fill: '#828282',
}), ({ className }) => (
  <path
    className={className}
    d="M0 0.2 L0 9 C0 9 0.3 9.8 0.9 9.6 C2.4 9.3 5.2 8.4 6.8 6.8 C8.3 5.2 9.6 2.3 9.8 0.9 C10 0.2 9 0.2 9 0.2 L0 0.2 Z"
  />
), p => Object.keys(p));

const Icon = createComponent(({ theme, color, width, height, icon }) => ({
  width,
  height,
  fill: color || theme.color,
  marginTop: icon ? 3 : 6,
  marginLeft: theme.space1,
  maxWidth: icon ? 'auto' : 999,
}), ({ className, children, color, width, height }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} version="1.1">
    <g transform="scale(1.5)">
      <LogoBig color={color} />
      <LogoSmall />
      {children}
    </g>
  </svg>
), p => Object.keys(p));

const Title = createComponent(() => ({
  fontSize: 11,
  fontFamily: 'Times New Roman',
  fontStyle: 'italic',
  fontWeight: 700,
  fill: '#94828B',
}), ({ className, children }) => (
  <text className={className}>
    <tspan x="31" y="11">{children}</tspan>
  </text>
), p => Object.keys(p));

const SubTitle = createComponent(({ theme, color }) => ({
  fontSize: 10,
  fontFamily: 'Arial',
  fill: color || theme.color,
}), ({ className, children }) => (
  <text className={className}>
    <tspan x="31" y="22">{children}</tspan>
  </text>
), p => Object.keys(p));
