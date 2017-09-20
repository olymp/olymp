import React from 'react';
import { createComponent, Container } from 'olymp-fela';
import { withRouter, Link } from 'olymp-router';
import capitalize from 'lodash/upperFirst';

const Header = createComponent(
  ({ theme }) => ({
    backgroundColor: '#ddd',
    minHeight: 100,
    width: '100%',
    marginBottom: 20,
    paddingY: theme.space3,
    '> div': {
      '> h1': {
        color: '#737988',
      },
      '> h2': {
        color: '#737988',
      },
      '> h3': {
        color: '#737988',
      },
      '> h4': {
        color: '#737988',
      },
      '> h5': {
        color: '#737988',
      },
      '> h6': {
        color: '#737988',
      },
      '& blockquote': {
        display: 'block',
        position: 'relative',
        padding: theme.space3,
        paddingLeft: theme.space4,
        marginX: 'auto',
        marginY: theme.space3,
        fontFamily: 'Raleway, sans-serif',
        fontSize: '1.5rem',
        lineHeight: 1.2,
        borderLeft: `3px solid ${theme.color}`,
        color: theme.dark2,
        onBefore: {
          content: '"\\201C"',
          fontFamily: 'Times New Roman',
          fontSize: '3rem',
          fontWeight: 700,
          color: theme.dark3,
          position: 'absolute',
          left: 8,
          top: 0,
        },
      },
    },
  }),
  'div',
  p => Object.keys(p)
);

const Breadcrumb = createComponent(
  ({ theme }) => ({
    fontSize: 11,
  }),
  'div',
  p => Object.keys(p)
);

const HeaderBlock = ({ attributes, className, children, pathname }) => {
  const path = pathname.split('/').filter(p => p);
  let slug = '';

  return (
    <Header className={className} {...attributes}>
      <Container>
        <h1>{children}</h1>
        <Breadcrumb contentEditable={false}>
          Sie sind hier: <Link to="/">Startseite</Link>{' '}
          {path.map(p => {
            slug = `${slug}/${p}`;

            return (
              <span key={p}>
                » <Link to={slug}>{capitalize(p)}</Link>
              </span>
            );
          })}
        </Breadcrumb>
      </Container>
    </Header>
  );
};

export default {
  key: 'Pages.Template.Header',
  label: 'Überschrift',
  category: 'Text',
  editable: true,
  component: withRouter(HeaderBlock),
};
