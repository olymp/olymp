import React, { Component } from 'react';
import { graphql, gql, withRouter } from 'olymp';
import { useGenericBlock, GenericBlock } from 'olymp/cms';
import orderBy from 'lodash/orderBy';
import { moment } from 'olymp/locale-de';
import Items from '../../components/items';

@withRouter
@graphql(gql`
  query gemeindebriefList {
    gemeindebriefe: gemeindebriefList(sort: {datum: DESC}, query: { state: { eq: PUBLISHED } }) {
      id
      name
      gemeindebrief {
        url
        width
        height
        crop
        caption
        source
      }
      datum
      tags
    }
  }
`, {
  options: () => ({ }),
})
@useGenericBlock({
  label: 'Gemeindebriefe',
  editable: false,
  hasContent: 'gemeindebriefe',
  placeholder: 'Keine Gemeindebriefe vorhanden',
})
export default class GemeindebriefeBlock extends Component {
  render() {
    const { data, children, ...rest } = this.props;
    let { gemeindebriefe = [] } = data;

    // Beiträge für Item-Komp. vorbereiten
    gemeindebriefe = gemeindebriefe.map((x) => {
      const date = x.datum || x.createdAt || x.updatedAt;

      return {
        ...x,
        bild: x.gemeindebrief,
        date: moment(date).format('X'),
        shortText: x.zusammenfassung || x.text,
        header: <a href={x.gemeindebrief.url} target="_blank" rel="noopener noreferrer">{x.name}</a>,
        subheader: <span>{`${moment(date).format('DD. MMMM YYYY, HH:mm')} Uhr`}</span>,
      };
    });

    return (
      <GenericBlock {...rest}>
        <Items items={gemeindebriefe} masonry identifier="gemeindebrief" />
        {children}
      </GenericBlock>
    );
  }
}
