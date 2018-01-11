export * from './image';
export * from './loader';
export * from './heading';
export * from './utils';
export { default as Offline } from './offline';
export { default as Grid } from './grid';
export { default as Container } from './container';
export { default as Modal } from './modal';
export { default as Print } from './print';
export { default as Layout } from './layout';
export { default as Sidebar, AutoSidebar } from './sidebar';
export { default as Drawer } from './drawer';
export { default as scrollTop, scrollTopHelper } from './scroll-top';
// export * from './menu';
// export { default as Menu } from './menu';
export { default as Nav } from './nav';
export { default as PageTransition } from './page-transition';
export { default as MaterialColors } from './material-colors';
// export { default as LightBox } from './lightbox';
export { default as Button } from './button';
export { default as Avatar } from './avatar';
export { default as Logo } from './logo';
export { default as Panel } from './panel';

import { createFela } from './utils/create-fela';
export const plugin = () => {
  const renderer = createFela();
  if (typeof window !== 'undefined') {
    return {
      decorate: App => props => (
        <FelaProvider renderer={renderer}>
          <App {...props} />
        </FelaProvider>
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
        <FelaProvider renderer={renderer}>
          <App {...props} />
        </FelaProvider>
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
