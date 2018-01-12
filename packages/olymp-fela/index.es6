export * from 'react-fela';
export { default as color } from 'tinycolor2';

import React from 'react';
import { Provider } from 'react-fela';
import createFela from './create-fela';
import Theme from './theme-provider';

export const plugin = () => {
  const renderer = createFela();
  if (typeof window !== 'undefined') {
    return {
      decorate: App => props => (
        <Provider renderer={renderer}>
          <Theme>
            <App {...props} />
          </Theme>
        </Provider>
      ),
    };
  } else {
    let fela;
    return {
      bootstrap: async app => {
        fela = await renderToSheetList(renderer);
        return fela;
      },
      decorate: App => props => (
        <Provider renderer={renderer}>
          <Theme>
            <App {...props} />
          </Theme>
        </Provider>
      ),
      template: template => {
        const state = asyncContext.getState();
        template.header.push(`
          ${fela
            .map(
              ({ type, css, media }) =>
                media
                  ? `<style type="text/css" data-fela-type="${type}" media="${media}">${css}</style>`
                  : `<style type="text/css" data-fela-type="${type}">${css}</style>`
            )
            .join('\n')}
        `);
        return template;
      },
    };
  }
};
