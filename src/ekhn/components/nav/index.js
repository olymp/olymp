import React, { Component } from 'react';
import { graphql, gql } from 'olymp';
import { Navbar } from 'olymp/cms';
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
export default class Nav extends Component {
  render() {
    const {
      data,
      showHome = true,
      className,
      readOnly,
      aboutUsLabel = 'Über Uns',
    } = this.props;
    let { pages = [] } = this.props;
    let { personen } = data;

    if (!showHome) {
      pages = pages.filter(page => page.slug !== '/');
    }
    pages = pages.filter(
      page => page.slug !== '/impressum' && page.slug !== '/datenschutz'
    );

    const aboutUs = pages.find(page => page.name === aboutUsLabel);
    if (aboutUs) {
      // Alle Rollen herausfiltern
      const rollen = {};
      personen = sortBy(personen, person => person.name.split(' ').splice(-1));
      (personen || []).forEach(person =>
        person.rollen.forEach(rolle => {
          if (!rollen[rolle.name]) rollen[rolle.name] = [];

          rollen[rolle.name].push(person);
        })
      );

      // Rollen mit nur einer Person sollen kein Untermenü haben
      Object.keys(rollen).forEach(key => {
        if (rollen[key].length === 1) {
          delete rollen[key];
        }
      });

      // Für jede Rolle Untermenü hinzufügen
      aboutUs.children = (aboutUs.children || []).map(rolle => ({
        ...rolle,
        children: (rollen[rolle.name] || []).map(person => ({
          id: person.id,
          name: person.name,
          path: `${rolle.path}?Person=${person.id}`,
          children: [],
          blocks: true,
          noOrdering: true,
        })),
      }));
    }

    return (
      <Navbar pages={pages} readOnly={readOnly} className={className} fill />
    );
  }
}
