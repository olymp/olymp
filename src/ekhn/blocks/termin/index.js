import React, { Component } from 'react';
import { graphql, gql, withRouter, withAuth } from 'olymp';
import { DataLoader } from 'olymp/cms-core';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import { Pagination } from 'antd';
import sortBy from 'lodash/sortBy';
import { moment } from 'olymp/locale-de';
import TerminItem from './item';

const now = +moment();

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
      bild {
        url
        width
        height
        crop
        caption
        source
      }
      farbe
      ort
      tags
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
`)
@useGenericBlock({
  label: 'Termine',
  props: ['tags', 'mode'],
  editable: false,
  tagSource: data => [...(data.termine || []), ...(data.gottesdienste || [])],
  actions: props => {
    const { setData, getData } = props;

    let tooltip;
    switch (getData('mode', 0)) {
      case 0:
        tooltip = 'Nur Termine anzeigen';
        break;

      case 1:
        tooltip = 'Nur Gottesdienste anzeigen';
        break;

      default:
        tooltip = 'Termine und Gottesdienste anzeigen';
    }

    return [
      {
        icon: !getData('mode', 0)
          ? 'calendar'
          : getData('mode', 0) === 1
            ? 'calendar-o'
            : 'calendar-plus-o',
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
        tooltip,
      },
      {
        icon: 'heading',
        type: 'set-title',
        toggle: () => {
          const title = window.prompt('Titel', getData('title'));
          setData({ title });
        },
        tooltip: 'Titel des Terminblockes eingeben',
      },
    ];
  },
})
@withRouter
@withAuth
export default class TerminBlock extends Component {
  render() {
    const {
      filteredData,
      children,
      getData,
      router,
      location,
      auth,
      style,
      data,
      ...rest
    } = this.props;
    const { pathname, query } = location;
    const page = query ? parseInt(query.page || 1, 10) : 1;
    const steps = query ? parseInt(query.steps || 10, 10) : 10;
    const mode = getData('mode', 0); // 0: Alle, 1: Termine, 2: Gottesdienste
    const tags = getData('tags', ['Alle']);
    const title = getData('title');

    // Alle Termine/Termine/Gottesdienst-Modus
    let termine = filteredData.filter(
      item =>
        !mode ||
        (mode === 1 && item.__typename === 'Termin') ||
        (mode === 2 && item.__typename === 'Gottesdienst')
    );

    // Gottesdienste mappen
    termine = termine.map(
      item =>
        item.__typename === 'Gottesdienst'
          ? {
              ...item,
              name: item.name || 'Gottesdienst',
              start: item.datum,
              className: item.hervorheben ? 'special' : null,
              additional:
                item.abendmahl || item.kindergottesdienst ? (
                  <p style={{ margin: 0 }}>
                    Mit
                    {item.abendmahl ? <span> Abendmahl</span> : null}
                    {item.abendmahl && item.kindergottesdienst ? (
                      <span> und</span>
                    ) : null}
                    {item.kindergottesdienst ? <span> KiGo</span> : null}
                  </p>
                ) : null,
            }
          : item
    );

    // Sortierung
    termine = sortBy(termine, termin => termin.start);

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
        <DataLoader
          style={style}
          isEmpty={
            (data.termine && data.termine.length) ||
            (data.gottesdienste && data.gottesdienste.length)
          }
          placeholder="Keine Termine vorhanden"
          loading="Termine werden geladen"
          className="items"
        >
          <div className="item" style={{ padding: '1rem' }}>
            <h1 style={{ margin: '0 0 1rem 0' }}>{title || type}</h1>

            {termine.slice((page - 1) * steps, page * steps).map(x => (
              <TerminItem {...x} key={x.id} />
            ))}
          </div>

          {steps < termine.length ? (
            <Pagination
              current={page}
              total={termine.length}
              pageSize={steps}
              onChange={current =>
                router.push({ pathname, query: { ...query, page: current } })
              }
              showSizeChanger
              onShowSizeChange={(current, pageSize) =>
                router.push({
                  pathname,
                  query: { ...query, page: current, steps: pageSize },
                })
              }
            />
          ) : null}
        </DataLoader>

        {children}
      </GenericBlock>
    );
  }
}
