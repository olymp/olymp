import React, { Component } from 'react';
import { SwitchLocation, MatchPath, Match, Redirect, Link } from 'olymp-router';
import withLocale from 'olymp-locale/de';
import { ScreenLoader, TopLoader, Offline } from 'olymp-fela';
import { auth } from 'olymp-auth';
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

@withLocale({})
@auth()
@connect(({ auth }) => ({ verifying: auth.verifying }))
export default class App extends Component {
  render() {
    const { verifying } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Hello</Link>
          </li>
          <li>
            <Link to="/bye">Bye</Link>
          </li>
        </ul>
        <Load />
        <Off />
        <ScreenLoader show={verifying} />
        {!verifying && (
          <SwitchLocation>
            <MatchPath match="/" exact component={Hello} />
            <MatchPath match="/bye" exact component={Bye} />
            <MatchPath
              match="/redirect"
              exact
              render={() => <Redirect to={{ pathname: '/browser' }} />}
            />
            <Match render={() => 'Error'} />
          </SwitchLocation>
        )}
      </div>
    );
  }
}
