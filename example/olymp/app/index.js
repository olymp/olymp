import React, { Component } from 'react';
import { SwitchPathname, MatchPath, Match, Redirect, Link } from 'olymp-router';
import { ScreenLoader, TopLoader, Offline } from 'olymp-fela';
import { connect } from 'react-redux';
import Hello from './hello';
import Bye from './bye';

const Load = connect(({ app }) => ({
  loading: app.loading,
  transparent: true,
}))(TopLoader);

const Off = connect(({ app }) => ({
  isOffline: !app.internetConnection,
  isServerDown: !app.serverConnection,
  transparent: true,
}))(Offline);

export default class App extends Component {
  render() {
    const { verifying } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link pathname="/">Hello</Link>
          </li>
          <li>
            <Link pathname="/bye">Bye</Link>
          </li>
        </ul>
        {/* <Load /> */}
        {/* <Off /> */}
        {/* <ScreenLoader show={verifying} /> */}
        {!verifying && (
          <SwitchPathname>
            <MatchPath match="/" exact component={Hello} />
            <MatchPath match="/bye" exact component={Bye} />
            <MatchPath
              match="/redirect"
              exact
              render={() => <Redirect to={{ pathname: '/browser' }} />}
            />
            <Match render={() => 'Error'} />
          </SwitchPathname>
        )}
      </div>
    );
  }
}
