import createMaps from './maps';
import google from 'googleapis';
import bluebird from 'bluebird';
import moment from 'moment';
import shortID from 'shortid';

// https://ga-dev-tools.appspot.com/query-explorer/

const analytics = bluebird.promisify(google.analytics('v3').data.ga.get);
const dimensionObj = {
  PAGE_TITLE: {
    name: 'ga:pageTitle',
    output: 'pageTitle',
    type: 'String',
  },
  PAGE_PATH: {
    name: 'ga:pagePath',
    output: 'pagePath',
    type: 'String',
  },
  PAGE_PATH_1: {
    name: 'ga:pagePathLevel1',
    output: 'pagePathLevel1',
    type: 'String',
  },
  PAGE_PATH_2: {
    name: 'ga:pagePathLevel2',
    output: 'pagePathLevel2',
    type: 'String',
  },
  PAGE_PATH_3: {
    name: 'ga:pagePathLevel3',
    output: 'pagePathLevel3',
    type: 'String',
  },
  CITY: {
    name: 'ga:city',
    output: 'city',
    type: 'String',
  },
  USER_GENDER: {
    name: 'ga:userGender',
    output: 'userGender',
    type: 'String',
  },
  USER_AGE_BRACKET: {
    name: 'ga:userAgeBracket',
    output: 'userAgeBracket',
    type: 'String',
  },
  DEVICE_CATEGORY: {
    name: 'ga:deviceCategory',
    output: 'deviceCategory',
    type: 'String',
  },
  /* BROWSER: {
    name: 'ga:browser',
    output: 'pageviews',
    type: 'String',
  },
  USER_TYPE: {
    name: 'ga:userType',
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
const metricObj = {
  PAGEVIEWS: {
    name: 'ga:pageviews',
    output: 'pageviews',
    type: 'Int',
  },
  SESSIONS: {
    name: 'ga:sessions',
    output: 'sessions',
    type: 'Int',
  },
  TIME_ON_PAGE: {
    name: 'ga:timeOnPage',
    output: 'timeOnPage',
    type: 'Float',
  },
  AVG_TIME_ON_PAGE: {
    name: 'ga:avgTimeOnPage',
    output: 'avgTimeOnPage',
    type: 'Float',
  },
};

export default (mapsKey, mail, key) => {
  const jwtClient =
    key &&
    new google.auth.JWT(
      mail,
      null,
      key.split('\\n').join('\n'),
      ['https://www.googleapis.com/auth/analytics'], // an array of auth scopes
      null
    );

  const maps = createMaps(mapsKey);

  if (jwtClient) {
    jwtClient.authorize((err, tokens) => {
      if (err) {
        console.log(err);
      }
    });
  }
  return {
    name: 'geocode',
    queries: `
      geocode(address: String!, region: String, language: String): Geocode
      geocodeList(address: String!, region: String, language: String): [Geocode]
      analyticsQuery(start: String!, end: String!, metrics: [ANALYTICS_METRICS], dimensions: [ANALYTICS_DIMENSIONS], time: ANALYTICS_TIMES, sort: ANALYTICS_SORT, filters: [AnalyticsFilter]): AnalyticsQuery
    `,
    resolvers: {
      queries: {
        analyticsQuery: (
          source,
          {
            start,
            end,
            time,
            metrics = [],
            dimensions = [],
            sort,
            filters = [],
          }
        ) => {
          if (!jwtClient) return null;

          const metricArray = metrics.map(name => metricObj[name].name);

          const dimensionArray = dimensions.map(
            name => dimensionObj[name].name
          );
          let sorts = '';
          if (!sort || sort === 'PAGEVIEWS') {
            sorts = '-ga:pageviews';
          } else if (sort === 'SESSIONS') {
            sorts = '-ga:sessions';
          }
          if (time === 'MONTH') {
            dimensionArray.push('ga:year,ga:month');
            if (sort === 'DATE') {
              sorts = 'ga:year,ga:month';
            }
          } else if (time === 'WEEK') {
            dimensionArray.push('ga:year,ga:week');
            if (sort === 'DATE') {
              sorts = 'ga:year,ga:week';
            }
          } else if (time === 'DAY') {
            dimensionArray.push('ga:date');
            if (sort === 'DATE') {
              sorts = 'ga:date';
            }
          } else {
            dimensionArray.push('ga:year');
            if (sort === 'DATE') {
              sorts = 'ga:year';
            }
          }

          const query = {
            auth: jwtClient,
            ids: 'ga:110941031',
            sort: sorts,
            'start-date': start,
            'end-date': end,
            metrics: metricArray.join(','),
            dimensions: dimensionArray.join(','),
          };
          if (filters.length) {
            filters = filters.map(filter => {
              const name = (metricObj[filter.metric] ||
                dimensionObj[filter.dimension]).name;

              if (filter.operator === 'NE') {
                return `${name}==${filter.expression}`;
              } else if (filter.operator === 'GT') {
                return `${name}>${filter.expression}`;
              } else if (filter.operator === 'GE') {
                return `${name}>=${filter.expression}`;
              } else if (filter.operator === 'LT') {
                return `${name}<${filter.expression}`;
              } else if (filter.operator === 'lE') {
                return `${name}<=${filter.expression}`;
              }

              return `${name}==${filter.expression}`;
            });
            query.filters = filters.join(',');
          }

          return analytics(
            query
          ).then(({ columnHeaders, rows, totalsForAllResults }) => {
            const cols = columnHeaders.map(x => x.name.substr(3));
            const resultRows = rows
              .map(values =>
                cols.reduce((o, k, i) => {
                  o[k] = values[i];
                  return o;
                }, {})
              )
              .map(x => {
                const { year, month, week, date, ...rest } = x;
                rest.id = shortID.generate();
                if (time === 'MONTH') {
                  rest.date = +moment(`${year}${month}01`, 'YYYYMMDD');
                } else if (time === 'WEEK') {
                  rest.date = +moment(`${year}0101`, 'YYYYMMDD').add(
                    'week',
                    week
                  );
                } else if (time === 'DAY') {
                  rest.date = +moment(date, 'YYYYMMDD');
                } else {
                  rest.date = +moment(`${year}0101`, 'YYYYMMDD');
                }
                return rest;
              });
            const resultTotals = Object.keys(
              totalsForAllResults
            ).reduce((o, k, i) => {
              o[k.substr(3)] = totalsForAllResults[k];
              return o;
            }, {});
            resultTotals.rows = resultRows;
            resultTotals.id = shortID.generate();
            return resultTotals;
          });
        },
        geocode: (source, args) =>
          maps('geocode', args).then(
            result => result.json.results.map(convertGeocode)[0]
          ),
        geocodeList: (source, args) =>
          maps('geocode', args).then(result =>
            result.json.results.map(convertGeocode)
          ),
      },
    },
    schema: `
      type Geocode {
        id: String
        streetNumber: String
        route: String
        locality: String
        administrativeAreaLevel1: String
        administrativeAreaLevel2: String
        country: String
        postalCode: String
        formattedAddress: String
        lat: Float
        lng: Float
        locationType: String
        partialMatch: Boolean
        types: [String]
      }
      type AnalyticsQuery {
        id: String
        ${Object.keys(metricObj)
          .map(key => `${metricObj[key].output}: ${metricObj[key].type}`)
          .join('\n')}
        rows: [AnalyticsQueryRows]
      }
      type AnalyticsQueryRows {
        id: String
        date: Date
        ${Object.keys(metricObj)
          .map(key => `${metricObj[key].output}: ${metricObj[key].type}`)
          .join('\n')}
        ${Object.keys(dimensionObj)
          .map(key => `${dimensionObj[key].output}: ${dimensionObj[key].type}`)
          .join('\n')}
      }
      input AnalyticsFilter {
        metric: ANALYTICS_METRICS
        dimension: ANALYTICS_DIMENSIONS
        operator: ANALYTICS_OPERATOR
        expression: String
      }
      enum ANALYTICS_TIMES {
        YEAR
        MONTH
        WEEK
        DAY
      }
      enum ANALYTICS_SORT {
        PAGEVIEWS
        SESSIONS
        DATE
      }
      enum ANALYTICS_METRICS {
        PAGEVIEWS
        SESSIONS
        TIME_ON_PAGE
        AVG_TIME_ON_PAGE
      }
      enum ANALYTICS_DIMENSIONS {
        PAGE_TITLE
        PAGE_PATH
        PAGE_PATH_LEVEL_1
        PAGE_PATH_LEVEL_2
        PAGE_PATH_LEVEL_3
        CITY
        USER_GENDER
        USER_AGE_BRACKET
        DEVICE_CATEGORY
      }
      enum ANALYTICS_OPERATOR {
        EQ
        NE
        GT
        GE
        LT
        LE
      }
    `,
  };
};

const convertGeocode = result => {
  const newResult = {};
  (result.address_components || []).forEach(component => {
    component.types.forEach(type => {
      const newType = type
        .split('_')
        .map(
          (frag, i) =>
            i > 0 ? `${frag[0].toUpperCase()}${frag.substr(1)}` : frag
        ) // eslint-disable-line
        .join('');
      newResult[newType] = component.long_name;
      newResult[`${newType}Short`] = component.short_name;
    });
  });
  newResult.formattedAddress = result.formatted_address;
  if (result.geometry) {
    if (result.geometry.location) {
      newResult.lat = result.geometry.location.lat;
      newResult.lng = result.geometry.location.lng;
    }
    newResult.locationType = result.geometry.location_type;
  }
  newResult.partialMatch = result.partial_match;
  newResult.id = result.place_id;
  newResult.types = result.types;
  return newResult;
};
