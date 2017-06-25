import React, { Component } from 'react';
import { withRouter } from 'olymp';
import { createComponent, Container } from 'olymp-fela';
import capitalize from 'lodash/upperFirst';

@withRouter
class Content extends Component {
  render() {
    const {
      pathname,
      children,
      query,
      search,
      dispatch,
      location,
      router,
      ...rest
    } = this.props;
    const path = pathname.split('/').filter(p => p);

    return (
      <Container>
        <h1 {...rest}>{children}</h1>
        <span contentEditable={false}>
          Startseite {path.map(p => `/ ${capitalize(p)}`)}
        </span>
      </Container>
    );
  }
}

const Header = createComponent(
  ({ theme }) => ({
    width: '100%',
    backgroundColor: '#71636a',
    color: theme.light,
    borderBottomRightRadius: 75,
    paddingX: theme.space3,
    paddingY: '1.33rem',
    '> div': {
      '> h1': {
        color: theme.light,
        lineHeight: 'initial',
      },
    },
  }),
  ({ className, children, ...rest }) =>
    (<div className={className}>
      <Content {...rest}>{children}</Content>
    </div>),
  p => Object.keys(p)
);

export default {
  key: 'GZK.Header.Header',
  label: 'Überschrift',
  category: 'Kopfleiste',
  editable: true,
  component: ({ attributes, children }) =>
    (<Header {...attributes}>
      {children}
    </Header>),
};
