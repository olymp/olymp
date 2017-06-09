import React, { Component } from 'react';
import { withRouter } from 'olymp';
import { createComponent, Container } from 'olymp-fela';
import capitalize from 'lodash/upperFirst';

@withRouter
class Content extends Component {
  render() {
    const { pathname, children } = this.props;
    const path = pathname.split('/').filter(p => p);
    return (
      <Container>
        <h1>{children || capitalize(path[path.length - 1])}</h1>
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
}), ({ className, children }) => (
  <div className={className}>
    <Content>{children}</Content>
  </div>
), p => Object.keys(p));

export default {
  label: 'Überschrift',
  category: 'Template',
  editable: true,
  component: ({ getData, ...props }) => (
    <Header>
      {getData('title')}
    </Header>
  ),
  actions: [{
    tooltip: 'Überschrift',
    toggle: ({ setData, getData, ...p }) => {
      const title = prompt('Überschrift', getData('title', ''));
      setData({ title });
    },
  }],
};
