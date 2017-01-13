import React, { Component } from 'react';
import { Link } from 'olymp';

export default class Footer extends Component {
  static defaultProps = {
    tree: [],
  };

  render() {
    const { navigation, user, location } = this.props;

    var nav = (navigation && navigation['foot'] ? navigation['foot'] : []).filter(item => item.slug !== '/home').map(item => {
      var secondLvl = (item.children || []).map(item => {
        return (
          <Link to={item.slug} key={item.slug} className="item" activeClassName="active">
            {item.name}
          </Link>
        );
      });
      if (secondLvl.length > 0) {
        return (
          <div to={item.slug} key={item.slug} className="ui simple dropdown item" activeClassName="active">
            {item.name}
            <i className="dropdown icon"></i>
            <div className="menu">
              {secondLvl}
            </div>
          </div>
        );
      }
      return (
        <li className="nav-item" key={item.slug}>
          <Link to={item.slug} className="item" activeClassName="active">
            {item.name}
          </Link>
        </li>
      );
    });

    return (
      <div className="container">
        <nav className="nav nav-inline">
          <small>
            <Link className="nav-link" to="/kontakt">Impressum</Link> - GesundheitsZentrum Kelkheim. Copyright {new Date().getFullYear()}.
          </small>
          <ul className="pull-right">
            {nav}
            {!user && location ? <Link className="item" to={{ pathname: location.pathname, query: { login: null } }}>
              <i className="fa fa-sign-in"></i>
            </Link> : null}
          </ul>
        </nav>
      </div>
    );
  }
}
