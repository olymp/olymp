import React from 'react';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from 'olymp-storybook';
import { createComponent } from 'react-fela';
import { message } from 'antd';
import * as FA4 from '../fa4/index';
import * as FA5 from '../fa5/index';

const copyTextToClipboard = (name, size) => {
  const textArea = document.createElement('textarea');
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = `<${name} size={${size}} />`;
  document.body.appendChild(textArea);
  textArea.select();

  try {
    document.execCommand('copy');
    message.success(`Copied ${name} to clipboard!`);
  } catch (err) {
    message.error('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
};

const Container = createComponent(
  ({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.space3,
  }),
  'div',
  p => Object.keys(p)
);

const IconContainer = createComponent(
  ({ theme }) => ({
    flex: 1,
    backgroundColor: '#ffffff',
    border: '1px solid #dddddd',
    padding: theme.space3,
    margin: theme.space2,
    borderRadius: theme.borderRadius,
    textAlign: 'center',
    transition: 'transform 0.3s linear',
    cursor: 'pointer',
    onHover: {
      transform: 'scale(1.1)',
    },
  }),
  ({ name, size, className, children }) =>
    (<div className={className} onClick={() => copyTextToClipboard(name, size)}>
      {children}
      <p>
        {name}
      </p>
    </div>),
  p => Object.keys(p)
);

const storiefy = storiesOf('Icons');

storiefy('FontAwesome 4', () =>
  (<Container>
    {Object.keys(FA4).map((icon) => {
      const Icon = FA4[icon];

      return (
        <IconContainer name={icon} size={number('size', 30)} key={icon}>
          <Icon size={number('size', 30)} />
        </IconContainer>
      );
    })}
  </Container>)
);

storiefy('FontAwesome 5', () =>
  (<Container>
    {Object.keys(FA5).map((icon) => {
      const Icon = FA5[icon];

      return (
        <IconContainer name={icon} size={number('size', 30)} key={icon}>
          <Icon size={number('size', 30)} />
        </IconContainer>
      );
    })}
  </Container>)
);
