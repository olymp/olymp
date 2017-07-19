import createMaps from './maps';
import google from 'googleapis';
import bluebird from 'bluebird';
import moment from 'moment';
import shortID from 'shortid';

const analytics = bluebird.promisify(google.analytics('v3').data.ga.get);
const dimensionObj = {
  PAGE_TITLE: 'ga:pageTitle',
  CITY: 'ga:city',
  USER_GENDER: 'ga:userGender',
  USER_AGE_BRACKET: 'ga:userAgeBracket',
  DEVICE_CATEGORY: 'ga:deviceCategory',
  BROWSER: 'ga:browser',
  USER_TYPE: 'ga:userType',
  SOURCE: 'ga:source',
  REGION_ISO_CODE: 'ga:regionIsoCode',
  SCREEN_RESOLUTION: 'ga:screenResolution',
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
      analyticsPageviews(start: String!, end: String!, dimensions: [ANALYTICS_PAGEVIEW_DIMENSIONS], time: ANALYTICS_PAGEVIEW_TIMES, sort: ANALYTICS_PAGEVIEW_SORT): AnalyticsPageviews
    `,
    resolvers: {
      queries: {
        analyticsPageviews: (
          source,
          { start, end, time, dimensions = [], sort }
        ) => {
          if (!jwtClient) return null;
          const dimensionArray = dimensions.map(name => dimensionObj[name]);
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
          return analytics({
            auth: jwtClient,
            ids: 'ga:110941031',
            sort: sorts,
            'start-date': start,
            'end-date': end,
            metrics: 'ga:sessions,ga:pageviews,ga:timeOnPage,ga:avgTimeOnPage',
            dimensions: dimensionArray.join(','),
          }).then(({ columnHeaders, rows, totalsForAllResults }) => {
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
      type AnalyticsPageviews {
        id: String
        sessions: Int
        pageviews: Int
        timeOnPage: Float
        avgTimeOnPage: Float
        rows: [AnalyticsPageviewRows]
      }
      type AnalyticsPageviewRows {
        id: String
        pageviews: Int
        sessions: Int
        pageTitle: String
        city: String
        deviceCategory: String
        timeOnPage: Float
        avgTimeOnPage: Float
        userGender: String
        userAgeBracket: String
        date: Date
      }
      enum ANALYTICS_PAGEVIEW_TIMES {
        YEAR
        MONTH
        WEEK
        DAY
      }
      enum ANALYTICS_PAGEVIEW_SORT {
        PAGEVIEWS
        SESSIONS
        DATE
      }
      enum ANALYTICS_PAGEVIEW_DIMENSIONS {
        PAGE_TITLE
        CITY
        USER_GENDER
        USER_AGE_BRACKET
        DEVICE_CATEGORY
        BROWSER
        USER_TYPE
        SOURCE
        REGION_ISO_CODE
        SCREEN_RESOLUTION
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
