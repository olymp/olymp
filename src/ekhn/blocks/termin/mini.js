import React, { Component } from 'react';
import { SlateMate } from 'olymp/cms';
import { moment } from 'olymp/locale-de';
import Hypher from 'hypher';
import german from 'hyphenation.de';
import tinycolor from 'tinycolor2';
import './mini.less';

export default class TerminMiniBlock extends Component {
  renderOne = (item) => {
    const { start, ende, name, kommentar, farbe, ganztaegig, id, additional } = item;
    const hypher = new Hypher(german);

    const backgroundColor = farbe ? tinycolor(farbe).toRgbString() : null;
    const color = farbe ? tinycolor(farbe)
      .darken(33)
      .toRgbString() : null;

    const date = (date, time) => (
      <h5 style={{ color }}>
        {date}
        {time}
      </h5>
    );

    let dateString;
    const startDate = moment(start).format('DD. MMMM');
    const endeDate = moment(ende).format('DD. MMMM');

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
      <div className="termin mini" style={{ backgroundColor }} key={id}>
        <div className="header">
          <h4>{hypher.hyphenateText(name || 'Termin')}</h4>
          {dateString}
        </div>

        {kommentar || additional ? (
          <div className="description">
            {kommentar ? <SlateMate value={kommentar} readOnly /> : null}
            {additional}
          </div>
        ) : null}
      </div>
    );
  }

  render() {
    const { items } = this.props;

    if (!items) {
      return (
        <div style={{ width: '100%' }}>
          <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem', margin: 0 }}>
            <i className="fa fa-refresh fa-spin fa-fw" />
          </h1>
        </div>
      );
    }

    if (!items.length) {
      return (
        <div style={{ width: '100%' }}>
          <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem', margin: 0 }}>
            Keine Termine vorhanden!
          </h1>
        </div>
      );
    }

    return (
      <div style={{ width: '100%', marginTop: '.5rem' }}>
        <div>
          {items.map(x => this.renderOne(x))}
        </div>
      </div>
    );
  }
}
