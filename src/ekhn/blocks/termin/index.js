import React, { Component } from 'react';
import { graphql, gql, withRouter, DataLoader } from 'olymp';
import { useGenericBlock, GenericBlock } from 'olymp/cms';
import { Pagination } from 'antd';
import sortBy from 'lodash/sortBy';
import difference from 'lodash/difference';
import orderBy from 'lodash/orderBy';
import { moment } from 'olymp/locale-de';
import TerminItem from './item';

const getTags = (items) => {
  const tags = { Alle: 0 };
  (items || []).forEach((item) => {
    if (item.tags && item.tags.length) {
      (item.tags || []).forEach((tag) => {
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
  query termine {
    termine: terminList(query: {
      and: [
        { state: { eq: PUBLISHED } },
        { or: [
          {start: {gte: ${now}}},
          {ende: {gte: ${now}}}
        ]}
      ]
    }) {
      id
      name
      start
      ende
      kommentar
      ganztaegig
      farbe
      ort
    }
    gottesdienste: gottesdienstList(query: {
      and: [
        { state: { eq: PUBLISHED } },
        { datum: {gte: ${now}} }
      ]
    }) {
      id
      name
      datum
      kommentar
      hervorheben
      abendmahl
      kindergottesdienst
      bild {
        url
        width
        height
        crop
        caption
        source
      }
      keinTermin
      pfarrer {
        name,
        bild {
          url
          width
          height
          crop
          caption
          source
        }
      }
      organist {
        name,
        bild {
          url
          width
          height
          crop
          caption
          source
        }
      }
      tags
    }
  }
`, {
  options: () => ({ }),
})
@useGenericBlock({
  label: 'Termine',
  props: ['tags', 'mode'],
  editable: false,
  actions: (props) => {
    const { setData, getData, data } = props;
    const selectedTags = getData('tags', ['Alle']);

    const tagObj = getTags(data.beitragList);
    tagObj.Alle += Object.keys(tagObj).reduce((val, key) => val + tagObj[key], 0);

    let tags = Object.keys(tagObj).map(key => ({ key, count: tagObj[key] }));
    tags = orderBy(tags, ['key', 'count'], ['asc', 'desc']);

    return [{
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
    }, {
      icon: !getData('mode', 0) ? 'calendar' : (getData('mode', 0) === 1 ? 'calendar-o' : 'calendar-plus-o'),
      type: 'toggle-mode',
      toggle: () => {
        if (!getData('mode', 0)) {
          setData({ mode: 1 });
        } else if (getData('mode', 1) === 1) {
          setData({ mode: 2 });
        } else {
          setData({ mode: 0 });
        }
      },
    }];
  },
})
export default class TerminBlock extends Component {
  render() {
    const { data, children, getData, router, location, ...rest } = this.props;
    const { pathname, query } = location;
    const page = query ? parseInt(query.page || 1, 10) : 1;
    const steps = query ? parseInt(query.steps || 10, 10) : 10;
    const mode = getData('mode', 0); // 0: Alle, 1: Termine, 2: Gottesdienste
    const tags = getData('tags', ['Alle']);

    let { termine = [], gottesdienste = [] } = data;

    gottesdienste = gottesdienste.map((gottesdienst) => {
      return {
        ...gottesdienst,
        name: gottesdienst.name || 'Gottesdienst',
        start: gottesdienst.datum,
        className: gottesdienst.hervorheben ? 'special' : null,
        additional: gottesdienst.abendmahl || gottesdienst.kindergottesdienst ? (
          <p style={{ margin: 0 }}>
            Mit
            {gottesdienst.abendmahl ? <span> Abendmahl</span> : null}
            {gottesdienst.abendmahl && gottesdienst.kindergottesdienst ? <span> und</span> : null}
            {gottesdienst.kindergottesdienst ? <span> KiGo</span> : null}
          </p>
        ) : null,
      };
    });
    termine = [
      ...(!mode || mode === 1 ? termine : []),
      ...(!mode || mode === 2 ? gottesdienste : []),
    ];
    termine = sortBy(termine, termin => termin.start);

    // Tags filtern
    if (tags.findIndex(tag => tag === 'Alle') === -1) {
      termine = termine.filter(
        termin => difference(tags, termin.tags || []).length !== tags.length
      );
    }

    // Eventuell Gottesdienste ausblenden
    if (mode < 2) {
      termine = termine.filter(termin => !termin.keinTermin);
    }

    let type;
    switch (mode) {
      case 1:
        type = 'Termine';
        break;

      case 2:
        type = 'Gottesdienste';
        break;

      default:
        type = 'Termine und Gottesdienste';
    }

    return (
      <GenericBlock {...rest} style={{ width: '100%' }}>
        <DataLoader {...this.props} trigger={['termine', 'gottesdienste']} placeholder="Keine Termine vorhanden" className="items">
          <div className="item" style={{ padding: '.5rem' }}>
            <h1>{type} der nächsten Zeit</h1>

            {termine.slice((page - 1) * steps, page * steps).map(x => <TerminItem {...x} key={x.id} />)}
          </div>

          {steps < termine.length ? (
            <Pagination
              current={page}
              total={termine.length}
              pageSize={steps}
              onChange={current =>
                router.push({ pathname, query: { ...query, page: current } }
              )}
              showSizeChanger
              onShowSizeChange={(current, pageSize) =>
                router.push({ pathname, query: { ...query, page: current, steps: pageSize } }
              )}
            />
          ) : null}
        </DataLoader>

        {children}
      </GenericBlock>
    );
  }
}
