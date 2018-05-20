import React, { Component } from 'react';
import { cn, Image } from 'olymp';
import { SlateMateFrontend, useItemEdit } from 'olymp/slate';
import { moment } from 'olymp/locale-de';
import Hypher from 'hypher';
import german from 'hyphenation.de';
import tinycolor from 'tinycolor2';

export default useItemEdit()(({ children, className, start, ende, name, kommentar, farbe, ganztaegig, bild, pfarrer, organist, additional, ort }) => {
  const hypher = new Hypher(german);
  let pfarrerReverse = Array.isArray(pfarrer) ? [...pfarrer].reverse() : [];

  const eqColor = tinycolor.mix(tinycolor(farbe).setAlpha(1), '#FFF', 100 * (1 - tinycolor(farbe).getAlpha())).toRgbString();
  const backgroundColor = farbe ? tinycolor(eqColor)
    .toRgbString() : null;
  const color = farbe ? tinycolor(eqColor)
    .darken(40)
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

  if (startDate === endeDate && !moment(ende).isSame(start)) {
    const timeString = <span>{moment(start).format('HH:mm')} Uhr - {moment(ende).format('HH:mm')} Uhr</span>;
    dateString = date(startDate, !ganztaegig && timeString);
  } else if (startDate === endeDate) {
    dateString = date(startDate, !ganztaegig && <span>{moment(start).format('HH:mm')} Uhr</span>);
  } else {
    dateString = (
      <span>
        {date(startDate, !ganztaegig && <span>{moment(start).format('HH:mm')} Uhr</span>)}
        {ende ? date(endeDate, !ganztaegig && <span>{moment(ende).format('HH:mm')} Uhr</span>) : null}
      </span>
    );
  }

  return (
    <div className={cn(`termin row ${!backgroundColor || tinycolor(backgroundColor).getBrightness() > 180 ? 'light' : 'dark'}`, className)} style={{ backgroundColor }}>
      {children}

      <div className="date col-xs-5 col-sm-3">
        {dateString}

        {ort ? (
          <p style={{ color }}>{ort}</p>
        ) : null}
      </div>

      <div className="col-xs-7 col-sm-9 pr-0">
        <div className="description">
          <h3 style={{ color }}>{hypher.hyphenateText(name.toString() || 'Termin')}</h3>
          {kommentar ? <SlateMateFrontend value={kommentar} readOnly /> : null}

          {pfarrerReverse.length ? <span>Mit{pfarrerReverse.map((x, i) => {
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

          {!bild && pfarrerReverse.length ?
            pfarrerReverse.map((x, i) => x.bild ? (
              <Image value={x.bild} width={80} lightbox style={{ borderRadius: '50%' }} key={i} />
            ) : null)
          : null}
        </div>
      </div>
    </div>
  );
});