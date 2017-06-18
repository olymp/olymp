import React from 'react';
import { ThemeProvider, createFela } from 'react-fela';
import { Provider as FelaProvider } from 'react-fela';
import { MemoryRouter } from 'react-router';

const ss = document.getElementById('fela') || document.createElement('style');
if (!ss.id) {
  ss.id = 'fela';
  ss.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(ss);
}

const renderer = createFela();

export const FelaDecorator = story =>
  <FelaProvider renderer={renderer} mountNode={ss}>
    <ThemeProvider>{story()}</ThemeProvider>
  </FelaProvider>;

export const RouterDecorator = story =>
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>;
