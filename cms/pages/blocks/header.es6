import React from 'react';
import { createComponent, Container } from 'olymp-fela';
import { withRouter, Link } from 'olymp-router';
import capitalize from 'lodash/upperFirst';

const Breadcrumb = createComponent(
  ({ theme }) => ({
    fontSize: 'small',
  }),
  'div',
  p => Object.keys(p),
);

const HeaderBlock = ({ attributes, className, children, pathname }) => {
  const path = pathname.split('/').filter(p => p);
  let slug = '';

  return (
    <div className={className} {...attributes}>
      <Container>
        <h1>{children}</h1>
        <Breadcrumb contentEditable={false}>
          Sie sind hier: <Link to="/">Startseite</Link>{' '}
          {path.map((p) => {
            slug = `${slug}/${p}`;

            return (
              <span key={p}>
                » <Link to={slug}>{capitalize(p)}</Link>
              </span>
            );
          })}
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default {
  type: 'Pages.Template.Header',
  isVoid: false,
  kind: 'block',
  label: 'Überschrift',
  category: 'Kopf',
  component: withRouter(HeaderBlock),
  defaultText: 'Titel',
  styles: ({ theme }) => ({
    backgroundColor: '#ddd',
    minHeight: 100,
    width: '100%',
    marginBottom: 20,
    paddingY: theme.space3,
  }),
};
