import React, { Component } from 'react';
import { graphql, gql, cn } from 'olymp';
import { Navigation } from 'olymp/cms';
import sortBy from 'lodash/sortBy';

@graphql(gql`
  query personen {
    personen: personList(query: { state: { eq: PUBLISHED } }) {
      id
      name
      rollen {
        name
      }
    }
  }
`)
export default class Header extends Component {
  render() {
    const { location, data, showHome = true, className } = this.props;
    let { pages = [] } = this.props;
    let { personen } = data;
    const nav = {};

    if (!showHome) {
      pages = pages.filter(page => page.slug !== '/');
    }

    pages = pages.filter(page => page.slug !== '/impressum');

    Object.keys(pages).forEach((key) => {
      const page = pages[key];
      if (!nav[page.menu || 'main']) nav[page.menu || 'main'] = [];
      nav[page.menu || 'main'].push(page);
    });

    const rollen = {};
    personen = sortBy(personen, person => person.name.split(' ').splice(-1));
    (personen || []).forEach(person => person.rollen.forEach((rolle) => {
      if (!rollen[rolle.name]) rollen[rolle.name] = [];

      rollen[rolle.name].push(person);
    }));
    Object.keys(rollen).forEach(key => {
      if (rollen[key].length === 1) {
        delete rollen[key];
      }
    });

    return (
      <nav className={cn(className, 'navbar navbar-toggleable-sm nav-component p-0')}>
        <Navigation nav={nav.main} className="navbar-nav" location={location} rollen={rollen} />
      </nav>
    );
  }
}

