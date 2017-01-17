import React, { Component } from 'react';
import { graphql, gql, withRouter } from 'olymp';
import { useGenericBlock, GenericBlock } from 'olymp/cms';
import difference from 'lodash/difference';
import orderBy from 'lodash/orderBy';
import { moment } from 'olymp/locale-de';
import Items from '../../components/items';

const getTags = (items) => {
  const tags = { Alle: 0 };
  (items || []).forEach((item) => {
    if (item.tags && item.tags.length) {
      (item.tags || []).forEach(tag => {
        if (!tags[tag]) tags[tag] = 0;

        tags[tag] += 1;
      });
    } else {
      tags.Alle += 1;
    }
  });

  return tags;
};
const now = moment().format('x');

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
  props: ['masonry', 'tags', 'placeholder', 'archive'],
  hasContent: 'beitragList',
  placeholder: 'Keine Beiträge vorhanden',
  actions: (props) => {
    const { setData, getData, data } = props;
    const selectedTags = getData('tags', ['Alle']);

    const tagObj = getTags(data.beitragList);
    tagObj.Alle += Object.keys(tagObj).reduce((val, key) => val + tagObj[key], 0);

    let tags = Object.keys(tagObj).map(key => ({ key, count: tagObj[key] }));
    tags = orderBy(tags, ['key', 'count'], ['asc', 'desc']);

    return [{
      icon: 'columns',
      type: 'toggle-masonry',
      active: !!getData('masonry', false),
      toggle: () => {
        setData({ masonry: !getData('masonry', false) });
      },
    },
    {
      icon: 'tags',
      type: 'choose-tags',
      multi: true,
      options: tags.map(({ key, count }) => ({
        value: key,
        label: key,
        active: selectedTags.findIndex(tag => tag === key) !== -1,
        disabled: (key !== 'Alle' && selectedTags.findIndex(tag => tag === 'Alle') !== -1) ||
          (key === 'Alle' && selectedTags.length && selectedTags.findIndex(tag => tag === 'Alle') === -1),
        anzahl: count,
      })),
      toggle: (tags) => {
        setData({ tags: tags.map(tag => tag.key) });
      },
    },
    {
      icon: 'archive',
      type: 'toggle-archiv',
      active: getData('archive', false),
      toggle: () => {
        setData({ archive: !getData('archive', false) });
      },
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
    }];
  },
})
export default class BeitragBlock extends Component {
  render() {
    const { data, children, getData } = this.props;
    const { beitragList } = data;
    const masonry = getData('masonry', false);
    const tags = getData('tags', ['Alle']);
    const placeholder = (beitragList || []).find(beitrag => beitrag.id === getData('placeholder'));
    const archive = getData('archive', false);
    let beitraege = beitragList && Array.isArray(beitragList) ? beitragList : [];

    // Tags filtern
    if (tags.findIndex(tag => tag === 'Alle') === -1) {
      beitraege = beitraege.filter(
        beitrag => difference(tags, beitrag.tags || []).length !== tags.length
      );
    }

    // Archiv
    if (!archive) {
      beitraege = beitraege.filter(
        beitrag => !beitrag.ende || moment(beitrag.ende).isAfter()
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
      const archivText = archived ? <span style={{ color: 'red' }}><br />Archiv, gültig bis {moment(x.ende).format('DD. MMMM YYYY, HH:mm')} Uhr</span> : null;

      return {
        ...x,
        archived,
        date: moment(date).format('X'),
        shortText: x.zusammenfassung || x.text,
        text: x.text || x.zusammenfassung,
        leading: !!(x.hauptbeitrag && !archived),
        header: x.name,
        subheader: <span>{`${moment(date).format('DD. MMMM YYYY, HH:mm')} Uhr - ${autor ? autor.name : 'Redaktion'}`}{archivText}</span>,
        more: x.zusammenfassung ? 'Artikel weiterlesen' : 'Artikel ansehen',
      };
    });
    beitraege = orderBy(beitraege, ['archived', 'leading', 'date'], ['asc', 'desc', 'desc']);

    return (
      <GenericBlock {...this.props}>
        <Items items={beitraege} masonry={masonry} identifier="beitrag" />

        {children}
      </GenericBlock>
    );
  }
}
