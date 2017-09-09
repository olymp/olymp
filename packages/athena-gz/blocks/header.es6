import React, { Component } from 'react';
import { withRouter } from 'olymp-router';
import { createComponent, Container } from 'olymp-fela';
import capitalize from 'lodash/upperFirst';

@withRouter
class Content extends Component {
  render() {
    const { pathname, children, subheader, editor } = this.props;
    const path = pathname.split('/').filter(p => p);

    return (
      <Container>
        <h1>{children}</h1>
        <p contentEditable={!editor || editor.props.readOnly ? undefined : false}>
          {subheader !== undefined ? (
            subheader
          ) : (
            `Startseite / ${path.map(p => `${capitalize(decodeURI(p))}`).join(' / ')}`
          )}
        </p>
      </Container>
    );
  }
}

export default {
  key: 'GZK.Header.Header',
  label: 'Überschrift',
  category: 'Kopfleiste',
  editable: true,
  component: createComponent(
    ({ theme, color }) => ({
      width: '100%',
      backgroundColor: color || '#71636a',
      color: theme.light,
      borderBottomRightRadius: 60,
      paddingX: theme.space3,
      paddingY: '1.33rem',
      marginBottom: theme.space3,
      '> div': {
        '> h1': {
          color: theme.light,
          lineHeight: 'initial',
        },
      },
      ifSmallDown: {
        borderBottomRightRadius: 50,
        marginX: theme.space2,
        width: 'calc(100% - 1rem)',
      },
    }),
    ({ className, attributes, ...rest }) => (
      <div className={className} {...attributes}>
        <Content {...rest} />
      </div>
    ),
    p => Object.keys(p),
  ),
};
