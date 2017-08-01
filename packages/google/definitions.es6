const trennzeichen = num => {
  const number = `${num}`;

  if (number.length > 3) {
    const mod = number.length % 3;
    let output = mod > 0 ? number.substring(0, mod) : '';

    for (let i = 0; i < Math.floor(number.length / 3); i += 1) {
      if (mod === 0 && i === 0) {
        output += number.substring(mod + 3 * i, mod + 3 * i + 3);
      } else {
        output = `${output}.${number.substring(mod + 3 * i, mod + 3 * i + 3)}`;
      }
    }
    return output;
  }
  return number;
};

export const metricsObj = {
  PAGEVIEWS: {
    name: 'ga:pageviews',
    label: 'Seitenaufrufe',
    output: 'pageviews',
    type: 'Int',
    category: 'Seiten',
    renderFn: val => trennzeichen(val),
  },
  SESSIONS: {
    name: 'ga:sessions',
    label: 'Sitzungen',
    output: 'sessions',
    type: 'Int',
    category: 'Sitzungen',
    renderFn: val => trennzeichen(val),
  },
  TIME_ON_PAGE: {
    name: 'ga:timeOnPage',
    label: 'Verweildauer',
    output: 'timeOnPage',
    type: 'Float',
    category: 'Seiten',
    renderFn: val => trennzeichen(val),
  },
  AVG_TIME_ON_PAGE: {
    name: 'ga:avgTimeOnPage',
    label: 'Durchschnittliche Verweildauer',
    output: 'avgTimeOnPage',
    type: 'Float',
    category: 'Seiten',
    renderFn: val => Math.round(val),
  },
  USERS: {
    name: 'ga:users',
    label: 'Besucher',
    output: 'users',
    type: 'Int',
    category: 'Besucher',
    renderFn: val => trennzeichen(val),
  },
  NEW_USERS: {
    name: 'ga:newUsers',
    label: 'Neue Besucher',
    output: 'newUsers',
    type: 'Int',
    category: 'Besucher',
    renderFn: val => trennzeichen(val),
  },
};

export const dimensionsObj = {
  YEAR: {
    name: 'ga:year',
    label: 'Jahr',
    output: 'year',
    type: 'String',
    category: 'Zeit',
    renderFn: val => val,
  },
  MONTH: {
    name: 'ga:month',
    label: 'Monat',
    output: 'month',
    type: 'String',
    category: 'Zeit',
    renderFn: val => val,
  },
  WEEK: {
    name: 'ga:week',
    label: 'Woche',
    output: 'week',
    type: 'String',
    category: 'Zeit',
    renderFn: val => val,
  },
  DAY: {
    name: 'ga:day',
    label: 'Tag',
    output: 'day',
    type: 'String',
    category: 'Zeit',
    renderFn: val => val,
  },
  DATE: {
    name: 'ga:date',
    label: 'Jahr - Monat - Tag',
    output: 'date',
    type: 'String',
    category: 'Zeit',
    renderFn: val =>
      `${val.substr(0, 4)}-${val.substr(4, 2)}-${val.substr(6, 2)}`,
  },
  YEAR_MONTH: {
    name: 'ga:yearMonth',
    label: 'Jahr - Monat',
    output: 'yearMonth',
    type: 'String',
    category: 'Zeit',
    renderFn: val => `${val.substr(0, 4)}-${val.substr(4, 2)}`,
  },
  PAGE_TITLE: {
    name: 'ga:pageTitle',
    label: 'Seitenname',
    output: 'pageTitle',
    type: 'String',
    category: 'Seiten',
    renderFn: val => val,
  },
  PAGE_PATH: {
    name: 'ga:pagePath',
    label: 'Seitenpfad',
    output: 'pagePath',
    type: 'String',
    category: 'Seiten',
    renderFn: val => val,
  },
  PAGE_PATH_1: {
    name: 'ga:pagePathLevel1',
    label: 'Seitenpfad 1. Level',
    output: 'pagePathLevel1',
    type: 'String',
    category: 'Seiten',
    renderFn: val => val,
  },
  PAGE_PATH_2: {
    name: 'ga:pagePathLevel2',
    label: 'Seitenpfad 2. Level',
    output: 'pagePathLevel2',
    type: 'String',
    category: 'Seiten',
    renderFn: val => val,
  },
  PAGE_PATH_3: {
    name: 'ga:pagePathLevel3',
    label: 'Seitenpfad 3. Level',
    output: 'pagePathLevel3',
    type: 'String',
    category: 'Seiten',
    renderFn: val => val,
  },
  COUNTRY: {
    name: 'ga:country',
    label: 'Land',
    output: 'country',
    type: 'String',
    category: 'Ort',
    renderFn: val => val,
  },
  REGION: {
    name: 'ga:region',
    label: 'Region',
    output: 'region',
    type: 'String',
    category: 'Ort',
    renderFn: val => val,
  },
  CITY: {
    name: 'ga:city',
    label: 'Stadt',
    output: 'city',
    type: 'String',
    category: 'Ort',
    renderFn: val => val,
  },
  USER_TYPE: {
    name: 'ga:userType',
    label: 'Benutzertyp',
    output: 'userType',
    type: 'String',
    category: 'Besucher',
    renderFn: val => val,
  },
  USER_GENDER: {
    name: 'ga:userGender',
    label: 'Geschlecht',
    output: 'userGender',
    type: 'String',
    category: 'Besucher',
    renderFn: val => val,
  },
  USER_AGE_BRACKET: {
    name: 'ga:userAgeBracket',
    label: 'Altersgruppe',
    output: 'userAgeBracket',
    type: 'String',
    category: 'Besucher',
    renderFn: val => val,
  },
  DEVICE_CATEGORY: {
    name: 'ga:deviceCategory',
    label: 'Gerätekategorie',
    output: 'deviceCategory',
    type: 'String',
    category: 'Geräte',
    renderFn: val => val,
  },
  /* BROWSER: {
    name: 'ga:browser',
    output: 'pageviews',
    type: 'String',
  },
  SOURCE: {
    name: 'ga:source',
    output: 'pageviews',
    type: 'String',
  },
  REGION_ISO_CODE: {
    name: 'ga:regionIsoCode',
    output: 'pageviews',
    type: 'String',
  },
  SCREEN_RESOLUTION: {
    name: 'ga:screenResolution',
    output: 'pageviews',
    type: 'String',
  }, */
};

export const colors = [
  '#1abc9c',
  '#e67e22',
  '#3498db',
  '#9b59b6',
  '#f1c40f',
  '#2ecc71',
  '#e74c3c',
];
