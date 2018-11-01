import React, { Component } from 'react';
import { graphql, gql, withRouter, Link, slugify } from 'olymp';
import { DataLoader } from 'olymp/cms-core';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import sortBy from 'lodash/sortBy';
import Items from '../../components/items';

@graphql(gql`
  query rollen {
    rollen: rolleList(query: { state: { eq: PUBLISHED } }) {
      id
      name
      bild {
        url
        width
        height
        crop
        caption
        source
      }
      text
    }
    personen: personList(query: { state: { eq: PUBLISHED } }) {
      id
      name
      bild {
        url
        width
        height
        crop
        caption
        source
      }
      text
      rollen {
        id
        name
      }
    }
  }
`)
@useGenericBlock({
  label: 'Über Uns',
  props: ['rolle'],
  editable: false,
  actions: props => [
    {
      icon: 'users',
      type: 'choose-rolle',
      options: (props.data.rollen || []).map(rolle => ({
        value: rolle.id,
        label: rolle.name,
        active: rolle.id === props.getData('rolle'),
      })),
      toggle: ({ key }) => {
        props.setData({ rolle: key });
      },
      tooltip: 'Rolle/Funktion der User auswählen',
    },
  ],
})
@withRouter
export default class RollenBlock extends Component {
  render() {
    const { data, children, getData, className, style, location } = this.props;
    let { rollen = [], personen = [] } = data;
    const rolle = rollen.find(x => x.id === getData('rolle'));

    // Rollenfilter
    personen = rolle
      ? personen.filter(
          person => person.rollen.findIndex(x => x.id === rolle.id) !== -1
        )
      : [];

    // Nach Nachname und Vorname sortieren
    personen = sortBy(personen, person => person.name.split(' ').splice(-1));

    return (
      <GenericBlock {...this.props}>
        {!location.query || !location.query.Person ? (
          <DataLoader
            className={className}
            style={style}
            isEmpty={rolle}
            placeholder="Keine Rollen vorhanden"
            loading="Rolle wird geladen"
          >
            <Items
              items={
                rolle
                  ? [
                      {
                        ...rolle,
                        shortText: rolle.text,
                        text: rolle.text,
                        header: rolle.name,
                      },
                    ]
                  : []
              }
              selectedId={rolle ? rolle.id : undefined}
              identifier="rolle"
            />

            <hr
              style={{ maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}
            />
          </DataLoader>
        ) : null}

        {rolle && personen && personen.length ? (
          <Items
            items={(personen || []).map(person => ({
              ...person,
              shortText: person.text,
              text: person.text,
              header: person.name,
              subheader: (
                <span>
                  {person.rollen.map(({ id, name }) => (
                    <Link key={id} to={`/über-uns/${slugify(name)}`}>
                      {name}
                    </Link>
                  ))}
                </span>
              ),
            }))}
            identifier="person"
            pageSize={20}
            style={{ marginTop: '1rem' }}
          />
        ) : null}

        {children}
      </GenericBlock>
    );
  }
}
