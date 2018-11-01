import React, { Component } from 'react';
import { graphql, gql, withRouter } from 'olymp';
import { DataLoader } from 'olymp/cms-core';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import orderBy from 'lodash/orderBy';
import { moment } from 'olymp/locale-de';
import Items from '../../components/items';

const now = +moment();

@withRouter
@graphql(gql`
  query beitragList($archive: Boolean) {
    beitragList: beitragList(query: {
      and: [
        {
          or: [
            {start: {null: true}},
            {start: {lte: ${now}}},
          ]
        },
        {
          skipQuery: $archive,
          or: [
            {ende: {null: true}},
            {ende: {gte: ${now}}},
          ]
        },
        { state: { eq: PUBLISHED } }
      ]
    }) {
      id
      name
      start
      ende
      hauptbeitrag
      text
      zusammenfassung
      autor {
        name
      }
      bild {
        url
        width
        height
        crop
        caption
        source
      }
      tags
      createdAt
      createdBy {
        name
      }
      updatedAt
    }
  }
`, {
  options: (props, a) => {
    // console.log(props, a);

    return { variables: { archive: true } };
  },
})
@useGenericBlock({
  label: 'Beiträge',
  category: 'EKHN',
  props: ['masonry', 'tags', 'placeholder', 'archive'],
  editable: false,
  tagSource: data => data.beitragList,
  actions: (props) => {
    const { setData, getData, data } = props;

    return [{
      icon: 'columns',
      type: 'toggle-masonry',
      active: !!getData('masonry', false),
      toggle: () => {
        setData({ masonry: !getData('masonry', false) });
      },
      tooltip: !getData('masonry', false) ? 'Zweispaltiges Layout (bis auf Hauptbeitrag)' : 'Einspaltiges Layout',
    },
    {
      icon: 'archive',
      type: 'toggle-archiv',
      active: getData('archive', false),
      toggle: () => {
        setData({ archive: !getData('archive', false) });
      },
      tooltip: !getData('archive', false) ? 'Alle öffentlichen Beiträge anzeigen (auch die abgelaufenen)' : 'Nur Beiträge aus dem aktuellen Zeitraum anzeigen',
    },
    {
      icon: 'heart',
      type: 'choose-placeholder',
      options: (data.beitragList || []).map(beitrag => ({
        value: beitrag.id,
        label: beitrag.name,
        active: getData('placeholder') === beitrag.id,
      })),
      toggle: ({ key }) => {
        setData({ placeholder: key });
      },
      tooltip: 'Beitrag auswählen, der angezeigt wird, falls Beitragliste leer wäre',
    }];
  },
})
export default class BeitragBlock extends Component {
  render() {
    const { filteredData, children, getData, className, style, data } = this.props;
    const masonry = getData('masonry', false);
    const placeholder = filteredData.find(beitrag => beitrag.id === getData('placeholder'));
    const archive = getData('archive', false);
    let beitraege = filteredData;

    // Archiv
    if (!archive) {
      beitraege = beitraege.filter(
        beitrag => !beitrag.ende || moment(beitrag.ende).endOf('day').isAfter()
      );
    }

    // Placeholder
    if (!beitraege.length && placeholder) {
      beitraege = [placeholder];
    }

    // Beiträge für Item-Komp. vorbereiten
    beitraege = beitraege.map((x) => {
      const autor = x.autor ? x.autor : x.createdBy;
      const date = x.start || x.createdAt || x.updatedAt;
      const archived = !!(x.ende && moment(x.ende).isBefore());
      // const archivText = archived ? <span style={{ color: 'red' }}><br />Archiv, gültig bis {moment(x.ende).format('DD. MMMM YYYY, HH:mm')} Uhr</span> : null;
      const text = x.text || x.zusammenfassung;
      const more = x.zusammenfassung ? 'Artikel weiterlesen' : false;

      return {
        ...x,
        archived,
        date: +moment(date),
        shortText: x.zusammenfassung || x.text,
        text,
        leading: !!(x.hauptbeitrag && !archived),
        header: x.name,
        subheader: !!archive && <span>{`${moment(date).format('DD. MMMM YYYY, HH:mm')} Uhr - ${autor ? autor.name : 'Redaktion'}`}</span>,
        more: !!text && more,
      };
    });
    beitraege = orderBy(beitraege, ['archived', 'leading', 'date'], ['asc', 'desc', 'desc']);

    return (
      <GenericBlock {...this.props}>
        <DataLoader className={className} style={style} isEmpty={data.beitragList} placeholder="Keine Beiträge vorhanden" loading="Beiträge werden geladen">
          <Items items={beitraege} masonry={masonry} identifier="beitrag" />

          {children}
        </DataLoader>
      </GenericBlock>
    );
  }
}
