import React, { Component } from 'react';
import { graphql, gql, withRouter } from 'olymp';
import { useGenericBlock, GenericBlock, SlateMate, Image, useItemEdit } from 'olymp/cms';
import { Pagination } from 'antd';
import sortBy from 'lodash/sortBy';
import { moment } from 'olymp/locale-de';
import Hypher from 'hypher';
import german from 'hyphenation.de';
import tinycolor from 'tinycolor2';
import './termine.less';

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
    const { setData, getData } = props;

    return [{
      icon: 'plus',
      type: 'add-termin',
      toggle: () => {
        props.router.push({
          pathname: window.location.pathname,
          query: { '@termin': null },
        });
      },
    },
    {
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

    if (!data.termine && !data.gottesdienste) {
      return (
        <GenericBlock {...rest} style={{ width: '100%' }}>
          <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem', margin: 0 }}>
            <i className="fa fa-refresh fa-spin fa-fw" />
          </h1>

          {children}
        </GenericBlock>
      );
    }

    let { termine = [], gottesdienste = [] } = data;

    gottesdienste.forEach((gottesdienst) => {
      gottesdienst.name = gottesdienst.name || 'Gottesdienst';
      gottesdienst.start = gottesdienst.datum;
      if (gottesdienst.hervorheben) gottesdienst.farbe = '#FCEFEE';
      gottesdienst.additional = gottesdienst.abendmahl || gottesdienst.kindergottesdienst ? (
        <p>
          Mit
          {gottesdienst.abendmahl ? <span> Abendmahl</span> : null}
          {gottesdienst.abendmahl && gottesdienst.kindergottesdienst ? <span> und</span> : null}
          {gottesdienst.kindergottesdienst ? <span> KiGo</span> : null}
        </p>
      ) : null;
    });
    termine = [
      ...(!mode || mode === 1 ? termine : []),
      ...(!mode || mode === 2 ? gottesdienste : []),
    ];
    termine = sortBy(termine, termin => termin.start);

    if (!termine.length) {
      return (
        <GenericBlock {...rest} style={{ width: '100%' }}>
          <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem', margin: 0 }}>
            Keine Termine vorhanden!
          </h1>

          {children}
        </GenericBlock>
      );
    }

    return (
      <GenericBlock {...rest} style={{ width: '100%' }}>
        <div className="items">
          <div className="item">
            <h1>{!mode || mode === 1 ? 'Termine' : 'Gottesdienste'} der nächsten Zeit</h1>

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
        </div>

        {children}
      </GenericBlock>
    );
  }
}

@useItemEdit
class TerminItem extends Component {
  render() {
    const { start, ende, name, kommentar, farbe, ganztaegig, id, bild, pfarrer, organist, additional, ort } = this.props;
    const hypher = new Hypher(german);

    const backgroundColor = farbe ? tinycolor(farbe)
      // .setAlpha(0.6)
      .toRgbString() : null;
    const color = farbe ? tinycolor(farbe)
      .darken(33)
      .toRgbString() : null;

    const date = (date, time) => (
      <h4 style={{ color }}>
        {date}<br />
        {time}
      </h4>
    );

    let dateString;
    const startDate = moment(start).format('DD. MMMM YYYY');
    const endeDate = moment(ende).format('DD. MMMM YYYY');

    if (startDate === endeDate) {
      const timeString = <span>{moment(start).format('HH:mm')} Uhr - {moment(ende).format('HH:mm')} Uhr</span>;
      dateString = date(startDate, !ganztaegig && timeString);
    } else {
      dateString = (
        <span>
          {date(startDate, !ganztaegig && <span>{moment(start).format('HH:mm')} Uhr</span>)}
          {ende ? date(endeDate, !ganztaegig && <span>{moment(ende).format('HH:mm')} Uhr</span>) : null}
        </span>
      );
    }

    return (
      <div className="termin row" style={{ backgroundColor }}>
        <div className="date col-xs-5 col-sm-3">
          {dateString}

          {ort ? (
            <p>{ort}</p>
          ) : null}
        </div>

        <div className="col-xs-7 col-sm-9 pr-0">
          <div className="description">
            <h3>{hypher.hyphenateText(name || 'Termin')}</h3>
            {kommentar ? <SlateMate value={kommentar} readOnly /> : null}

            {pfarrer && pfarrer.length ? <span>Mit{pfarrer.reverse().map((x, i) => {
              let content = <b key={i}> {x.name}</b>;

              if (i && i !== pfarrer.length - 1) {
                content = <span key={i}>, <b>{x.name}</b></span>;
              }

              if (i && i === pfarrer.length - 1) {
                content = <span key={i}> und <b>{x.name}</b></span>;
              }

              return content;
            })}</span> : null}

            {organist ? (
              <span>
                {pfarrer && pfarrer.length ? ' und' : 'Mit' } Organist/in <b>{organist.name}</b>
              </span>
            ) : null}

            {additional}
          </div>

          <div className="eyecatcher hidden-lg-down">
            {bild ?
              <Image value={bild} width={80} lightbox />
            : null}

            {!bild && organist && organist.bild ?
              <Image value={organist.bild} width={80} lightbox style={{ borderRadius: '50%' }} />
              : null}

            {!bild && pfarrer && pfarrer.length ?
              pfarrer.reverse().map((x, i) => x.bild ? (
                <Image value={x.bild} width={80} lightbox style={{ borderRadius: '50%' }} key={i} />
              ) : null)
            : null}
          </div>
        </div>
      </div>
    );
  }
}
