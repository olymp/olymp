import React, { Component } from 'react';
import { withRouter } from 'olymp';
import { createComponent, Container } from 'olymp-fela';
import capitalize from 'lodash/upperFirst';

@withRouter
class Content extends Component {
  render() {
    const { pathname, children, query, search, dispatch, location, router, ...rest } = this.props;
    const path = pathname.split('/').filter(p => p);

    return (
      <Container>
        <h1 {...rest}>{children || capitalize(path[path.length - 1])}</h1>
        <h5>Startseite {path.map(p => `/ ${capitalize(p)}`)}</h5>
      </Container>
    );
  }
}

const Header = createComponent(({ theme }) => ({
  width: '100%',
  backgroundColor: '#ffa210',
  color: theme.light,
  borderBottomRightRadius: 75,
  paddingX: theme.space3,
  paddingY: '1.33rem',
  '> div': {
    '> h1': {
      lineHeight: 'initial',
      fontWeight: 200,
      // fontStyle: 'italic',
    },
    '> h5': {
      fontWeight: 200,
    },
  }
}), ({ className, children, ...rest }) => (
  <div className={className}>
    <Content {...rest}>{children}</Content>
  </div>
), p => Object.keys(p));

export default {
  label: 'Kopfleiste',
  category: 'Template',
  editable: true,
  component: ({ attributes, children }) => (
    <Header {...attributes}>
      {children}
    </Header>
  ),
};
