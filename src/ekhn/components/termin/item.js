import React, { Component } from 'react';
import { cn } from 'olymp';
import { SlateMateFrontend, useItemEdit } from 'olymp/slate';
import { moment } from 'olymp/locale-de';
import Hypher from 'hypher';
import german from 'hyphenation.de';
import tinycolor from 'tinycolor2';

export default useItemEdit()(({ children, className, start, ende, name, kommentar, farbe, ganztaegig, additional }) => {
  const hypher = new Hypher(german);

  const eqColor = tinycolor.mix(tinycolor(farbe).setAlpha(1), '#FFF', 100 * (1 - tinycolor(farbe).getAlpha())).toRgbString();
  const backgroundColor = farbe ? tinycolor(eqColor)
    .toRgbString() : null;
  const color = farbe ? tinycolor(eqColor)
    .darken(40)
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
    <div className={cn(`termin mini ${!backgroundColor || tinycolor(backgroundColor).getBrightness() > 180 ? 'light' : 'dark'}`, className)} style={{ backgroundColor }}>
      {children}

      <div className="header">
        <h4>{hypher.hyphenateText(name || 'Termin')}</h4>
        {dateString}
      </div>

      {kommentar || additional ? (
        <div className="description">
          {kommentar ? <SlateMateFrontend value={kommentar} readOnly /> : null}
          {additional}
        </div>
      ) : null}
    </div>
  );
});
