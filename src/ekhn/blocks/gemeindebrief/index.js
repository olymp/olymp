import React, { Component } from 'react';
import { graphql, gql, withRouter } from 'olymp';
import { DataLoader } from 'olymp/cms-core';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import { moment } from 'olymp/locale-de';
import Items from '../../components/items';

@graphql(gql`
  query gemeindebriefList {
    gemeindebriefe: gemeindebriefList(
      sort: { datum: DESC }
      query: { state: { eq: PUBLISHED } }
    ) {
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
@withRouter
export default class GemeindebriefeBlock extends Component {
  render() {
    const { data, children, className, style, ...rest } = this.props;
    let { gemeindebriefe = [] } = data;

    // Beiträge für Item-Komp. vorbereiten
    gemeindebriefe = gemeindebriefe.map(x => {
      const date = x.datum || x.createdAt || x.updatedAt;

      return {
        ...x,
        bild: x.gemeindebrief,
        date: +moment(date),
        shortText: x.zusammenfassung || x.text,
        header: x.gemeindebrief ? (
          <a
            href={x.gemeindebrief.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {x.name}
          </a>
        ) : (
          x.name
        ),
        subheader: (
          <span>{`${moment(date).format('DD. MMMM YYYY, HH:mm')} Uhr`}</span>
        ),
      };
    });

    return (
      <GenericBlock {...rest}>
        <DataLoader
          className={className}
          style={style}
          isEmpty={data.gemeindebriefe}
          placeholder="Keine Gemeindebriefe vorhanden"
          loading="Gemeindebriefe werden geladen"
        >
          <Items items={gemeindebriefe} masonry identifier="gemeindebrief" />
          {children}
        </DataLoader>
      </GenericBlock>
    );
  }
}
