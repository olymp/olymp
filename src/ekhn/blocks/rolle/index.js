import React, { Component } from 'react';
import { graphql, gql, withRouter, Link, slugify } from 'olymp';
import { useGenericBlock, GenericBlock } from 'olymp/cms';
import sortBy from 'lodash/sortBy';
import Items from '../../components/items';

@withRouter
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
`, {
  options: () => ({ }),
})
@useGenericBlock({
  label: 'Über Uns',
  props: ['rolle'],
  editable: false,
  placeholder: ['rollen', 'personen'],
  actions: props => [{
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
  }],
})
export default class RollenBlock extends Component {
  render() {
    const { data, children, getData, location } = this.props;
    let { rollen, personen } = data;
    const rolle = rollen.find(x => x.id === getData('rolle'));

    if (!rolle) {
      return (
        <GenericBlock {...this.props}>
          <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem', margin: 0 }}>
            Keine Rolle gewählt!
          </h1>
        </GenericBlock>
      );
    }

    // Rollenfilter
    personen = rolle ?
      (personen || []).filter(person => person.rollen.findIndex(x => x.id === rolle.id) !== -1) :
        [];

    // Nach Nachname und Vorname sortieren
    personen = sortBy(personen, person => person.name.split(' ').splice(-1));

    return (
      <GenericBlock {...this.props}>
        {!location.query || !location.query.Person ? (
          <Items
            items={rolle ? [{
              ...rolle,
              shortText: rolle.text,
              text: rolle.text,
              header: rolle.name,
            }] : []}
            selectedId={rolle ? rolle.id : undefined}
            identifier="rolle"
          />
        ) : null}

        <Items
          items={(personen || []).map(person => ({
            ...person,
            shortText: person.text,
            text: person.text,
            header: person.name,
            subheader: <span>{person.rollen.map(({ id, name }) => <Link key={id} to={`/über-uns/${slugify(name)}`}>{name}</Link>)}</span>,
          }))}
          identifier="person"
          pageSize={20}
          style={{ marginTop: '2rem' }}
        />

        {children}
      </GenericBlock>
    );
  }
}
