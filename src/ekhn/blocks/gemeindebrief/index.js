import React, { Component } from 'react';
import { graphql, gql, withRouter, DataLoader } from 'olymp';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
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
`)
@useGenericBlock({
  label: 'Gemeindebriefe',
  editable: false,
})
export default class GemeindebriefeBlock extends Component {
  render() {
    const { data, children, className, style, ...rest } = this.props;
    let { gemeindebriefe = [] } = data;

    // Beiträge für Item-Komp. vorbereiten
    gemeindebriefe = gemeindebriefe.map((x) => {
      const date = x.datum || x.createdAt || x.updatedAt;

      return {
        ...x,
        bild: x.gemeindebrief,
        date: +moment(date),
        shortText: x.zusammenfassung || x.text,
        header: <a href={x.gemeindebrief.url} target="_blank" rel="noopener noreferrer">{x.name}</a>,
        subheader: <span>{`${moment(date).format('DD. MMMM YYYY, HH:mm')} Uhr`}</span>,
      };
    });

    return (
      <GenericBlock {...rest}>
        <DataLoader className={className} style={style} isEmpty={data.gemeindebriefe} placeholder="Keine Gemeindebriefe vorhanden">
          <Items items={gemeindebriefe} masonry identifier="gemeindebrief" />
          {children}
        </DataLoader>
      </GenericBlock>
    );
  }
}
