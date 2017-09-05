// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComponent } from 'react-fela';
import { Input } from 'antd';
import { isInsertMode } from 'ory-editor-core/lib/selector/display';
import { createStructuredSelector } from 'reselect';
import {
  LayoutPlugin,
  ContentPlugin,
} from 'ory-editor-core/lib/service/plugin/classes';
import Item from './item';
import Provider from '../provider';

const Container = createComponent(
  ({ theme, open }) => ({
    color: theme.dark,
    backgroundColor: theme.light,
    transition: 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    boxShadow: theme.boxShadow,
    height: '100%',
    width: 256,
    position: 'fixed',
    zIndex: 1300,
    left: 0,
    top: 0,
    transform: open ? 'translate(0, 0)' : 'translate(-266px, 0)',
    overflow: 'auto',
    padding: theme.space2,
  }),
  'div',
  p => Object.keys(p)
);

class Raw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: (a: any) => a,
      isSearching: false,
    };
  }

  state: {
    searchFilter: Function,
    isSearching: boolean,
  };

  onSearch = (e: Event) => {
    const target = e.target;
    if (target instanceof HTMLInputElement) {
      this.setState({
        searchFilter: ((v: any) => ({ text = '' }: Object) =>
          text.toLowerCase().indexOf(v) > -1)(target.value.toLowerCase()),
        isSearching: target.value.length > 0,
      });
    }
  };

  render() {
    const { isInsertMode, editor: { plugins } } = this.props;
    const { searchFilter } = this.state;
    const content = plugins.plugins.content.filter(searchFilter);
    const layout = plugins.plugins.layout.filter(searchFilter);

    return (
      <Container open={isInsertMode}>
        <Input placeholder="Suche" onChange={this.onSearch} />
        <div>
          {content.length ? <h3>Content plugins</h3> : null}
          {content.map((plugin: ContentPlugin, k: Number) => {
            const initialState = plugin.createInitialState();

            return (
              <Item
                plugin={plugin}
                key={k}
                insert={{
                  content: {
                    plugin,
                    state: initialState,
                  },
                }}
              />
            );
          })}
        </div>
        <div>
          {layout.length ? <h3>Layout plugins</h3> : null}
          {layout.map((plugin: LayoutPlugin, k: Number) => {
            const initialState = plugin.createInitialState();
            const children = plugin.createInitialChildren();

            return (
              <Item
                plugin={plugin}
                key={k}
                insert={{
                  ...children,
                  layout: {
                    plugin,
                    state: initialState,
                  },
                }}
              />
            );
          })}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({ isInsertMode });

const Decorated = connect(mapStateToProps)(Raw);

const Toolbar = (props: any) =>
  (<Provider {...props}>
    <Decorated {...props} />
  </Provider>);

export default Toolbar;
